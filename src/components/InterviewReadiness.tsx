
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CircularProgress from '@/components/CircularProgress';
import { AlertTriangle, CheckCircle, Code, FileText, GraduationCap, BookOpen, BrainCircuit, Coffee } from 'lucide-react';

interface SkillRating {
  name: string;
  score: number;
  icon: React.ReactNode;
}

interface InterviewRole {
  id: string;
  title: string;
  readinessScore: number;
  skillRatings: SkillRating[];
  improvements: string[];
  strengths: string[];
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
      'Gain experience with real-world projects'
    ],
    strengths: [
      'Strong grasp of core data structures',
      'Good problem solving ability',
      'Excellent understanding of algorithm complexity'
    ]
  },
  {
    id: 'data',
    title: 'Data Scientist',
    readinessScore: 65,
    skillRatings: [
      { name: 'Statistics', score: 70, icon: <Code className="h-4 w-4" /> },
      { name: 'Machine Learning', score: 65, icon: <BrainCircuit className="h-4 w-4" /> },
      { name: 'Data Visualization', score: 80, icon: <Coffee className="h-4 w-4" /> },
      { name: 'Python', score: 85, icon: <BookOpen className="h-4 w-4" /> },
      { name: 'SQL', score: 60, icon: <GraduationCap className="h-4 w-4" /> }
    ],
    improvements: [
      'Strengthen SQL query optimization',
      'Build more ML models from scratch',
      'Learn more about feature engineering'
    ],
    strengths: [
      'Strong Python programming skills',
      'Good at creating informative data visualizations',
      'Solid foundation in basic statistics'
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
      'Practice more complex CSS layouts'
    ],
    strengths: [
      'Excellent HTML/CSS skills',
      'Strong understanding of responsive design',
      'Good JavaScript fundamentals'
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
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="sde">SDE</TabsTrigger>
            <TabsTrigger value="data">Data Scientist</TabsTrigger>
            <TabsTrigger value="frontend">Frontend Developer</TabsTrigger>
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
