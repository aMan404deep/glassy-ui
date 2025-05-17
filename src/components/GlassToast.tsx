import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../utils/cn';
import '../styles/glass.css';
import { useTheme } from '../theme/ThemeProvider';

// Types
type ToastType = 'info' | 'success' | 'warning' | 'error';

interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
}

interface ToastContextType {
  showToast: (message: string, type?: ToastType, duration?: number) => void;
}

// Create context
const ToastContext = createContext<ToastContextType | undefined>(undefined);

// Toast Provider Component
export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const { isDark } = useTheme();

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback((message: string, type: ToastType = 'info', duration = 3000) => {
    const id = Date.now().toString();
    const newToast: Toast = {
      id,
      message,
      type,
      duration,
    };
    
    setToasts((prev) => [...prev, newToast]);
    
    if (duration !== Infinity) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }
  }, [removeToast]);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {typeof document !== 'undefined' &&
        createPortal(
          <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
            {toasts.map((toast) => (
              <GlassToast
                key={toast.id}
                toast={toast}
                onClose={() => removeToast(toast.id)}
                isDark={isDark}
              />
            ))}
          </div>,
          document.body
        )}
    </ToastContext.Provider>
  );
};

// Toast Component
interface GlassToastProps {
  toast: Toast;
  onClose: () => void;
  isDark: boolean;
}

const GlassToast: React.FC<GlassToastProps> = ({ toast, onClose, isDark }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    return () => setIsExiting(false);
  }, []);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(onClose, 300); // Match transition duration
  };

  // Type-specific styling
  const typeStyles = {
    info: isDark ? 'border-l-4 border-l-blue-400' : 'border-l-4 border-l-blue-300',
    success: isDark ? 'border-l-4 border-l-green-400' : 'border-l-4 border-l-green-300',
    warning: isDark ? 'border-l-4 border-l-yellow-400' : 'border-l-4 border-l-yellow-300',
    error: isDark ? 'border-l-4 border-l-red-400' : 'border-l-4 border-l-red-300',
  };

  const typeIcons = {
    info: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    success: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    warning: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    error: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  };

  return (
    <div
      className={cn(
        'glass px-4 py-3 w-72 flex items-center transition-all duration-300',
        typeStyles[toast.type],
        isDark ? 'shadow-lg' : 'shadow-xl',
        isExiting ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'
      )}
    >
      <div className="mr-3">{typeIcons[toast.type]}</div>
      <div className="flex-1">{toast.message}</div>
      <button
        onClick={handleClose}
        className="ml-2 text-white/70 hover:text-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

// Custom hook to use toast
export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};