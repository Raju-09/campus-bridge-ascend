
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trophy, Medal, Award, Star, Flame, Calendar, ArrowUp, ArrowDown } from 'lucide-react';

interface LeaderboardEntry {
  id: string;
  name: string;
  avatar?: string;
  initialsColor: string;
  points: number;
  rank: number;
  progress: number;
  streak: number;
  badges: string[];
  previousRank: number;
}

const leaderboardData: LeaderboardEntry[] = [
  { 
    id: 'user1',
    name: 'Alex Johnson',
    initialsColor: 'bg-purple-500',
    points: 2840,
    rank: 1,
    progress: 92,
    streak: 15,
    badges: ['Problem Master', 'Web Wizard', '30-Day Streak'],
    previousRank: 1
  },
  { 
    id: 'user2',
    name: 'Sophia Chen',
    avatar: 'https://i.pravatar.cc/150?img=29',
    initialsColor: 'bg-green-500',
    points: 2715,
    rank: 2,
    progress: 88,
    streak: 12,
    badges: ['Code Ninja', 'Algorithm Expert'],
    previousRank: 3
  },
  { 
    id: 'user3',
    name: 'Rajiv Patel',
    initialsColor: 'bg-blue-500',
    points: 2690,
    rank: 3,
    progress: 85,
    streak: 20,
    badges: ['Git Master', '20-Day Streak'],
    previousRank: 2
  },
  { 
    id: 'user4',
    name: 'Emma Wilson',
    avatar: 'https://i.pravatar.cc/150?img=5',
    initialsColor: 'bg-yellow-500',
    points: 2560,
    rank: 4,
    progress: 80,
    streak: 8,
    badges: ['Database Pro'],
    previousRank: 5
  },
  { 
    id: 'user5',
    name: 'Carlos Lopez',
    initialsColor: 'bg-red-500',
    points: 2430,
    rank: 5,
    progress: 78,
    streak: 10,
    badges: ['Mobile Dev Star'],
    previousRank: 4
  },
  { 
    id: 'user6',
    name: 'Aisha Mahmood',
    avatar: 'https://i.pravatar.cc/150?img=37',
    initialsColor: 'bg-indigo-500',
    points: 2375,
    rank: 6,
    progress: 75,
    streak: 7,
    badges: ['Cloud Expert'],
    previousRank: 7
  },
  { 
    id: 'user7',
    name: 'David Kim',
    initialsColor: 'bg-pink-500',
    points: 2290,
    rank: 7,
    progress: 72,
    streak: 5,
    badges: ['UI Designer'],
    previousRank: 6
  },
  { 
    id: 'user8',
    name: 'Olivia Taylor',
    avatar: 'https://i.pravatar.cc/150?img=15',
    initialsColor: 'bg-orange-500',
    points: 2150,
    rank: 8,
    progress: 70,
    streak: 3,
    badges: ['Python Scholar'],
    previousRank: 8
  },
  { 
    id: 'user9',
    name: 'James Smith',
    initialsColor: 'bg-cyan-500',
    points: 2080,
    rank: 9,
    progress: 68,
    streak: 4,
    badges: ['Java Expert'],
    previousRank: 9
  },
  { 
    id: 'user10',
    name: 'Mia Johnson',
    avatar: 'https://i.pravatar.cc/150?img=23',
    initialsColor: 'bg-violet-500',
    points: 1970,
    rank: 10,
    progress: 65,
    streak: 2,
    badges: ['JavaScript Ninja'],
    previousRank: 11
  }
];

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState('weekly');
  const myRank = { rank: 24, points: 1250, progress: 60, streak: 3 };
  
  return (
    <Card className="animate-fade-in">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl flex items-center">
          <Trophy className="mr-2 text-yellow-500" />
          Leaderboard
        </CardTitle>
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-[400px]">
          <TabsList className="grid grid-cols-3">
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="alltime">All Time</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Leaderboard Table */}
          <div className="col-span-8">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg mb-6 p-4 text-white flex items-center">
              <div className="rounded-full bg-white/20 p-3">
                {activeTab === 'weekly' && <Calendar size={24} />}
                {activeTab === 'monthly' && <Star size={24} />}
                {activeTab === 'alltime' && <Award size={24} />}
              </div>
              <div className="ml-4">
                <h3 className="font-bold">
                  {activeTab === 'weekly' && 'This Week\'s Champions'}
                  {activeTab === 'monthly' && 'Monthly Stars'}
                  {activeTab === 'alltime' && 'Hall of Fame'}
                </h3>
                <p className="text-sm text-white/80">
                  {activeTab === 'weekly' && 'Rankings reset every Monday'}
                  {activeTab === 'monthly' && 'Rankings reset on the 1st of each month'}
                  {activeTab === 'alltime' && 'All-time performance leaders'}
                </p>
              </div>
            </div>
          
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Points</th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Streak</th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {leaderboardData.map((student) => (
                    <tr 
                      key={student.id} 
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-4 py-3 whitespace-nowrap">
                        {student.rank === 1 ? (
                          <div className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-yellow-100 text-yellow-800 font-bold text-xs">
                            1
                          </div>
                        ) : student.rank === 2 ? (
                          <div className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gray-100 text-gray-800 font-bold text-xs">
                            2
                          </div>
                        ) : student.rank === 3 ? (
                          <div className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-amber-100 text-amber-800 font-bold text-xs">
                            3
                          </div>
                        ) : (
                          <div className="text-gray-900 font-medium text-sm pl-2">
                            {student.rank}
                          </div>
                        )}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="flex items-center">
                          {student.avatar ? (
                            <Avatar className="h-8 w-8">
                              <img src={student.avatar} alt={student.name} />
                            </Avatar>
                          ) : (
                            <Avatar className={`h-8 w-8 ${student.initialsColor} text-white`}>
                              <span>{student.name.split(' ').map(n => n[0]).join('')}</span>
                            </Avatar>
                          )}
                          <div className="ml-3">
                            <div className="text-sm font-medium text-gray-900">{student.name}</div>
                            <div className="flex space-x-1 mt-1">
                              {student.badges.slice(0, 1).map((badge, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {badge}
                                </Badge>
                              ))}
                              {student.badges.length > 1 && (
                                <Badge variant="outline" className="text-xs">
                                  +{student.badges.length - 1} more
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm text-gray-900 font-medium">{student.points.toLocaleString()}</div>
                        <div className="w-24 bg-gray-200 rounded-full h-1.5 mt-1">
                          <div className="bg-campus-blue h-1.5 rounded-full" style={{ width: `${student.progress}%` }}></div>
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="flex items-center">
                          <Flame className="h-4 w-4 text-red-500 mr-1" />
                          <span className="text-sm font-medium">{student.streak} days</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        {student.previousRank > student.rank ? (
                          <div className="flex items-center text-green-600">
                            <ArrowUp className="h-4 w-4 mr-1" />
                            <span className="text-sm">{student.previousRank - student.rank}</span>
                          </div>
                        ) : student.previousRank < student.rank ? (
                          <div className="flex items-center text-red-600">
                            <ArrowDown className="h-4 w-4 mr-1" />
                            <span className="text-sm">{student.rank - student.previousRank}</span>
                          </div>
                        ) : (
                          <div className="flex items-center text-gray-400">
                            <span className="text-sm">-</span>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* My rank */}
            <div className="mt-4 border rounded-lg p-3 bg-gray-50 flex items-center justify-between">
              <div className="flex items-center">
                <div className="text-sm font-medium">Your Rank:</div>
                <div className="ml-2 bg-campus-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  {myRank.rank}
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div>
                  <div className="text-xs text-gray-500">Points</div>
                  <div className="font-medium">{myRank.points}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Progress</div>
                  <div className="w-24 bg-gray-200 rounded-full h-1.5 mt-1">
                    <div className="bg-campus-blue h-1.5 rounded-full" style={{ width: `${myRank.progress}%` }}></div>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Streak</div>
                  <div className="flex items-center">
                    <Flame className="h-3 w-3 text-red-500 mr-1" />
                    <span className="font-medium">{myRank.streak}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Achievements and Badges */}
          <div className="col-span-4">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-4 text-white mb-4">
              <h3 className="font-bold flex items-center">
                <Medal className="mr-2" /> Achievements
              </h3>
              <p className="text-sm text-white/80 mb-2">Collect badges by completing tasks and challenges</p>
              <Button variant="secondary" size="sm" className="w-full mt-2 bg-white text-blue-600 hover:bg-gray-100">
                View All Badges
              </Button>
            </div>
            
            <div className="border rounded-lg p-4 space-y-4">
              <h3 className="font-semibold">Recent Achievements</h3>
              
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="h-12 w-12 rounded-full flex items-center justify-center bg-yellow-100 text-yellow-600">
                  <Flame size={24} />
                </div>
                <div className="ml-3">
                  <div className="font-medium">7-Day Streak</div>
                  <div className="text-xs text-gray-500">Solved problems for 7 consecutive days</div>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="h-12 w-12 rounded-full flex items-center justify-center bg-purple-100 text-purple-600">
                  <Code size={24} />
                </div>
                <div className="ml-3">
                  <div className="font-medium">Algorithm Expert</div>
                  <div className="text-xs text-gray-500">Solved 10 algorithm problems correctly</div>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="h-12 w-12 rounded-full flex items-center justify-center bg-green-100 text-green-600">
                  <Trophy size={24} />
                </div>
                <div className="ml-3">
                  <div className="font-medium">Top 10% Performer</div>
                  <div className="text-xs text-gray-500">Ranked in the top 10% this month</div>
                </div>
              </div>
              
              <h3 className="font-semibold pt-2">Next Achievements</h3>
              
              <div className="flex items-center p-3 bg-gray-50 rounded-lg opacity-70">
                <div className="h-12 w-12 rounded-full flex items-center justify-center bg-blue-100 text-blue-600">
                  <GraduationCap size={24} />
                </div>
                <div className="ml-3">
                  <div className="font-medium">Course Champion</div>
                  <div className="text-xs text-gray-500">Complete all courses in a learning path</div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                    <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Import this from lucide-react
const Code = (props: any) => {
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
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  );
};

const GraduationCap = (props: any) => {
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
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
    </svg>
  );
};

export default Leaderboard;
