
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Check, Award, Star, TrendingUp, Calendar, BookOpen, Code, Medal, Target } from 'lucide-react';

interface XPActivity {
  id: string;
  title: string;
  xpEarned: number;
  date: string;
  icon: React.ReactNode;
}

interface XPReward {
  id: string;
  title: string;
  description: string;
  xpRequired: number;
  icon: React.ReactNode;
  unlocked: boolean;
}

const XPSystem = () => {
  const currentXP = 2450;
  const currentLevel = 5;
  const nextLevelXP = 3000;
  const streak = 12;
  
  const recentActivities: XPActivity[] = [
    {
      id: 'a1',
      title: 'Completed "Arrays & Strings" quiz',
      xpEarned: 50,
      date: '2 hours ago',
      icon: <BookOpen size={16} className="text-blue-500" />
    },
    {
      id: 'a2',
      title: 'Solved "Two Sum" coding challenge',
      xpEarned: 100,
      date: 'Yesterday',
      icon: <Code size={16} className="text-indigo-500" />
    },
    {
      id: 'a3',
      title: 'Watched "System Design Basics" lecture',
      xpEarned: 30,
      date: 'Yesterday',
      icon: <BookOpen size={16} className="text-blue-500" />
    },
    {
      id: 'a4',
      title: 'Daily login bonus',
      xpEarned: 20,
      date: 'Yesterday',
      icon: <Calendar size={16} className="text-green-500" />
    },
    {
      id: 'a5',
      title: 'Helped 2 students in the forum',
      xpEarned: 60,
      date: '2 days ago',
      icon: <Medal size={16} className="text-amber-500" />
    },
  ];

  const upcomingRewards: XPReward[] = [
    {
      id: 'r1',
      title: 'Mock Interview Access',
      description: 'Unlock AI-powered mock interviews with personalized feedback',
      xpRequired: 3000,
      icon: <Target size={16} className="text-indigo-500" />,
      unlocked: false
    },
    {
      id: 'r2',
      title: 'Premium Projects',
      description: 'Access industry-standard project templates and evaluations',
      xpRequired: 5000,
      icon: <Star size={16} className="text-amber-500" />,
      unlocked: false
    },
    {
      id: 'r3',
      title: 'Expert Career Guidance',
      description: 'One-on-one session with an industry expert',
      xpRequired: 10000,
      icon: <Award size={16} className="text-red-500" />,
      unlocked: false
    },
  ];
  
  const unlockedRewards: XPReward[] = [
    {
      id: 'r4',
      title: 'Advanced Code Challenges',
      description: 'Access to premium coding challenges from top companies',
      xpRequired: 1000,
      icon: <Code size={16} className="text-green-500" />,
      unlocked: true
    },
    {
      id: 'r5',
      title: 'Resume AI Analysis',
      description: 'Get AI-powered feedback on your resume',
      xpRequired: 2000,
      icon: <BookOpen size={16} className="text-blue-500" />,
      unlocked: true
    },
  ];

  return (
    <Card className="animate-fade-in">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">XP System & Rewards</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1">
            <div className="flex flex-col items-center p-6 border rounded-lg bg-gradient-to-b from-blue-50 to-indigo-50">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-3xl font-bold">
                  {currentLevel}
                </div>
                <div className="absolute -top-2 -right-2 bg-yellow-400 text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                  {streak}
                </div>
              </div>
              <h3 className="mt-4 text-xl font-bold">Learning Master</h3>
              <div className="text-sm text-gray-500 flex items-center mt-1">
                <Calendar size={14} className="mr-1" /> 
                {streak} day streak
              </div>
              <div className="mt-4 w-full">
                <div className="flex justify-between text-sm font-medium mb-1">
                  <span>{currentXP} XP</span>
                  <span>{nextLevelXP} XP</span>
                </div>
                <Progress value={(currentXP / nextLevelXP) * 100} className="h-2" />
                <div className="mt-1 text-xs text-center text-gray-500">
                  {nextLevelXP - currentXP} XP until Level {currentLevel + 1}
                </div>
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <Badge variant="outline" className="flex items-center bg-blue-50">
                  <Award size={12} className="mr-1 text-blue-500" />
                  Problem Solver
                </Badge>
                <Badge variant="outline" className="flex items-center bg-green-50">
                  <Check size={12} className="mr-1 text-green-500" />
                  Consistent
                </Badge>
                <Badge variant="outline" className="flex items-center bg-amber-50">
                  <Star size={12} className="mr-1 text-amber-500" />
                  Rising Star
                </Badge>
              </div>
            </div>
          </div>
          
          <div className="col-span-2">
            <h3 className="font-semibold mb-3 flex items-center">
              <TrendingUp className="mr-2 h-4 w-4" /> 
              Recent Activity
            </h3>
            <div className="space-y-2 mb-6">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex justify-between items-center p-2 border rounded-md hover:bg-gray-50 transition-colors">
                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-gray-100">
                      {activity.icon}
                    </div>
                    <div className="ml-3">
                      <div className="text-sm font-medium">{activity.title}</div>
                      <div className="text-xs text-gray-500">{activity.date}</div>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800 font-medium">
                    +{activity.xpEarned} XP
                  </Badge>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h3 className="font-semibold mb-3 flex items-center">
                <Award className="mr-2 h-4 w-4" /> 
                Rewards
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm text-gray-500 mb-2">Unlocked Rewards</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {unlockedRewards.map((reward) => (
                      <div key={reward.id} className="border p-3 rounded-md bg-gradient-to-r from-green-50 to-blue-50">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center">
                            <span className="p-1 rounded-md bg-white mr-2">{reward.icon}</span>
                            <h4 className="font-medium text-sm">{reward.title}</h4>
                          </div>
                          <Badge variant="outline" className="bg-green-100 text-green-800 flex items-center">
                            <Check size={10} className="mr-1" /> Unlocked
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-600">{reward.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm text-gray-500 mb-2">Next Rewards</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {upcomingRewards.map((reward) => (
                      <div key={reward.id} className="border p-3 rounded-md bg-gray-50">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center">
                            <span className="p-1 rounded-md bg-white mr-2">{reward.icon}</span>
                            <h4 className="font-medium text-sm">{reward.title}</h4>
                          </div>
                          <Badge variant="outline" className="bg-gray-100 text-gray-800">
                            {reward.xpRequired.toLocaleString()} XP
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-600">{reward.description}</p>
                        <Progress value={(currentXP / reward.xpRequired) * 100} className="h-1 mt-2" />
                      </div>
                    ))}
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

export default XPSystem;
