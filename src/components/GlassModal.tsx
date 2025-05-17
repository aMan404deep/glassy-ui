import React from 'react';
import { cn } from '../utils/cn';
import '../styles/glass.css';
import { useTheme } from '../theme/ThemeProvider';

interface GlassModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const GlassModal: React.FC<GlassModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className,
}) => {
  const { isDark } = useTheme();
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div
        className={cn(
          'glass rounded-xl p-6 max-w-lg w-full relative',
          isDark ? 'shadow-lg' : 'shadow-xl',
          className
        )}
      >
        {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
        <button
          className={cn(
            "absolute top-3 right-4 text-lg",
            isDark ? 'text-white/60 hover:text-blue-200' : 'text-white/70 hover:text-white'
          )}
          onClick={onClose}
        >
          ×
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default GlassModal;