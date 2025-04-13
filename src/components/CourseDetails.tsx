
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Users, Clock, Calendar, CheckCircle, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { coursesData } from '@/data/coursesData';
import AIAssistant from '@/components/AIAssistant';

const CourseDetails = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [course, setCourse] = useState(coursesData.find(c => c.id === courseId));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    setLoading(true);
    setTimeout(() => {
      setCourse(coursesData.find(c => c.id === courseId));
      setLoading(false);
    }, 500);
  }, [courseId]);

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="h-10 w-10 rounded-full border-4 border-t-campus-blue border-r-campus-blue border-b-gray-200 border-l-gray-200 animate-spin"></div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-red-50 text-red-700 p-4 rounded-lg">
          <h2 className="text-lg font-semibold">Course Not Found</h2>
          <p className="mt-2">The course you're looking for doesn't exist or has been removed.</p>
          <Button asChild className="mt-4">
            <Link to="/student/courses">Back to Courses</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Calculate course stats
  const totalLessons = course.modules.reduce((acc, module) => acc + module.lessons.length, 0);
  const completedLessons = course.modules.reduce((acc, module) => 
    acc + module.lessons.filter(lesson => lesson.completed).length, 0);
  const completionPercentage = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <Button variant="ghost" asChild className="mb-4">
        <Link to="/student/courses" className="flex items-center">
          <ArrowLeft size={16} className="mr-2" />
          Back to Courses
        </Link>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Column */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {/* Course Header with Image */}
            <div className="relative h-56 bg-gradient-to-r from-blue-500 to-indigo-700">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <Badge className="self-start mb-2">{course.category}</Badge>
                <h1 className="text-2xl lg:text-3xl font-bold text-white">{course.title}</h1>
                <div className="flex flex-wrap items-center gap-4 mt-3 text-white">
                  <span className="flex items-center text-sm">
                    <Users size={16} className="mr-1" />
                    {course.students} students
                  </span>
                  <span className="flex items-center text-sm">
                    <Clock size={16} className="mr-1" />
                    {course.duration}
                  </span>
                  <span className="flex items-center text-sm">
                    <Layers size={16} className="mr-1" />
                    {course.level}
                  </span>
                </div>
              </div>
            </div>

            {/* Course Tabs */}
            <Tabs defaultValue="overview" className="p-6">
              <TabsList className="mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-3">About This Course</h2>
                  <p className="text-gray-600">{course.overview || course.description}</p>
                </div>

                {course.instructor && (
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Instructor</h2>
                    <div className="flex items-center">
                      <div className="bg-gray-200 rounded-full h-12 w-12 flex items-center justify-center mr-3">
                        {course.instructor.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-medium">{course.instructor}</h3>
                        <p className="text-sm text-gray-500">Course Instructor</p>
                      </div>
                    </div>
                  </div>
                )}

                {course.skills && course.skills.length > 0 && (
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Skills You'll Gain</h2>
                    <div className="flex flex-wrap gap-2">
                      {course.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-sm">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                )}

                {course.prerequisites && course.prerequisites.length > 0 && (
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Prerequisites</h2>
                    <ul className="list-disc ml-5 text-gray-600 space-y-1">
                      {course.prerequisites.map((prereq, index) => (
                        <li key={index}>{prereq}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {course.features && course.features.length > 0 && (
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Course Features</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600">
                      {course.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle size={16} className="text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="curriculum">
                <h2 className="text-xl font-semibold mb-3">Course Curriculum</h2>
                <p className="text-gray-500 mb-6">
                  {totalLessons} lessons • {course.duration} • {completedLessons}/{totalLessons} completed
                </p>

                <Accordion type="single" collapsible className="space-y-4">
                  {course.modules.map((module, moduleIndex) => (
                    <AccordionItem key={moduleIndex} value={`module-${moduleIndex}`} className="bg-gray-50 rounded-lg border overflow-hidden">
                      <AccordionTrigger className="px-4 py-3 hover:bg-gray-100">
                        <div className="flex justify-between items-center w-full pr-4">
                          <span className="font-medium text-left">
                            {moduleIndex + 1}. {module.title}
                          </span>
                          <span className="text-sm text-gray-500">
                            {module.lessons.length} lessons
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pt-1 pb-3">
                        <ul className="space-y-1">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <li key={lessonIndex} className="flex items-center justify-between p-2 rounded hover:bg-gray-100">
                              <div className="flex items-center">
                                {lesson.completed ? (
                                  <CheckCircle size={16} className="text-green-500 mr-2" />
                                ) : (
                                  <div className="w-4 h-4 rounded-full border-2 border-gray-300 mr-2"></div>
                                )}
                                <span className={lesson.completed ? 'text-gray-500' : ''}>
                                  {moduleIndex + 1}.{lessonIndex + 1} {lesson.title}
                                </span>
                              </div>
                              <Badge variant="outline">{lesson.duration}</Badge>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>

              <TabsContent value="resources">
                <h2 className="text-xl font-semibold mb-6">Learning Resources</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-medium mb-3 flex items-center">
                        <BookOpen size={18} className="mr-2" />
                        Additional Reading
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <div className="h-8 w-8 mr-2 bg-blue-100 text-blue-600 rounded flex items-center justify-center">PDF</div>
                          <span>Course Handbook.pdf</span>
                        </li>
                        <li className="flex items-center">
                          <div className="h-8 w-8 mr-2 bg-indigo-100 text-indigo-600 rounded flex items-center justify-center">URL</div>
                          <span>Reference Documentation</span>
                        </li>
                        <li className="flex items-center">
                          <div className="h-8 w-8 mr-2 bg-green-100 text-green-600 rounded flex items-center justify-center">ZIP</div>
                          <span>Project Templates.zip</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-medium mb-3 flex items-center">
                        <Calendar size={18} className="mr-2" />
                        Upcoming Sessions
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <div className="flex justify-between">
                            <span>Live Q&A Session</span>
                            <span className="text-sm text-gray-500">Apr 15, 2025</span>
                          </div>
                          <p className="text-sm text-gray-500">3:00 PM - 4:00 PM</p>
                        </li>
                        <li>
                          <div className="flex justify-between">
                            <span>Project Review</span>
                            <span className="text-sm text-gray-500">Apr 22, 2025</span>
                          </div>
                          <p className="text-sm text-gray-500">2:00 PM - 3:30 PM</p>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Progress Card */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4">Your Progress</h2>
              
              <div className="mb-2 flex justify-between text-sm">
                <span>{completedLessons} of {totalLessons} lessons completed</span>
                <span>{Math.round(completionPercentage)}%</span>
              </div>
              
              <Progress value={completionPercentage} className="mb-6" />
              
              <Button className="w-full mb-2">Continue Learning</Button>
              <Button variant="outline" className="w-full">Download Certificate</Button>
              
              <div className="mt-6 pt-4 border-t">
                <h3 className="font-medium mb-2">Next Lesson</h3>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium">CSS Layouts and Responsive Design</p>
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      35 min
                    </span>
                    <span>Module 2, Lesson 3</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* AI Assistant */}
          <div className="h-[540px]">
            <AIAssistant />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
