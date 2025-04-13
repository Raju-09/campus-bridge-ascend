
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CircularProgress from '@/components/CircularProgress';
import { AlertTriangle, CheckCircle, Code, FileText, GraduationCap, BookOpen, BrainCircuit, Coffee, Briefcase, Server, LineChart } from 'lucide-react';

interface SkillRating {
  name: string;
  score: number;
  icon: React.ReactNode;
}

interface InterviewQuestion {
  id: string;
  question: string;
  category: string;
}

interface InterviewRole {
  id: string;
  title: string;
  readinessScore: number;
  skillRatings: SkillRating[];
  improvements: string[];
  strengths: string[];
  commonQuestions: InterviewQuestion[];
  recommendedResources: {
    title: string;
    type: string;
    link?: string;
  }[];
}

const roles: InterviewRole[] = [
  {
    id: 'sde',
    title: 'Software Development Engineer',
    readinessScore: 78,
    skillRatings: [
      { name: 'Data Structures', score: 85, icon: <Code className="h-4 w-4" /> },
      { name: 'Algorithms', score: 80, icon: <BrainCircuit className="h-4 w-4" /> },
      { name: 'System Design', score: 65, icon: <Coffee className="h-4 w-4" /> },
      { name: 'Problem Solving', score: 82, icon: <BookOpen className="h-4 w-4" /> },
      { name: 'Coding Speed', score: 75, icon: <GraduationCap className="h-4 w-4" /> }
    ],
    improvements: [
      'Improve system design knowledge',
      'Practice more medium-hard LeetCode problems',
      'Gain experience with real-world projects',
      'Study distributed systems concepts',
      'Work on optimizing algorithm solutions'
    ],
    strengths: [
      'Strong grasp of core data structures',
      'Good problem solving ability',
      'Excellent understanding of algorithm complexity',
      'Consistent practice of coding challenges',
      'Strong foundation in OOP principles'
    ],
    commonQuestions: [
      { id: 'q1', question: 'Implement a function to reverse a linked list', category: 'Data Structures' },
      { id: 'q2', question: 'Design a scalable system for a social media platform', category: 'System Design' },
      { id: 'q3', question: 'Find the maximum subarray sum in an array', category: 'Algorithms' },
      { id: 'q4', question: 'Implement a LRU cache', category: 'Design Patterns' },
      { id: 'q5', question: 'Balance a binary search tree', category: 'Data Structures' }
    ],
    recommendedResources: [
      { title: 'Grokking the System Design Interview', type: 'Course' },
      { title: 'LeetCode Top 100 Liked Problems', type: 'Practice' },
      { title: 'Cracking the Coding Interview', type: 'Book' },
      { title: 'MIT Advanced Algorithms', type: 'Video Lectures' },
      { title: 'System Design Primer (GitHub)', type: 'Documentation' }
    ]
  },
  {
    id: 'data',
    title: 'Data Scientist',
    readinessScore: 65,
    skillRatings: [
      { name: 'Statistics', score: 70, icon: <LineChart className="h-4 w-4" /> },
      { name: 'Machine Learning', score: 65, icon: <BrainCircuit className="h-4 w-4" /> },
      { name: 'Data Visualization', score: 80, icon: <Coffee className="h-4 w-4" /> },
      { name: 'Python', score: 85, icon: <Code className="h-4 w-4" /> },
      { name: 'SQL', score: 60, icon: <Server className="h-4 w-4" /> }
    ],
    improvements: [
      'Strengthen SQL query optimization',
      'Build more ML models from scratch',
      'Learn more about feature engineering',
      'Practice A/B testing methodology',
      'Improve big data processing skills'
    ],
    strengths: [
      'Strong Python programming skills',
      'Good at creating informative data visualizations',
      'Solid foundation in basic statistics',
      'Familiar with major ML libraries',
      'Experience with data cleaning techniques'
    ],
    commonQuestions: [
      { id: 'q1', question: 'Explain the difference between L1 and L2 regularization', category: 'Machine Learning' },
      { id: 'q2', question: 'How would you handle missing data in a dataset?', category: 'Data Preprocessing' },
      { id: 'q3', question: 'Explain the bias-variance tradeoff', category: 'Statistics' },
      { id: 'q4', question: 'Write a query to find the top 5 customers by purchase volume', category: 'SQL' },
      { id: 'q5', question: 'Design an experiment to test a new recommendation algorithm', category: 'Experimentation' }
    ],
    recommendedResources: [
      { title: 'Deep Learning Specialization - Coursera', type: 'Course' },
      { title: 'Practical Statistics for Data Scientists', type: 'Book' },
      { title: 'Kaggle Competitions', type: 'Practice' },
      { title: 'SQL for Data Scientists', type: 'Course' },
      { title: 'Feature Engineering for Machine Learning', type: 'Book' }
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend Developer',
    readinessScore: 82,
    skillRatings: [
      { name: 'HTML/CSS', score: 95, icon: <Code className="h-4 w-4" /> },
      { name: 'JavaScript', score: 85, icon: <BrainCircuit className="h-4 w-4" /> },
      { name: 'React', score: 80, icon: <Coffee className="h-4 w-4" /> },
      { name: 'Responsive Design', score: 90, icon: <BookOpen className="h-4 w-4" /> },
      { name: 'Web Performance', score: 70, icon: <GraduationCap className="h-4 w-4" /> }
    ],
    improvements: [
      'Learn more about web performance optimization',
      'Gain experience with state management libraries',
      'Practice more complex CSS layouts',
      'Study accessibility compliance standards',
      'Improve knowledge of modern build tools'
    ],
    strengths: [
      'Excellent HTML/CSS skills',
      'Strong understanding of responsive design',
      'Good JavaScript fundamentals',
      'Experience with React and component architecture',
      'Knowledge of cross-browser compatibility'
    ],
    commonQuestions: [
      { id: 'q1', question: 'Explain how event delegation works in JavaScript', category: 'JavaScript' },
      { id: 'q2', question: 'What is the virtual DOM and how does it work?', category: 'React' },
      { id: 'q3', question: 'How would you optimize the loading performance of a web page?', category: 'Performance' },
      { id: 'q4', question: 'Create a responsive layout without using media queries', category: 'CSS' },
      { id: 'q5', question: 'Explain the difference between controlled and uncontrolled components', category: 'React' }
    ],
    recommendedResources: [
      { title: 'Advanced React Patterns - Frontend Masters', type: 'Course' },
      { title: 'CSS for JS Developers', type: 'Course' },
      { title: 'Web.dev Performance Documentation', type: 'Documentation' },
      { title: 'JavaScript: The Good Parts', type: 'Book' },
      { title: 'Real-world Frontend Challenges on Frontend Mentor', type: 'Practice' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Developer',
    readinessScore: 75,
    skillRatings: [
      { name: 'API Design', score: 85, icon: <Server className="h-4 w-4" /> },
      { name: 'Database', score: 80, icon: <Coffee className="h-4 w-4" /> },
      { name: 'Security', score: 70, icon: <BookOpen className="h-4 w-4" /> },
      { name: 'System Architecture', score: 75, icon: <BrainCircuit className="h-4 w-4" /> },
      { name: 'Cloud Services', score: 65, icon: <Code className="h-4 w-4" /> }
    ],
    improvements: [
      'Strengthen knowledge of microservices architecture',
      'Improve database optimization skills',
      'Learn more about authentication mechanisms',
      'Practice creating serverless functions',
      'Gain experience with container orchestration'
    ],
    strengths: [
      'Strong API design principles',
      'Good understanding of database concepts',
      'Experience with authentication flows',
      'Knowledge of REST and GraphQL',
      'Familiarity with server deployment'
    ],
    commonQuestions: [
      { id: 'q1', question: 'Design a rate limiting system for an API', category: 'System Design' },
      { id: 'q2', question: 'Explain the differences between SQL and NoSQL databases', category: 'Databases' },
      { id: 'q3', question: 'How would you handle authentication in a microservices architecture?', category: 'Security' },
      { id: 'q4', question: 'Implement a basic caching strategy for a high-traffic API', category: 'Performance' },
      { id: 'q5', question: 'How would you design a scalable message queue system?', category: 'Architecture' }
    ],
    recommendedResources: [
      { title: 'Designing Data-Intensive Applications', type: 'Book' },
      { title: 'System Design Interview - Alex Xu', type: 'Book' },
      { title: 'AWS Certified Developer Course', type: 'Course' },
      { title: 'Database Design for Mere Mortals', type: 'Book' },
      { title: 'Backend Master Class - Golang, Postgres, Redis, Docker', type: 'Course' }
    ]
  }
];

const InterviewReadiness: React.FC = () => {
  return (
    <Card className="animate-fade-in">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">Interview Readiness Meter</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="sde">
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="sde">SDE</TabsTrigger>
            <TabsTrigger value="data">Data Scientist</TabsTrigger>
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
          </TabsList>
          
          {roles.map((role) => (
            <TabsContent key={role.id} value={role.id} className="mt-0">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 flex flex-col items-center justify-center">
                  <CircularProgress
                    percentage={role.readinessScore}
                    size={180}
                    strokeWidth={10}
                    color={role.readinessScore >= 80 ? 'stroke-green-500' : role.readinessScore >= 60 ? 'stroke-yellow-500' : 'stroke-red-500'}
                    innerContent={
                      <div className="flex flex-col items-center">
                        <span className="text-4xl font-bold">{role.readinessScore}%</span>
                        <span className="text-xs text-gray-500">Readiness</span>
                      </div>
                    }
                  />
                  <h3 className="text-lg font-medium mt-4">{role.title}</h3>
                  <Badge 
                    className={`mt-2 ${
                      role.readinessScore >= 80 
                        ? 'bg-green-100 text-green-800' 
                        : role.readinessScore >= 60 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {role.readinessScore >= 80 
                      ? 'Ready for Interviews' 
                      : role.readinessScore >= 60 
                        ? 'Almost Ready' 
                        : 'Needs Improvement'}
                  </Badge>
                </div>
                
                <div className="md:w-2/3">
                  <h3 className="text-sm font-medium text-gray-500 mb-3">Skill Breakdown</h3>
                  <div className="space-y-4">
                    {role.skillRatings.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-1">
                          <div className="flex items-center">
                            {skill.icon}
                            <span className="ml-2">{skill.name}</span>
                          </div>
                          <span>{skill.score}%</span>
                        </div>
                        <Progress value={skill.score} 
                          className={`h-2 ${
                            skill.score >= 80 
                              ? 'bg-green-200' 
                              : skill.score >= 60 
                                ? 'bg-yellow-200' 
                                : 'bg-red-200'
                          }`} 
                        />
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="border rounded-md p-4">
                      <div className="flex items-center text-yellow-600 mb-2">
                        <AlertTriangle className="h-4 w-4 mr-1" />
                        <h3 className="font-medium text-sm">Areas to Improve</h3>
                      </div>
                      <ul className="text-sm space-y-2">
                        {role.improvements.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="border rounded-md p-4">
                      <div className="flex items-center text-green-600 mb-2">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        <h3 className="font-medium text-sm">Your Strengths</h3>
                      </div>
                      <ul className="text-sm space-y-2">
                        {role.strengths.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-center text-blue-600 mb-3">
                      <FileText className="h-4 w-4 mr-1" />
                      <h3 className="font-medium text-sm">Common Interview Questions</h3>
                    </div>
                    <div className="border rounded-md p-4 space-y-3">
                      {role.commonQuestions.map((item) => (
                        <div key={item.id} className="flex items-start">
                          <div className="mr-2 mt-0.5">•</div>
                          <div>
                            <div className="text-sm">{item.question}</div>
                            <div className="text-xs text-gray-500">{item.category}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-center text-purple-600 mb-3">
                      <Briefcase className="h-4 w-4 mr-1" />
                      <h3 className="font-medium text-sm">Recommended Resources</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {role.recommendedResources.map((resource, index) => (
                        <div key={index} className="border rounded-md p-3 flex items-center justify-between">
                          <div>
                            <div className="text-sm font-medium">{resource.title}</div>
                            <div className="text-xs text-gray-500">{resource.type}</div>
                          </div>
                          <Badge variant="outline" className="whitespace-nowrap">Access</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default InterviewReadiness;
