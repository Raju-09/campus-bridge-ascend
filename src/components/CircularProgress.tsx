
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface CircularProgressProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  label?: string;
  labelClassName?: string;
  className?: string;
}

const CircularProgress = ({
  percentage,
  size = 100,
  strokeWidth = 6,
  color = 'stroke-campus-blue',
  label,
  labelClassName,
  className,
}: CircularProgressProps) => {
  const [progress, setProgress] = useState(0);
  
  // Calculate circle properties
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  
  // Animate progress on mount and when percentage changes
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(percentage);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          className="progress-circle"
        >
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            className="stroke-gray-200"
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            className={color}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{
              transition: "stroke-dashoffset 1s ease-in-out"
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={cn("text-2xl font-bold", labelClassName)}>{percentage}%</span>
        </div>
      </div>
      {label && <span className="mt-2 text-sm font-medium text-gray-600">{label}</span>}
    </div>
  );
};

export default CircularProgress;
