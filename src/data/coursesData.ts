
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
  features?: string[];
  prerequisites?: string[];
  skills?: string[];
  certificationExam?: string;
  overview?: string;
  recommended?: boolean;
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
    overview: 'This comprehensive course introduces you to the fundamentals of web development. You will learn HTML for structure, CSS for styling, and JavaScript for interactivity. By the end of this course, you will be able to build fully responsive websites and understand the core principles of modern web development.',
    features: [
      'Live coding sessions',
      'Responsive design techniques',
      'Browser developer tools mastery',
      'Portfolio projects',
      'Industry best practices'
    ],
    prerequisites: ['Basic computer skills', 'No prior coding experience required'],
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Web Accessibility'],
    recommended: true,
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
      },
      {
        title: 'Advanced Topics',
        lessons: [
          { title: 'Accessibility Best Practices', duration: '30 min', completed: false },
          { title: 'Performance Optimization', duration: '40 min', completed: false },
          { title: 'Final Project: Portfolio Website', duration: '120 min', completed: false }
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
    overview: 'This Java masterclass takes you from intermediate to advanced concepts. Learn enterprise Java development, multi-threading, collections framework, and how to build scalable applications. Ideal for those who want to become professional Java developers or prepare for Oracle certification.',
    features: [
      'Hands-on coding exercises',
      'Real-world project development',
      'Industry standard tools (Maven, IntelliJ)',
      'Code review sessions',
      'Design patterns implementation'
    ],
    prerequisites: ['Basic programming knowledge', 'Understanding of variables and control structures'],
    skills: ['Core Java', 'Object-Oriented Programming', 'Multi-threading', 'Collections Framework', 'JDBC'],
    certificationExam: 'Oracle Certified Professional: Java SE Developer',
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
      },
      {
        title: 'Advanced Java',
        lessons: [
          { title: 'Multi-threading and Concurrency', duration: '60 min', completed: false },
          { title: 'File I/O and Serialization', duration: '45 min', completed: false },
          { title: 'Java Database Connectivity', duration: '55 min', completed: false },
          { title: 'Design Patterns in Java', duration: '70 min', completed: false }
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
    overview: 'Gain expertise in Python for data science applications. This course covers data manipulation with Pandas, visualization with Matplotlib and Seaborn, and building machine learning models with Scikit-learn. Perfect for aspiring data analysts and data scientists who want to leverage Python's powerful ecosystem.',
    features: [
      'Real dataset analysis',
      'Jupyter notebook tutorials',
      'Exploratory data analysis techniques',
      'Predictive modeling projects',
      'Data visualization portfolio'
    ],
    prerequisites: ['Basic programming concepts', 'Elementary statistics knowledge'],
    skills: ['Python', 'Pandas', 'Matplotlib', 'Scikit-learn', 'Data Wrangling', 'Statistical Analysis'],
    recommended: true,
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
      },
      {
        title: 'Capstone Project',
        lessons: [
          { title: 'Project Planning and Data Collection', duration: '60 min' },
          { title: 'Exploratory Data Analysis', duration: '90 min' },
          { title: 'Model Development and Evaluation', duration: '120 min' },
          { title: 'Project Presentation', duration: '45 min' }
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
    overview: 'Master the MERN stack (MongoDB, Express.js, React.js, Node.js) to build modern full-stack applications. This comprehensive course covers both frontend and backend development, state management, authentication, and deployment strategies. By the end, you'll be able to create, test, and deploy complete web applications.',
    features: [
      'Full-stack project development',
      'Authentication and authorization',
      'REST API design and implementation',
      'State management with Redux',
      'Deployment to cloud platforms'
    ],
    prerequisites: ['JavaScript fundamentals', 'Basic understanding of HTML/CSS', 'Some programming experience'],
    skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs', 'JWT Authentication', 'Redux'],
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
      },
      {
        title: 'Advanced Topics',
        lessons: [
          { title: 'Testing React Components', duration: '50 min', completed: false },
          { title: 'Performance Optimization', duration: '45 min', completed: false },
          { title: 'WebSockets for Real-time Features', duration: '55 min', completed: false },
          { title: 'Containerization with Docker', duration: '60 min', completed: false }
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
    overview: 'Learn to build native mobile apps for both iOS and Android using a single codebase with React Native. This course covers UI development, navigation, state management, native device features, and app store deployment. Perfect for web developers looking to transition into mobile development.',
    features: [
      'Cross-platform development',
      'Native device API integration',
      'App store submission guidance',
      'UI/UX design principles',
      'Performance optimization techniques'
    ],
    prerequisites: ['JavaScript knowledge', 'Basic React.js experience', 'Understanding of components and props'],
    skills: ['React Native', 'Mobile UI Development', 'Navigation', 'State Management', 'Native APIs', 'App Deployment'],
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
      },
      {
        title: 'Deployment and Publishing',
        lessons: [
          { title: 'Testing on Physical Devices', duration: '30 min' },
          { title: 'Building for Production', duration: '40 min' },
          { title: 'App Store and Play Store Submission', duration: '50 min' },
          { title: 'CI/CD for Mobile Apps', duration: '45 min' }
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
    overview: 'This course prepares you for the AWS Certified Cloud Practitioner exam. Learn about AWS global infrastructure, core services, security, compliance, and pricing models. Even with no prior AWS experience, you will gain the knowledge needed to pass the certification and begin your cloud career.',
    features: [
      'AWS Free Tier projects',
      'Cloud architecture design sessions',
      'Certification exam preparation',
      'Hands-on labs',
      'Cost optimization strategies'
    ],
    prerequisites: ['Basic IT knowledge', 'No cloud experience required'],
    skills: ['AWS Core Services', 'Cloud Concepts', 'Security and Compliance', 'Billing and Pricing', 'Cloud Architecture'],
    certificationExam: 'AWS Certified Cloud Practitioner (CLF-C01)',
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
      },
      {
        title: 'Certification Preparation',
        lessons: [
          { title: 'Exam Structure and Domains', duration: '30 min' },
          { title: 'Practice Questions', duration: '60 min' },
          { title: 'Final Review and Tips', duration: '45 min' }
        ]
      }
    ]
  },
  {
    id: 'cybersecurity-fundamentals',
    title: 'Cybersecurity Fundamentals',
    description: 'Learn essential cybersecurity concepts, threat detection, and protection strategies to safeguard digital assets.',
    instructor: 'Prof. Jessica Lee',
    duration: '8 weeks',
    students: 315,
    progress: 0,
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=500&q=80',
    category: 'Cybersecurity',
    level: 'Beginner',
    overview: 'This foundational course introduces the core concepts of cybersecurity. Learn about common threats, vulnerability assessment, security controls, and best practices for protecting digital systems. Ideal for IT professionals looking to specialize in security or anyone wanting to understand how to protect digital assets.',
    features: [
      'Virtual security lab access',
      'Real-world threat analysis',
      'Security tools exploration',
      'Risk assessment techniques',
      'Incident response training'
    ],
    prerequisites: ['Basic computer knowledge', 'Understanding of networks is helpful but not required'],
    skills: ['Security Fundamentals', 'Threat Detection', 'Risk Assessment', 'Security Controls', 'Incident Response'],
    modules: [
      {
        title: 'Introduction to Cybersecurity',
        lessons: [
          { title: 'The Cybersecurity Landscape', duration: '30 min' },
          { title: 'Common Threats and Vulnerabilities', duration: '40 min' },
          { title: 'Security Principles', duration: '35 min' }
        ]
      },
      {
        title: 'Network Security',
        lessons: [
          { title: 'Network Security Fundamentals', duration: '45 min' },
          { title: 'Firewalls and IDS/IPS', duration: '40 min' },
          { title: 'Secure Network Design', duration: '50 min' }
        ]
      },
      {
        title: 'Application Security',
        lessons: [
          { title: 'Secure Coding Practices', duration: '35 min' },
          { title: 'Web Application Security', duration: '45 min' },
          { title: 'Authentication and Authorization', duration: '30 min' }
        ]
      },
      {
        title: 'Security Operations',
        lessons: [
          { title: 'Security Monitoring', duration: '40 min' },
          { title: 'Incident Response', duration: '50 min' },
          { title: 'Disaster Recovery', duration: '35 min' }
        ]
      }
    ]
  },
  {
    id: 'flutter-development',
    title: 'Flutter App Development',
    description: 'Create beautiful native apps for iOS and Android from a single codebase using Flutter and Dart.',
    instructor: 'Emily Zhang',
    duration: '9 weeks',
    students: 287,
    progress: 0,
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=500&q=80',
    category: 'Mobile Development',
    level: 'Intermediate',
    overview: 'Learn to build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase with Flutter. This course covers Dart programming language, Flutter widgets, state management, navigation, and integration with backend services. By the end, you'll be able to create polished, production-ready apps.',
    features: [
      'Cross-platform UI development',
      'Custom animations and transitions',
      'State management patterns',
      'Backend integration',
      'App store publication'
    ],
    prerequisites: ['Programming fundamentals', 'Object-oriented concepts', 'No prior mobile development required'],
    skills: ['Dart', 'Flutter', 'Widget Development', 'State Management', 'Cross-Platform Development'],
    modules: [
      {
        title: 'Dart Programming Basics',
        lessons: [
          { title: 'Dart Language Fundamentals', duration: '40 min' },
          { title: 'Object Oriented Programming in Dart', duration: '45 min' },
          { title: 'Asynchronous Programming', duration: '50 min' }
        ]
      },
      {
        title: 'Flutter Fundamentals',
        lessons: [
          { title: 'Flutter Setup and Architecture', duration: '30 min' },
          { title: 'Widgets and UI Building', duration: '45 min' },
          { title: 'Layouts and Responsive Design', duration: '40 min' }
        ]
      },
      {
        title: 'Advanced UI and Navigation',
        lessons: [
          { title: 'Custom Widgets and Themes', duration: '35 min' },
          { title: 'Navigation and Routing', duration: '40 min' },
          { title: 'Animations and Transitions', duration: '50 min' }
        ]
      },
      {
        title: 'State Management and Data',
        lessons: [
          { title: 'State Management Techniques', duration: '55 min' },
          { title: 'API Integration', duration: '45 min' },
          { title: 'Local Data Storage', duration: '40 min' }
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
  cloud: coursesData.filter(course => course.category === 'Cloud Computing'),
  cybersecurity: coursesData.filter(course => course.category === 'Cybersecurity')
};

export const popularSkills = [
  { name: 'JavaScript', count: 14500 },
  { name: 'Python', count: 12300 },
  { name: 'React', count: 10200 },
  { name: 'Java', count: 9800 },
  { name: 'Data Science', count: 8700 },
  { name: 'AWS', count: 8200 },
  { name: 'Node.js', count: 7600 },
  { name: 'Machine Learning', count: 7400 },
  { name: 'SQL', count: 7100 },
  { name: 'Flutter', count: 5400 },
  { name: 'DevOps', count: 5200 },
  { name: 'Cybersecurity', count: 4900 }
];

export const courseRoadmaps = {
  'web-development': {
    title: 'Full Stack Web Development Path',
    description: 'Comprehensive roadmap to become a full-stack web developer',
    steps: [
      {
        name: 'Frontend Fundamentals',
        courses: ['web-dev-101'],
        skills: ['HTML5', 'CSS3', 'JavaScript Basics']
      },
      {
        name: 'JavaScript Mastery',
        courses: [],
        skills: ['Advanced JavaScript', 'ES6+', 'DOM Manipulation']
      },
      {
        name: 'Frontend Frameworks',
        courses: [],
        skills: ['React.js', 'State Management', 'Component Architecture']
      },
      {
        name: 'Backend Development',
        courses: ['mern-stack'],
        skills: ['Node.js', 'Express.js', 'API Development']
      },
      {
        name: 'Database Integration',
        courses: ['mern-stack'],
        skills: ['MongoDB', 'SQL Basics', 'Database Design']
      },
      {
        name: 'Full Stack Projects',
        courses: ['mern-stack'],
        skills: ['Full Stack Architecture', 'Deployment', 'Testing']
      }
    ]
  },
  'data-science': {
    title: 'Data Science Career Path',
    description: 'Complete journey from basics to advanced data science',
    steps: [
      {
        name: 'Programming Foundations',
        courses: ['python-data-science'],
        skills: ['Python Basics', 'Data Structures', 'Algorithms']
      },
      {
        name: 'Data Analysis',
        courses: ['python-data-science'],
        skills: ['Pandas', 'NumPy', 'Data Cleaning']
      },
      {
        name: 'Data Visualization',
        courses: ['python-data-science'],
        skills: ['Matplotlib', 'Seaborn', 'Dashboard Creation']
      },
      {
        name: 'Machine Learning Basics',
        courses: ['python-data-science'],
        skills: ['Scikit-learn', 'Supervised Learning', 'Model Evaluation']
      },
      {
        name: 'Advanced Machine Learning',
        courses: [],
        skills: ['Deep Learning', 'Neural Networks', 'NLP']
      },
      {
        name: 'Big Data & Deployment',
        courses: [],
        skills: ['Spark', 'Model Deployment', 'Production ML']
      }
    ]
  },
  'mobile-development': {
    title: 'Mobile App Developer Path',
    description: 'From beginner to professional mobile app developer',
    steps: [
      {
        name: 'Programming Basics',
        courses: [],
        skills: ['Programming Logic', 'Variables & Control Flow', 'Functions']
      },
      {
        name: 'UI/UX Fundamentals',
        courses: [],
        skills: ['Mobile Design Principles', 'Wireframing', 'Prototyping']
      },
      {
        name: 'Cross-Platform Development',
        courses: ['react-native', 'flutter-development'],
        skills: ['React Native', 'Flutter', 'Component-based Architecture']
      },
      {
        name: 'State Management & API Integration',
        courses: ['react-native'],
        skills: ['Redux/Context API', 'RESTful Services', 'GraphQL']
      },
      {
        name: 'Native Features',
        courses: ['react-native'],
        skills: ['Camera', 'Geolocation', 'Push Notifications']
      },
      {
        name: 'App Store Publishing',
        courses: ['react-native', 'flutter-development'],
        skills: ['App Store Guidelines', 'TestFlight', 'Google Play Console']
      }
    ]
  }
};

