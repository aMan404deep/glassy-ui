import React from 'react';
import { cn } from '../utils/cn';
import '../styles/glass.css';
import { useTheme } from '../theme/ThemeProvider';

interface GlassSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

const GlassSwitch: React.FC<GlassSwitchProps> = ({ checked, onChange, className }) => {
  const { isDark } = useTheme();
  
  // Add theme-specific styling
  const bgColor = checked 
    ? isDark ? 'bg-blue-400/20' : 'bg-green-400/20'
    : 'bg-white/10';
    
  return (
    <div
      className={cn(
        'w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-all backdrop-blur-sm',
        bgColor,
        checked ? 'justify-end' : 'justify-start',
        className
      )}
      onClick={() => onChange(!checked)}
      role="switch"
      aria-checked={checked}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onChange(!checked);
          e.preventDefault();
        }
      }}
    >
      <div 
        className={cn(
          'w-4 h-4 rounded-full shadow-md transition-all',
          checked 
            ? isDark ? 'bg-blue-200' : 'bg-green-200' 
            : 'bg-white'
        )} 
      />
    </div>
  );
};

export default GlassSwitch;