
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    totalPoints: 100
  },
  {
    id: 'a2',
    title: 'Java Programming Test',
    subject: 'Core Java concepts',
    dueDate: '5 days',
    questions: 15,
    duration: '120 min',
    totalPoints: 150
  },
  {
    id: 'a3',
    title: 'Web Development Practical',
    subject: 'HTML, CSS & JavaScript',
    dueDate: '1 week',
    questions: 8,
    duration: '180 min',
    totalPoints: 200
  },
  {
    id: 'a4',
    title: 'Database Systems Quiz',
    subject: 'SQL and Database Design',
    dueDate: '3 days',
    questions: 12,
    duration: '60 min',
    totalPoints: 120
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
    estimatedTimeToComplete: '3 months'
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
    estimatedTimeToComplete: '4 months'
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
    estimatedTimeToComplete: '5 months'
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
    estimatedTimeToComplete: '3 months'
  }
];

export const interviewQuestions = [
  {
    id: 'i1',
    title: 'Top 100 Interview Questions',
    description: 'Curated collection of most commonly asked interview questions',
    categories: ['General', 'Technical', 'Behavioral'],
    questionCount: 100,
    difficulty: 'Mixed'
  },
  {
    id: 'i2',
    title: 'Mock Interview Simulator',
    description: 'AI-powered interview simulator with real-time feedback',
    categories: ['Technical', 'Behavioral'],
    sessionTime: '30 min',
    difficulty: 'Adaptive'
  },
  {
    id: 'i3',
    title: 'Previous Year Papers',
    description: 'Access to previous years\' placement and exam papers',
    companies: ['Google', 'Microsoft', 'Amazon', 'Adobe'],
    years: ['2023', '2022', '2021'],
    questionCount: 250
  },
  {
    id: 'i4',
    title: 'System Design Interview Prep',
    description: 'Practice system design interview questions with examples',
    categories: ['Architecture', 'Scalability', 'Data Storage'],
    questionCount: 40,
    difficulty: 'Hard'
  },
  {
    id: 'i5',
    title: 'Competitive Programming Contests',
    description: 'Weekly competitive programming contests',
    categories: ['Algorithms', 'Data Structures'],
    frequency: 'Weekly',
    difficulty: 'Hard'
  }
];
