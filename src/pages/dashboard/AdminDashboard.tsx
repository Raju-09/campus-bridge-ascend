
import React, { useEffect, useState } from 'react';
import { Book, Code, Server, Activity, Users, Bell, X } from 'lucide-react';
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
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [showNotification, setShowNotification] = useState(true);

  // Simulated user data
  const user = {
    name: 'Test Admin',
    email: 'admin@example.com',
    avatar: null,
    avatarText: 'TA',
  };

  // Department data
  const departmentData = [
    { name: 'Computer Science', students: 120 },
    { name: 'Electrical Engineering', students: 85 },
    { name: 'Mechanical Engineering', students: 95 },
    { name: 'Civil Engineering', students: 70 },
    { name: 'Information Technology', students: 110 },
  ];

  // Coding languages data
  const languageData = [
    { name: 'Python', value: 35, color: '#3182CE' },
    { name: 'JavaScript', value: 25, color: '#68D391' },
    { name: 'Java', value: 20, color: '#F6E05E' },
    { name: 'C++', value: 15, color: '#F56565' },
    { name: 'Others', value: 5, color: '#9F7AEA' },
  ];

  // Event logs
  const eventLogs = [
    { id: 1, user: 'Dr. Smith', action: 'Created a new course: Advanced AI', timestamp: '2025-04-12 09:24:18', status: 'success' },
    { id: 2, user: 'System', action: 'Scheduled database backup', timestamp: '2025-04-12 09:00:00', status: 'info' },
    { id: 3, user: 'Alex Johnson', action: 'Attempted login from unrecognized device', timestamp: '2025-04-12 08:45:32', status: 'warning' },
    { id: 4, user: 'System', action: 'Server resource usage exceeded 80%', timestamp: '2025-04-12 08:30:15', status: 'error' },
    { id: 5, user: 'Admin', action: 'Updated system settings', timestamp: '2025-04-12 08:15:27', status: 'success' },
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
        userRole="admin"
        userName={user.name}
        userEmail={user.email}
        avatarUrl={user.avatar}
        avatarText={user.avatarText}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top navigation */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          
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
            <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-lg mb-6 flex items-center justify-between animate-fade-in">
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>Scheduled maintenance on Sunday from 2 AM to 6 AM.</span>
              </div>
              <button onClick={() => setShowNotification(false)} className="text-yellow-600 hover:text-yellow-800">
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
              trend={{ value: 4, isPositive: true }}
              description="vs. last period"
              className="animate-fade-in"
              style={{ animationDelay: '100ms' }}
            />
            
            <StatCard
              title="Total Users"
              value="532"
              icon={<Users size={18} className="text-campus-blue" />}
              description="Students, Teachers & Admins"
              trend={{ value: 12, isPositive: true }}
              className="animate-fade-in"
              style={{ animationDelay: '200ms' }}
            />
            
            <StatCard
              title="Coding Modules"
              value="4"
              icon={<Code size={18} className="text-campus-blue" />}
              trend={{ value: 2, isPositive: true }}
              description="vs. last period"
              className="animate-fade-in"
              style={{ animationDelay: '300ms' }}
            />
            
            <StatCard
              title="System Health"
              value="98.2%"
              icon={<Server size={18} className="text-campus-blue" />}
              description="Uptime in last 30 days"
              trend={{ value: 0.5, isPositive: true }}
              className="animate-fade-in"
              style={{ animationDelay: '400ms' }}
            />
          </div>
          
          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Students by Department Chart */}
            <div className="bg-white rounded-xl shadow-sm p-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <h2 className="text-xl font-semibold mb-1">Students by Department</h2>
              <p className="text-gray-500 text-sm mb-6">Distribution of students across departments</p>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={departmentData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    barSize={40}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={false} />
                    <YAxis />
                    <Tooltip
                      formatter={(value, name, props) => ([`${value} students`, props.payload.name])}
                    />
                    <Bar dataKey="students" fill="#3182CE" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Coding Languages Chart */}
            <div className="bg-white rounded-xl shadow-sm p-6 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <h2 className="text-xl font-semibold mb-1">Popular Coding Languages</h2>
              <p className="text-gray-500 text-sm mb-6">Most used languages in coding modules</p>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={languageData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {languageData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm p-6 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold mb-1">System Activity</h2>
                <p className="text-gray-500 text-sm">Recent events and logs</p>
              </div>
              
              <Button variant="outline" onClick={() => console.log('View all logs')}>
                View all
              </Button>
            </div>
            
            <div className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {eventLogs.map((log) => (
                      <tr key={log.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{log.user}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{log.action}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{log.timestamp}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                            ${log.status === 'success' ? 'bg-green-100 text-green-800' : 
                            log.status === 'info' ? 'bg-blue-100 text-blue-800' :
                            log.status === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'}`}>
                            {log.status.charAt(0).toUpperCase() + log.status.slice(1)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
