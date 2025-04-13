
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Clock, GraduationCap, BookOpen, Code, Bell, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Sidebar from '@/components/Sidebar';
import CircularProgress from '@/components/CircularProgress';
import StatCard from '@/components/StatCard';
import CourseCard from '@/components/CourseCard';
import AIAssistant from '@/components/AIAssistant';
import CoursesBrowser from '@/components/CoursesBrowser';
import CodingPractice from '@/components/CodingPractice';
import { coursesData } from '@/data/coursesData';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [showNotification, setShowNotification] = useState(true);
  const [activeContent, setActiveContent] = useState('dashboard');

  // Determine active content based on URL path
  useEffect(() => {
    if (location.pathname.includes('/courses')) {
      setActiveContent('courses');
    } else if (location.pathname.includes('/coding')) {
      setActiveContent('coding');
    } else if (location.pathname.includes('/profile')) {
      setActiveContent('profile');
    } else {
      setActiveContent('dashboard');
    }
  }, [location.pathname]);

  // Simulated user data
  const user = {
    name: 'Test Student',
    email: 'student@example.com',
    avatar: null,
    avatarText: 'TS',
  };

  // Simulated performance data
  const performanceData = [
    { name: 'Problem Solving', percentage: 78, color: 'stroke-yellow-400' },
    { name: 'Data Structures', percentage: 82, color: 'stroke-green-500' },
    { name: 'Algorithms', percentage: 75, color: 'stroke-yellow-400' },
    { name: 'Web Development', percentage: 65, color: 'stroke-yellow-400' },
  ];

  // Get recommended courses
  const recommendedCourses = coursesData.filter(course => course.recommended).slice(0, 3);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 rounded-full border-4 border-t-campus-blue border-r-campus-blue border-b-gray-200 border-l-gray-200 animate-spin"></div>
          <p className="mt-4 text-campus-blue">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar 
        userRole="student"
        userName={user.name}
        userEmail={user.email}
        avatarUrl={user.avatar}
        avatarText={user.avatarText}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top navigation */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            {activeContent === 'dashboard' && 'Student Dashboard'}
            {activeContent === 'courses' && 'Courses'}
            {activeContent === 'coding' && 'Coding Practice'}
            {activeContent === 'profile' && 'Profile'}
          </h1>
          
          <div className="flex items-center space-x-4">
            <Button size="icon" variant="ghost">
              <Bell className="h-5 w-5" />
            </Button>
            <div className="h-8 w-8 bg-campus-blue text-white rounded-full flex items-center justify-center">
              {user.avatarText}
            </div>
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto p-6">
          <Tabs value={activeContent} onValueChange={(value) => {
            setActiveContent(value);
            navigate(`/student/${value === 'dashboard' ? 'dashboard' : value}`);
          }} className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="coding">Coding Practice</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>
            
            <TabsContent value="dashboard">
              {/* Notification banner */}
              {showNotification && (
                <div className="bg-blue-50 border border-blue-200 text-blue-800 px-4 py-3 rounded-lg mb-6 flex items-center justify-between animate-fade-in">
                  <div className="flex items-center">
                    <Clock size={18} className="mr-2" />
                    <span>Your mid-term exam is scheduled for Friday, 3 PM. Check your results in the academic portal.</span>
                  </div>
                  <button onClick={() => setShowNotification(false)} className="text-blue-500 hover:text-blue-700">
                    <X size={18} />
                  </button>
                </div>
              )}
              
              {/* Stats row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard
                  title="Attendance Rate"
                  value="92%"
                  icon={<Clock size={18} className="text-campus-blue" />}
                  trend={{ value: 2.5, isPositive: true }}
                  description="vs. last period"
                />
                
                <StatCard
                  title="Overall GPA"
                  value="3.7"
                  icon={<GraduationCap size={18} className="text-campus-blue" />}
                  trend={{ value: 0.2, isPositive: true }}
                  description="vs. last period"
                />
                
                <StatCard
                  title="Coding Problems"
                  value="45"
                  icon={<Code size={18} className="text-campus-blue" />}
                  trend={{ value: 12, isPositive: true }}
                  description="Total problems solved"
                />
                
                <StatCard
                  title="Course Progress"
                  value="68%"
                  icon={<BookOpen size={18} className="text-campus-blue" />}
                  trend={{ value: 5, isPositive: true }}
                  description="Average across all courses"
                />
              </div>
              
              {/* Academic Performance */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-8 animate-fade-in">
                <h2 className="text-xl font-semibold mb-1">Academic Performance</h2>
                <p className="text-gray-500 text-sm mb-6">Your current performance metrics across different areas</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {performanceData.map((item, index) => (
                    <CircularProgress
                      key={index}
                      percentage={item.percentage}
                      color={item.color}
                      label={item.name}
                      size={120}
                      className="mx-auto"
                    />
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left column - Recommended Courses */}
                <div className="lg:col-span-2">
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Recommended For You</h2>
                    <Button variant="outline" onClick={() => {
                      setActiveContent('courses');
                      navigate('/student/courses');
                    }}>
                      View all courses
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {recommendedCourses.map((course) => (
                      <CourseCard
                        key={course.id}
                        id={course.id}
                        title={course.title}
                        description={course.description}
                        instructor={course.instructor}
                        duration={course.duration}
                        students={course.students}
                        progress={course.progress}
                        image={course.image}
                        category={course.category}
                        level={course.level}
                        onClick={() => navigate(`/student/courses/${course.id}`)}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Right column - AI Assistant */}
                <div className="lg:col-span-1 h-[600px]">
                  <AIAssistant />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="courses">
              <CoursesBrowser />
            </TabsContent>
            
            <TabsContent value="coding">
              <CodingPractice />
            </TabsContent>
            
            <TabsContent value="profile">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-6">Profile Settings</h2>
                <p className="text-gray-500">Profile settings and personalization options will be implemented here.</p>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;
