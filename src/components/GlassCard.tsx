import React from 'react';
import { cn } from '../utils/cn';
import '../styles/glass.css';

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
        'glass rounded-xl p-6 transition-all',
        shadow && 'shadow-xl',
        hoverEffect && 'hover:scale-[1.02]',
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;