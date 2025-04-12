
import React from 'react';
import { cn } from '@/lib/utils';
import { Book, Clock, Users } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  instructor?: string;
  duration?: string;
  students?: number;
  progress?: number;
  image?: string;
  className?: string;
  onClick?: () => void;
}

const CourseCard = ({
  title,
  description,
  instructor,
  duration,
  students,
  progress,
  image,
  className,
  onClick,
}: CourseCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 card-hover cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      <div className="h-36 overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-campus-blue to-campus-lightblue flex items-center justify-center">
            <Book size={48} className="text-white" />
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 line-clamp-1">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">{description}</p>
        
        <div className="flex items-center justify-between text-xs text-gray-500">
          {instructor && (
            <div className="flex items-center">
              <span className="font-medium">{instructor}</span>
            </div>
          )}
          
          {duration && (
            <div className="flex items-center">
              <Clock size={14} className="mr-1" />
              <span>{duration}</span>
            </div>
          )}
          
          {students !== undefined && (
            <div className="flex items-center">
              <Users size={14} className="mr-1" />
              <span>{students}</span>
            </div>
          )}
        </div>
        
        {progress !== undefined && (
          <div className="mt-3">
            <div className="flex justify-between text-xs mb-1">
              <span className="font-medium">Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div 
                className="bg-campus-blue h-1.5 rounded-full transition-all duration-500" 
                style={{ width: `${progress}%` }} 
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
