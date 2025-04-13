
export interface KnowledgeNode {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'locked';
  type: 'concept' | 'quiz' | 'practice';
  dependencies: string[];
  position: { x: number; y: number };
}

export const dataStructuresNodes: KnowledgeNode[] = [
  {
    id: 'arrays',
    title: 'Arrays',
    description: 'Basic data structure that stores elements of the same type in contiguous memory locations.',
    status: 'completed',
    type: 'concept',
    dependencies: [],
    position: { x: 150, y: 100 }
  },
  {
    id: 'linkedLists',
    title: 'Linked Lists',
    description: 'Linear data structure where elements are stored in nodes with pointers to the next node.',
    status: 'completed',
    type: 'concept',
    dependencies: ['arrays'],
    position: { x: 300, y: 100 }
  },
  {
    id: 'stacks',
    title: 'Stacks',
    description: 'LIFO (Last In First Out) data structure with push and pop operations.',
    status: 'in-progress',
    type: 'concept',
    dependencies: ['arrays', 'linkedLists'],
    position: { x: 200, y: 200 }
  },
  {
    id: 'queues',
    title: 'Queues',
    description: 'FIFO (First In First Out) data structure with enqueue and dequeue operations.',
    status: 'in-progress',
    type: 'concept',
    dependencies: ['linkedLists'],
    position: { x: 400, y: 200 }
  },
  {
    id: 'stackQuiz',
    title: 'Stack Quiz',
    description: 'Test your understanding of stack operations and applications.',
    status: 'locked',
    type: 'quiz',
    dependencies: ['stacks'],
    position: { x: 200, y: 300 }
  },
  {
    id: 'queueQuiz',
    title: 'Queue Quiz',
    description: 'Test your understanding of queue operations and applications.',
    status: 'locked',
    type: 'quiz',
    dependencies: ['queues'],
    position: { x: 400, y: 300 }
  },
  {
    id: 'trees',
    title: 'Trees',
    description: 'Hierarchical data structure with a root node and child nodes.',
    status: 'locked',
    type: 'concept',
    dependencies: ['linkedLists'],
    position: { x: 550, y: 150 }
  },
  {
    id: 'graphs',
    title: 'Graphs',
    description: 'Collection of nodes and edges representing relationships between objects.',
    status: 'locked',
    type: 'concept',
    dependencies: ['trees'],
    position: { x: 650, y: 250 }
  },
  {
    id: 'stackImpl',
    title: 'Stack Implementation',
    description: 'Practice implementing a stack data structure from scratch.',
    status: 'locked',
    type: 'practice',
    dependencies: ['stacks', 'stackQuiz'],
    position: { x: 200, y: 400 }
  },
  {
    id: 'queueImpl',
    title: 'Queue Implementation',
    description: 'Practice implementing a queue data structure from scratch.',
    status: 'locked',
    type: 'practice',
    dependencies: ['queues', 'queueQuiz'],
    position: { x: 400, y: 400 }
  }
];

export const algorithmNodes: KnowledgeNode[] = [
  {
    id: 'timeComplexity',
    title: 'Time Complexity',
    description: 'Understanding how to analyze and express algorithm efficiency in terms of time.',
    status: 'completed',
    type: 'concept',
    dependencies: [],
    position: { x: 150, y: 100 }
  },
  {
    id: 'spaceComplexity',
    title: 'Space Complexity',
    description: 'Understanding how to analyze and express algorithm efficiency in terms of memory usage.',
    status: 'completed',
    type: 'concept',
    dependencies: ['timeComplexity'],
    position: { x: 300, y: 100 }
  },
  {
    id: 'searching',
    title: 'Searching',
    description: 'Algorithms to find elements in data structures like arrays and trees.',
    status: 'in-progress',
    type: 'concept',
    dependencies: ['timeComplexity'],
    position: { x: 200, y: 200 }
  },
  {
    id: 'sorting',
    title: 'Sorting',
    description: 'Algorithms to arrange elements in a specific order.',
    status: 'in-progress',
    type: 'concept',
    dependencies: ['timeComplexity', 'spaceComplexity'],
    position: { x: 400, y: 200 }
  },
  {
    id: 'binarySearch',
    title: 'Binary Search',
    description: 'Efficiently search in a sorted array by repeatedly dividing the search space in half.',
    status: 'locked',
    type: 'practice',
    dependencies: ['searching'],
    position: { x: 200, y: 300 }
  },
  {
    id: 'quickSort',
    title: 'Quick Sort',
    description: 'Efficient divide-and-conquer sorting algorithm using partitioning.',
    status: 'locked',
    type: 'practice',
    dependencies: ['sorting'],
    position: { x: 400, y: 300 }
  },
  {
    id: 'recursion',
    title: 'Recursion',
    description: 'Technique where a function calls itself to solve a problem.',
    status: 'locked',
    type: 'concept',
    dependencies: ['sorting'],
    position: { x: 550, y: 150 }
  },
  {
    id: 'dp',
    title: 'Dynamic Programming',
    description: 'Method to solve complex problems by breaking them down into simpler subproblems.',
    status: 'locked',
    type: 'concept',
    dependencies: ['recursion'],
    position: { x: 650, y: 250 }
  }
];

export const webDevNodes: KnowledgeNode[] = [
  {
    id: 'html',
    title: 'HTML',
    description: 'HyperText Markup Language for creating web page structure.',
    status: 'completed',
    type: 'concept',
    dependencies: [],
    position: { x: 150, y: 100 }
  },
  {
    id: 'css',
    title: 'CSS',
    description: 'Cascading Style Sheets for styling web pages.',
    status: 'completed',
    type: 'concept',
    dependencies: ['html'],
    position: { x: 300, y: 100 }
  },
  {
    id: 'htmlQuiz',
    title: 'HTML Quiz',
    description: 'Test your understanding of HTML elements and attributes.',
    status: 'completed',
    type: 'quiz',
    dependencies: ['html'],
    position: { x: 150, y: 200 }
  },
  {
    id: 'cssQuiz',
    title: 'CSS Quiz',
    description: 'Test your understanding of CSS selectors and properties.',
    status: 'in-progress',
    type: 'quiz',
    dependencies: ['css'],
    position: { x: 300, y: 200 }
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    description: 'Programming language for adding interactivity to web pages.',
    status: 'in-progress',
    type: 'concept',
    dependencies: ['html', 'css'],
    position: { x: 450, y: 150 }
  },
  {
    id: 'jsQuiz',
    title: 'JavaScript Quiz',
    description: 'Test your understanding of JavaScript fundamentals.',
    status: 'locked',
    type: 'quiz',
    dependencies: ['javascript'],
    position: { x: 450, y: 250 }
  },
  {
    id: 'responsiveDesign',
    title: 'Responsive Design',
    description: 'Techniques to make websites look good on all devices.',
    status: 'locked',
    type: 'concept',
    dependencies: ['css'],
    position: { x: 300, y: 300 }
  },
  {
    id: 'portfolioProject',
    title: 'Portfolio Project',
    description: 'Build a personal portfolio website using HTML, CSS, and JavaScript.',
    status: 'locked',
    type: 'practice',
    dependencies: ['javascript', 'responsiveDesign'],
    position: { x: 450, y: 350 }
  },
  {
    id: 'react',
    title: 'React',
    description: 'JavaScript library for building user interfaces.',
    status: 'locked',
    type: 'concept',
    dependencies: ['javascript'],
    position: { x: 600, y: 200 }
  },
  {
    id: 'reactProject',
    title: 'React App',
    description: 'Build a single-page application using React.',
    status: 'locked',
    type: 'practice',
    dependencies: ['react'],
    position: { x: 600, y: 300 }
  }
];

export const knowledgeGraphs = {
  'Data Structures': dataStructuresNodes,
  'Algorithms': algorithmNodes,
  'Web Development': webDevNodes
};
