
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Code, BookOpen, FileText, Laptop, Trophy } from 'lucide-react';

interface CodingQuestion {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tags: string[];
  completedBy: number;
  category: string;
}

const codingQuestions: CodingQuestion[] = [
  { 
    id: 'q1', 
    title: 'Two Sum', 
    difficulty: 'Easy', 
    tags: ['Arrays', 'Hash Table'], 
    completedBy: 478,
    category: 'DSA'
  },
  { 
    id: 'q2', 
    title: 'Reverse Linked List', 
    difficulty: 'Easy', 
    tags: ['Linked List', 'Recursion'], 
    completedBy: 389,
    category: 'DSA'
  },
  { 
    id: 'q3', 
    title: 'Valid Parentheses', 
    difficulty: 'Easy', 
    tags: ['Stack', 'String'], 
    completedBy: 412,
    category: 'DSA'
  },
  { 
    id: 'q4', 
    title: 'Maximum Subarray', 
    difficulty: 'Medium', 
    tags: ['Array', 'Dynamic Programming'], 
    completedBy: 321,
    category: 'DSA'
  },
  { 
    id: 'q5', 
    title: 'Binary Tree Level Order Traversal', 
    difficulty: 'Medium', 
    tags: ['Tree', 'BFS'], 
    completedBy: 298,
    category: 'DSA'
  },
  { 
    id: 'q6', 
    title: 'Design a Chat App Backend', 
    difficulty: 'Hard', 
    tags: ['System Design', 'Database'], 
    completedBy: 112,
    category: 'SD'
  }
];

interface QuestionItemProps {
  question: CodingQuestion;
  onSelect: (id: string) => void;
}

const QuestionItem: React.FC<QuestionItemProps> = ({ question, onSelect }) => {
  const difficultyColor = {
    Easy: 'bg-green-100 text-green-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    Hard: 'bg-red-100 text-red-800'
  };

  return (
    <div 
      className="border rounded-md p-4 mb-3 hover:bg-gray-50 cursor-pointer transition-colors"
      onClick={() => onSelect(question.id)}
    >
      <div className="flex justify-between items-start">
        <h3 className="font-medium">{question.title}</h3>
        <Badge className={difficultyColor[question.difficulty]}>
          {question.difficulty}
        </Badge>
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {question.tags.map(tag => (
          <Badge key={tag} variant="outline" className="text-xs">
            {tag}
          </Badge>
        ))}
      </div>
      <div className="text-xs text-gray-500 mt-3">
        Solved by {question.completedBy} students
      </div>
    </div>
  );
};

const CodingPractice: React.FC = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold mb-1">Coding Practice</h2>
          <p className="text-gray-500 text-sm">Improve your coding skills with these challenges</p>
        </div>
        <div className="flex space-x-2">
          <Button size="sm" variant="outline" className="flex items-center">
            <Trophy size={14} className="mr-1" />
            Leaderboard
          </Button>
          <Button size="sm" className="bg-campus-blue flex items-center">
            <Code size={14} className="mr-1" />
            Enter Coding Room
          </Button>
        </div>
      </div>

      <Tabs defaultValue="problems">
        <TabsList className="grid grid-cols-4 mb-4">
          <TabsTrigger value="problems">
            <Code size={16} className="mr-1" />
            <span className="hidden md:inline">Problems</span>
          </TabsTrigger>
          <TabsTrigger value="assessments">
            <FileText size={16} className="mr-1" />
            <span className="hidden md:inline">Assessments</span>
          </TabsTrigger>
          <TabsTrigger value="roadmaps">
            <BookOpen size={16} className="mr-1" />
            <span className="hidden md:inline">Roadmaps</span>
          </TabsTrigger>
          <TabsTrigger value="interviews">
            <Laptop size={16} className="mr-1" />
            <span className="hidden md:inline">Interview Prep</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="problems" className="m-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Daily Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                {codingQuestions
                  .filter(q => q.category === 'DSA')
                  .slice(0, 4)
                  .map(question => (
                    <QuestionItem
                      key={question.id}
                      question={question}
                      onSelect={setSelectedQuestion}
                    />
                  ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">System Design</CardTitle>
              </CardHeader>
              <CardContent>
                {codingQuestions
                  .filter(q => q.category === 'SD')
                  .map(question => (
                    <QuestionItem
                      key={question.id}
                      question={question}
                      onSelect={setSelectedQuestion}
                    />
                  ))}
                <Button variant="outline" className="w-full mt-2">
                  View More Problems
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="assessments" className="m-0">
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="border rounded-md p-4 hover:bg-gray-50 cursor-pointer transition-colors">
                  <h3 className="font-medium">Mid-Term Assessment</h3>
                  <p className="text-sm text-gray-600 my-2">Data Structures & Algorithms</p>
                  <Badge>Due in 2 days</Badge>
                </div>
                <div className="border rounded-md p-4 hover:bg-gray-50 cursor-pointer transition-colors">
                  <h3 className="font-medium">Java Programming Test</h3>
                  <p className="text-sm text-gray-600 my-2">Core Java concepts</p>
                  <Badge>Due in 5 days</Badge>
                </div>
                <div className="border rounded-md p-4 hover:bg-gray-50 cursor-pointer transition-colors">
                  <h3 className="font-medium">Web Development Practical</h3>
                  <p className="text-sm text-gray-600 my-2">HTML, CSS & JavaScript</p>
                  <Badge>Due in 1 week</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="roadmaps" className="m-0">
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium text-lg mb-3">Web Development Path</h3>
                  <ol className="space-y-4 relative border-l border-gray-300 ml-3">
                    <li className="mb-10 ml-6">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-green-100 rounded-full -left-3 ring-4 ring-white">
                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.211l-5.1 5.1a.5.5 0 01-.707 0l-2.5-2.5a.5.5 0 01.707-.707l2.147 2.146 4.746-4.746a.5.5 0 01.707.707z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                      <h3 className="font-medium">HTML & CSS Basics</h3>
                      <p className="text-sm">Complete - 100%</p>
                    </li>
                    <li className="mb-10 ml-6">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-4 ring-white">
                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-9.293a1 1 0 00-1.414 0L7 10.586V7a1 1 0 00-2 0v5a1 1 0 001 1h5a1 1 0 000-2h-2.586l2.293-2.293a1 1 0 000-1.414z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                      <h3 className="font-medium">JavaScript Fundamentals</h3>
                      <p className="text-sm">In Progress - 75%</p>
                    </li>
                    <li className="mb-10 ml-6">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full -left-3 ring-4 ring-white">
                        <svg className="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                      <h3 className="font-medium">React Framework</h3>
                      <p className="text-sm">Not Started - 0%</p>
                    </li>
                    <li className="ml-6">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full -left-3 ring-4 ring-white">
                        <svg className="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                      <h3 className="font-medium">Backend Integration</h3>
                      <p className="text-sm">Not Started - 0%</p>
                    </li>
                  </ol>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium text-lg mb-3">Data Science Path</h3>
                  <ol className="space-y-4 relative border-l border-gray-300 ml-3">
                    <li className="mb-10 ml-6">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-green-100 rounded-full -left-3 ring-4 ring-white">
                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.211l-5.1 5.1a.5.5 0 01-.707 0l-2.5-2.5a.5.5 0 01.707-.707l2.147 2.146 4.746-4.746a.5.5 0 01.707.707z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                      <h3 className="font-medium">Python Basics</h3>
                      <p className="text-sm">Complete - 100%</p>
                    </li>
                    <li className="mb-10 ml-6">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-green-100 rounded-full -left-3 ring-4 ring-white">
                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.211l-5.1 5.1a.5.5 0 01-.707 0l-2.5-2.5a.5.5 0 01.707-.707l2.147 2.146 4.746-4.746a.5.5 0 01.707.707z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                      <h3 className="font-medium">Data Analysis with NumPy & Pandas</h3>
                      <p className="text-sm">Complete - 100%</p>
                    </li>
                    <li className="mb-10 ml-6">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-4 ring-white">
                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-9.293a1 1 0 00-1.414 0L7 10.586V7a1 1 0 00-2 0v5a1 1 0 001 1h5a1 1 0 000-2h-2.586l2.293-2.293a1 1 0 000-1.414z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                      <h3 className="font-medium">Machine Learning Basics</h3>
                      <p className="text-sm">In Progress - 40%</p>
                    </li>
                    <li className="ml-6">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full -left-3 ring-4 ring-white">
                        <svg className="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                      <h3 className="font-medium">Deep Learning</h3>
                      <p className="text-sm">Not Started - 0%</p>
                    </li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="interviews" className="m-0">
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border rounded-md p-4 hover:shadow-md transition-all">
                  <h3 className="font-medium">Top 100 Interview Questions</h3>
                  <p className="text-sm text-gray-600 my-2">Curated collection of most commonly asked interview questions</p>
                  <Button size="sm" className="w-full bg-campus-blue">Start Practicing</Button>
                </div>
                <div className="border rounded-md p-4 hover:shadow-md transition-all">
                  <h3 className="font-medium">Mock Interview Simulator</h3>
                  <p className="text-sm text-gray-600 my-2">AI-powered interview simulator with real-time feedback</p>
                  <Button size="sm" className="w-full bg-campus-blue">Start Interview</Button>
                </div>
                <div className="border rounded-md p-4 hover:shadow-md transition-all">
                  <h3 className="font-medium">Previous Year Papers</h3>
                  <p className="text-sm text-gray-600 my-2">Access to previous years' placement and exam papers</p>
                  <Button size="sm" className="w-full bg-campus-blue">View Papers</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CodingPractice;
