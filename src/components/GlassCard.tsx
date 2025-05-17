import React from 'react';
import { cn } from '../utils/cn';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  shadow?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  hoverEffect = true,
  shadow = true,
}) => {
  return (
    <div
      className={cn(
        'rounded-xl p-6 bg-white/10 backdrop-blur-lg border border-white/20 text-white transition-all',
        shadow && 'shadow-xl',
        hoverEffect && 'hover:scale-[1.02] hover:bg-white/15',
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;
