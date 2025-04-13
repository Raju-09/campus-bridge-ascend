
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  Clock, 
  MessageSquare, 
  Star, 
  User, 
  Users, 
  BookOpen, 
  Code, 
  TrendingUp,
  Database,
  Server,
  Globe,
  Brain,
  Cpu
} from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';

interface Mentor {
  id: string;
  name: string;
  role: string;
  expertise: string[];
  rating: number;
  reviews: number;
  available: boolean;
  image: string;
  matchScore: number;
  bio: string;
  yearsExperience: number;
  sessions: number;
}

const mentors: Mentor[] = [
  {
    id: 'm1',
    name: 'Dr. Sarah Wilson',
    role: 'Faculty',
    expertise: ['Web Development', 'UI/UX', 'JavaScript', 'React'],
    rating: 4.9,
    reviews: 48,
    available: true,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80',
    matchScore: 95,
    bio: 'Associate Professor with 8+ years of industry experience at Google and Microsoft. Specializes in modern web development frameworks and UX design.',
    yearsExperience: 12,
    sessions: 124,
  },
  {
    id: 'm2',
    name: 'Prof. Michael Chen',
    role: 'Faculty',
    expertise: ['Algorithms', 'Data Structures', 'System Design', 'Java'],
    rating: 4.8,
    reviews: 62,
    available: true,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
    matchScore: 88,
    bio: 'Computer Science professor with research focus on algorithm optimization and distributed systems. Author of "Advanced Data Structures in Practice".',
    yearsExperience: 15,
    sessions: 210,
  },
  {
    id: 'm3',
    name: 'Amanda Rodriguez',
    role: 'Industry Expert',
    expertise: ['Machine Learning', 'Python', 'Data Science', 'TensorFlow'],
    rating: 4.7,
    reviews: 35,
    available: true,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&h=120&q=80',
    matchScore: 82,
    bio: 'Senior Data Scientist at Netflix with focus on recommendation systems and user behavior analysis. Previously at Amazon AWS ML team.',
    yearsExperience: 8,
    sessions: 67,
  },
  {
    id: 'm4',
    name: 'James Thompson',
    role: 'Industry Expert',
    expertise: ['Cloud Computing', 'DevOps', 'AWS', 'Microservices'],
    rating: 4.6,
    reviews: 29,
    available: false,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80',
    matchScore: 75,
    bio: 'Solutions Architect with expertise in cloud infrastructure and DevOps practices. Certified AWS Solutions Architect and Kubernetes Administrator.',
    yearsExperience: 10,
    sessions: 85,
  },
  {
    id: 'm5',
    name: 'Rajiv Patel',
    role: 'Senior Student',
    expertise: ['React', 'Node.js', 'MongoDB', 'JavaScript'],
    rating: 4.5,
    reviews: 18,
    available: true,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
    matchScore: 90,
    bio: 'Final year Computer Science student with 3 internships at tech startups. Passionate about helping juniors learn web development and MERN stack.',
    yearsExperience: 2,
    sessions: 36,
  }
];

interface TimeSlot {
  id: string;
  day: string;
  time: string;
  available: boolean;
}

// Generate time slots
const generateTimeSlots = (mentorId: string): TimeSlot[] => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const times = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];
  
  return days.flatMap(day => 
    times.map((time, index) => ({
      id: `${mentorId}-${day}-${index}`,
      day,
      time,
      available: Math.random() > 0.5 // Random availability for demo
    }))
  );
};

// Learning areas that can be improved
const learningAreas = [
  { id: 'algorithms', name: 'Algorithms', icon: <Brain size={16} className="mr-2" /> },
  { id: 'web', name: 'Web Development', icon: <Globe size={16} className="mr-2" /> },
  { id: 'database', name: 'Database Systems', icon: <Database size={16} className="mr-2" /> },
  { id: 'cloud', name: 'Cloud Computing', icon: <Server size={16} className="mr-2" /> },
  { id: 'ml', name: 'Machine Learning', icon: <Cpu size={16} className="mr-2" /> },
  { id: 'system', name: 'System Design', icon: <TrendingUp size={16} className="mr-2" /> },
];

const MentorMatchmaking: React.FC = () => {
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [selectedArea, setSelectedArea] = useState<string>('algorithms');
  const [matchThreshold, setMatchThreshold] = useState<number>(70);
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  
  const handleMentorSelect = (mentor: Mentor) => {
    setSelectedMentor(mentor);
    setTimeSlots(generateTimeSlots(mentor.id));
  };
  
  const filteredMentors = mentors.filter(mentor => 
    mentor.matchScore >= matchThreshold && 
    (selectedArea === 'all' || mentor.expertise.some(exp => 
      exp.toLowerCase().includes(selectedArea.toLowerCase()) ||
      learningAreas.find(area => area.id === selectedArea)?.name.toLowerCase().includes(exp.toLowerCase())
    ))
  );

  return (
    <Card className="animate-fade-in">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">Smart Mentor Matchmaking</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="find" className="space-y-4">
          <TabsList className="grid grid-cols-2">
            <TabsTrigger value="find">Find Mentor</TabsTrigger>
            <TabsTrigger value="sessions">My Sessions</TabsTrigger>
          </TabsList>
          
          <TabsContent value="find" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">Area to Improve</h3>
                  <Select value={selectedArea} onValueChange={setSelectedArea}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Areas</SelectItem>
                      {learningAreas.map(area => (
                        <SelectItem key={area.id} value={area.id}>
                          <div className="flex items-center">
                            {area.icon}
                            {area.name}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <h3 className="text-sm font-medium">Match Quality</h3>
                    <span className="text-sm font-medium">{matchThreshold}%+</span>
                  </div>
                  <Slider 
                    defaultValue={[matchThreshold]} 
                    max={100} 
                    min={50} 
                    step={5}
                    onValueChange={(values) => setMatchThreshold(values[0])} 
                  />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium mb-1">Matched Mentors</h3>
                  {filteredMentors.length > 0 ? (
                    filteredMentors.map((mentor) => (
                      <div 
                        key={mentor.id}
                        className={`border p-3 rounded-md cursor-pointer transition-all ${
                          selectedMentor?.id === mentor.id 
                            ? 'ring-2 ring-campus-blue border-campus-blue bg-blue-50' 
                            : 'hover:border-campus-blue'
                        }`}
                        onClick={() => handleMentorSelect(mentor)}
                      >
                        <div className="flex items-center">
                          <div className="relative">
                            <img 
                              src={mentor.image} 
                              alt={mentor.name}
                              className="w-12 h-12 rounded-full object-cover" 
                            />
                            <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                              mentor.available ? 'bg-green-500' : 'bg-gray-400'
                            }`} />
                          </div>
                          <div className="ml-3">
                            <div className="flex items-center">
                              <h4 className="font-medium text-sm">{mentor.name}</h4>
                              <Badge 
                                className="ml-2 text-xs" 
                                variant="secondary"
                              >
                                {mentor.matchScore}% match
                              </Badge>
                            </div>
                            <p className="text-xs text-gray-500">{mentor.role}</p>
                            <div className="flex items-center mt-1">
                              <Star size={12} className="text-yellow-500" />
                              <span className="text-xs ml-1">{mentor.rating} ({mentor.reviews} reviews)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="border p-4 rounded-md text-center">
                      <p className="text-sm text-gray-500">No mentors match your criteria</p>
                      <Button 
                        variant="link" 
                        className="p-0 h-auto text-xs mt-1"
                        onClick={() => setMatchThreshold(60)}
                      >
                        Lower match threshold
                      </Button>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="col-span-2">
                {selectedMentor ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img 
                          src={selectedMentor.image} 
                          alt={selectedMentor.name}
                          className="w-16 h-16 rounded-full object-cover" 
                        />
                        <div className="ml-3">
                          <h3 className="font-medium">{selectedMentor.name}</h3>
                          <p className="text-sm text-gray-500">{selectedMentor.role}</p>
                          <div className="flex items-center mt-1">
                            <Star size={14} className="text-yellow-500" />
                            <span className="text-sm ml-1">{selectedMentor.rating}</span>
                            <span className="mx-2">•</span>
                            <Users size={14} className="text-gray-500" />
                            <span className="text-sm ml-1">{selectedMentor.sessions} sessions</span>
                            <span className="mx-2">•</span>
                            <Clock size={14} className="text-gray-500" />
                            <span className="text-sm ml-1">{selectedMentor.yearsExperience} years exp.</span>
                          </div>
                        </div>
                      </div>
                      <Badge className={`${selectedMentor.available ? 'bg-green-100 text-green-800' : 'bg-gray-100'}`}>
                        {selectedMentor.available ? 'Available' : 'Unavailable'}
                      </Badge>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-1">Expertise</h4>
                      <div className="flex flex-wrap gap-1">
                        {selectedMentor.expertise.map((skill, index) => (
                          <Badge key={index} variant="outline" className="bg-blue-50">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-1">Bio</h4>
                      <p className="text-sm text-gray-600">{selectedMentor.bio}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Available Time Slots</h4>
                      <div className="grid grid-cols-5 gap-2">
                        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                          <div key={day}>
                            <h5 className="text-xs font-medium text-center mb-1">{day}</h5>
                            <div className="space-y-1">
                              {timeSlots
                                .filter(slot => slot.day === day)
                                .map(slot => (
                                  <Button 
                                    key={slot.id}
                                    variant={slot.available ? "outline" : "ghost"}
                                    disabled={!slot.available}
                                    size="sm"
                                    className={`w-full text-xs py-1 ${slot.available ? 'hover:bg-blue-50' : 'opacity-50'}`}
                                  >
                                    {slot.time}
                                  </Button>
                                ))
                              }
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2 pt-2">
                      <Button className="flex-1 bg-campus-blue">
                        <Calendar size={16} className="mr-2" /> Schedule Session
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <MessageSquare size={16} className="mr-2" /> Message
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center border rounded-lg p-8">
                    <div className="text-center">
                      <User size={40} className="mx-auto text-gray-300 mb-2" />
                      <h3 className="font-medium">Select a Mentor</h3>
                      <p className="text-sm text-gray-500 mt-1">Choose a mentor from the list to view their profile and availability</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="sessions">
            <div className="space-y-4">
              <div className="border rounded-lg p-4 bg-blue-50 flex items-center justify-between">
                <div className="flex items-start">
                  <Calendar size={24} className="text-campus-blue mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium">Upcoming Session</h3>
                    <p className="text-sm">Data Structures & Algorithms with Prof. Michael Chen</p>
                    <div className="flex items-center mt-1 text-sm text-gray-600">
                      <Clock size={14} className="mr-1" />
                      <span>Tomorrow, 3:00 PM - 4:00 PM</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Reschedule</Button>
                  <Button className="bg-campus-blue" size="sm">Join</Button>
                </div>
              </div>
              
              <h3 className="font-medium">Past Sessions</h3>
              <div className="space-y-2">
                <div className="border rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Web Development Basics</h4>
                      <p className="text-sm text-gray-600">with Dr. Sarah Wilson</p>
                    </div>
                    <Badge variant="outline">Completed</Badge>
                  </div>
                  <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      <span>Apr 10, 2:00 PM</span>
                    </div>
                    <div className="flex">
                      <Button variant="link" className="h-auto p-0">View Notes</Button>
                      <span className="mx-2">•</span>
                      <Button variant="link" className="h-auto p-0">Rate Session</Button>
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">React Hooks & Context API</h4>
                      <p className="text-sm text-gray-600">with Rajiv Patel</p>
                    </div>
                    <Badge variant="outline" className="bg-green-50">Rated ★★★★★</Badge>
                  </div>
                  <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      <span>Apr 5, 4:00 PM</span>
                    </div>
                    <Button variant="link" className="h-auto p-0">View Notes</Button>
                  </div>
                </div>
                
                <div className="border rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Database Optimization</h4>
                      <p className="text-sm text-gray-600">with Prof. Michael Chen</p>
                    </div>
                    <Badge variant="outline" className="bg-green-50">Rated ★★★★☆</Badge>
                  </div>
                  <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      <span>Mar 28, 2:00 PM</span>
                    </div>
                    <Button variant="link" className="h-auto p-0">View Notes</Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default MentorMatchmaking;
