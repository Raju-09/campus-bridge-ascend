
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  description?: string;
  className?: string;
  style?: React.CSSProperties;
}

const StatCard = ({
  title,
  value,
  icon,
  trend,
  description,
  className,
  style,
}: StatCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-lg p-6 shadow-sm transition-all duration-300 card-hover animate-fade-in",
        className
      )}
      style={style}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        {icon && (
          <div className="p-2 bg-blue-50 rounded-full">
            {icon}
          </div>
        )}
      </div>
      
      <div className="flex items-end space-x-1">
        <h2 className="text-3xl font-bold">{value}</h2>
        
        {trend && (
          <div className={cn(
            "flex items-center text-xs font-medium",
            trend.isPositive ? "text-green-600" : "text-red-600"
          )}>
            {trend.isPositive ? (
              <ArrowUp size={12} className="mr-1" />
            ) : (
              <ArrowDown size={12} className="mr-1" />
            )}
            {Math.abs(trend.value)}%
          </div>
        )}
      </div>
      
      {description && (
        <p className="text-xs text-gray-500 mt-1">{description}</p>
      )}
    </div>
  );
};

export default StatCard;
