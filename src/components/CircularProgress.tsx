
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
  style?: React.CSSProperties;
  showAnimation?: boolean;
  animationDuration?: number;
  trailColor?: string;
  innerContent?: React.ReactNode;
}

const CircularProgress = ({
  percentage,
  size = 100,
  strokeWidth = 6,
  color = 'stroke-campus-blue',
  trailColor = 'stroke-gray-200',
  label,
  labelClassName,
  className,
  style,
  showAnimation = true,
  animationDuration = 1000,
  innerContent,
}: CircularProgressProps) => {
  const [progress, setProgress] = useState(0);
  
  // Calculate circle properties
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  
  // Animate progress on mount and when percentage changes
  useEffect(() => {
    if (!showAnimation) {
      setProgress(percentage);
      return;
    }
    
    const timer = setTimeout(() => {
      setProgress(percentage);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [percentage, showAnimation]);

  return (
    <div className={cn("flex flex-col items-center justify-center", className)} style={style}>
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
            className={trailColor}
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
              transition: showAnimation ? `stroke-dashoffset ${animationDuration}ms ease-in-out` : "none"
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          {innerContent ? (
            innerContent
          ) : (
            <span className={cn("text-2xl font-bold", labelClassName)}>{percentage}%</span>
          )}
        </div>
      </div>
      {label && <span className="mt-2 text-sm font-medium text-gray-600">{label}</span>}
    </div>
  );
};

export default CircularProgress;
