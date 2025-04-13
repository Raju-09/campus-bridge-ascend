
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Bot, Send, RotateCw, Code, BookOpen, GraduationCap, PenTool, MessageSquareDashed, Lightbulb, X, ThumbsUp, ThumbsDown, CheckCircle2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { promptTemplates, assistantExamples, contextualHelpData, Doubt } from '@/data/aiAssistantData';

// Mock data for AI assistant responses
const mockResponses = {
  'coding': `Here's how you can fix the error in your code:

\`\`\`javascript
function calculateSum(arr) {
  // Fix: Check if array is empty first
  if (arr.length === 0) return 0;
  
  return arr.reduce((sum, num) => sum + num, 0);
}
\`\`\`

The issue was that you weren't handling the empty array case. The reduce function throws an error when called on an empty array without an initial value.`,
  
  'learning': `Based on your progress, here are some recommended resources for mastering React hooks:

1. Complete the "Advanced Hooks" module in your current course
2. Practice by building a small project using useContext and useReducer
3. Read the official React documentation on custom hooks

Your current weak areas appear to be state management patterns and effect cleanup. I recommend focusing on these topics next.`,
  
  'resume': `I analyzed your resume, and here are some suggestions:

1. Quantify your achievements in the project section (e.g., "Improved performance by 30%")
2. Add keywords relevant to the job description: React, TypeScript, CI/CD
3. Consider restructuring your experience section to highlight most relevant work first
4. Your skills section is strong, but move technical skills higher up

Would you like me to suggest a specific rewrite for any section?`,

  'general': `I can help with various tasks including:

- Debugging your code and suggesting improvements
- Creating a personalized learning path based on your goals
- Providing feedback on your resume and projects
- Preparing you for technical interviews
- Answering questions about course material

Just let me know what you need help with!`
};

interface AIAssistantProps {
  className?: string;
  userType?: 'student' | 'faculty';
  courseContext?: string;
}

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  isCode?: boolean;
  category?: string;
  feedback?: 'positive' | 'negative';
  resolved?: boolean;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ 
  className, 
  userType = 'student', 
  courseContext 
}) => {
  const [input, setInput] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('chat');
  const [currentCategory, setCurrentCategory] = useState<string>('general');
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: '0',
      type: 'bot', 
      content: `Hi there! I'm your Campus Bridge AI Assistant. How can I help you today?${courseContext ? ` I see you're working on ${courseContext}.` : ''}`, 
      timestamp: new Date()
    }
  ]);
  const [doubts, setDoubts] = useState<Doubt[]>([]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Filter prompt templates based on user type
  const filteredPrompts = promptTemplates.filter(
    template => template.userType === userType || template.userType === 'both'
  );

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Generate a unique ID for the message
    const messageId = Date.now().toString();
    
    // Add user message
    const userMessage: Message = { 
      id: messageId,
      type: 'user', 
      content: input,
      timestamp: new Date(),
      isCode: input.includes('```') || /\b(function|const|let|var|if|for|while)\b/.test(input)
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    // Detect category based on content
    let detectedCategory = 'general';
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('code') || lowerInput.includes('error') || lowerInput.includes('bug') || lowerInput.includes('function')) {
      detectedCategory = 'coding';
    } else if (lowerInput.includes('learn') || lowerInput.includes('course') || lowerInput.includes('study') || lowerInput.includes('understand')) {
      detectedCategory = 'learning';
    } else if (lowerInput.includes('resume') || lowerInput.includes('cv') || lowerInput.includes('job') || lowerInput.includes('hire') || lowerInput.includes('interview')) {
      detectedCategory = 'resume';
    }
    
    setCurrentCategory(detectedCategory);
    
    // Simulate AI response with a delay
    setTimeout(() => {
      const botMessage: Message = { 
        id: `response-${messageId}`,
        type: 'bot', 
        content: mockResponses[detectedCategory],
        timestamp: new Date(),
        isCode: detectedCategory === 'coding',
        category: detectedCategory
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handlePromptTemplateClick = (prompt: string) => {
    setInput(prompt);
    // Focus the textarea
    const textarea = document.querySelector('textarea');
    if (textarea) {
      textarea.focus();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleMarkAsResolved = (messageId: string) => {
    setMessages(prev => 
      prev.map(msg => 
        msg.id === messageId ? { ...msg, resolved: true } : msg
      )
    );
    
    // Add to doubts
    const question = messages.find(m => m.id === messageId);
    const answer = messages.find(m => m.id === `response-${messageId}`);
    
    if (question && answer) {
      const newDoubt: Doubt = {
        id: `doubt-${Date.now()}`,
        userId: 'current-user',
        question: question.content,
        timestamp: new Date().toISOString(),
        status: 'resolved',
        aiResponse: answer.content,
        tags: [currentCategory]
      };
      
      setDoubts(prev => [newDoubt, ...prev]);
    }
  };

  const handleFeedback = (messageId: string, feedback: 'positive' | 'negative') => {
    setMessages(prev => 
      prev.map(msg => 
        msg.id === messageId ? { ...msg, feedback } : msg
      )
    );
  };

  // Format code blocks
  const formatMessage = (content: string) => {
    if (!content.includes('```')) return content;
    
    const parts = content.split(/```(?:javascript|js|typescript|ts|jsx|python|java|html|css)?([\s\S]*?)```/g);
    
    return parts.map((part, index) => {
      // Even indices are regular text, odd indices are code blocks
      if (index % 2 === 0) {
        return <span key={index}>{part}</span>;
      } else {
        return (
          <pre key={index} className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto my-2">
            <code>{part}</code>
          </pre>
        );
      }
    });
  };

  return (
    <Card className={`overflow-hidden ${className}`}>
      <CardHeader className="bg-gradient-to-r from-campus-blue to-blue-600 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Bot className="mr-2" size={20} />
            <CardTitle className="text-lg">AI Assistant</CardTitle>
          </div>
          <Badge className="bg-green-500/80">Online</Badge>
        </div>
      </CardHeader>
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <div className="flex border-b">
          <TabsList className="flex w-full bg-transparent h-auto p-0">
            <TabsTrigger value="chat" className="flex-1 rounded-none py-2 text-xs border-r data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
              <MessageSquareDashed size={14} className="mr-1" /> Chat
            </TabsTrigger>
            <TabsTrigger value="prompts" className="flex-1 rounded-none py-2 text-xs border-r data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
              <Lightbulb size={14} className="mr-1" /> Prompts
            </TabsTrigger>
            <TabsTrigger value="doubts" className="flex-1 rounded-none py-2 text-xs data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
              <CheckCircle2 size={14} className="mr-1" /> Resolved
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="chat" className="m-0">
          <CardContent className="p-0">
            <div className="h-[300px] overflow-y-auto p-4 space-y-3">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] p-3 rounded-lg ${
                      message.type === 'user' 
                        ? 'bg-campus-blue text-white rounded-tr-none' 
                        : 'bg-gray-100 rounded-tl-none'
                    } ${message.resolved ? 'border-2 border-green-400' : ''}`}
                  >
                    <div className="text-sm whitespace-pre-wrap">
                      {message.isCode ? formatMessage(message.content) : message.content}
                    </div>
                    
                    {/* Feedback and action buttons for bot messages */}
                    {message.type === 'bot' && message.category && (
                      <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-200">
                        <div className="flex space-x-2">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button 
                                  variant="ghost" 
                                  size="icon" 
                                  className="h-7 w-7 text-gray-500 hover:text-green-600"
                                  onClick={() => handleFeedback(message.id, 'positive')}
                                  data-state={message.feedback === 'positive' ? 'active' : 'inactive'}
                                >
                                  <ThumbsUp size={14} className={message.feedback === 'positive' ? 'text-green-600' : ''} />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>This was helpful</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                          
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button 
                                  variant="ghost" 
                                  size="icon" 
                                  className="h-7 w-7 text-gray-500 hover:text-red-600"
                                  onClick={() => handleFeedback(message.id, 'negative')}
                                  data-state={message.feedback === 'negative' ? 'active' : 'inactive'}
                                >
                                  <ThumbsDown size={14} className={message.feedback === 'negative' ? 'text-red-600' : ''} />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>This wasn't helpful</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        
                        {/* Mark as resolved button for paired messages */}
                        {message.id.startsWith('response-') && !message.resolved && (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  className="h-6 text-xs text-blue-600 hover:text-blue-800"
                                  onClick={() => handleMarkAsResolved(message.id.replace('response-', ''))}
                                >
                                  <CheckCircle2 size={12} className="mr-1" />
                                  Mark as resolved
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Save this Q&A to your resolved doubts</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 p-3 rounded-lg rounded-tl-none">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '200ms' }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '400ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            <CardFooter className="border-t p-3">
              <div className="flex w-full items-center space-x-2">
                <Textarea 
                  placeholder="Ask me anything... (press Enter to send)"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  className="min-h-[40px] flex-1 resize-none"
                  rows={2}
                />
                <Button 
                  disabled={!input.trim() || isTyping}
                  onClick={handleSend}
                  size="icon"
                  className="bg-campus-blue hover:bg-blue-700"
                >
                  {isTyping ? <RotateCw size={18} className="animate-spin" /> : <Send size={18} />}
                </Button>
              </div>
            </CardFooter>
          </CardContent>
        </TabsContent>
        
        <TabsContent value="prompts" className="m-0">
          <CardContent className="p-4">
            <h3 className="text-sm font-medium mb-3">Suggested Prompts</h3>
            
            <div className="space-y-4">
              {['coding', 'learning', 'career', 'teaching'].map(category => {
                const categoryPrompts = filteredPrompts.filter(p => p.category === category);
                if (categoryPrompts.length === 0) return null;
                
                return (
                  <div key={category} className="space-y-2">
                    <h4 className="text-xs font-medium text-gray-500 uppercase">
                      {category === 'coding' && <Code size={14} className="inline mr-1" />}
                      {category === 'learning' && <BookOpen size={14} className="inline mr-1" />}
                      {category === 'career' && <PenTool size={14} className="inline mr-1" />}
                      {category === 'teaching' && <GraduationCap size={14} className="inline mr-1" />}
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </h4>
                    
                    <div className="grid grid-cols-1 gap-2">
                      {categoryPrompts.map(prompt => (
                        <Button 
                          key={prompt.id}
                          variant="outline"
                          size="sm"
                          className="justify-start h-auto py-2 px-3 text-left text-xs"
                          onClick={() => handlePromptTemplateClick(prompt.prompt)}
                        >
                          {prompt.title}
                        </Button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
            
            {courseContext && contextualHelpData.courses[courseContext as keyof typeof contextualHelpData.courses] && (
              <div className="mt-6 border-t pt-4">
                <h3 className="text-sm font-medium mb-2">Common Questions for {courseContext}</h3>
                <div className="space-y-2">
                  {contextualHelpData.courses[courseContext as keyof typeof contextualHelpData.courses].commonQuestions.map((question, idx) => (
                    <Button 
                      key={idx}
                      variant="ghost"
                      size="sm"
                      className="justify-start w-full h-auto py-2 px-3 text-left text-xs"
                      onClick={() => handlePromptTemplateClick(question)}
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </TabsContent>
        
        <TabsContent value="doubts" className="m-0">
          <CardContent className="p-4">
            <h3 className="text-sm font-medium mb-3">Resolved Doubts</h3>
            
            {doubts.length === 0 && (
              <div className="text-center py-6 text-gray-500">
                <CheckCircle2 size={24} className="mx-auto mb-2" />
                <p className="text-sm">No resolved doubts yet. Mark conversations as resolved to save them here.</p>
              </div>
            )}
            
            <div className="space-y-3">
              {doubts.map((doubt) => (
                <div key={doubt.id} className="border rounded-lg p-3">
                  <div className="flex justify-between items-start">
                    <h4 className="text-sm font-medium">{doubt.question.length > 60 ? doubt.question.substring(0, 60) + '...' : doubt.question}</h4>
                    <Badge className="bg-green-100 text-green-800">{doubt.status}</Badge>
                  </div>
                  
                  {doubt.tags && doubt.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {doubt.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                  )}
                  
                  <p className="text-xs text-gray-500 mt-2">
                    Saved on {new Date(doubt.timestamp).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default AIAssistant;
