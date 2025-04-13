
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Calendar, Clock, Users, BookOpen, CheckCircle2, 
  ArrowLeft, FileText, Download, PlayCircle, Award, 
  Briefcase, BarChart4, ListChecks, BookMarked
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { coursesData } from '@/data/coursesData';
import AIAssistant from './AIAssistant';

const CourseDetails = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const [activeModule, setActiveModule] = useState(0);
  
  // Find the course by ID
  const course = coursesData.find(c => c.id === courseId);
  
  if (!course) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <h2 className="text-2xl font-bold mb-4">Course Not Found</h2>
        <p className="text-gray-500 mb-6">The course you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => navigate('/student/courses')}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Courses
        </Button>
      </div>
    );
  }
  
  // Calculate course progress
  const totalLessons = course.modules.reduce((sum, module) => sum + module.lessons.length, 0);
  const completedLessons = course.modules.reduce((sum, module) => 
    sum + module.lessons.filter(lesson => lesson.completed).length, 0);
  const progress = Math.round((completedLessons / totalLessons) * 100) || 0;
  
  // Calculate estimated course duration in hours
  const totalDuration = course.modules.reduce((sum, module) => 
    sum + module.lessons.reduce((lessonSum, lesson) => 
      lessonSum + parseInt(lesson.duration.split(' ')[0]), 0), 0);
  
  // Format duration as hours and minutes
  const hours = Math.floor(totalDuration / 60);
  const minutes = totalDuration % 60;
  const formattedDuration = `${hours}h ${minutes > 0 ? `${minutes}m` : ''}`;
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 animate-fade-in">
      <div className="mb-6">
        <Button variant="ghost" onClick={() => navigate('/student/courses')} className="mb-4 -ml-2">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Courses
        </Button>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Course Image */}
          <div className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0">
            <div className="relative rounded-lg overflow-hidden h-48 md:h-60">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
              {course.recommended && (
                <div className="absolute top-0 right-0 bg-yellow-500 text-white text-xs px-3 py-1 uppercase font-bold tracking-wide transform translate-x-8 rotate-45 translate-y-4">
                  Popular
                </div>
              )}
              <Badge className="absolute bottom-3 left-3 bg-white text-black">
                {course.category}
              </Badge>
            </div>
            
            <div className="mt-4 space-y-4">
              <div className="flex flex-col space-y-4">
                <Button className="w-full bg-campus-blue">
                  {progress > 0 ? 'Continue Learning' : 'Start Course'}
                </Button>
                
                <Button variant="outline" className="w-full">
                  <Download className="mr-2 h-4 w-4" /> Download Materials
                </Button>
              </div>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Course Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                      <span>Duration</span>
                    </div>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-gray-500" />
                      <span>Total Hours</span>
                    </div>
                    <span className="font-medium">{formattedDuration}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-gray-500" />
                      <span>Enrolled</span>
                    </div>
                    <span className="font-medium">{course.students}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-2 text-gray-500" />
                      <span>Lessons</span>
                    </div>
                    <span className="font-medium">{totalLessons}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <Award className="h-4 w-4 mr-2 text-gray-500" />
                      <span>Level</span>
                    </div>
                    <span className="font-medium">{course.level}</span>
                  </div>
                  
                  {course.certificationExam && (
                    <div className="pt-2">
                      <Badge variant="outline" className="flex items-center w-full justify-center py-1 border-blue-300">
                        <Award className="h-3 w-3 mr-1 text-blue-500" />
                        Includes Certification Prep
                      </Badge>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Course Content */}
          <div className="flex-grow">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
              <div>
                <Badge className={
                  course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                  course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }>
                  {course.level}
                </Badge>
                <h1 className="text-2xl font-bold mt-2">{course.title}</h1>
                <div className="flex items-center mt-1 text-sm text-gray-500">
                  <span className="font-medium text-campus-blue">{course.instructor}</span>
                  <span className="mx-2">•</span>
                  <span>Last updated April 2025</span>
                </div>
              </div>
              
              {progress > 0 && (
                <div className="mt-4 md:mt-0 bg-blue-50 p-3 rounded-lg border border-blue-100 flex items-center">
                  <BarChart4 className="h-5 w-5 text-blue-500 mr-2" />
                  <div>
                    <p className="text-blue-800 font-medium">Your progress</p>
                    <div className="flex items-center">
                      <Progress value={progress} className="h-2 w-24 mr-2" />
                      <span className="text-sm text-blue-700">{progress}%</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <Tabs defaultValue="overview" className="mt-6">
              <TabsList className="mb-4 bg-gray-100">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
                <TabsTrigger value="discussion">Discussion</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>About This Course</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{course.overview || course.description}</p>
                    
                    {course.prerequisites && (
                      <div className="mt-6">
                        <h3 className="font-medium mb-2 flex items-center">
                          <ListChecks className="h-4 w-4 mr-2 text-campus-blue" />
                          Prerequisites
                        </h3>
                        <ul className="list-disc pl-5 space-y-1">
                          {course.prerequisites.map((prerequisite, index) => (
                            <li key={index} className="text-sm">{prerequisite}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {course.features && (
                      <div className="mt-6">
                        <h3 className="font-medium mb-2 flex items-center">
                          <BookMarked className="h-4 w-4 mr-2 text-campus-blue" />
                          Course Features
                        </h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mt-3">
                          {course.features.map((feature, index) => (
                            <li key={index} className="flex items-baseline">
                              <span className="h-1.5 w-1.5 rounded-full bg-campus-blue mr-2"></span>
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {course.skills && (
                      <div className="mt-6">
                        <h3 className="font-medium mb-2 flex items-center">
                          <Briefcase className="h-4 w-4 mr-2 text-campus-blue" />
                          Skills You'll Gain
                        </h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {course.skills.map((skill, index) => (
                            <Badge key={index} variant="secondary">{skill}</Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Ask AI Assistant About This Course</CardTitle>
                    <CardDescription>Get instant help with course concepts, examples, and exercises</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AIAssistant className="border-0 shadow-none" courseContext={course.id} />
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="curriculum">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle>Course Curriculum</CardTitle>
                      <div className="text-sm text-gray-500">
                        {completedLessons} / {totalLessons} lessons completed
                      </div>
                    </div>
                    <Progress value={progress} className="h-2 mt-2" />
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {course.modules.map((module, moduleIndex) => (
                        <div key={moduleIndex} className="border rounded-lg overflow-hidden">
                          <button
                            className={`w-full flex justify-between items-center p-4 text-left font-medium ${
                              activeModule === moduleIndex ? 'bg-blue-50 text-campus-blue' : 'bg-gray-50'
                            }`}
                            onClick={() => setActiveModule(
                              activeModule === moduleIndex ? -1 : moduleIndex
                            )}
                          >
                            <div className="flex items-center">
                              <span className="text-lg mr-3">{moduleIndex + 1}.</span>
                              <span>{module.title}</span>
                            </div>
                            <div className="text-sm">
                              {module.lessons.length} {module.lessons.length === 1 ? 'lesson' : 'lessons'}
                            </div>
                          </button>
                          
                          {activeModule === moduleIndex && (
                            <div className="divide-y">
                              {module.lessons.map((lesson, lessonIndex) => (
                                <div key={lessonIndex} className="flex items-center justify-between p-4 hover:bg-gray-50">
                                  <div className="flex items-center">
                                    <div className={`h-6 w-6 rounded-full flex items-center justify-center mr-3 
                                      ${lesson.completed ? 'bg-green-100 text-green-700' : 'bg-gray-100'}`}>
                                      {lesson.completed ? (
                                        <CheckCircle2 size={14} />
                                      ) : (
                                        <span className="text-xs">{lessonIndex + 1}</span>
                                      )}
                                    </div>
                                    <span className="text-sm">{lesson.title}</span>
                                  </div>
                                  <div className="flex items-center">
                                    <span className="text-xs text-gray-500 mr-3">{lesson.duration}</span>
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                      {lesson.completed ? <FileText size={16} /> : <PlayCircle size={16} />}
                                    </Button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="resources">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Course Resources</CardTitle>
                    <CardDescription>Download supplementary materials, code examples, and project files</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4 flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded bg-blue-100 flex items-center justify-center text-campus-blue">
                            <FileText size={20} />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium text-sm">Course Slides</h4>
                            <p className="text-xs text-gray-500">PDF, 24 pages, 2.4 MB</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download size={14} className="mr-1" />
                          Download
                        </Button>
                      </div>
                      
                      <div className="border rounded-lg p-4 flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded bg-green-100 flex items-center justify-center text-green-700">
                            <FileText size={20} />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium text-sm">Code Examples</h4>
                            <p className="text-xs text-gray-500">ZIP, 15 files, 1.8 MB</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download size={14} className="mr-1" />
                          Download
                        </Button>
                      </div>
                      
                      <div className="border rounded-lg p-4 flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded bg-purple-100 flex items-center justify-center text-purple-700">
                            <FileText size={20} />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium text-sm">Project Starter Files</h4>
                            <p className="text-xs text-gray-500">ZIP, 8 files, 3.2 MB</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download size={14} className="mr-1" />
                          Download
                        </Button>
                      </div>
                      
                      <div className="border rounded-lg p-4 flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded bg-amber-100 flex items-center justify-center text-amber-700">
                            <FileText size={20} />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium text-sm">Additional Reading</h4>
                            <p className="text-xs text-gray-500">PDF, 36 pages, 4.7 MB</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download size={14} className="mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="discussion">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Course Discussion</CardTitle>
                    <CardDescription>Engage with instructors and fellow students</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center justify-center py-10 text-center">
                      <BookOpen className="h-12 w-12 text-gray-300 mb-4" />
                      <h3 className="text-lg font-medium mb-2">Join the discussion</h3>
                      <p className="text-gray-500 max-w-md mb-6">
                        Connect with fellow students, ask questions, and discuss course topics.
                      </p>
                      <div className="space-x-4">
                        <Button>Start a Discussion</Button>
                        <Button variant="outline">View All Threads</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
