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
  // Define base classes for all buttons
  const baseClasses = 'rounded-lg px-4 py-2 font-medium transition-all duration-300';
  
  // Define dramatically different variant classes
  let variantClasses = '';
  
  switch (variant) {
    case 'outline':
      variantClasses = 'bg-transparent border-2 border-white/70 text-white hover:bg-white/20 hover:border-white hover:shadow-lg';
      break;
    case 'soft':
      variantClasses = 'glass bg-white/10 text-white/90 shadow-md backdrop-blur-sm hover:bg-white/25 hover:text-white hover:shadow-lg';
      break;
    case 'frosted':
      variantClasses = 'glass bg-white/20 border border-white/30 backdrop-blur-xl shadow-xl hover:bg-white/30 hover:shadow-2xl';
      break;
    case 'default':
    default:
      variantClasses = 'glass bg-white/5 hover:bg-white/15 hover:shadow-md';
      break;
  }

  return (
    <button
      {...props}
      className={cn(baseClasses, variantClasses, className)}
    >
      {children}
    </button>
  );
};

export default GlassButton;