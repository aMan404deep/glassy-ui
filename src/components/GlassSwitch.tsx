import React from 'react';
import { cn } from '../utils/cn';

interface GlassSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

const GlassSwitch: React.FC<GlassSwitchProps> = ({ checked, onChange, className }) => {
  return (
    <div
      className={cn(
        'w-12 h-6 flex items-center bg-white/10 rounded-full p-1 cursor-pointer transition-all backdrop-blur-sm',
        checked ? 'justify-end bg-green-400/20' : 'justify-start',
        className
      )}
      onClick={() => onChange(!checked)}
    >
      <div className="w-4 h-4 bg-white rounded-full shadow-md transition-all" />
    </div>
  );
};

export default GlassSwitch;
