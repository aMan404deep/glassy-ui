import React from 'react';
import { cn } from '../utils/cn';
import '../styles/glass.css';

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'soft' | 'frosted';
}

const GlassButton: React.FC<GlassButtonProps> = ({ 
  variant = 'default', 
  className, 
  children, 
  ...props 
}) => {
  const variants: Record<string, string> = {
    default: 'glass hover:bg-white/20',
    outline: 'glass border border-white/50 bg-transparent hover:bg-white/10',
    soft: 'glass backdrop-blur-md shadow-lg',
    frosted: 'glass border border-white/20 shadow-xl backdrop-blur-xl',
  };

  return (
    <button
      {...props}
      className={cn('rounded-lg px-4 py-2 font-medium transition-all', variants[variant], className)}
    >
      {children}
    </button>
  );
};

export default GlassButton;