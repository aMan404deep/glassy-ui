import React from 'react';
import { cn } from '../utils/cn';
import '../styles/glass.css';
import { useTheme } from '../theme/ThemeProvider';

interface GlassInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const GlassInput: React.FC<GlassInputProps> = ({ label, error, className, ...props }) => {
  const { isDark } = useTheme();
  
  return (
    <div className="flex flex-col space-y-1">
      {label && <label className="font-medium">{label}</label>}
      <input
        {...props}
        className={cn(
          'glass px-4 py-2 rounded-md placeholder-white/70 outline-none',
          'focus:ring-2 transition-all',
          isDark 
            ? 'border border-white/15 focus:ring-blue-400/30' 
            : 'border border-white/20 focus:ring-white/40',
          error ? 'border-red-400' : '',
          className
        )}
      />
      {error && <span className="text-sm text-red-300">{error}</span>}
    </div>
  );
};

export default GlassInput;