
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, BookOpen } from 'lucide-react';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  students: number;
  progress?: number;
  image?: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  onClick?: () => void;
}

const CourseCard = ({
  id,
  title,
  description,
  instructor,
  duration,
  students,
  progress = 0,
  image,
  category,
  level,
  onClick
}: CourseCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <div className="relative h-48">
        <img 
          src={image || "https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?auto=format&fit=crop&w=500&q=80"} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <Badge className="absolute top-3 right-3 bg-campus-blue">
          {level}
        </Badge>
        <Badge className="absolute top-3 left-3 bg-white text-black font-medium">
          {category}
        </Badge>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="line-clamp-1">{title}</CardTitle>
        <CardDescription className="flex items-center text-sm">
          <span className="font-medium text-campus-blue">{instructor}</span>
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pb-4 flex-grow">
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-4 text-xs text-gray-500">
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            {duration}
          </div>
          <div className="flex items-center">
            <Users size={14} className="mr-1" />
            {students} students
          </div>
        </div>
      </CardContent>
      
      {progress > 0 && (
        <div className="px-6 pb-2">
          <div className="flex justify-between text-xs text-gray-600 mb-1">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-1" />
        </div>
      )}
      
      <CardFooter className="pt-2">
        <Button 
          onClick={onClick}
          className="w-full bg-campus-blue hover:bg-blue-700 text-white"
        >
          {progress > 0 ? 'Continue Learning' : 'Start Course'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
