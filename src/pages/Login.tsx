
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, GraduationCap, Building, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

interface LocationState {
  role?: 'student' | 'faculty' | 'admin';
}

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { role: preselectedRole } = (location.state as LocationState) || {};
  
  const [role, setRole] = useState<'student' | 'faculty' | 'admin'>(preselectedRole || 'student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [studyYear, setStudyYear] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login API call
    setTimeout(() => {
      setIsLoading(false);
      
      // Validation
      if (!email || !password) {
        toast({
          title: "Error",
          description: "Please fill in all fields",
          variant: "destructive"
        });
        return;
      }
      
      // Auto-login with any credentials for demo purposes
      toast({
        title: "Success",
        description: "Logged in successfully",
      });
      
      // Redirect based on role
      if (role === 'student') {
        navigate('/student/dashboard');
      } else if (role === 'faculty') {
        navigate('/faculty/dashboard');
      } else {
        navigate('/admin/dashboard');
      }
    }, 1500);
  };

  // Role-specific icon
  const getRoleIcon = () => {
    switch (role) {
      case 'student':
        return <GraduationCap size={32} className="text-campus-blue" />;
      case 'faculty':
        return <Building size={32} className="text-campus-blue" />;
      case 'admin':
        return <Shield size={32} className="text-campus-blue" />;
    }
  };

  // Role-specific demo credentials
  const getDemoCredentials = () => {
    switch (role) {
      case 'student':
        return { email: 'student@example.com', password: 'password' };
      case 'faculty':
        return { email: 'faculty@example.com', password: 'password' };
      case 'admin':
        return { email: 'admin@example.com', password: 'password' };
    }
  };

  // Auto-fill demo credentials for easy testing
  const fillDemoCredentials = () => {
    const { email: demoEmail, password: demoPassword } = getDemoCredentials();
    setEmail(demoEmail);
    setPassword(demoPassword);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div 
        className={`bg-white rounded-xl shadow-xl overflow-hidden w-full max-w-md transition-all duration-700 ${
          loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        {/* Header */}
        <div className="bg-campus-blue text-white p-6">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate('/')}
              className="text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <h2 className="text-xl font-bold flex items-center">
              {getRoleIcon()}
              <span className="ml-2">{role.charAt(0).toUpperCase() + role.slice(1)} Login</span>
            </h2>
            <div className="w-5"></div> {/* Spacer for centering */}
          </div>
        </div>
        
        {/* Form */}
        <form onSubmit={handleLogin} className="p-6 space-y-6">
          {/* Role Selector */}
          <div className="space-y-2">
            <Label htmlFor="role">Login as</Label>
            <Select value={role} onValueChange={(val: 'student' | 'faculty' | 'admin') => setRole(val)}>
              <SelectTrigger id="role" className="w-full">
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="student">Student</SelectItem>
                <SelectItem value="faculty">Faculty</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Study Year (Students only) */}
          {role === 'student' && (
            <div className="space-y-2">
              <Label htmlFor="studyYear">Year of Study</Label>
              <Select value={studyYear} onValueChange={setStudyYear}>
                <SelectTrigger id="studyYear" className="w-full">
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">First Year</SelectItem>
                  <SelectItem value="2">Second Year</SelectItem>
                  <SelectItem value="3">Third Year</SelectItem>
                  <SelectItem value="4">Fourth Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
          
          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={`Enter your email`}
              required
            />
          </div>
          
          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          
          {/* Login Button */}
          <Button
            type="submit"
            className="w-full bg-campus-blue hover:bg-campus-darkblue"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Logging in...
              </div>
            ) : (
              'Log In'
            )}
          </Button>
          
          {/* Demo login helper */}
          <div className="text-center">
            <button
              type="button"
              onClick={fillDemoCredentials}
              className="text-sm text-campus-blue hover:underline"
            >
              Use demo credentials
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
