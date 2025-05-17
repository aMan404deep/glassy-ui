// src/theme/ThemeProvider.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import '../styles/themes.css'; // Make sure we import the theme styles

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');
  
  // Computed property to easily check if we're in dark mode
  const isDark = theme === 'dark';

  useEffect(() => {
    // Try to get stored theme preference from localStorage
    const storedTheme = localStorage.getItem('glass-ui-theme') as Theme | null;
    if (storedTheme && (storedTheme === 'light' || storedTheme === 'dark')) {
      setTheme(storedTheme);
    }

    // Or use system preference as fallback
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []); // Only run once on component mount

  useEffect(() => {
    const root = document.documentElement;
    
    // Remove both theme classes first
    root.classList.remove('theme-light', 'theme-dark');
    
    // Add the current theme class
    root.classList.add(`theme-${theme}`);
    
    // Store the preference
    localStorage.setItem('glass-ui-theme', theme);
    
    // Also set a data attribute for easier CSS targeting
    root.setAttribute('data-theme', theme);
  }, [theme]);

  const value = {
    theme,
    setTheme,
    isDark
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};