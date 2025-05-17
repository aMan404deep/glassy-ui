import React from 'react';
import { cn } from '../utils/cn';

interface GlassInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const GlassInput: React.FC<GlassInputProps> = ({ label, error, className, ...props }) => {
  return (
    <div className="flex flex-col space-y-1">
      {label && <label className="text-white font-medium">{label}</label>}
      <input
        {...props}
        className={cn(
          'rounded-md px-4 py-2 bg-white/10 text-white placeholder-white/70 outline-none backdrop-blur-md',
          'focus:ring-2 focus:ring-white/40 transition-all',
          error ? 'border border-red-400' : 'border border-white/20',
          className
        )}
      />
      {error && <span className="text-sm text-red-300">{error}</span>}
    </div>
  );
};

export default GlassInput;
