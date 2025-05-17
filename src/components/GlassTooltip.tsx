import React, { useState } from 'react';
import { cn } from '../utils/cn';

interface GlassTooltipProps {
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  className?: string;
}

const GlassTooltip: React.FC<GlassTooltipProps> = ({
  content,
  position = 'top',
  children,
  className,
}) => {
  const [hover, setHover] = useState(false);

  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  return (
    <div className="relative inline-block" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {hover && (
        <div
          className={cn(
            'absolute z-50 px-3 py-1 text-sm text-white bg-white/10 backdrop-blur-lg border border-white/20 rounded shadow-md transition-all',
            positionClasses[position],
            className
          )}
        >
          {content}
        </div>
      )}
      {children}
    </div>
  );
};

export default GlassTooltip;
