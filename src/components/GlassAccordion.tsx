import React, { useState } from 'react';
import { cn } from '../utils/cn';
import '../styles/glass.css';
import { useTheme } from '../theme/ThemeProvider';

interface AccordionItem {
  title: string;
  content: React.ReactNode;
  id: string;
}

interface GlassAccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

const GlassAccordion: React.FC<GlassAccordionProps> = ({
  items,
  allowMultiple = false,
  className,
}) => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const { isDark } = useTheme();

  const toggleItem = (id: string) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter(item => item !== id));
    } else {
      if (allowMultiple) {
        setOpenItems([...openItems, id]);
      } else {
        setOpenItems([id]);
      }
    }
  };

  return (
    <div className={cn('space-y-2', className)}>
      {items.map((item) => {
        const isOpen = openItems.includes(item.id);
        
        return (
          <div 
            key={item.id} 
            className={cn(
              'glass overflow-hidden transition-all', 
              isDark ? 'border border-white/15' : 'border border-white/20'
            )}
          >
            <button
              className="w-full px-4 py-3 flex justify-between items-center text-left font-medium"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
            >
              {item.title}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={cn('h-4 w-4 transition-transform', isOpen ? 'rotate-180' : '')}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={cn(
                'px-4 transition-all duration-300 ease-in-out overflow-hidden',
                isOpen ? 'max-h-96 py-3 opacity-100' : 'max-h-0 py-0 opacity-0'
              )}
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GlassAccordion;