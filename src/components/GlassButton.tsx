import React from 'react';
import { cn } from '../utils/cn';

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'soft' | 'frosted';
}

const GlassButton: React.FC<GlassButtonProps> = ({ variant = 'default', className, children, ...props }) => {
  const variants: Record<string, string> = {
    default: 'glass bg-white/10 hover:bg-white/20 text-white',
    outline: 'glass border border-white/50 text-white bg-transparent hover:bg-white/10',
    soft: 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-md shadow-lg',
    frosted: 'bg-white/5 text-white border border-white/20 shadow-xl backdrop-blur-xl',
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
