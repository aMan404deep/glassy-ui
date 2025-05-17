import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../utils/cn';
import '../styles/glass.css';
import { useTheme } from '../theme/ThemeProvider';

interface Option {
  value: string;
  label: string;
}

interface GlassSelectProps {
  options: Option[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  className?: string;
  disabled?: boolean;
}

const GlassSelect: React.FC<GlassSelectProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  label,
  className,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | undefined>(
    options.find(option => option.value === value)
  );
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { isDark } = useTheme();

  useEffect(() => {
    setSelectedOption(options.find(option => option.value === value));
  }, [value, options]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col space-y-1">
      {label && <label className="font-medium">{label}</label>}
      <div className="relative" ref={dropdownRef}>
        <button
          className={cn(
            'glass w-full px-4 py-2 rounded-md outline-none text-left flex justify-between items-center',
            'focus:ring-2 transition-all',
            isDark 
              ? 'border border-white/15 focus:ring-blue-400/30' 
              : 'border border-white/20 focus:ring-white/40',
            disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer',
            className
          )}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <span>{selectedOption ? selectedOption.label : placeholder}</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={cn("h-4 w-4 transition-transform", isOpen ? "rotate-180" : "")} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {isOpen && (
          <div 
            className={cn(
              'glass absolute z-50 mt-1 w-full rounded-md overflow-hidden max-h-60 overflow-y-auto',
              isDark ? 'border border-white/15' : 'border border-white/20'
            )}
            role="listbox"
          >
            {options.map((option) => (
              <div
                key={option.value}
                className={cn(
                  'px-4 py-2 cursor-pointer transition-colors',
                  selectedOption?.value === option.value
                    ? isDark ? 'bg-blue-500/20' : 'bg-white/20'
                    : 'hover:bg-white/10'
                )}
                onClick={() => handleSelect(option)}
                role="option"
                aria-selected={selectedOption?.value === option.value}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GlassSelect;