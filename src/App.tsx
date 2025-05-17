import React, { useState } from 'react';
import {
  GlassButton,
  GlassInput,
  GlassCard,
  GlassModal,
  GlassNavbar,
  GlassTooltip,
  GlassSwitch,
  GlassSelect,
  GlassAccordion,
  GlassTabs,
  GlassBadge,
  GlassSpinner,
  ToastProvider,
  useToast
} from './components';
import { ThemeProvider, useTheme } from './theme/ThemeProvider';
import './styles/themes.css';
import './styles/glass.css';

// Showcase component to be wrapped with providers
const GlassUIShowcase = () => {
  const { theme, setTheme, isDark } = useTheme();
  const { showToast } = useToast();
  
  // Component state
  const [modalOpen, setModalOpen] = useState(false);
  const [switchOn, setSwitchOn] = useState(isDark);
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [showSpinner, setShowSpinner] = useState(false);
  
  // Update switch state whenever theme changes
  React.useEffect(() => {
    setSwitchOn(isDark);
  }, [isDark]);

  const handleThemeToggle = (checked: boolean) => {
    setSwitchOn(checked);
    setTheme(checked ? 'dark' : 'light');
  };

  const handleShowToast = (type: 'info' | 'success' | 'warning' | 'error') => {
    const messages = {
      info: 'This is an information message',
      success: 'Operation completed successfully!',
      warning: 'Please proceed with caution',
      error: 'An error has occurred'
    };
    
    showToast(messages[type], type);
  };

  // Sample data for components
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Components', href: '#components' },
    { label: 'Docs', href: '#docs' },
    { label: 'About', href: '#about' },
  ];

  const selectOptions = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
  ];

  const accordionItems = [
    {
      id: 'accordion-1',
      title: 'What is GlassyUI?',
      content: (
        <p>GlassyUI is a modern React component library featuring beautiful glassmorphism-styled UI elements for creating stunning web applications.</p>
      ),
    },
    {
      id: 'accordion-2',
      title: 'How to install?',
      content: (
        <p>You can install GlassyUI using npm or yarn: <code>npm install glassy-ui</code></p>
      ),
    },
    {
      id: 'accordion-3',
      title: 'Supported frameworks?',
      content: (
        <p>GlassyUI is built for React applications and works with modern React versions (16.8+ with hooks support).</p>
      ),
    },
  ];

  const tabItems = [
    {
      id: 'tab-1',
      label: 'Overview',
      content: (
        <div>
          <h3 className="text-xl font-semibold mb-2">GlassyUI Overview</h3>
          <p>A collection of beautiful, modern UI components with a glass-like appearance.</p>
        </div>
      ),
    },
    {
      id: 'tab-2',
      label: 'Features',
      content: (
        <div>
          <h3 className="text-xl font-semibold mb-2">Key Features</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Modern glassmorphism design</li>
            <li>Customizable themes</li>
            <li>Responsive components</li>
            <li>TypeScript support</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'tab-3',
      label: 'Usage',
      content: (
        <div>
          <h3 className="text-xl font-semibold mb-2">Basic Usage</h3>
          <p>Import components from GlassyUI and start building beautiful interfaces.</p>
          <pre className="bg-black/30 p-2 mt-2 rounded">
            {`import { GlassButton } from 'glassy-ui';\n\n<GlassButton>Click Me</GlassButton>`}
          </pre>
        </div>
      ),
    },
  ];

  // Adjust background gradient based on theme
  const bgClasses = isDark 
    ? "bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155]" 
    : "bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]";

  return (
    <div className={`min-h-screen ${bgClasses} text-white pb-20`}>
      <GlassNavbar logo="GlassyUI" items={navItems} />
      
      <div className="container mx-auto max-w-6xl px-6 pt-24 pb-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">GlassyUI</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            A modern React component library featuring beautiful glassmorphism-styled UI elements
          </p>
        </div>

        {/* Theme Control */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Theme</h2>
          <GlassCard className="flex items-center justify-center p-10">
            <div className="flex items-center gap-3">
              <span className="text-lg">Light</span>
              <GlassSwitch checked={switchOn} onChange={handleThemeToggle} />
              <span className="text-lg">Dark</span>
            </div>
          </GlassCard>
        </section>

        {/* Buttons */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Buttons</h2>
          <GlassCard>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Variants</h3>
                <div className="flex flex-wrap gap-4">
                  <GlassButton variant="default">Default</GlassButton>
                  <GlassButton variant="outline">Outline</GlassButton>
                  <GlassButton variant="soft">Soft</GlassButton>
                  <GlassButton variant="frosted">Frosted</GlassButton>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Actions</h3>
                <div className="flex flex-wrap gap-4">
                  <GlassButton onClick={() => setModalOpen(true)}>Open Modal</GlassButton>
                  <GlassButton onClick={() => setShowSpinner(true)}>Show Spinner</GlassButton>
                  <GlassButton 
                    onClick={() => handleShowToast('success')}
                    variant="frosted"
                  >
                    Show Toast
                  </GlassButton>
                </div>
              </div>
            </div>
          </GlassCard>
        </section>

        {/* Forms */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Form Controls</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlassCard>
              <h3 className="text-xl font-semibold mb-4">Input</h3>
              <GlassInput 
                label="Username" 
                placeholder="Enter your username" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </GlassCard>
            
            <GlassCard>
              <h3 className="text-xl font-semibold mb-4">Select</h3>
              <GlassSelect
                label="Framework"
                options={selectOptions}
                value={selectValue}
                onChange={setSelectValue}
                placeholder="Choose a framework"
              />
            </GlassCard>
            
            <GlassCard>
              <h3 className="text-xl font-semibold mb-4">Switch</h3>
              <div className="flex items-center gap-2">
                <span>Disabled</span>
                <GlassSwitch checked={switchOn} onChange={setSwitchOn} />
                <span>Enabled</span>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Badges */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Badges</h2>
          <GlassCard>
            <div className="space-y-6 p-6">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Standard Badges</h3>
                <div className="flex flex-wrap gap-3">
                  <GlassBadge>Default</GlassBadge>
                  <GlassBadge variant="success">Success</GlassBadge>
                  <GlassBadge variant="warning">Warning</GlassBadge>
                  <GlassBadge variant="error">Error</GlassBadge>
                  <GlassBadge variant="info">Info</GlassBadge>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Pill Badges</h3>
                <div className="flex flex-wrap gap-3">
                  <GlassBadge pill>Default</GlassBadge>
                  <GlassBadge pill variant="success">Success</GlassBadge>
                  <GlassBadge pill variant="warning">Warning</GlassBadge>
                  <GlassBadge pill variant="error">Error</GlassBadge>
                  <GlassBadge pill variant="info">Info</GlassBadge>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">With Dot</h3>
                <div className="flex flex-wrap gap-3">
                  <GlassBadge dot>Default</GlassBadge>
                  <GlassBadge dot variant="success">Success</GlassBadge>
                  <GlassBadge dot variant="warning">Warning</GlassBadge>
                  <GlassBadge dot variant="error">Error</GlassBadge>
                  <GlassBadge dot variant="info">Info</GlassBadge>
                </div>
              </div>
            </div>
          </GlassCard>
        </section>

        {/* Cards, Accordion & Tabs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Information Display</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <GlassCard shadow hoverEffect>
                <h3 className="text-xl font-semibold mb-4">Interactive Card</h3>
                <p>This card has a hover effect and shadow.</p>
              </GlassCard>
              
              <GlassAccordion items={accordionItems} />
            </div>
            
            <div>
              <GlassTabs tabs={tabItems} />
            </div>
          </div>
        </section>

        {/* Tooltips */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Tooltips</h2>
          <GlassCard className="p-10 flex justify-center">
            <div className="flex flex-wrap gap-12">
              <GlassTooltip content="Top tooltip" position="top">
                <GlassButton>Hover Me (Top)</GlassButton>
              </GlassTooltip>
              
              <GlassTooltip content="Bottom tooltip" position="bottom">
                <GlassButton>Hover Me (Bottom)</GlassButton>
              </GlassTooltip>
              
              <GlassTooltip content="Left tooltip" position="left">
                <GlassButton>Hover Me (Left)</GlassButton>
              </GlassTooltip>
              
              <GlassTooltip content="Right tooltip with more content to show" position="right">
                <GlassButton>Hover Me (Right)</GlassButton>
              </GlassTooltip>
            </div>
          </GlassCard>
        </section>

        {/* Toast Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Toast Notifications</h2>
          <GlassCard className="p-6">
            <div className="flex flex-wrap gap-4">
              <GlassButton onClick={() => handleShowToast('info')}>
                Info Toast
              </GlassButton>
              <GlassButton onClick={() => handleShowToast('success')}>
                Success Toast
              </GlassButton>
              <GlassButton onClick={() => handleShowToast('warning')}>
                Warning Toast
              </GlassButton>
              <GlassButton onClick={() => handleShowToast('error')}>
                Error Toast
              </GlassButton>
            </div>
          </GlassCard>
        </section>

        {/* Spinner */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Spinners</h2>
          <GlassCard className="p-6">
            <div className="flex flex-wrap items-center justify-around gap-6">
              <div className="flex flex-col items-center">
                <p className="mb-3">Small</p>
                <GlassSpinner size="small" />
              </div>
              <div className="flex flex-col items-center">
                <p className="mb-3">Medium</p>
                <GlassSpinner size="medium" />
              </div>
              <div className="flex flex-col items-center">
                <p className="mb-3">Large</p>
                <GlassSpinner size="large" />
              </div>
              <div className="flex flex-col items-center">
                <p className="mb-3">With Label</p>
                <GlassSpinner label="Loading..." />
              </div>
            </div>
          </GlassCard>
        </section>
      </div>

      {/* Modal Demo */}
      <GlassModal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Glass Modal">
        <div className="space-y-4">
          <p>This is a beautiful glassmorphism modal that can be used for various purposes.</p>
          <p>It captures focus and provides an accessible way to display important information or gather user input.</p>
          <div className="flex justify-end mt-4">
            <GlassButton onClick={() => setModalOpen(false)}>Close</GlassButton>
          </div>
        </div>
      </GlassModal>

      {/* Fullscreen Spinner Demo */}
      {showSpinner && (
        <GlassSpinner 
          fullscreen
          size="large"
          label="Loading..."
        />
      )}
      {/* Auto-hide spinner after 2 seconds */}
      {React.useEffect(() => {
        if (showSpinner) {
          const timer = setTimeout(() => {
            setShowSpinner(false);
          }, 2000);
          return () => clearTimeout(timer);
        }
      }, [showSpinner])}
    </div>
  );
};

// Wrap with necessary providers
const App = () => {
  return (
    <ThemeProvider>
      <ToastProvider>
        <GlassUIShowcase />
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;