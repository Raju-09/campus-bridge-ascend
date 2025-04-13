
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, BookOpen, Code, Database, CloudComputing, Smartphone } from 'lucide-react';
import { Course, coursesData, categorizedCourses } from '@/data/coursesData';
import CourseCard from '@/components/CourseCard';

const CoursesBrowser = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [levelFilter, setLevelFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('popular');
  
  const filterCourses = (courses: Course[]) => {
    let filtered = [...courses];
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(course => 
        course.title.toLowerCase().includes(query) || 
        course.description.toLowerCase().includes(query) ||
        course.instructor.toLowerCase().includes(query) ||
        course.category.toLowerCase().includes(query)
      );
    }
    
    // Apply level filter
    if (levelFilter !== 'all') {
      filtered = filtered.filter(course => course.level === levelFilter);
    }
    
    // Apply sorting
    if (sortBy === 'popular') {
      filtered.sort((a, b) => b.students - a.students);
    } else if (sortBy === 'newest') {
      // For demo purposes, we'll sort by ID which correlates with newest
      filtered.sort((a, b) => a.id.localeCompare(b.id));
    }
    
    return filtered;
  };
  
  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle className="text-xl">Explore Courses</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              placeholder="Search courses, instructors, or topics..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Select value={levelFilter} onValueChange={setLevelFilter}>
              <SelectTrigger className="w-[130px]">
                <div className="flex items-center">
                  <Filter size={16} className="mr-2" />
                  <span>Level</span>
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[130px]">
                <div className="flex items-center">
                  <Filter size={16} className="mr-2" />
                  <span>Sort By</span>
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <Tabs defaultValue="all">
          <TabsList className="grid grid-cols-5 mb-6">
            <TabsTrigger value="all" className="flex items-center">
              <BookOpen size={16} className="mr-2" />
              All
            </TabsTrigger>
            <TabsTrigger value="web" className="flex items-center">
              <Code size={16} className="mr-2" />
              Web Dev
            </TabsTrigger>
            <TabsTrigger value="data" className="flex items-center">
              <Database size={16} className="mr-2" />
              Data Science
            </TabsTrigger>
            <TabsTrigger value="mobile" className="flex items-center">
              <Smartphone size={16} className="mr-2" />
              Mobile
            </TabsTrigger>
            <TabsTrigger value="cloud" className="flex items-center">
              <CloudComputing size={16} className="mr-2" />
              Cloud
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            {filterCourses(coursesData).length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterCourses(coursesData).map(course => (
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
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <div className="text-gray-400 mb-3">
                  <Search size={40} className="mx-auto" />
                </div>
                <h3 className="text-lg font-medium">No courses found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="web">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterCourses(categorizedCourses.webDevelopment).map(course => (
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
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="data">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterCourses(categorizedCourses.dataScience).map(course => (
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
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="mobile">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterCourses(categorizedCourses.mobile).map(course => (
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
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="cloud">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterCourses(categorizedCourses.cloud).map(course => (
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
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default CoursesBrowser;
