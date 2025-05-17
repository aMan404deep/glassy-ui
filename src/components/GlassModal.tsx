import React from 'react';
import { cn } from '../utils/cn';

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
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div
        className={cn(
          'bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-6 max-w-lg w-full text-white relative',
          className
        )}
      >
        {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
        <button
          className="absolute top-3 right-4 text-white/70 hover:text-white text-lg"
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
