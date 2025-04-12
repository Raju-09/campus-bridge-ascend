
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, GraduationCap, BookOpen, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Sidebar from '@/components/Sidebar';
import CircularProgress from '@/components/CircularProgress';
import StatCard from '@/components/StatCard';
import CourseCard from '@/components/CourseCard';
import { X } from 'lucide-react';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [showNotification, setShowNotification] = useState(true);

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

  // Simulated courses
  const courses = [
    {
      id: 1,
      title: 'Introduction to Computer Science',
      description: 'Fundamentals of computer science including algorithms, data structures, and problem-solving.',
      instructor: 'Dr. Smith',
      duration: '10 weeks',
      students: 48,
      progress: 68,
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 2,
      title: 'Data Structures and Algorithms',
      description: 'Advanced study of data structures, algorithm design and analysis.',
      instructor: 'Prof. Johnson',
      duration: '8 weeks',
      students: 36,
      progress: 45,
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 3,
      title: 'Web Development Fundamentals',
      description: 'Learn HTML, CSS, JavaScript and modern web development practices.',
      instructor: 'Sarah Williams',
      duration: '12 weeks',
      students: 64,
      progress: 92,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=80',
    },
  ];

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
          <h1 className="text-2xl font-bold">Student Dashboard</h1>
          
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
          
          {/* Courses */}
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Your Courses</h2>
            <Button variant="outline" onClick={() => navigate('/student/courses')}>
              View all
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                description={course.description}
                instructor={course.instructor}
                duration={course.duration}
                students={course.students}
                progress={course.progress}
                image={course.image}
                onClick={() => navigate(`/student/courses/${course.id}`)}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

const Bell = (props: any) => {
  return (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
    </svg>
  );
};

export default StudentDashboard;
