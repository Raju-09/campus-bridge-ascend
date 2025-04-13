
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, FileText, BookOpen, Award, Briefcase, AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react';
import CircularProgress from '@/components/CircularProgress';
import { cn } from '@/lib/utils';

interface ReadinessSection {
  id: string;
  title: string;
  percentage: number;
  status: 'completed' | 'in-progress' | 'attention' | 'not-started';
  items: Array<{
    id: string;
    title: string;
    status: 'completed' | 'in-progress' | 'attention' | 'not-started';
    detail?: string;
  }>;
}

interface GraduationReadinessProps {
  className?: string;
}

const GraduationReadiness: React.FC<GraduationReadinessProps> = ({ className }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['courses']);
  
  const toggleSection = (id: string) => {
    setExpandedSections(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const readinessSections: ReadinessSection[] = [
    {
      id: 'courses',
      title: 'Core Courses',
      percentage: 85,
      status: 'in-progress',
      items: [
        { id: 'c1', title: 'Programming Fundamentals', status: 'completed' },
        { id: 'c2', title: 'Data Structures & Algorithms', status: 'completed' },
        { id: 'c3', title: 'Database Systems', status: 'completed' },
        { id: 'c4', title: 'Computer Networks', status: 'in-progress', detail: '2 modules remaining' },
        { id: 'c5', title: 'Operating Systems', status: 'in-progress', detail: '3 modules remaining' }
      ]
    },
    {
      id: 'projects',
      title: 'Capstone Project',
      percentage: 60,
      status: 'in-progress',
      items: [
        { id: 'p1', title: 'Project Proposal', status: 'completed' },
        { id: 'p2', title: 'Design Document', status: 'completed' },
        { id: 'p3', title: 'Implementation (Phase 1)', status: 'completed' },
        { id: 'p4', title: 'Implementation (Phase 2)', status: 'in-progress', detail: 'Due in 2 weeks' },
        { id: 'p5', title: 'Testing & Documentation', status: 'not-started' },
        { id: 'p6', title: 'Final Presentation', status: 'not-started', detail: 'Scheduled for May 15' }
      ]
    },
    {
      id: 'resume',
      title: 'Resume & Portfolio',
      percentage: 70,
      status: 'in-progress',
      items: [
        { id: 'r1', title: 'Resume', status: 'in-progress', detail: 'Needs work experience details' },
        { id: 'r2', title: 'LinkedIn Profile', status: 'completed' },
        { id: 'r3', title: 'GitHub Portfolio', status: 'in-progress', detail: 'Add README files to projects' },
        { id: 'r4', title: 'Personal Website', status: 'not-started' }
      ]
    },
    {
      id: 'internship',
      title: 'Internship Requirements',
      percentage: 50,
      status: 'attention',
      items: [
        { id: 'i1', title: 'Minimum Credits', status: 'completed' },
        { id: 'i2', title: 'Faculty Approval', status: 'not-started' },
        { id: 'i3', title: 'Internship Applications', status: 'attention', detail: 'Apply to at least 5 companies' },
        { id: 'i4', title: 'Mock Interviews', status: 'in-progress', detail: '1/3 completed' }
      ]
    },
    {
      id: 'certification',
      title: 'Certifications',
      percentage: 40,
      status: 'attention',
      items: [
        { id: 'cert1', title: 'AWS Cloud Practitioner', status: 'in-progress', detail: '60% course completed' },
        { id: 'cert2', title: 'SQL Fundamentals', status: 'completed' },
        { id: 'cert3', title: 'Web Development', status: 'not-started' },
        { id: 'cert4', title: 'Cybersecurity Basics', status: 'not-started' }
      ]
    }
  ];

  const totalReadiness = Math.round(
    readinessSections.reduce((sum, section) => sum + section.percentage, 0) / readinessSections.length
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'attention': return 'bg-yellow-100 text-yellow-800';
      case 'not-started': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'in-progress': return <Clock className="h-4 w-4 text-blue-600" />;
      case 'attention': return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      case 'not-started': return <Clock className="h-4 w-4 text-gray-400" />;
      default: return null;
    }
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 80) return 'stroke-green-500';
    if (percentage >= 60) return 'stroke-blue-500';
    if (percentage >= 40) return 'stroke-yellow-500';
    return 'stroke-red-500';
  };

  return (
    <Card className={cn("animate-fade-in", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">Graduation Readiness Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3 flex flex-col items-center">
            <CircularProgress
              percentage={totalReadiness}
              size={180}
              strokeWidth={12}
              color={getProgressColor(totalReadiness)}
              innerContent={
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-bold">{totalReadiness}%</span>
                  <span className="text-xs text-gray-500">Overall Readiness</span>
                </div>
              }
            />
            <div className="mt-6 space-y-4 w-full">
              {readinessSections.map(section => (
                <div key={section.id} className="w-full">
                  <div className="flex justify-between text-sm mb-1">
                    <span>{section.title}</span>
                    <span>{section.percentage}%</span>
                  </div>
                  <Progress value={section.percentage} className="h-1.5" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="mb-4 flex justify-between items-center">
              <h3 className="font-medium text-gray-600">Detailed Progress</h3>
              <div className="flex gap-2">
                <Badge variant="outline" className="flex items-center bg-green-50 text-green-800">
                  <CheckCircle size={12} className="mr-1" /> Completed
                </Badge>
                <Badge variant="outline" className="flex items-center bg-blue-50 text-blue-800">
                  <Clock size={12} className="mr-1" /> In Progress
                </Badge>
                <Badge variant="outline" className="flex items-center bg-yellow-50 text-yellow-800">
                  <AlertTriangle size={12} className="mr-1" /> Needs Attention
                </Badge>
              </div>
            </div>
            
            <div className="space-y-4">
              {readinessSections.map(section => (
                <div key={section.id} className="border rounded-md overflow-hidden">
                  <div 
                    className={`p-4 flex justify-between items-center cursor-pointer ${section.status === 'completed' ? 'bg-green-50' : 'bg-white'}`}
                    onClick={() => toggleSection(section.id)}
                  >
                    <div className="flex items-center">
                      {section.status === 'completed' ? (
                        <Award className="h-5 w-5 mr-2 text-green-600" />
                      ) : section.id === 'courses' ? (
                        <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                      ) : section.id === 'resume' ? (
                        <FileText className="h-5 w-5 mr-2 text-purple-600" />
                      ) : section.id === 'internship' ? (
                        <Briefcase className="h-5 w-5 mr-2 text-yellow-600" />
                      ) : (
                        <Award className="h-5 w-5 mr-2 text-indigo-600" />
                      )}
                      <div>
                        <h3 className="font-medium">{section.title}</h3>
                        <div className="flex items-center">
                          <Progress value={section.percentage} className="w-24 h-1.5 mr-2" />
                          <span className="text-xs text-gray-500">{section.percentage}% complete</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Badge className={getStatusColor(section.status)}>
                        {section.status.charAt(0).toUpperCase() + section.status.slice(1).replace('-', ' ')}
                      </Badge>
                      {expandedSections.includes(section.id) ? (
                        <ChevronUp className="ml-2 h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="ml-2 h-5 w-5 text-gray-500" />
                      )}
                    </div>
                  </div>
                  
                  {expandedSections.includes(section.id) && (
                    <div className="p-4 bg-gray-50 border-t">
                      <ul className="space-y-3">
                        {section.items.map(item => (
                          <li key={item.id} className="flex justify-between items-center">
                            <div className="flex items-center">
                              {getStatusIcon(item.status)}
                              <span className="ml-2">{item.title}</span>
                              {item.detail && (
                                <span className="ml-2 text-xs text-gray-500">({item.detail})</span>
                              )}
                            </div>
                            <Badge className={getStatusColor(item.status)}>
                              {item.status.charAt(0).toUpperCase() + item.status.slice(1).replace('-', ' ')}
                            </Badge>
                          </li>
                        ))}
                      </ul>
                      
                      <Button variant="outline" className="mt-4 w-full">
                        View {section.title} Details
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-blue-50 p-4 rounded-lg border border-blue-100">
          <h3 className="font-medium text-blue-800 flex items-center">
            <Award className="mr-2 h-5 w-5" />
            Graduation Target: May 2025
          </h3>
          <p className="text-sm text-blue-700 mt-1">Complete all requirements to ensure on-time graduation and career readiness.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default GraduationReadiness;
