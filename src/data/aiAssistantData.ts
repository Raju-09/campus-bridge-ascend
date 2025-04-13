
export interface AssistantPromptTemplate {
  id: string;
  title: string;
  prompt: string;
  category: string;
  userType: 'student' | 'faculty' | 'both';
}

export interface AssistantExample {
  question: string;
  answer: string;
  category: string;
}

// Pre-defined prompts that users can select from
export const promptTemplates: AssistantPromptTemplate[] = [
  {
    id: 'code-help-1',
    title: 'Debug my code',
    prompt: 'I'm getting an error in my code: [PASTE ERROR]. Here's my code: [PASTE CODE]. Can you help me fix it?',
    category: 'coding',
    userType: 'student'
  },
  {
    id: 'code-help-2',
    title: 'Explain this concept',
    prompt: 'Can you explain [CONCEPT] in simple terms? Include examples if possible.',
    category: 'learning',
    userType: 'student'
  },
  {
    id: 'code-help-3',
    title: 'Code review',
    prompt: 'Can you review my code and suggest improvements? [PASTE CODE]',
    category: 'coding',
    userType: 'both'
  },
  {
    id: 'learning-1',
    title: 'Study plan',
    prompt: 'Can you create a study plan for me to learn [SUBJECT] in [TIME PERIOD]?',
    category: 'learning',
    userType: 'student'
  },
  {
    id: 'learning-2',
    title: 'Summarize lecture',
    prompt: 'Can you summarize these lecture notes for me? [PASTE NOTES]',
    category: 'learning',
    userType: 'student'
  },
  {
    id: 'resume-1',
    title: 'Resume feedback',
    prompt: 'Can you review my resume and give me feedback? [PASTE RESUME]',
    category: 'career',
    userType: 'student'
  },
  {
    id: 'resume-2',
    title: 'Create project description',
    prompt: 'Can you help me write a compelling description for my project [PROJECT NAME] that uses [TECHNOLOGIES]?',
    category: 'career',
    userType: 'student'
  },
  {
    id: 'faculty-1',
    title: 'Generate quiz questions',
    prompt: 'Can you create [NUMBER] quiz questions about [TOPIC] with varying difficulty levels?',
    category: 'teaching',
    userType: 'faculty'
  },
  {
    id: 'faculty-2',
    title: 'Explain teaching approach',
    prompt: 'What are some effective ways to teach [CONCEPT] to students who are struggling with [SPECIFIC CHALLENGE]?',
    category: 'teaching',
    userType: 'faculty'
  },
  {
    id: 'faculty-3',
    title: 'Grade assistance',
    prompt: 'Can you help me create a rubric for grading [ASSIGNMENT TYPE] that focuses on [LEARNING OBJECTIVES]?',
    category: 'teaching',
    userType: 'faculty'
  },
  {
    id: 'faculty-4',
    title: 'Create assignment',
    prompt: 'Can you generate a coding assignment for [COURSE] that tests students' understanding of [CONCEPTS]?',
    category: 'teaching',
    userType: 'faculty'
  },
  {
    id: 'general-1',
    title: 'Technical interview prep',
    prompt: 'Can you help me prepare for a technical interview for [POSITION] at [COMPANY]? Focus on [SPECIFIC AREA].',
    category: 'career',
    userType: 'student'
  },
  {
    id: 'general-2',
    title: 'Learning path recommendation',
    prompt: 'Given my interest in [TOPIC] and background in [BACKGROUND], what learning path would you recommend?',
    category: 'learning',
    userType: 'both'
  }
];

// Example assistant interactions to provide context
export const assistantExamples: AssistantExample[] = [
  {
    question: "I'm getting a 'Cannot read property 'map' of undefined' error in my React component. How do I fix it?",
    answer: "This error occurs when you're trying to use the .map() method on a variable that is undefined. In React, this commonly happens when you try to render a list before your data is loaded.\n\nHere's how to fix it:\n\n1. **Add a conditional check:**\n```jsx\n{data && data.map(item => (\n  <div key={item.id}>{item.name}</div>\n))}\n```\n\n2. **Initialize with an empty array:**\n```jsx\nconst [data, setData] = useState([]);\n```\n\n3. **Use optional chaining (modern JS):**\n```jsx\n{data?.map(item => (\n  <div key={item.id}>{item.name}</div>\n))}\n```\n\nThis ensures you only try to call .map() when data actually exists.",
    category: "coding"
  },
  {
    question: "Can you explain recursion in simple terms?",
    answer: "Recursion is when a function calls itself to solve a smaller version of the same problem.\n\nImagine you're in a movie theater and want to know which seat number you're in:\n\n1. You could count all seats from the beginning (iterative approach)\n2. OR you could ask the person next to you what their seat number is, and add 1 (recursive approach)\n\nIn code, it looks like this:\n\n```javascript\nfunction factorial(n) {\n  // Base case: when to stop\n  if (n <= 1) {\n    return 1;\n  }\n  // Recursive case: break problem into smaller part\n  return n * factorial(n - 1);\n}\n```\n\nRecursion needs:\n1. A base case (when to stop)\n2. A recursive case (how to break down the problem)\n\nIt's great for problems that have a nested structure like trees, graphs, and some sorting algorithms.",
    category: "learning"
  },
  {
    question: "Can you suggest improvements for my resume? I'm applying for frontend developer positions.",
    answer: "Here are some suggestions to enhance your resume for frontend developer positions:\n\n1. **Quantify your achievements** - Instead of \"Improved website performance\", say \"Reduced load time by 40% through code optimization\"\n\n2. **Use relevant keywords** - Ensure you include technologies like React, JavaScript, CSS/SCSS, responsive design, and testing frameworks\n\n3. **Showcase projects** - Add links to GitHub repos or deployed sites; highlight complex UI challenges you solved\n\n4. **Focus on impact** - Describe how your work affected users/business metrics, not just what you built\n\n5. **Remove outdated skills** - If you list technologies, ensure they're current and relevant (jQuery might be less important than React proficiency)\n\n6. **Tailor your experience** - For each position, highlight frontend-specific achievements even if your role was broader\n\n7. **Add a skills section** - Create a clear, scannable list of your technical skills grouped by category\n\nWould you like me to review your actual resume with more specific feedback?",
    category: "career"
  },
  {
    question: "What are effective ways to teach recursion to students who find it confusing?",
    answer: "Teaching recursion effectively to confused students:\n\n1. **Start with visual metaphors** - Use nested Russian dolls, inception dreams, or mirrors reflecting mirrors to illustrate the concept\n\n2. **Use everyday examples first** - Before code, discuss examples like:\n   - Finding your way out of a maze\n   - Looking up a word in a dictionary, which might reference other words\n   - Family trees and ancestry\n\n3. **Trace through examples manually** - Walk through small recursive processes step-by-step on a whiteboard, showing the call stack\n\n4. **Build gradually**:\n   - Start with simple recursion (factorial, fibonacci)\n   - Move to slightly more complex examples (binary search)\n   - Finally introduce tree/graph traversal\n\n5. **Compare with loops** - Show how the same problem can be solved iteratively and recursively\n\n6. **Emphasize the components**:\n   - Base case(s): When to stop\n   - Recursive case(s): Breaking down the problem\n   - Progress toward base case: Ensuring termination\n\n7. **Use visualization tools** - Python Tutor or similar tools to show the call stack in action\n\n8. **Pair programming** - Have students work through recursive problems together, explaining logic to each other\n\n9. **Real-world applications** - Show how recursion solves real problems in file systems, DOM traversal, etc.\n\n10. **Practice, practice, practice** - Provide many examples with increasing complexity",
    category: "teaching"
  }
];

// Context-aware help categories and resources
export const contextualHelpData = {
  courses: {
    'web-dev-101': {
      commonQuestions: [
        "How do CSS Flexbox and Grid differ?",
        "Why isn't my responsive design working on mobile?",
        "How do I center a div vertically and horizontally?",
        "What's the difference between == and === in JavaScript?"
      ],
      resources: [
        { title: "MDN Web Docs", url: "https://developer.mozilla.org" },
        { title: "CSS Tricks", url: "https://css-tricks.com" },
        { title: "JavaScript.info", url: "https://javascript.info" }
      ]
    },
    'java-programming': {
      commonQuestions: [
        "What's the difference between interface and abstract class?",
        "How does garbage collection work in Java?",
        "When should I use ArrayList vs LinkedList?",
        "How do I handle exceptions properly?"
      ],
      resources: [
        { title: "Oracle Java Documentation", url: "https://docs.oracle.com/en/java/" },
        { title: "Baeldung Java Guides", url: "https://www.baeldung.com" },
        { title: "Java Design Patterns", url: "https://java-design-patterns.com" }
      ]
    },
    'python-data-science': {
      commonQuestions: [
        "How do I handle missing data in Pandas?",
        "What's the difference between iloc and loc?",
        "How do I choose the right visualization for my data?",
        "When should I use sklearn's train_test_split?"
      ],
      resources: [
        { title: "Pandas Documentation", url: "https://pandas.pydata.org/docs/" },
        { title: "Towards Data Science", url: "https://towardsdatascience.com" },
        { title: "Scikit-learn Tutorials", url: "https://scikit-learn.org/stable/tutorial/" }
      ]
    }
  },
  coding: {
    commonErrors: [
      {
        error: "TypeError: Cannot read property 'X' of undefined",
        language: "JavaScript",
        solution: "Check that the object exists before accessing its properties. Use optional chaining (obj?.prop) or conditional checks."
      },
      {
        error: "IndentationError: unexpected indent",
        language: "Python",
        solution: "Python relies on proper indentation. Check that your code uses consistent spaces/tabs for indentation."
      },
      {
        error: "NullPointerException",
        language: "Java",
        solution: "An object reference is null when you're trying to access it. Add null checks before accessing objects."
      },
      {
        error: "Cannot find module 'X'",
        language: "Node.js",
        solution: "The module is not installed or the path is incorrect. Run 'npm install X' or check your import path."
      }
    ],
    debuggingTips: [
      "Use console.log() or print statements to trace execution flow",
      "Check variable values at different points in your code",
      "Use a debugger to step through code line by line",
      "Validate input data before processing it",
      "Simplify complex code into smaller testable functions"
    ]
  }
};

// Feature flags for AI assistant capabilities
export const assistantFeatures = {
  doubleSolving: true, // AI can help with questions during lectures
  codeAnalysis: true, // Analyze and explain code snippets
  plagiarismDetection: true, // Check for code similarities
  personalization: true, // Remember user preferences and learning style
  contextAwareness: true, // Pull information from course materials
  multilingualSupport: false, // Support for multiple languages
  voiceInteraction: false, // Voice commands and responses
  personaOptions: ["Tutor", "Code Reviewer", "Career Advisor", "Mentor"]
};

// Doubt tracking system data structure
export interface Doubt {
  id: string;
  userId: string;
  question: string;
  courseId?: string;
  lessonId?: string;
  timestamp: string;
  status: 'pending' | 'resolved' | 'in-progress';
  aiResponse?: string;
  facultyResponse?: string;
  tags?: string[];
}

// Example doubts for demonstration
export const recentDoubts: Doubt[] = [
  {
    id: 'd1',
    userId: 'user1',
    question: "Why doesn't my flexbox layout work when I set flex-direction to column?",
    courseId: 'web-dev-101',
    lessonId: 'css-styling-1',
    timestamp: '2025-04-12T10:30:00',
    status: 'resolved',
    aiResponse: "When you set flex-direction to column, the main axis changes from horizontal to vertical. This means properties like justify-content will affect vertical alignment instead of horizontal. You'll need to use align-items for horizontal alignment. Also, make sure your flex container has sufficient height.",
    tags: ['CSS', 'flexbox', 'layout']
  },
  {
    id: 'd2',
    userId: 'user2',
    question: "How do I properly implement merge sort in Java?",
    courseId: 'java-programming',
    lessonId: 'algorithms-1',
    timestamp: '2025-04-12T14:15:00',
    status: 'in-progress',
    aiResponse: "Merge sort is a divide-and-conquer algorithm that works by recursively dividing the array into halves, sorting them, and then merging them back. Here's a basic implementation in Java...",
    tags: ['Java', 'algorithms', 'sorting']
  },
  {
    id: 'd3',
    userId: 'user3',
    question: "Why am I getting NaN when trying to calculate the mean of my dataset?",
    courseId: 'python-data-science',
    lessonId: 'data-analysis-2',
    timestamp: '2025-04-13T09:45:00',
    status: 'pending',
    tags: ['Python', 'Pandas', 'data analysis']
  }
];
