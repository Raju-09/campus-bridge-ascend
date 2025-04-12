
import React, { useEffect, useState } from 'react';
import { Book, ClipboardList, Users, LineChart, Bell, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Sidebar from '@/components/Sidebar';
import StatCard from '@/components/StatCard';
import { useNavigate } from 'react-router-dom';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

const FacultyDashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [showNotification, setShowNotification] = useState(true);

  // Simulated user data
  const user = {
    name: 'Test Teacher',
    email: 'faculty@example.com',
    avatar: null,
    avatarText: 'TT',
  };

  // Course performance data
  const coursePerformanceData = [
    {
      name: 'CS101',
      attendance: 90,
      assignments: 85,
      participation: 82,
    },
    {
      name: 'CS201',
      attendance: 85,
      assignments: 92,
      participation: 78,
    },
    {
      name: 'CS301',
      attendance: 93,
      assignments: 83,
      participation: 88,
    },
  ];

  // Grade distribution data
  const gradeDistributionData = [
    { name: 'A', students: 15 },
    { name: 'B', students: 22 },
    { name: 'C', students: 8 },
    { name: 'D', students: 3 },
    { name: 'F', students: 1 },
  ];

  // Students list
  const students = [
    { id: 'stu1001', name: 'Alex Johnson', email: 'alex.j@university.edu', department: 'Computer Science', year: 'Year 2', gpa: 3.7, attendance: 92 },
    { id: 'stu1002', name: 'Samantha Lee', email: 'sam.lee@university.edu', department: 'Computer Science', year: 'Year 3', gpa: 3.9, attendance: 96 },
    { id: 'stu1003', name: 'Michael Brown', email: 'michael.b@university.edu', department: 'Computer Science', year: 'Year 2', gpa: 3.4, attendance: 85 },
    { id: 'stu1004', name: 'Emma Wilson', email: 'emma.w@university.edu', department: 'Computer Science', year: 'Year 3', gpa: 3.8, attendance: 94 },
    { id: 'stu1005', name: 'Daniel Garcia', email: 'daniel.g@university.edu', department: 'Computer Science', year: 'Year 4', gpa: 3.6, attendance: 88 },
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
        userRole="faculty"
        userName={user.name}
        userEmail={user.email}
        avatarUrl={user.avatar}
        avatarText={user.avatarText}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top navigation */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Teacher Dashboard</h1>
          
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
                <div className="flex-shrink-0 mr-2">
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V7z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Department meeting scheduled for Friday, 3 PM in Conference Room B</span>
              </div>
              <button onClick={() => setShowNotification(false)} className="text-blue-500 hover:text-blue-700">
                <X size={18} />
              </button>
            </div>
          )}
          
          {/* Stats row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Total Courses"
              value="4"
              icon={<Book size={18} className="text-campus-blue" />}
              className="animate-fade-in"
              style={{ animationDelay: '100ms' }}
            />
            
            <StatCard
              title="Total Students"
              value="48"
              icon={<Users size={18} className="text-campus-blue" />}
              trend={{ value: 12, isPositive: true }}
              description="vs. last period"
              className="animate-fade-in"
              style={{ animationDelay: '200ms' }}
            />
            
            <StatCard
              title="Pending Assignments"
              value="1"
              icon={<ClipboardList size={18} className="text-campus-blue" />}
              description="Waiting for review"
              className="animate-fade-in"
              style={{ animationDelay: '300ms' }}
            />
            
            <StatCard
              title="Avg. Performance"
              value="84%"
              icon={<LineChart size={18} className="text-campus-blue" />}
              trend={{ value: 3, isPositive: true }}
              description="vs. last period"
              className="animate-fade-in"
              style={{ animationDelay: '400ms' }}
            />
          </div>
          
          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Course Performance Chart */}
            <div className="bg-white rounded-xl shadow-sm p-6 animate-fade-in">
              <h2 className="text-xl font-semibold mb-1">Course Performance</h2>
              <p className="text-gray-500 text-sm mb-6">Average metrics across your courses</p>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={coursePerformanceData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="attendance" name="Attendance %" fill="#3182CE" />
                    <Bar dataKey="assignments" name="Assignment %" fill="#68D391" />
                    <Bar dataKey="participation" name="Participation %" fill="#F6E05E" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Grade Distribution Chart */}
            <div className="bg-white rounded-xl shadow-sm p-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <h2 className="text-xl font-semibold mb-1">Grade Distribution</h2>
              <p className="text-gray-500 text-sm mb-6">Overall student grade distribution</p>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={gradeDistributionData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="students" name="Students" fill="#68D391" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
          {/* Student List */}
          <div className="bg-white rounded-xl shadow-sm p-6 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold mb-1">Students</h2>
                <p className="text-gray-500 text-sm">All students in your courses</p>
              </div>
              
              <div className="flex space-x-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search students..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-campus-blue focus:border-transparent"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                
                <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-campus-blue focus:border-transparent">
                  <option value="">All Courses</option>
                  <option value="cs101">CS101</option>
                  <option value="cs201">CS201</option>
                  <option value="cs301">CS301</option>
                </select>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">GPA</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendance</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {students.map((student, index) => (
                    <tr key={student.id} className={`hover:bg-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <div className={`h-10 w-10 rounded-full flex items-center justify-center text-white text-sm font-medium bg-campus-blue`}>
                              {student.name.split(' ').map(name => name[0]).join('')}
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{student.name}</div>
                            <div className="text-sm text-gray-500">{student.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.department}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.year}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{student.gpa}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${student.attendance >= 90 ? 'bg-green-500' : student.attendance >= 75 ? 'bg-yellow-400' : 'bg-red-500'}`} 
                              style={{ width: `${student.attendance}%` }}
                            ></div>
                          </div>
                          <span className="ml-2 text-xs font-medium text-gray-600">{student.attendance}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-campus-blue hover:text-blue-800" onClick={() => console.log('View student:', student.id)}>
                          Actions
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FacultyDashboard;
