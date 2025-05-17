import React from 'react';
import { cn } from '../utils/cn';
import '../styles/glass.css';
import { useTheme } from '../theme/ThemeProvider';

interface NavItem {
  label: string;
  href: string;
}

interface GlassNavbarProps {
  logo?: string;
  items: NavItem[];
  className?: string;
}

const GlassNavbar: React.FC<GlassNavbarProps> = ({ logo, items, className }) => {
  const { isDark } = useTheme();
  
  return (
    <nav
      className={cn(
        'glass w-full flex items-center justify-between px-6 py-3 fixed top-0 left-0 z-50',
        'border-b',
        isDark ? 'border-white/15' : 'border-white/20',
        className
      )}
    >
      <div className="text-xl font-bold">{logo || 'GlassyUI'}</div>
      <ul className="flex space-x-6">
        {items.map((item) => (
          <li key={`${item.label}-${item.href}`}>
            <a 
              href={item.href} 
              className={cn(
                "transition-colors font-medium",
                isDark ? 'hover:text-blue-200' : 'hover:text-white/80'
              )}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default GlassNavbar;