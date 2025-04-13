
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, SendHorizonal, Bot, FileQuestion, User, 
  CheckCircle, BookOpen, Code, GraduationCap 
} from 'lucide-react';
import { 
  promptTemplates, 
  assistantExamples, 
  recentDoubts 
} from '@/data/aiAssistantData';

interface Message {
  role: 'assistant' | 'user';
  content: string;
  timestamp: Date;
}

const AIAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: 'Hello! I\'m your AI learning assistant. How can I help you today?', 
      timestamp: new Date() 
    }
  ]);
  const [input, setInput] = useState('');
  const [activeTab, setActiveTab] = useState('chat');
  const [selectedPrompt, setSelectedPrompt] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentUserType, setCurrentUserType] = useState<'student' | 'faculty' | 'both'>('student');

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    // Simulate AI response (in a real app, this would be an API call)
    setTimeout(() => {
      const aiMessage: Message = {
        role: 'assistant',
        content: `I understand your question about "${input}". This is a simulated response. In a real implementation, this would connect to an AI service to provide relevant answers based on your course context.`,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
    
    setInput('');
  };

  const handlePromptSelect = (prompt: string) => {
    setSelectedPrompt(prompt);
    setInput(prompt);
  };

  const filteredPrompts = promptTemplates.filter(template => 
    (template.userType === currentUserType || template.userType === 'both') &&
    (searchQuery === '' || 
     template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     template.prompt.toLowerCase().includes(searchQuery.toLowerCase()) ||
     template.category.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const formatDate = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  const handleMarkResolved = (doubtId: string) => {
    // In a real app, this would update the doubt status in the database
    console.log(`Doubt ${doubtId} marked as resolved`);
  };

  return (
    <Card className="h-[calc(100vh-8rem)] flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center">
          <Bot className="mr-2" size={20} />
          AI Assistant
        </CardTitle>
      </CardHeader>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
        <TabsList className="grid grid-cols-3 mb-0 mx-4">
          <TabsTrigger value="chat" className="flex items-center">
            <User size={16} className="mr-2" />
            Chat
          </TabsTrigger>
          <TabsTrigger value="templates" className="flex items-center">
            <FileQuestion size={16} className="mr-2" />
            Templates
          </TabsTrigger>
          <TabsTrigger value="doubts" className="flex items-center">
            <CheckCircle size={16} className="mr-2" />
            Doubts
          </TabsTrigger>
        </TabsList>

        <TabsContent value="chat" className="flex-1 flex flex-col p-4 pt-0 overflow-hidden">
          <div className="flex-1 overflow-y-auto mb-4 space-y-4 py-4">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`flex ${message.role === 'assistant' ? 'justify-start' : 'justify-end'}`}
              >
                <div 
                  className={`max-w-[80%] px-4 py-2 rounded-lg ${
                    message.role === 'assistant' 
                      ? 'bg-blue-50 text-blue-800' 
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{message.content}</p>
                  <p className={`text-xs mt-1 ${
                    message.role === 'assistant' ? 'text-blue-500' : 'text-blue-200'
                  }`}>
                    {formatDate(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex gap-2">
            <Textarea 
              placeholder="Type your question here..." 
              value={input || selectedPrompt}
              onChange={(e) => setInput(e.target.value)}
              className="resize-none"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />
            <Button onClick={handleSend} size="icon" className="flex-shrink-0">
              <SendHorizonal size={18} />
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="templates" className="flex-1 flex flex-col p-4 pt-0 overflow-hidden">
          <div className="mb-4 flex gap-2">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                placeholder="Search templates..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Button
              variant={currentUserType === 'student' ? 'default' : 'outline'}
              onClick={() => setCurrentUserType('student')}
              size="sm"
            >
              Student
            </Button>
            
            <Button
              variant={currentUserType === 'faculty' ? 'default' : 'outline'}
              onClick={() => setCurrentUserType('faculty')}
              size="sm"
            >
              Faculty
            </Button>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredPrompts.map((template) => (
                <div 
                  key={template.id}
                  className="border rounded-lg p-3 hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => handlePromptSelect(template.prompt)}
                >
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-medium">{template.title}</h3>
                    <Badge variant="outline" className="capitalize">
                      {template.category === 'teaching' ? (
                        <GraduationCap size={14} className="mr-1" />
                      ) : template.category === 'coding' ? (
                        <Code size={14} className="mr-1" />
                      ) : (
                        <BookOpen size={14} className="mr-1" />
                      )}
                      {template.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">{template.prompt}</p>
                </div>
              ))}
              
              {filteredPrompts.length === 0 && (
                <div className="col-span-2 text-center py-8">
                  <Search size={36} className="mx-auto text-gray-300 mb-2" />
                  <p className="text-gray-500">No templates found. Try a different search term.</p>
                </div>
              )}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="doubts" className="flex-1 p-4 pt-0 overflow-y-auto">
          <div className="space-y-4 py-4">
            {recentDoubts.map((doubt) => (
              <div key={doubt.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">{doubt.question}</h3>
                  <Badge 
                    variant={
                      doubt.status === 'resolved' ? 'default' :
                      doubt.status === 'in-progress' ? 'secondary' : 'outline'
                    }
                    className="capitalize"
                  >
                    {doubt.status}
                  </Badge>
                </div>
                
                <div className="mb-2 text-sm text-gray-500">
                  {new Date(doubt.timestamp).toLocaleString()}
                  {doubt.courseId && ` • ${doubt.courseId}`}
                </div>
                
                {doubt.tags && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {doubt.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                )}
                
                {doubt.aiResponse && (
                  <div className="bg-blue-50 p-3 rounded-md mb-3 text-sm">
                    <p className="font-medium text-blue-800 mb-1">AI Response:</p>
                    <p className="text-gray-700">{doubt.aiResponse}</p>
                  </div>
                )}
                
                {doubt.facultyResponse && (
                  <div className="bg-green-50 p-3 rounded-md mb-3 text-sm">
                    <p className="font-medium text-green-800 mb-1">Faculty Response:</p>
                    <p className="text-gray-700">{doubt.facultyResponse}</p>
                  </div>
                )}
                
                <div className="flex justify-end gap-2 mt-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      // Add chat continuation logic
                      setActiveTab('chat');
                      setInput(`Regarding this question: ${doubt.question}`);
                    }}
                  >
                    Continue in Chat
                  </Button>
                  
                  {doubt.status !== 'resolved' && (
                    <Button 
                      variant="default" 
                      size="sm" 
                      onClick={() => handleMarkResolved(doubt.id)}
                    >
                      Mark as Resolved
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default AIAssistant;
