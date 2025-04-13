
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { FileText, Users, Calendar, Check, Clock, AlertCircle, ChevronDown, ChevronUp, GitBranch, GitPullRequest, MessageSquare, Plus } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface Project {
  id: string;
  title: string;
  description: string;
  status: 'in-progress' | 'completed' | 'overdue';
  progress: number;
  deadline: string;
  members: Array<{
    id: string;
    name: string;
    avatar?: string;
    avatarFallback: string;
  }>;
  mentor: {
    id: string;
    name: string;
    avatar?: string;
    avatarFallback: string;
  };
  tasks: Array<{
    id: string;
    title: string;
    status: 'pending' | 'in-progress' | 'completed' | 'overdue';
    assignee?: string;
    dueDate?: string;
  }>;
  commits?: Array<{
    id: string;
    message: string;
    author: string;
    timestamp: string;
    branch: string;
  }>;
}

const projects: Project[] = [
  {
    id: 'p1',
    title: 'Smart Student Dashboard',
    description: 'A web application that helps students track their progress, courses, and schedules.',
    status: 'in-progress',
    progress: 65,
    deadline: 'Apr 30, 2025',
    members: [
      { id: 'm1', name: 'Alex Johnson', avatarFallback: 'AJ' },
      { id: 'm2', name: 'Maria Rodriguez', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=36&h=36&q=80', avatarFallback: 'MR' },
      { id: 'm3', name: 'David Kim', avatarFallback: 'DK' }
    ],
    mentor: {
      id: 'mentor1',
      name: 'Dr. Sarah Wilson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=36&h=36&q=80',
      avatarFallback: 'SW'
    },
    tasks: [
      { id: 't1', title: 'Setup React project structure', status: 'completed' },
      { id: 't2', title: 'Implement user authentication', status: 'completed' },
      { id: 't3', title: 'Create dashboard components', status: 'in-progress', assignee: 'm1', dueDate: 'Apr 15, 2025' },
      { id: 't4', title: 'Connect to backend API', status: 'in-progress', assignee: 'm2', dueDate: 'Apr 20, 2025' },
      { id: 't5', title: 'Implement data visualization', status: 'pending', assignee: 'm3', dueDate: 'Apr 25, 2025' },
      { id: 't6', title: 'Final testing and deployment', status: 'pending', dueDate: 'Apr 30, 2025' },
    ],
    commits: [
      { 
        id: 'c1', 
        message: 'Add authentication components', 
        author: 'Alex Johnson', 
        timestamp: '2 days ago', 
        branch: 'feature/auth'
      },
      { 
        id: 'c2', 
        message: 'Fix responsive layout issues', 
        author: 'Maria Rodriguez', 
        timestamp: '3 days ago', 
        branch: 'main'
      },
      { 
        id: 'c3', 
        message: 'Initial project setup', 
        author: 'David Kim', 
        timestamp: '5 days ago', 
        branch: 'main'
      },
    ]
  },
  {
    id: 'p2',
    title: 'AI Code Analyzer',
    description: 'An AI-powered tool to analyze code quality and offer improvement suggestions.',
    status: 'overdue',
    progress: 40,
    deadline: 'Apr 1, 2025',
    members: [
      { id: 'm1', name: 'Alex Johnson', avatarFallback: 'AJ' },
      { id: 'm4', name: 'James Smith', avatarFallback: 'JS' },
    ],
    mentor: {
      id: 'mentor2',
      name: 'Prof. Michael Chen',
      avatarFallback: 'MC'
    },
    tasks: [
      { id: 't1', title: 'Research AI libraries for code analysis', status: 'completed' },
      { id: 't2', title: 'Design system architecture', status: 'completed' },
      { id: 't3', title: 'Implement core analysis engine', status: 'in-progress', assignee: 'm1', dueDate: 'Mar 25, 2025' },
      { id: 't4', title: 'Create user interface', status: 'pending', assignee: 'm4', dueDate: 'Mar 30, 2025' },
      { id: 't5', title: 'Integration and testing', status: 'pending', dueDate: 'Apr 1, 2025' },
    ],
    commits: [
      { 
        id: 'c1', 
        message: 'Add initial AI model integration', 
        author: 'Alex Johnson', 
        timestamp: '1 week ago', 
        branch: 'feature/ai-model'
      },
      { 
        id: 'c2', 
        message: 'Create project structure', 
        author: 'James Smith', 
        timestamp: '2 weeks ago', 
        branch: 'main'
      }
    ]
  },
  {
    id: 'p3',
    title: 'Mobile Learning App',
    description: 'A mobile application for on-the-go learning with quizzes and flashcards.',
    status: 'completed',
    progress: 100,
    deadline: 'Mar 15, 2025',
    members: [
      { id: 'm2', name: 'Maria Rodriguez', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=36&h=36&q=80', avatarFallback: 'MR' },
      { id: 'm3', name: 'David Kim', avatarFallback: 'DK' },
    ],
    mentor: {
      id: 'mentor3',
      name: 'Amanda Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=36&h=36&q=80',
      avatarFallback: 'AR'
    },
    tasks: [
      { id: 't1', title: 'Design UI/UX for mobile app', status: 'completed' },
      { id: 't2', title: 'Implement React Native components', status: 'completed' },
      { id: 't3', title: 'Create quiz functionality', status: 'completed' },
      { id: 't4', title: 'Add user authentication', status: 'completed' },
      { id: 't5', title: 'Final testing and deployment', status: 'completed' },
    ],
    commits: [
      { 
        id: 'c1', 
        message: 'Final release v1.0', 
        author: 'Maria Rodriguez', 
        timestamp: '3 weeks ago', 
        branch: 'main'
      },
      { 
        id: 'c2', 
        message: 'Fix authentication bugs', 
        author: 'David Kim', 
        timestamp: '4 weeks ago', 
        branch: 'bugfix/auth'
      },
      { 
        id: 'c3', 
        message: 'Implement quiz functionality', 
        author: 'Maria Rodriguez', 
        timestamp: 'Mar 1, 2025', 
        branch: 'feature/quiz'
      }
    ]
  }
];

interface ProjectTrackerProps {
  className?: string;
}

const ProjectTracker: React.FC<ProjectTrackerProps> = ({ className }) => {
  const [expandedProject, setExpandedProject] = useState<string>('p1');
  const [activeTab, setActiveTab] = useState('details');
  
  const toggleProject = (id: string) => {
    setExpandedProject(expandedProject === id ? '' : id);
  };
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'overdue': return 'bg-red-100 text-red-800';
      case 'pending': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <Check className="h-4 w-4 text-green-500" />;
      case 'in-progress': return <Clock className="h-4 w-4 text-blue-500" />;
      case 'overdue': return <AlertCircle className="h-4 w-4 text-red-500" />;
      case 'pending': return <Clock className="h-4 w-4 text-gray-500" />;
      default: return null;
    }
  };
  
  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <div className="flex justify-between">
          <CardTitle className="text-xl">Mini Project Tracker</CardTitle>
          <Button className="bg-campus-blue" size="sm">
            <Plus className="h-4 w-4 mr-1" />
            New Project
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {projects.map((project) => (
          <div key={project.id} className="mb-4">
            <div 
              className={`p-4 border rounded-md cursor-pointer transition-all ${
                expandedProject === project.id 
                  ? 'border-campus-blue bg-blue-50' 
                  : 'hover:border-gray-300'
              }`}
              onClick={() => toggleProject(project.id)}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <FileText className={`h-5 w-5 mr-3 ${
                    project.status === 'completed' 
                      ? 'text-green-600' 
                      : project.status === 'overdue' 
                        ? 'text-red-600' 
                        : 'text-blue-600'
                  }`} />
                  <div>
                    <h3 className="font-medium">{project.title}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users size={14} className="mr-1" />
                      <span>{project.members.length} members</span>
                      <span className="mx-2">•</span>
                      <Calendar size={14} className="mr-1" />
                      <span>{project.deadline}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Badge className={getStatusColor(project.status)}>
                    {project.status === 'in-progress' ? 'In Progress' : project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </Badge>
                  {expandedProject === project.id ? (
                    <ChevronUp className="h-5 w-5 ml-2 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 ml-2 text-gray-500" />
                  )}
                </div>
              </div>
              
              <div className="mt-2">
                <div className="flex justify-between text-xs mb-1">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-1.5" />
              </div>
            </div>
            
            {expandedProject === project.id && (
              <div className="border border-t-0 rounded-b-md px-4 py-3 bg-white">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid grid-cols-3">
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="tasks">Tasks</TabsTrigger>
                    <TabsTrigger value="repository">Repository</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="details" className="mt-4">
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Project Team</h4>
                        <div className="space-y-2">
                          {project.members.map((member) => (
                            <div key={member.id} className="flex items-center p-2 border rounded-md">
                              <Avatar className="h-8 w-8 mr-2">
                                {member.avatar && <AvatarImage src={member.avatar} alt={member.name} />}
                                <AvatarFallback>{member.avatarFallback}</AvatarFallback>
                              </Avatar>
                              <span>{member.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Mentor</h4>
                        <div className="p-2 border rounded-md flex items-center">
                          <Avatar className="h-8 w-8 mr-2">
                            {project.mentor.avatar && <AvatarImage src={project.mentor.avatar} alt={project.mentor.name} />}
                            <AvatarFallback>{project.mentor.avatarFallback}</AvatarFallback>
                          </Avatar>
                          <span>{project.mentor.name}</span>
                        </div>
                        
                        <div className="mt-4">
                          <h4 className="text-sm font-medium mb-2">Project Stats</h4>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="p-3 border rounded-md text-center">
                              <div className="text-2xl font-semibold">
                                {project.tasks.filter(task => task.status === 'completed').length}
                              </div>
                              <div className="text-xs text-gray-500">Tasks Completed</div>
                            </div>
                            <div className="p-3 border rounded-md text-center">
                              <div className="text-2xl font-semibold">
                                {project.tasks.filter(task => task.status === 'pending' || task.status === 'in-progress').length}
                              </div>
                              <div className="text-xs text-gray-500">Tasks Remaining</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end mt-4 space-x-2">
                      <Button variant="outline">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        Contact Team
                      </Button>
                      <Button className="bg-campus-blue">
                        View Full Project
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="tasks" className="mt-4 space-y-3">
                    {project.tasks.map((task) => (
                      <div 
                        key={task.id} 
                        className={`p-3 border rounded-md flex justify-between items-center ${
                          task.status === 'completed' ? 'bg-green-50' : ''
                        }`}
                      >
                        <div className="flex items-center">
                          {getStatusIcon(task.status)}
                          <span className="ml-2">{task.title}</span>
                          {task.assignee && (
                            <span className="ml-2 text-xs bg-gray-100 px-2 py-0.5 rounded-full text-gray-600">
                              Assigned to: {project.members.find(m => m.id === task.assignee)?.name}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center">
                          {task.dueDate && (
                            <span className="text-xs text-gray-500 mr-2">
                              Due: {task.dueDate}
                            </span>
                          )}
                          <Badge className={getStatusColor(task.status)}>
                            {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
                          </Badge>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full mt-2">
                      <Plus className="h-4 w-4 mr-1" />
                      Add New Task
                    </Button>
                  </TabsContent>
                  
                  <TabsContent value="repository" className="mt-4">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center">
                        <GitBranch className="h-4 w-4 mr-1 text-gray-600" />
                        <span className="text-sm font-medium">Latest Commits</span>
                      </div>
                      <Button variant="outline" size="sm">
                        <GitPullRequest className="h-4 w-4 mr-1" />
                        View Repository
                      </Button>
                    </div>
                    
                    {project.commits && project.commits.length > 0 ? (
                      <div className="space-y-2">
                        {project.commits.map((commit) => (
                          <div key={commit.id} className="p-3 border rounded-md">
                            <div className="flex justify-between">
                              <span className="font-medium">{commit.message}</span>
                              <Badge variant="outline">{commit.branch}</Badge>
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              by {commit.author} • {commit.timestamp}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-6 border rounded-md text-center">
                        <GitBranch className="h-8 w-8 text-gray-300 mx-auto mb-2" />
                        <p className="text-gray-500">No repository connected</p>
                        <Button variant="outline" size="sm" className="mt-2">
                          Connect Repository
                        </Button>
                      </div>
                    )}
                  </TabsContent>
                </Tabs>
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ProjectTracker;
