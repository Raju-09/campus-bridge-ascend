
export interface CodingQuestion {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tags: string[];
  completedBy: number;
  category: string;
  description?: string;
  examples?: {
    input: string;
    output: string;
    explanation?: string;
  }[];
  constraints?: string[];
  hints?: string[];
  solution?: string;
  companies?: string[];
}

export const codingQuestions: CodingQuestion[] = [
  { 
    id: 'q1', 
    title: 'Two Sum', 
    difficulty: 'Easy', 
    tags: ['Arrays', 'Hash Table'], 
    completedBy: 478,
    category: 'DSA',
    description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.',
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].'
      },
      {
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]'
      }
    ],
    constraints: [
      '2 <= nums.length <= 10^4',
      '-10^9 <= nums[i] <= 10^9',
      '-10^9 <= target <= 10^9',
      'Only one valid answer exists.'
    ],
    hints: [
      'A brute force approach would be to check every pair of numbers.',
      'A more efficient approach uses a hash table to keep track of values we\'ve seen.'
    ],
    solution: `
function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  return null;
}`,
    companies: ['Google', 'Amazon', 'Microsoft', 'Facebook']
  },
  { 
    id: 'q2', 
    title: 'Reverse Linked List', 
    difficulty: 'Easy', 
    tags: ['Linked List', 'Recursion'], 
    completedBy: 389,
    category: 'DSA',
    description: 'Given the head of a singly linked list, reverse the list, and return the reversed list.',
    examples: [
      {
        input: 'head = [1,2,3,4,5]',
        output: '[5,4,3,2,1]'
      },
      {
        input: 'head = [1,2]',
        output: '[2,1]'
      }
    ],
    constraints: [
      'The number of nodes in the list is the range [0, 5000].',
      '-5000 <= Node.val <= 5000'
    ],
    hints: [
      'A straightforward approach is to use three pointers: previous, current, and next.',
      'You can also solve this recursively.'
    ],
    solution: `
// Iterative solution
function reverseList(head) {
  let prev = null;
  let current = head;
  
  while (current !== null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  
  return prev;
}

// Recursive solution
function reverseListRecursive(head) {
  if (head === null || head.next === null) {
    return head;
  }
  
  let reversed = reverseListRecursive(head.next);
  head.next.next = head;
  head.next = null;
  
  return reversed;
}`,
    companies: ['Microsoft', 'Amazon', 'Apple']
  },
  { 
    id: 'q3', 
    title: 'Valid Parentheses', 
    difficulty: 'Easy', 
    tags: ['Stack', 'String'], 
    completedBy: 412,
    category: 'DSA',
    description: 'Given a string s containing just the characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if the input string is valid. An input string is valid if: Open brackets must be closed by the same type of brackets. Open brackets must be closed in the correct order. Every close bracket has a corresponding open bracket of the same type.',
    examples: [
      {
        input: 's = "()"',
        output: 'true'
      },
      {
        input: 's = "()[]{}"',
        output: 'true'
      },
      {
        input: 's = "(]"',
        output: 'false'
      }
    ],
    constraints: [
      '1 <= s.length <= 10^4',
      's consists of parentheses only \'()[]{}\''
    ],
    hints: [
      'Use a stack to keep track of opening brackets.',
      'For each closing bracket, check if it matches the most recent opening bracket.'
    ],
    companies: ['Google', 'Facebook', 'Microsoft', 'Amazon', 'Oracle']
  },
  { 
    id: 'q4', 
    title: 'Maximum Subarray', 
    difficulty: 'Medium', 
    tags: ['Array', 'Dynamic Programming', 'Divide and Conquer'], 
    completedBy: 321,
    category: 'DSA',
    description: 'Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.',
    examples: [
      {
        input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]',
        output: '6',
        explanation: '[4,-1,2,1] has the largest sum = 6.'
      },
      {
        input: 'nums = [1]',
        output: '1'
      }
    ],
    constraints: [
      '1 <= nums.length <= 10^5',
      '-10^4 <= nums[i] <= 10^4'
    ],
    hints: [
      'Kadane\'s algorithm is optimal for this problem.',
      'Keep track of the current sum and reset when it becomes negative.'
    ],
    companies: ['Microsoft', 'Amazon', 'LinkedIn']
  },
  { 
    id: 'q5', 
    title: 'Binary Tree Level Order Traversal', 
    difficulty: 'Medium', 
    tags: ['Tree', 'BFS', 'Binary Tree'], 
    completedBy: 298,
    category: 'DSA',
    description: 'Given the root of a binary tree, return the level order traversal of its nodes\' values. (i.e., from left to right, level by level).',
    examples: [
      {
        input: 'root = [3,9,20,null,null,15,7]',
        output: '[[3],[9,20],[15,7]]'
      },
      {
        input: 'root = [1]',
        output: '[[1]]'
      }
    ],
    constraints: [
      'The number of nodes in the tree is in the range [0, 2000].',
      '-1000 <= Node.val <= 1000'
    ],
    hints: [
      'Use a queue to perform a breadth-first search.',
      'Keep track of the number of nodes at each level.'
    ],
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google']
  },
  { 
    id: 'q6', 
    title: 'Design a Chat App Backend', 
    difficulty: 'Hard', 
    tags: ['System Design', 'Database'], 
    completedBy: 112,
    category: 'SD',
    description: 'Design a backend system for a real-time chat application that supports one-on-one conversations and group chats. Consider scalability, message delivery guarantees, and offline message handling.',
    examples: [
      {
        input: 'Requirements: Support for 1M concurrent users, message history, read receipts',
        output: 'Architecture diagram and component explanations'
      }
    ],
    constraints: [
      'Messages must be delivered in order',
      'System should be horizontally scalable',
      'Message history should be persistent'
    ],
    hints: [
      'Consider using WebSockets or a similar technology for real-time communication.',
      'Think about database schema design for messages and conversations.',
      'How will you handle offline users and message delivery?'
    ],
    companies: ['Facebook', 'WhatsApp', 'Slack', 'Discord']
  },
  { 
    id: 'q7', 
    title: 'Design a URL Shortener', 
    difficulty: 'Medium', 
    tags: ['System Design', 'Database'], 
    completedBy: 203,
    category: 'SD',
    description: 'Design a URL shortening service like bit.ly. The service should take a long URL and convert it into a shorter URL. Users should be redirected to the original URL when they access the short URL.',
    examples: [
      {
        input: 'Long URL: https://www.example.com/very/long/path/to/resource?param1=value1&param2=value2',
        output: 'Short URL: https://short.url/abc123'
      }
    ],
    constraints: [
      'The system should handle high traffic',
      'Short URLs should be as short as possible',
      'The system should minimize collisions'
    ],
    hints: [
      'Consider using a hashing function to generate short URLs.',
      'How will you handle collisions in your hash function?',
      'Think about database design for storing URL mappings.'
    ],
    companies: ['Bitly', 'TinyURL', 'LinkedIn', 'Twitter']
  },
  { 
    id: 'q8', 
    title: 'Merge Two Sorted Lists', 
    difficulty: 'Easy', 
    tags: ['Linked List', 'Recursion'], 
    completedBy: 356,
    category: 'DSA',
    description: 'Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.',
    examples: [
      {
        input: 'l1 = [1,2,4], l2 = [1,3,4]',
        output: '[1,1,2,3,4,4]'
      },
      {
        input: 'l1 = [], l2 = []',
        output: '[]'
      }
    ],
    constraints: [
      'The number of nodes in both lists is in the range [0, 50].',
      '-100 <= Node.val <= 100',
      'Both l1 and l2 are sorted in non-decreasing order.'
    ],
    hints: [
      'Create a dummy head to simplify the code.',
      'Compare the values of the two lists and link the smaller one to the result.'
    ],
    companies: ['Amazon', 'Microsoft', 'Apple']
  },
  { 
    id: 'q9', 
    title: 'LRU Cache', 
    difficulty: 'Medium', 
    tags: ['Hash Table', 'Linked List', 'Design'], 
    completedBy: 245,
    category: 'DSA',
    description: 'Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. Implement the LRUCache class with get and put operations.',
    examples: [
      {
        input: 'LRUCache lRUCache = new LRUCache(2); lRUCache.put(1, 1); lRUCache.put(2, 2); lRUCache.get(1); lRUCache.put(3, 3); lRUCache.get(2); lRUCache.put(4, 4); lRUCache.get(1); lRUCache.get(3); lRUCache.get(4);',
        output: '[1,-1,3,4]'
      }
    ],
    constraints: [
      '1 <= capacity <= 3000',
      '0 <= key <= 10^4',
      '0 <= value <= 10^5',
      'Operations will be at most 2 * 10^5'
    ],
    hints: [
      'Consider using a hash map for O(1) lookups and a doubly linked list for LRU ordering.',
      'When a key is accessed, move it to the front of the list to indicate recent use.'
    ],
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google', 'Uber']
  },
  { 
    id: 'q10', 
    title: 'Design Distributed Job Scheduler', 
    difficulty: 'Hard', 
    tags: ['System Design', 'Distributed Systems'], 
    completedBy: 98,
    category: 'SD',
    description: 'Design a distributed job scheduling system that can schedule millions of jobs with different priorities, dependencies, and execution times. The system should be fault-tolerant and scalable.',
    examples: [
      {
        input: 'Requirements: Support for cron jobs, one-time tasks, task dependencies, retry mechanisms',
        output: 'Architecture and component design'
      }
    ],
    constraints: [
      'Jobs can have dependencies',
      'System must be fault-tolerant',
      'Support for different job priorities'
    ],
    hints: [
      'Consider using a message queue for job distribution.',
      'How will you handle job failures and retries?',
      'Think about how to manage job dependencies efficiently.'
    ],
    companies: ['Airbnb', 'LinkedIn', 'Uber', 'Netflix']
  }
];

export const onlinePlatforms = [
  {
    id: 'platform1',
    name: 'CodePen',
    description: 'Frontend web development playground with instant preview',
    url: 'https://codepen.io',
    languages: ['HTML', 'CSS', 'JavaScript'],
    features: ['Live preview', 'Asset hosting', 'Collaboration', 'Community sharing']
  },
  {
    id: 'platform2',
    name: 'CodeSandbox',
    description: 'Online IDE for web applications with support for modern frameworks',
    url: 'https://codesandbox.io',
    languages: ['JavaScript', 'TypeScript', 'React', 'Vue', 'Angular'],
    features: ['Templates', 'GitHub integration', 'Live collaboration', 'Deployment options']
  },
  {
    id: 'platform3',
    name: 'Replit',
    description: 'Collaborative, in-browser IDE supporting 50+ languages',
    url: 'https://replit.com',
    languages: ['Python', 'JavaScript', 'Java', 'C++', 'Ruby', 'Go'],
    features: ['Multiplayer editing', 'Hosting', 'Database support', 'GitHub sync']
  },
  {
    id: 'platform4',
    name: 'LeetCode',
    description: 'Platform for coding interview preparation with vast problem collection',
    url: 'https://leetcode.com',
    languages: ['Python', 'JavaScript', 'Java', 'C++', 'C#', 'Ruby', 'Go'],
    features: ['Company-specific questions', 'Contest participation', 'Discussion forums', 'Interview experiences']
  },
  {
    id: 'platform5',
    name: 'HackerRank',
    description: 'Practice coding challenges and participate in competitions',
    url: 'https://www.hackerrank.com',
    languages: ['Python', 'Java', 'C++', 'JavaScript', 'Ruby', 'SQL'],
    features: ['Skill certification', 'Company challenges', 'Contest participation', 'Learning tracks']
  }
];

export const assessments = [
  {
    id: 'a1',
    title: 'Mid-Term Assessment',
    subject: 'Data Structures & Algorithms',
    dueDate: '2 days',
    questions: 10,
    duration: '90 min',
    totalPoints: 100,
    topics: ['Arrays', 'Linked Lists', 'Trees', 'Sorting Algorithms', 'Graph Traversal'],
    passingScore: 70
  },
  {
    id: 'a2',
    title: 'Java Programming Test',
    subject: 'Core Java concepts',
    dueDate: '5 days',
    questions: 15,
    duration: '120 min',
    totalPoints: 150,
    topics: ['OOP Concepts', 'Collections Framework', 'Exception Handling', 'Multithreading', 'Java 8 Features'],
    passingScore: 65
  },
  {
    id: 'a3',
    title: 'Web Development Practical',
    subject: 'HTML, CSS & JavaScript',
    dueDate: '1 week',
    questions: 8,
    duration: '180 min',
    totalPoints: 200,
    topics: ['Responsive Design', 'DOM Manipulation', 'CSS Layouts', 'JavaScript Events', 'API Integration'],
    passingScore: 70
  },
  {
    id: 'a4',
    title: 'Database Systems Quiz',
    subject: 'SQL and Database Design',
    dueDate: '3 days',
    questions: 12,
    duration: '60 min',
    totalPoints: 120,
    topics: ['SQL Queries', 'Normalization', 'Indexing', 'Transactions', 'Database Design'],
    passingScore: 60
  },
  {
    id: 'a5',
    title: 'System Design Challenge',
    subject: 'Architecture & Design Patterns',
    dueDate: '1 week',
    questions: 5,
    duration: '240 min',
    totalPoints: 250,
    topics: ['Scalability', 'Load Balancing', 'Caching', 'Database Sharding', 'Microservices'],
    passingScore: 70
  }
];

export const roadmaps = [
  {
    id: 'r1',
    title: 'Web Development Path',
    steps: [
      { title: 'HTML & CSS Basics', completion: 100, status: 'completed' },
      { title: 'JavaScript Fundamentals', completion: 75, status: 'in-progress' },
      { title: 'React Framework', completion: 0, status: 'not-started' },
      { title: 'Backend Integration', completion: 0, status: 'not-started' }
    ],
    totalProgress: 43,
    estimatedTimeToComplete: '3 months',
    resources: [
      { type: 'Course', title: 'Web Development Fundamentals', id: 'web-dev-101' },
      { type: 'Course', title: 'MERN Stack Development', id: 'mern-stack' },
      { type: 'Book', title: 'Eloquent JavaScript', url: '#' },
      { type: 'Tutorial', title: 'MDN Web Docs', url: '#' }
    ]
  },
  {
    id: 'r2',
    title: 'Data Science Path',
    steps: [
      { title: 'Python Basics', completion: 100, status: 'completed' },
      { title: 'Data Analysis with Pandas', completion: 100, status: 'completed' },
      { title: 'Machine Learning Basics', completion: 40, status: 'in-progress' },
      { title: 'Deep Learning', completion: 0, status: 'not-started' }
    ],
    totalProgress: 60,
    estimatedTimeToComplete: '4 months',
    resources: [
      { type: 'Course', title: 'Python for Data Science', id: 'python-data-science' },
      { type: 'Book', title: 'Hands-On Machine Learning', url: '#' },
      { type: 'Tutorial', title: 'Kaggle Learn', url: '#' },
      { type: 'Project', title: 'House Price Prediction Challenge', url: '#' }
    ]
  },
  {
    id: 'r3',
    title: 'Mobile Development Path',
    steps: [
      { title: 'Java/Kotlin Fundamentals', completion: 85, status: 'in-progress' },
      { title: 'Android UI Development', completion: 20, status: 'in-progress' },
      { title: 'App State Management', completion: 0, status: 'not-started' },
      { title: 'Publishing & Monetization', completion: 0, status: 'not-started' }
    ],
    totalProgress: 26,
    estimatedTimeToComplete: '5 months',
    resources: [
      { type: 'Course', title: 'Mobile App Development with React Native', id: 'react-native' },
      { type: 'Course', title: 'Flutter App Development', id: 'flutter-development' },
      { type: 'Documentation', title: 'Android Developers', url: '#' },
      { type: 'Community', title: 'React Native Forum', url: '#' }
    ]
  },
  {
    id: 'r4',
    title: 'Cloud Computing Path',
    steps: [
      { title: 'Cloud Concepts', completion: 100, status: 'completed' },
      { title: 'AWS Services Overview', completion: 70, status: 'in-progress' },
      { title: 'Infrastructure as Code', completion: 0, status: 'not-started' },
      { title: 'Serverless Computing', completion: 0, status: 'not-started' }
    ],
    totalProgress: 42,
    estimatedTimeToComplete: '3 months',
    resources: [
      { type: 'Course', title: 'AWS Cloud Practitioner', id: 'aws-cloud' },
      { type: 'Certification', title: 'AWS Certified Cloud Practitioner', url: '#' },
      { type: 'Tutorial', title: 'Terraform Basics', url: '#' },
      { type: 'Lab', title: 'AWS Hands-On Labs', url: '#' }
    ]
  }
];

export const interviewQuestions = [
  {
    id: 'i1',
    title: 'Top 100 Interview Questions',
    description: 'Curated collection of most commonly asked interview questions',
    categories: ['General', 'Technical', 'Behavioral'],
    questionCount: 100,
    difficulty: 'Mixed',
    preview: [
      { question: 'Tell me about yourself.', category: 'Behavioral' },
      { question: 'What is the time complexity of quicksort?', category: 'Technical' },
      { question: 'Describe a challenging project you worked on.', category: 'Behavioral' }
    ]
  },
  {
    id: 'i2',
    title: 'Mock Interview Simulator',
    description: 'AI-powered interview simulator with real-time feedback',
    categories: ['Technical', 'Behavioral'],
    sessionTime: '30 min',
    difficulty: 'Adaptive',
    features: [
      'Video recording and analysis',
      'Answer quality feedback',
      'Body language suggestions',
      'Customized by role and experience'
    ]
  },
  {
    id: 'i3',
    title: 'Previous Year Papers',
    description: 'Access to previous years\' placement and exam papers',
    companies: ['Google', 'Microsoft', 'Amazon', 'Adobe'],
    years: ['2023', '2022', '2021'],
    questionCount: 250,
    topQuestions: [
      { question: 'Design a scalable notification system.', company: 'Amazon', year: '2023' },
      { question: 'Implement an LRU cache.', company: 'Google', year: '2022' },
      { question: 'Balance a binary search tree.', company: 'Microsoft', year: '2023' }
    ]
  },
  {
    id: 'i4',
    title: 'System Design Interview Prep',
    description: 'Practice system design interview questions with examples',
    categories: ['Architecture', 'Scalability', 'Data Storage'],
    questionCount: 40,
    difficulty: 'Hard',
    popularTopics: [
      'URL Shortener Design',
      'Chat Application Architecture',
      'Content Delivery Networks',
      'Database Sharding Strategies',
      'Microservices vs. Monolith'
    ]
  },
  {
    id: 'i5',
    title: 'Competitive Programming Contests',
    description: 'Weekly competitive programming contests',
    categories: ['Algorithms', 'Data Structures'],
    frequency: 'Weekly',
    difficulty: 'Hard',
    benefits: [
      'Improves problem-solving speed',
      'Enhances algorithmic thinking',
      'Builds coding stamina',
      'Global leaderboard ranking'
    ]
  }
];

export const previousYearQuestions = [
  {
    company: 'Google',
    year: '2023',
    role: 'Software Engineer',
    questions: [
      'Implement a function to find the Kth largest element in an unsorted array.',
      'Design a system to store and retrieve billions of short URLs.',
      'Write an algorithm to detect a cycle in a linked list.',
      'How would you design Google Drive?'
    ]
  },
  {
    company: 'Amazon',
    year: '2023',
    role: 'SDE II',
    questions: [
      'Implement LRU Cache with O(1) time complexity for get and put operations.',
      'Design a notification service that can handle millions of users.',
      'Given a binary tree, find the maximum path sum between any two nodes.',
      'How would you design Amazon\'s recommendation system?'
    ]
  },
  {
    company: 'Microsoft',
    year: '2022',
    role: 'Software Engineer',
    questions: [
      'Implement a function to serialize and deserialize a binary tree.',
      'Design a distributed key-value store with high availability.',
      'Write an algorithm to find all permutations of a string.',
      'How would you design a collaborative document editing system like Google Docs?'
    ]
  },
  {
    company: 'Meta',
    year: '2023',
    role: 'Frontend Engineer',
    questions: [
      'Implement a debounce function in JavaScript.',
      'Design a social media news feed system.',
      'Create a virtual DOM implementation.',
      'Write a function to flatten a nested JSON object.'
    ]
  }
];

export const codingTracks = {
  'frontend': {
    name: 'Frontend Development Track',
    description: 'Master frontend technologies from basics to advanced frameworks',
    difficulty: 'Beginner to Intermediate',
    duration: '4 months',
    skills: ['HTML/CSS', 'JavaScript', 'React', 'State Management', 'Testing'],
    milestones: [
      { 
        title: 'HTML/CSS Fundamentals', 
        tasks: [
          'Build a responsive portfolio site',
          'Create a landing page with modern CSS techniques',
          'Implement CSS animations and transitions'
        ] 
      },
      { 
        title: 'JavaScript Essentials', 
        tasks: [
          'Build interactive DOM applications',
          'Create a todo application with local storage',
          'Implement asynchronous data fetching'
        ] 
      },
      { 
        title: 'React Fundamentals', 
        tasks: [
          'Convert vanilla JS app to React components',
          'Implement state management with hooks',
          'Build a dashboard with multiple components'
        ] 
      },
      { 
        title: 'Advanced Frontend', 
        tasks: [
          'Implement state management with Redux/Context',
          'Add testing with Jest and React Testing Library',
          'Deploy optimized application to production'
        ] 
      }
    ]
  },
  'backend': {
    name: 'Backend Development Track',
    description: 'Learn server-side programming, APIs, and database management',
    difficulty: 'Intermediate',
    duration: '5 months',
    skills: ['Node.js', 'Express', 'Databases', 'API Design', 'Authentication'],
    milestones: [
      { 
        title: 'Server Fundamentals', 
        tasks: [
          'Build a simple HTTP server with Node.js',
          'Create RESTful endpoints with Express',
          'Implement middleware and request validation'
        ] 
      },
      { 
        title: 'Database Integration', 
        tasks: [
          'Design database schemas (SQL and NoSQL)',
          'Implement CRUD operations',
          'Performance optimization and indexing'
        ] 
      },
      { 
        title: 'Authentication & Security', 
        tasks: [
          'Implement JWT authentication',
          'Add OAuth integration',
          'Apply security best practices (CORS, Helmet, etc.)'
        ] 
      },
      { 
        title: 'Advanced Backend', 
        tasks: [
          'Build microservices architecture',
          'Implement caching strategies',
          'Add automated testing and CI/CD'
        ] 
      }
    ]
  },
  'fullstack': {
    name: 'Full Stack Development Track',
    description: 'Comprehensive program covering both frontend and backend development',
    difficulty: 'Intermediate to Advanced',
    duration: '6 months',
    skills: ['React', 'Node.js', 'MongoDB', 'Full Stack Architecture', 'Deployment'],
    milestones: [
      { 
        title: 'Frontend Development', 
        tasks: [
          'Build responsive UI with React',
          'Implement state management',
          'Create reusable component library'
        ] 
      },
      { 
        title: 'Backend Development', 
        tasks: [
          'Design and implement RESTful APIs',
          'Set up database models and relationships',
          'Implement authentication and authorization'
        ] 
      },
      { 
        title: 'Full Stack Integration', 
        tasks: [
          'Connect frontend to backend services',
          'Implement real-time features with WebSockets',
          'Add file uploads and handling'
        ] 
      },
      { 
        title: 'Deployment & DevOps', 
        tasks: [
          'Set up CI/CD pipeline',
          'Deploy to cloud platforms',
          'Implement monitoring and logging'
        ] 
      }
    ]
  },
  'algorithms': {
    name: 'Algorithms & Problem Solving Track',
    description: 'Master data structures, algorithms, and competitive programming techniques',
    difficulty: 'Intermediate to Advanced',
    duration: '4 months',
    skills: ['Data Structures', 'Algorithm Analysis', 'Problem Solving', 'Optimization'],
    milestones: [
      { 
        title: 'Basic Data Structures', 
        tasks: [
          'Implement and use arrays, linked lists, stacks, and queues',
          'Solve basic problems with optimal data structures',
          'Analyze time and space complexity'
        ] 
      },
      { 
        title: 'Searching and Sorting', 
        tasks: [
          'Implement and analyze major sorting algorithms',
          'Master binary search variations',
          'Apply searching and sorting in problem-solving'
        ] 
      },
      { 
        title: 'Advanced Data Structures', 
        tasks: [
          'Implement trees, graphs, heaps, and hash tables',
          'Solve complex problems using advanced structures',
          'Optimize solutions for real-world constraints'
        ] 
      },
      { 
        title: 'Algorithm Design Techniques', 
        tasks: [
          'Master divide and conquer approaches',
          'Implement dynamic programming solutions',
          'Apply greedy algorithms to optimization problems'
        ] 
      }
    ]
  }
};

// Streak and leaderboard data
export const streakData = {
  currentStreak: 7,
  longestStreak: 14,
  totalDays: 42,
  lastActivity: '2025-04-12',
  calendar: [
    { date: '2025-04-06', completed: true },
    { date: '2025-04-07', completed: true },
    { date: '2025-04-08', completed: true },
    { date: '2025-04-09', completed: true },
    { date: '2025-04-10', completed: true },
    { date: '2025-04-11', completed: true },
    { date: '2025-04-12', completed: true },
  ],
  rewards: [
    { days: 7, reward: 'Weekly Streak Badge', unlocked: true },
    { days: 14, reward: '50 Extra XP Points', unlocked: true },
    { days: 30, reward: 'Premium Mock Interview Access', unlocked: false },
    { days: 60, reward: 'Certificate of Consistency', unlocked: false },
    { days: 100, reward: 'Exclusive Mentor Session', unlocked: false }
  ]
};

export const leaderboardData = [
  { rank: 1, name: 'Alex Johnson', score: 9240, avatar: '👨‍💻', streak: 32 },
  { rank: 2, name: 'Sophia Chen', score: 8750, avatar: '👩‍🔬', streak: 28 },
  { rank: 3, name: 'Raj Patel', score: 8320, avatar: '👨‍🎓', streak: 21 },
  { rank: 4, name: 'Emily Davis', score: 7980, avatar: '👩‍💼', streak: 19 },
  { rank: 5, name: 'Miguel Torres', score: 7640, avatar: '👨‍🚀', streak: 24 },
  { rank: 6, name: 'Aisha Williams', score: 7410, avatar: '👩‍🏫', streak: 15 },
  { rank: 7, name: 'Daniel Kim', score: 7120, avatar: '👨‍💻', streak: 18 },
  { rank: 8, name: 'Priya Sharma', score: 6950, avatar: '👩‍🔧', streak: 12 },
  { rank: 9, name: 'Noah Rodriguez', score: 6800, avatar: '👨‍⚕️', streak: 9 },
  { rank: 10, name: 'Zara Ahmed', score: 6540, avatar: '👩‍🎨', streak: 14 }
];

