
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Play, Pause, SkipBack, SkipForward, Video, Book, MessageCircle, ListChecks, Download, Bookmark, Copy } from 'lucide-react';

interface LectureNote {
  timestamp: string;
  content: string;
  important: boolean;
}

interface LectureQuestion {
  id: string;
  question: string;
  answer?: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

interface KeyConcept {
  term: string;
  definition: string;
}

const LectureSummary: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentProgress, setCurrentProgress] = useState(35);
  const [activeNote, setActiveNote] = useState<string | null>(null);
  
  // Sample data
  const lecture = {
    title: "Introduction to Graph Algorithms",
    instructor: "Prof. Michael Chen",
    duration: "45:18",
    currentTime: "15:52",
    transcript: "In this lecture, we will explore graph algorithms, which are essential in computer science. Let's start with the basics of graph representation...",
    tldr: "This lecture covers fundamental graph algorithms including BFS, DFS, Dijkstra's, and their applications in real-world problems. Key takeaways are different traversal methods and how they can be optimized for specific use cases.",
    notes: [
      { timestamp: "03:24", content: "Graphs can be represented using adjacency matrices or adjacency lists", important: true },
      { timestamp: "08:15", content: "Breadth-First Search (BFS) uses a queue data structure", important: true },
      { timestamp: "12:42", content: "Depth-First Search (DFS) uses a stack or recursion", important: false },
      { timestamp: "17:36", content: "Time complexity of BFS and DFS is O(V + E)", important: true },
      { timestamp: "22:10", content: "Dijkstra's algorithm finds the shortest path in weighted graphs", important: true },
      { timestamp: "28:45", content: "Example of finding shortest path in a network", important: false },
      { timestamp: "34:20", content: "Practical applications in social networks and mapping services", important: false },
      { timestamp: "39:58", content: "Comparison between different graph algorithms", important: true },
    ] as LectureNote[],
    questions: [
      { id: "q1", question: "What is the time complexity of BFS algorithm?", difficulty: 'easy' },
      { id: "q2", question: "Explain the difference between BFS and DFS traversal.", difficulty: 'medium' },
      { id: "q3", question: "Why is Dijkstra's algorithm not suitable for graphs with negative weights?", difficulty: 'hard' },
      { id: "q4", question: "How would you represent a social network using graph data structure?", difficulty: 'medium' },
      { id: "q5", question: "Implement a function to detect a cycle in a directed graph.", difficulty: 'hard' },
    ] as LectureQuestion[],
    keyConcepts: [
      { term: "Graph", definition: "A non-linear data structure consisting of nodes and edges." },
      { term: "Adjacency Matrix", definition: "A 2D array of size V×V where V is the number of vertices in a graph." },
      { term: "Adjacency List", definition: "An array of lists, where each element is a list of all vertices adjacent to a particular vertex." },
      { term: "BFS", definition: "Breadth-First Search is a traversal algorithm that visits all vertices at the same depth before moving to vertices at the next depth level." },
      { term: "DFS", definition: "Depth-First Search is a traversal algorithm that explores as far as possible along a branch before backtracking." },
      { term: "Dijkstra's Algorithm", definition: "An algorithm for finding the shortest paths between nodes in a graph." },
    ] as KeyConcept[],
  };

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleNoteImportance = (index: number) => {
    // In a real app, we would update the state, but for this demo we'll just log
    console.log(`Toggled importance for note at index ${index}`);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <Card className="animate-fade-in">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{lecture.title}</CardTitle>
          <Badge variant="outline" className="ml-2">
            AI Generated
          </Badge>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <span className="mr-2">{lecture.instructor}</span>
          <span>•</span>
          <span className="ml-2">{lecture.duration}</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Video Player Mockup */}
        <div className="relative rounded-lg bg-gray-900 aspect-video flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <Video size={48} className="text-white/70" />
          
          {/* Video Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <div className="flex items-center justify-between text-white">
              <span className="text-sm">{lecture.currentTime}</span>
              <div className="flex items-center space-x-3">
                <Button variant="ghost" size="icon" className="text-white">
                  <SkipBack size={18} />
                </Button>
                <Button variant="ghost" size="icon" className="text-white h-10 w-10 rounded-full bg-white/20" onClick={togglePlay}>
                  {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                </Button>
                <Button variant="ghost" size="icon" className="text-white">
                  <SkipForward size={18} />
                </Button>
              </div>
              <span className="text-sm">{lecture.duration}</span>
            </div>
            <Progress value={currentProgress} className="h-1 mt-2" />
          </div>
        </div>
        
        <Tabs defaultValue="summary" className="mt-6">
          <TabsList className="grid grid-cols-4">
            <TabsTrigger value="summary">
              <Book size={16} className="mr-1" /> Summary
            </TabsTrigger>
            <TabsTrigger value="notes">
              <ListChecks size={16} className="mr-1" /> Notes
            </TabsTrigger>
            <TabsTrigger value="questions">
              <MessageCircle size={16} className="mr-1" /> Questions
            </TabsTrigger>
            <TabsTrigger value="concepts">
              <Bookmark size={16} className="mr-1" /> Concepts
            </TabsTrigger>
          </TabsList>
          
          {/* Summary Tab */}
          <TabsContent value="summary" className="p-4 border rounded-md mt-4">
            <h3 className="font-medium mb-2">TL;DR Summary</h3>
            <p className="text-gray-700">{lecture.tldr}</p>
            <div className="flex items-center justify-end mt-4">
              <Button variant="outline" size="sm" className="flex items-center">
                <Copy size={14} className="mr-1" /> Copy
              </Button>
              <Button variant="outline" size="sm" className="ml-2 flex items-center">
                <Download size={14} className="mr-1" /> Download
              </Button>
            </div>
          </TabsContent>
          
          {/* Notes Tab */}
          <TabsContent value="notes" className="mt-4">
            <div className="space-y-2">
              {lecture.notes.map((note, index) => (
                <div 
                  key={index}
                  className={`p-3 border rounded-md flex items-start transition-colors ${
                    activeNote === note.timestamp 
                      ? 'bg-blue-50 border-blue-200' 
                      : note.important 
                        ? 'bg-yellow-50 border-yellow-200' 
                        : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveNote(note.timestamp)}
                >
                  <Badge 
                    variant="outline" 
                    className="min-w-[40px] mr-3 cursor-pointer"
                    onClick={() => toggleNoteImportance(index)}
                  >
                    {note.timestamp}
                  </Badge>
                  <p className="text-gray-700 flex-1">{note.content}</p>
                  <Button 
                    size="sm" 
                    variant={note.important ? "default" : "outline"}
                    className={`ml-2 ${note.important ? 'bg-yellow-500 hover:bg-yellow-600' : ''}`}
                    onClick={() => toggleNoteImportance(index)}
                  >
                    <Bookmark size={14} />
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>
          
          {/* Questions Tab */}
          <TabsContent value="questions" className="mt-4">
            <div className="space-y-4">
              {lecture.questions.map((question, index) => (
                <div 
                  key={question.id}
                  className="p-4 border rounded-md"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">Question {index + 1}</h3>
                    <Badge className={getDifficultyColor(question.difficulty)}>
                      {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
                    </Badge>
                  </div>
                  <p className="text-gray-700 mb-3">{question.question}</p>
                  
                  {question.answer ? (
                    <div className="p-3 bg-gray-50 rounded-md">
                      <p className="text-gray-700 text-sm">{question.answer}</p>
                    </div>
                  ) : (
                    <Button variant="outline" className="w-full">Show Answer</Button>
                  )}
                </div>
              ))}
            </div>
          </TabsContent>
          
          {/* Key Concepts Tab */}
          <TabsContent value="concepts" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {lecture.keyConcepts.map((concept, index) => (
                <div key={index} className="border p-3 rounded-md">
                  <h3 className="font-medium text-campus-blue">{concept.term}</h3>
                  <p className="text-sm text-gray-600 mt-1">{concept.definition}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default LectureSummary;
