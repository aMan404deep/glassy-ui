import React from 'react';
import { cn } from '../utils/cn';
import '../styles/glass.css';
import { useTheme } from '../theme/ThemeProvider';

type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info';

interface GlassBadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
  pill?: boolean;
  dot?: boolean;
}

const GlassBadge: React.FC<GlassBadgeProps> = ({
  children,
  variant = 'default',
  className,
  pill = false,
  dot = false,
}) => {
  const { isDark } = useTheme();

  const variants: Record<BadgeVariant, string> = {
    default: isDark ? 'bg-white/10' : 'bg-white/20',
    success: isDark ? 'bg-green-500/20 text-green-200' : 'bg-green-500/20 text-green-50',
    warning: isDark ? 'bg-yellow-500/20 text-yellow-200' : 'bg-yellow-500/20 text-yellow-50',
    error: isDark ? 'bg-red-500/20 text-red-200' : 'bg-red-500/20 text-red-50',
    info: isDark ? 'bg-blue-500/20 text-blue-200' : 'bg-blue-500/20 text-blue-50',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center backdrop-blur-md border px-2 py-1 text-xs font-medium',
        variants[variant],
        pill ? 'rounded-full' : 'rounded-md',
        isDark ? 'border-white/10' : 'border-white/20',
        className
      )}
    >
      {dot && (
        <span
          className={cn(
            'w-2 h-2 rounded-full mr-1',
            variant === 'default' ? 'bg-white' : 
            variant === 'success' ? 'bg-green-400' :
            variant === 'warning' ? 'bg-yellow-400' :
            variant === 'error' ? 'bg-red-400' : 'bg-blue-400'
          )}
        />
      )}
      {children}
    </span>
  );
};

export default GlassBadge;