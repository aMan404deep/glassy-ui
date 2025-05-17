import React from 'react';
import {
  GlassButton,
  GlassInput,
  GlassCard,
  GlassModal,
  GlassNavbar,
  GlassTooltip,
  GlassSwitch,
} from './components';
import { ThemeProvider, useTheme } from './theme/ThemeProvider';
import './styles/themes.css';
import './styles/glass.css';

const App = () => {
  const { theme, setTheme, isDark } = useTheme();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [switchOn, setSwitchOn] = React.useState(isDark); // Initialize based on theme

  // Update switch state whenever theme changes
  React.useEffect(() => {
    setSwitchOn(isDark);
  }, [isDark]);

  const handleThemeToggle = (checked: boolean) => {
    setSwitchOn(checked);
    setTheme(checked ? 'dark' : 'light');
  };

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  // Adjust background gradient based on theme
  const bgClasses = isDark 
    ? "bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155]" 
    : "bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]";

  return (
    <div className={`p-10 space-y-10 min-h-screen ${bgClasses} text-white`}>
      <GlassNavbar logo="GlassUI" items={navItems} />

      <GlassCard>
        <h2 className="text-2xl font-bold mb-4">Theme Switch</h2>
        <div className="flex items-center gap-2">
          <span>Light</span>
          <GlassSwitch checked={switchOn} onChange={handleThemeToggle} />
          <span>Dark</span>
        </div>
        <p className="mt-2 text-sm text-white/70">
          Current theme: <strong>{theme}</strong>
        </p>
      </GlassCard>

      <GlassCard>
        <h2 className="text-2xl font-bold mb-4">Glass Input</h2>
        <GlassInput label="Email" placeholder="Enter your email" />
      </GlassCard>

      <GlassCard>
        <h2 className="text-2xl font-bold mb-4">Glass Button + Modal</h2>
        <GlassButton onClick={() => setModalOpen(true)}>Open Modal</GlassButton>
        <GlassModal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Glass Modal">
          <p>This is a beautifully frosted glass modal box.</p>
        </GlassModal>
      </GlassCard>

      <GlassCard>
        <h2 className="text-2xl font-bold mb-4">Tooltip Example</h2>
        <GlassTooltip content="This is a tooltip!" position="top">
          <span className="underline cursor-help">Hover over me</span>
        </GlassTooltip>
      </GlassCard>
    </div>
  );
};

export default function WrappedApp() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}