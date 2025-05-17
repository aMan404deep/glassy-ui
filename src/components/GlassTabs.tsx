import React, { useState } from 'react';
import { cn } from '../utils/cn';
import '../styles/glass.css';
import { useTheme } from '../theme/ThemeProvider';

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface GlassTabsProps {
  tabs: TabItem[];
  defaultTab?: string;
  className?: string;
}

const GlassTabs: React.FC<GlassTabsProps> = ({
  tabs,
  defaultTab,
  className,
}) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab || (tabs.length > 0 ? tabs[0].id : ''));
  const { isDark } = useTheme();

  return (
    <div className={cn('flex flex-col', className)}>
      <div className={cn(
        'glass flex rounded-t-lg overflow-hidden',
        isDark ? 'border-b border-white/15' : 'border-b border-white/20'
      )}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'px-4 py-2 font-medium transition-all',
              activeTab === tab.id
                ? isDark 
                  ? 'bg-blue-500/20 border-b-2 border-blue-400' 
                  : 'bg-white/20 border-b-2 border-white'
                : 'hover:bg-white/10'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="glass rounded-b-lg p-4">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default GlassTabs;