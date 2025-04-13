
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Bot, Send, RotateCw, Code, BookOpen, GraduationCap, PenTool } from 'lucide-react';

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
}

const AIAssistant: React.FC<AIAssistantProps> = ({ className }) => {
  const [input, setInput] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [messages, setMessages] = useState<Array<{type: string; content: string}>>([
    { type: 'bot', content: "Hi there! I'm your Campus Bridge AI Assistant. How can I help you today?" }
  ]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { type: 'user', content: input }]);
    setInput('');
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      let responseContent = mockResponses.general;
      
      // Simple keyword matching
      const lowerInput = input.toLowerCase();
      if (lowerInput.includes('code') || lowerInput.includes('error') || lowerInput.includes('bug') || lowerInput.includes('function')) {
        responseContent = mockResponses.coding;
      } else if (lowerInput.includes('learn') || lowerInput.includes('course') || lowerInput.includes('study') || lowerInput.includes('understand')) {
        responseContent = mockResponses.learning;
      } else if (lowerInput.includes('resume') || lowerInput.includes('cv') || lowerInput.includes('job') || lowerInput.includes('hire')) {
        responseContent = mockResponses.resume;
      }
      
      setMessages(prev => [...prev, { type: 'bot', content: responseContent }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Card className={`overflow-hidden ${className}`}>
      <CardHeader className="bg-gradient-to-r from-campus-blue to-blue-600 text-white">
        <div className="flex items-center">
          <Bot className="mr-2" size={20} />
          <CardTitle className="text-lg">AI Assistant</CardTitle>
        </div>
      </CardHeader>
      
      <CardContent className="p-0">
        <div className="flex border-b">
          <Button variant="ghost" className="flex-1 rounded-none py-2 text-xs border-r">
            <Code size={14} className="mr-1" /> Code Help
          </Button>
          <Button variant="ghost" className="flex-1 rounded-none py-2 text-xs border-r">
            <BookOpen size={14} className="mr-1" /> Learning
          </Button>
          <Button variant="ghost" className="flex-1 rounded-none py-2 text-xs border-r">
            <GraduationCap size={14} className="mr-1" /> Courses
          </Button>
          <Button variant="ghost" className="flex-1 rounded-none py-2 text-xs">
            <PenTool size={14} className="mr-1" /> Resume
          </Button>
        </div>
        
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
                }`}
              >
                <div className="text-sm whitespace-pre-wrap">{message.content}</div>
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
        </div>
      </CardContent>
      
      <CardFooter className="border-t p-3">
        <div className="flex w-full items-center space-x-2">
          <Textarea 
            placeholder="Ask me anything... (press Enter to send)"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            className="min-h-[40px] flex-1 resize-none"
            maxRows={3}
          />
          <Button 
            disabled={!input.trim()}
            onClick={handleSend}
            size="icon"
            className="bg-campus-blue hover:bg-blue-700"
          >
            <Send size={18} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AIAssistant;
