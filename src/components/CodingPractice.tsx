
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Code, BookOpen, FileText, Laptop, Trophy, Search, Filter, Award, Calendar, Clock } from 'lucide-react';
import { codingQuestions, assessments, roadmaps, interviewQuestions } from '@/data/codingData';

interface QuestionItemProps {
  question: {
    id: string;
    title: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    tags: string[];
    completedBy: number;
    category: string;
  };
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
  const [activeTab, setActiveTab] = useState('problems');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredQuestions = codingQuestions.filter(question => 
    question.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    question.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 animate-fade-in">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-1">Coding Practice</h2>
          <p className="text-gray-500 text-sm">Improve your coding skills with these challenges</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search questions..."
              className="pl-8 pr-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button size="sm" variant="outline" className="flex items-center">
            <Filter size={14} className="mr-1" />
            Filter
          </Button>
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

      <Tabs defaultValue="problems" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 mb-4">
          <TabsTrigger value="problems" className="flex items-center">
            <Code size={16} className="mr-1" />
            <span className="hidden md:inline">Problems</span>
          </TabsTrigger>
          <TabsTrigger value="assessments" className="flex items-center">
            <FileText size={16} className="mr-1" />
            <span className="hidden md:inline">Assessments</span>
          </TabsTrigger>
          <TabsTrigger value="roadmaps" className="flex items-center">
            <BookOpen size={16} className="mr-1" />
            <span className="hidden md:inline">Roadmaps</span>
          </TabsTrigger>
          <TabsTrigger value="interviews" className="flex items-center">
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
                {filteredQuestions
                  .filter(q => q.category === 'DSA')
                  .slice(0, 4)
                  .map(question => (
                    <QuestionItem
                      key={question.id}
                      question={question}
                      onSelect={setSelectedQuestion}
                    />
                  ))}
                {filteredQuestions.filter(q => q.category === 'DSA').length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    No matching problems found. Try a different search term.
                  </div>
                )}
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">System Design</CardTitle>
              </CardHeader>
              <CardContent>
                {filteredQuestions
                  .filter(q => q.category === 'SD')
                  .map(question => (
                    <QuestionItem
                      key={question.id}
                      question={question}
                      onSelect={setSelectedQuestion}
                    />
                  ))}
                {filteredQuestions.filter(q => q.category === 'SD').length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    No system design challenges match your search.
                  </div>
                )}
                <Button variant="outline" className="w-full mt-2">
                  View More Problems
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Award className="mr-2 h-5 w-5 text-yellow-500" />
                  Your Streak
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center">
                  <div className="text-4xl font-bold text-campus-blue">7 Days</div>
                  <p className="text-gray-500 mt-1">Keep solving to maintain your streak!</p>
                  
                  <div className="flex justify-center gap-1 md:gap-2 mt-4">
                    {[...Array(7)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center
                          ${i < 7 ? 'bg-green-100 text-green-800 border border-green-300' : 'bg-gray-100 text-gray-400 border border-gray-200'}`}
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="assessments" className="m-0">
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {assessments.map((assessment) => (
                  <div key={assessment.id} className="border rounded-md p-4 hover:bg-gray-50 cursor-pointer transition-colors">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium">{assessment.title}</h3>
                      <Badge className="bg-blue-100 text-blue-800">
                        <Clock size={12} className="mr-1" />
                        {assessment.dueDate}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 my-2">{assessment.subject}</p>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{assessment.questions} questions</span>
                      <span>{assessment.duration}</span>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-xs font-medium">{assessment.totalPoints} points</span>
                      <Button size="sm" className="bg-campus-blue">Start</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="roadmaps" className="m-0">
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {roadmaps.map((roadmap) => (
                  <div key={roadmap.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-medium text-lg">{roadmap.title}</h3>
                      <Badge className="bg-blue-100 text-blue-800">
                        {roadmap.totalProgress}% Complete
                      </Badge>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${roadmap.totalProgress}%` }}></div>
                    </div>
                    
                    <ol className="space-y-4 relative border-l border-gray-300 ml-3">
                      {roadmap.steps.map((step, index) => (
                        <li key={index} className="mb-4 ml-6">
                          <span className={`absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-4 ring-white
                            ${step.status === 'completed' ? 'bg-green-100 text-green-600' : 
                              step.status === 'in-progress' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
                            {step.status === 'completed' ? (
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.211l-5.1 5.1a.5.5 0 01-.707 0l-2.5-2.5a.5.5 0 01.707-.707l2.147 2.146 4.746-4.746a.5.5 0 01.707.707z" clipRule="evenodd"></path>
                              </svg>
                            ) : step.status === 'in-progress' ? (
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-9.293a1 1 0 00-1.414 0L7 10.586V7a1 1 0 00-2 0v5a1 1 0 001 1h5a1 1 0 000-2h-2.586l2.293-2.293a1 1 0 000-1.414z" clipRule="evenodd"></path>
                              </svg>
                            ) : (
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd"></path>
                              </svg>
                            )}
                          </span>
                          <h3 className="font-medium">{step.title}</h3>
                          <p className="text-sm">{step.status === 'not-started' ? 'Not Started - 0%' : 
                            `${step.status === 'completed' ? 'Complete' : 'In Progress'} - ${step.completion}%`}</p>
                        </li>
                      ))}
                    </ol>
                    
                    <div className="mt-4 text-sm text-gray-500">
                      <Calendar className="inline-block h-4 w-4 mr-1" />
                      Estimated time to complete: {roadmap.estimatedTimeToComplete}
                    </div>
                    
                    <Button className="w-full mt-4 bg-campus-blue">Continue Learning</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="interviews" className="m-0">
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {interviewQuestions.slice(0, 3).map((resource) => (
                  <div key={resource.id} className="border rounded-md p-4 hover:shadow-md transition-all">
                    <h3 className="font-medium">{resource.title}</h3>
                    <p className="text-sm text-gray-600 my-2">{resource.description}</p>
                    <div className="flex flex-wrap gap-1 mt-3 mb-4">
                      {resource.categories && resource.categories.map((category, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">{category}</Badge>
                      ))}
                    </div>
                    <Button size="sm" className="w-full bg-campus-blue">Start Practicing</Button>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">Advanced Interview Preparation</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {interviewQuestions.slice(3).map((resource) => (
                    <div key={resource.id} className="border rounded-md p-4 flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">{resource.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                      </div>
                      <Button variant="outline" size="sm">Access</Button>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707a1 1 0 00-1.414 0L9 11.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-800">Upcoming Mock Interview Session</h3>
                    <div className="mt-1 text-sm text-blue-700">
                      <p>Technical Interview Practice: Data Structures & Algorithms</p>
                      <p className="mt-1">Thursday, April 17, 2025 • 4:00 PM</p>
                    </div>
                    <div className="mt-2">
                      <Button size="sm" variant="outline" className="bg-white text-blue-600 border-blue-300">Join Session</Button>
                    </div>
                  </div>
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
