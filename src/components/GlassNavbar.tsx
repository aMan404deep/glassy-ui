import React from 'react';
import { cn } from '../utils/cn';

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
  return (
    <nav
      className={cn(
        'w-full flex items-center justify-between px-6 py-3 backdrop-blur-md bg-white/10 border-b border-white/20 text-white fixed top-0 left-0 z-50',
        className
      )}
    >
      <div className="text-xl font-bold">{logo || 'GlassyUI'}</div>
      <ul className="flex space-x-6">
        {items.map((item) => (
        <li key={`${item.label}-${item.href}`}>
            <a href={item.href} className="hover:text-white/80 transition-colors font-medium">
            {item.label}
            </a>
        </li>
        ))}
      </ul>
    </nav>
  );
};

export default GlassNavbar;
