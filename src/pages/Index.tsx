
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Building, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center overflow-hidden">
      {/* Animated particles */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm animate-spin-slow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 80 + 20}px`,
              height: `${Math.random() * 80 + 20}px`,
              opacity: Math.random() * 0.5,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      <div className="z-10 text-center px-4 max-w-4xl">
        {/* Main title with smoke effect */}
        <h1 
          className={`text-5xl md:text-7xl font-bold mb-4 smoke-text transition-all duration-1000 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Campus Bridge
        </h1>
        
        <p 
          className={`text-xl md:text-2xl text-blue-900/80 mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            loaded ? 'opacity-100' : 'opacity-0 transform translate-y-4'
          }`}
        >
          Integrated Academic LMS + Coding Skill Development Platform
        </p>
        
        {/* Role selection cards */}
        <div 
          className={`flex flex-col md:flex-row gap-6 justify-center transition-all duration-1000 delay-500 ${
            loaded ? 'opacity-100' : 'opacity-0 transform translate-y-8'
          }`}
        >
          <RoleCard
            title="Student"
            icon={<GraduationCap size={48} className="text-campus-blue" />}
            description="Access courses, practice coding, and track your progress"
            features={[
              "Enroll in academic courses",
              "Practice coding challenges",
              "Track academic performance"
            ]}
            onClick={() => navigate('/login', { state: { role: 'student' } })}
            delay={0}
          />
          
          <RoleCard
            title="Teacher"
            icon={<Building size={48} className="text-campus-blue" />}
            description="Create courses, assignments, and monitor student progress"
            features={[
              "Create and manage courses",
              "Design coding assignments",
              "Monitor student performance"
            ]}
            onClick={() => navigate('/login', { state: { role: 'faculty' } })}
            delay={200}
          />
          
          <RoleCard
            title="Admin"
            icon={<Shield size={48} className="text-campus-blue" />}
            description="Manage platform, users, and analyze overall performance"
            features={[
              "Manage platform settings",
              "Oversee user accounts",
              "Access performance analytics"
            ]}
            onClick={() => navigate('/login', { state: { role: 'admin' } })}
            delay={400}
          />
        </div>
      </div>
      
      <footer 
        className={`absolute bottom-4 text-sm text-blue-900/50 transition-all duration-1000 delay-1000 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        © 2025 Campus Bridge. All rights reserved.
      </footer>
    </div>
  );
};

const RoleCard = ({ 
  title, 
  icon, 
  description, 
  features, 
  onClick,
  delay 
}: { 
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  onClick: () => void;
  delay: number;
}) => {
  const [hover, setHover] = useState(false);

  return (
    <div 
      className={`bg-white/80 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in w-full md:w-72 card-hover`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={`mb-4 transition-transform duration-300 ${hover ? 'scale-110' : ''}`}>
        {icon}
      </div>
      
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-sm text-gray-600 text-center mb-6">{description}</p>
      
      <ul className="mb-6 space-y-2 w-full">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-campus-blue" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        onClick={onClick} 
        className="w-full bg-campus-blue hover:bg-campus-darkblue transition-colors"
      >
        Enter as {title}
      </Button>
    </div>
  );
};

export default Index;
