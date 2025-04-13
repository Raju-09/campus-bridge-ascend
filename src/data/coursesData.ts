
export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  students: number;
  progress?: number;
  image: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  modules: {
    title: string;
    lessons: {
      title: string;
      duration: string;
      completed?: boolean;
    }[];
  }[];
}

export const coursesData: Course[] = [
  {
    id: 'web-dev-101',
    title: 'Web Development Fundamentals',
    description: 'Learn the core concepts of web development including HTML, CSS, and JavaScript to build responsive websites from scratch.',
    instructor: 'Prof. Sarah Wilson',
    duration: '8 weeks',
    students: 457,
    progress: 68,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=80',
    category: 'Web Development',
    level: 'Beginner',
    modules: [
      {
        title: 'Introduction to HTML',
        lessons: [
          { title: 'Basic HTML Structure', duration: '15 min', completed: true },
          { title: 'HTML Tags and Elements', duration: '25 min', completed: true },
          { title: 'Forms and Input Elements', duration: '30 min', completed: true }
        ]
      },
      {
        title: 'CSS Styling',
        lessons: [
          { title: 'CSS Selectors', duration: '20 min', completed: true },
          { title: 'Box Model and Layouts', duration: '35 min', completed: true },
          { title: 'Responsive Design', duration: '40 min', completed: false }
        ]
      },
      {
        title: 'JavaScript Basics',
        lessons: [
          { title: 'Variables and Data Types', duration: '25 min', completed: false },
          { title: 'Functions and Events', duration: '35 min', completed: false },
          { title: 'DOM Manipulation', duration: '45 min', completed: false }
        ]
      }
    ]
  },
  {
    id: 'java-programming',
    title: 'Java Programming Masterclass',
    description: 'Comprehensive course covering core Java concepts, object-oriented programming, and building robust applications.',
    instructor: 'Dr. Michael Chen',
    duration: '12 weeks',
    students: 382,
    progress: 35,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=500&q=80',
    category: 'Programming Languages',
    level: 'Intermediate',
    modules: [
      {
        title: 'Java Fundamentals',
        lessons: [
          { title: 'Setting Up Your Environment', duration: '20 min', completed: true },
          { title: 'Variables and Data Types', duration: '30 min', completed: true },
          { title: 'Control Flow Statements', duration: '40 min', completed: false }
        ]
      },
      {
        title: 'Object-Oriented Programming',
        lessons: [
          { title: 'Classes and Objects', duration: '45 min', completed: false },
          { title: 'Inheritance and Polymorphism', duration: '50 min', completed: false },
          { title: 'Interfaces and Abstract Classes', duration: '40 min', completed: false }
        ]
      },
      {
        title: 'Java Collections',
        lessons: [
          { title: 'Lists and Sets', duration: '30 min', completed: false },
          { title: 'Maps and Queues', duration: '35 min', completed: false },
          { title: 'Streams and Lambdas', duration: '45 min', completed: false }
        ]
      }
    ]
  },
  {
    id: 'python-data-science',
    title: 'Python for Data Science',
    description: 'Learn Python programming for data analysis, visualization, and machine learning with practical projects.',
    instructor: 'Prof. Elena Rodriguez',
    duration: '10 weeks',
    students: 524,
    progress: 0,
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=500&q=80',
    category: 'Data Science',
    level: 'Intermediate',
    modules: [
      {
        title: 'Python Basics',
        lessons: [
          { title: 'Getting Started with Python', duration: '25 min' },
          { title: 'Data Types and Structures', duration: '35 min' },
          { title: 'Control Flow and Functions', duration: '40 min' }
        ]
      },
      {
        title: 'Data Analysis with Pandas',
        lessons: [
          { title: 'Pandas DataFrame Basics', duration: '30 min' },
          { title: 'Data Cleaning and Preprocessing', duration: '45 min' },
          { title: 'Data Aggregation and Grouping', duration: '40 min' }
        ]
      },
      {
        title: 'Data Visualization',
        lessons: [
          { title: 'Matplotlib Essentials', duration: '35 min' },
          { title: 'Seaborn for Statistical Visualization', duration: '30 min' },
          { title: 'Interactive Visualizations', duration: '50 min' }
        ]
      },
      {
        title: 'Machine Learning Basics',
        lessons: [
          { title: 'Intro to Scikit-Learn', duration: '40 min' },
          { title: 'Supervised Learning Models', duration: '55 min' },
          { title: 'Model Evaluation', duration: '45 min' }
        ]
      }
    ]
  },
  {
    id: 'mern-stack',
    title: 'MERN Stack Development',
    description: 'Build full-stack web applications using MongoDB, Express, React, and Node.js with authentication and deployment.',
    instructor: 'Alex Johnson',
    duration: '14 weeks',
    students: 328,
    progress: 15,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=500&q=80',
    category: 'Web Development',
    level: 'Advanced',
    modules: [
      {
        title: 'Frontend with React',
        lessons: [
          { title: 'React Components and Props', duration: '40 min', completed: true },
          { title: 'State and Lifecycle', duration: '35 min', completed: false },
          { title: 'Routing with React Router', duration: '30 min', completed: false }
        ]
      },
      {
        title: 'Backend with Node.js & Express',
        lessons: [
          { title: 'Setting Up Express Server', duration: '25 min', completed: false },
          { title: 'RESTful API Design', duration: '45 min', completed: false },
          { title: 'Middleware and Authentication', duration: '50 min', completed: false }
        ]
      },
      {
        title: 'Database with MongoDB',
        lessons: [
          { title: 'MongoDB Basics', duration: '30 min', completed: false },
          { title: 'Mongoose ORM', duration: '40 min', completed: false },
          { title: 'Data Modeling', duration: '35 min', completed: false }
        ]
      },
      {
        title: 'Full Stack Integration',
        lessons: [
          { title: 'Connecting Frontend to Backend', duration: '45 min', completed: false },
          { title: 'State Management with Redux', duration: '60 min', completed: false },
          { title: 'Deployment Strategies', duration: '40 min', completed: false }
        ]
      }
    ]
  },
  {
    id: 'react-native',
    title: 'Mobile App Development with React Native',
    description: 'Create cross-platform mobile applications for iOS and Android using React Native and JavaScript.',
    instructor: 'David Miller',
    duration: '10 weeks',
    students: 269,
    progress: 0,
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=500&q=80',
    category: 'Mobile Development',
    level: 'Intermediate',
    modules: [
      {
        title: 'React Native Fundamentals',
        lessons: [
          { title: 'Setting Up Development Environment', duration: '30 min' },
          { title: 'Core Components', duration: '40 min' },
          { title: 'Styling in React Native', duration: '35 min' }
        ]
      },
      {
        title: 'Navigation and Routing',
        lessons: [
          { title: 'React Navigation Basics', duration: '45 min' },
          { title: 'Stack and Tab Navigation', duration: '40 min' },
          { title: 'Drawer Navigation', duration: '30 min' }
        ]
      },
      {
        title: 'Working with Data',
        lessons: [
          { title: 'API Integration', duration: '50 min' },
          { title: 'Local Storage', duration: '35 min' },
          { title: 'State Management', duration: '45 min' }
        ]
      },
      {
        title: 'Native Features',
        lessons: [
          { title: 'Camera and Image Picker', duration: '40 min' },
          { title: 'Maps and Geolocation', duration: '45 min' },
          { title: 'Push Notifications', duration: '35 min' }
        ]
      }
    ]
  },
  {
    id: 'aws-cloud',
    title: 'AWS Cloud Practitioner',
    description: 'Introduction to AWS cloud services, infrastructure, security, and pricing models to prepare for the AWS certification.',
    instructor: 'Dr. James Smith',
    duration: '6 weeks',
    students: 421,
    progress: 0,
    image: 'https://images.unsplash.com/photo-1603322327561-7c61f76a1159?auto=format&fit=crop&w=500&q=80',
    category: 'Cloud Computing',
    level: 'Beginner',
    modules: [
      {
        title: 'Cloud Concepts',
        lessons: [
          { title: 'Introduction to Cloud Computing', duration: '25 min' },
          { title: 'Cloud Service Models', duration: '30 min' },
          { title: 'AWS Global Infrastructure', duration: '35 min' }
        ]
      },
      {
        title: 'Core AWS Services',
        lessons: [
          { title: 'Compute Services', duration: '45 min' },
          { title: 'Storage Services', duration: '40 min' },
          { title: 'Database Services', duration: '35 min' }
        ]
      },
      {
        title: 'Security and Compliance',
        lessons: [
          { title: 'AWS Shared Responsibility Model', duration: '30 min' },
          { title: 'Identity and Access Management', duration: '45 min' },
          { title: 'Security Best Practices', duration: '40 min' }
        ]
      },
      {
        title: 'Pricing and Support',
        lessons: [
          { title: 'AWS Pricing Models', duration: '25 min' },
          { title: 'Billing and Cost Management', duration: '35 min' },
          { title: 'AWS Support Plans', duration: '20 min' }
        ]
      }
    ]
  }
];

export const categorizedCourses = {
  webDevelopment: coursesData.filter(course => course.category === 'Web Development'),
  programming: coursesData.filter(course => course.category === 'Programming Languages'),
  dataScience: coursesData.filter(course => course.category === 'Data Science'),
  mobile: coursesData.filter(course => course.category === 'Mobile Development'),
  cloud: coursesData.filter(course => course.category === 'Cloud Computing')
};
