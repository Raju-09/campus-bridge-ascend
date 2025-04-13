
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Brain, Book, Code, Check, Lock, ExternalLink } from 'lucide-react';

interface KnowledgeNode {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'locked';
  type: 'concept' | 'quiz' | 'practice';
  dependencies: string[];
  position: { x: number; y: number };
}

interface KnowledgeGraphProps {
  subject: string;
  nodes: KnowledgeNode[];
}

const KnowledgeGraph: React.FC<KnowledgeGraphProps> = ({ subject, nodes }) => {
  const [selectedNode, setSelectedNode] = useState<KnowledgeNode | null>(null);
  
  const getNodeStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 border-green-400 text-green-700';
      case 'in-progress':
        return 'bg-blue-100 border-blue-400 text-blue-700';
      case 'locked':
        return 'bg-gray-100 border-gray-400 text-gray-500';
      default:
        return 'bg-gray-100 border-gray-400';
    }
  };

  const getNodeIcon = (type: string) => {
    switch (type) {
      case 'concept':
        return <Brain className="h-4 w-4" />;
      case 'quiz':
        return <Book className="h-4 w-4" />;
      case 'practice':
        return <Code className="h-4 w-4" />;
      default:
        return <Brain className="h-4 w-4" />;
    }
  };

  const getNodeTypeText = (type: string) => {
    switch (type) {
      case 'concept':
        return 'Learning Concept';
      case 'quiz':
        return 'Knowledge Quiz';
      case 'practice':
        return 'Coding Practice';
      default:
        return 'Topic';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <Check className="h-4 w-4 mr-1 text-green-600" />;
      case 'in-progress':
        return <ExternalLink className="h-4 w-4 mr-1 text-blue-600" />;
      case 'locked':
        return <Lock className="h-4 w-4 mr-1 text-gray-500" />;
      default:
        return null;
    }
  };

  // Draw lines between connected nodes
  const renderConnections = () => {
    return nodes.map((node) => {
      return node.dependencies.map((depId) => {
        const dependencyNode = nodes.find((n) => n.id === depId);
        if (!dependencyNode) return null;

        const x1 = node.position.x;
        const y1 = node.position.y;
        const x2 = dependencyNode.position.x;
        const y2 = dependencyNode.position.y;

        return (
          <line
            key={`${node.id}-${depId}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={node.status === 'locked' ? '#CBD5E0' : '#3182CE'}
            strokeWidth={2}
            strokeDasharray={node.status === 'locked' ? '5,5' : ''}
          />
        );
      });
    });
  };

  return (
    <Card className="animate-fade-in">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl">Knowledge Map: {subject}</CardTitle>
        <div className="flex gap-2">
          <Badge variant="outline" className="flex items-center">
            <Check className="h-3 w-3 mr-1 text-green-600" />
            Completed
          </Badge>
          <Badge variant="outline" className="flex items-center">
            <ExternalLink className="h-3 w-3 mr-1 text-blue-600" />
            In Progress
          </Badge>
          <Badge variant="outline" className="flex items-center">
            <Lock className="h-3 w-3 mr-1 text-gray-500" />
            Locked
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative h-[500px] border border-gray-200 rounded-md overflow-hidden bg-gray-50">
          {/* SVG for connections */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
            {renderConnections()}
          </svg>
          
          {/* Knowledge nodes */}
          <div className="absolute inset-0">
            {nodes.map((node) => (
              <Popover key={node.id}>
                <PopoverTrigger asChild>
                  <div
                    className={`absolute cursor-pointer rounded-lg border-2 p-3 shadow-sm transition-all hover:shadow-md ${getNodeStatusColor(node.status)}`}
                    style={{ 
                      left: `${node.position.x - 50}px`, 
                      top: `${node.position.y - 25}px`,
                      width: '100px',
                      opacity: node.status === 'locked' ? 0.6 : 1
                    }}
                    onClick={() => setSelectedNode(node)}
                  >
                    <div className="flex items-center justify-center mb-1">
                      {getNodeIcon(node.type)}
                    </div>
                    <div className="text-center text-sm font-medium">{node.title}</div>
                  </div>
                </PopoverTrigger>
                <PopoverContent className="w-80 p-0">
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{node.title}</h3>
                      <Badge variant="secondary" className="ml-2">
                        {getNodeTypeText(node.type)}
                      </Badge>
                    </div>
                    <div className="flex items-center mt-1 text-sm">
                      {getStatusIcon(node.status)}
                      <span className="capitalize">{node.status.replace('-', ' ')}</span>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">{node.description}</p>
                    <div className="mt-4">
                      <Button 
                        className="w-full" 
                        disabled={node.status === 'locked'}
                      >
                        {node.status === 'completed' ? 'Review Again' : node.status === 'in-progress' ? 'Continue' : 'Unlock'}
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default KnowledgeGraph;
