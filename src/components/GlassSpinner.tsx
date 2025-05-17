import React from 'react';
import { cn } from '../utils/cn';
import '../styles/glass.css';
import { useTheme } from '../theme/ThemeProvider';

interface GlassSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
  label?: string;
  fullscreen?: boolean;
}

const GlassSpinner: React.FC<GlassSpinnerProps> = ({
  size = 'medium',
  className,
  label,
  fullscreen = false,
}) => {
  const { isDark } = useTheme();
  
  const sizeClasses = {
    small: 'w-4 h-4 border-2',
    medium: 'w-8 h-8 border-2',
    large: 'w-12 h-12 border-3',
  };

  const Spinner = (
    <div
      className={cn(
        'relative rounded-full animate-spin',
        sizeClasses[size],
        isDark 
          ? 'border-t-blue-300 border-blue-400/20' 
          : 'border-t-white border-white/20',
        className
      )}
    />
  );

  if (fullscreen) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm">
        <div className="glass px-6 py-4 rounded-xl flex flex-col items-center gap-3">
          {Spinner}
          {label && <span className="text-sm font-medium">{label}</span>}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-2">
      {Spinner}
      {label && <span className="text-sm font-medium">{label}</span>}
    </div>
  );
};

export default GlassSpinner;