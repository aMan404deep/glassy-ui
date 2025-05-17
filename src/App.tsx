import React, { useState, useEffect } from 'react';
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
  const [activeSection, setActiveSection] = useState('home');
  
  // Update switch state whenever theme changes
  useEffect(() => {
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
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Components', href: '#components', id: 'components' },
    { label: 'Themes', href: '#themes', id: 'themes' },
    { label: 'About', href: '#about', id: 'about' },
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
        <p>You can install GlassyUI using npm or yarn: <code>npm install glassykit</code></p>
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
            {`import { GlassButton } from 'glassykit';\n\n<GlassButton>Click Me</GlassButton>`}
          </pre>
        </div>
      ),
    },
  ];

  // Adjust background gradient based on theme
  const bgClasses = isDark 
    ? "bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155]" 
    : "bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]";

  // Handle navigation click
  const handleNavClick = (id: string) => {
    setActiveSection(id);
  };

  return (
    <div className={`min-h-screen ${bgClasses} text-white`}>
      <GlassNavbar 
        logo="GlassyUI" 
        items={navItems.map(item => ({
          ...item,
          onClick: () => handleNavClick(item.id)
        }))} 
        sticky
      />
      
      {/* Hero Section */}
      <section id="home" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Decorative elements */}
          <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                GlassyUI
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-xl">
                A modern React component library featuring beautiful glassmorphism-styled UI elements for creating stunning web applications
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <GlassButton size="large" variant="frosted">Get Started</GlassButton>
                <GlassButton size="large" variant="outline">Documentation</GlassButton>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <GlassCard className="p-8 rotate-3 transform transition-transform hover:rotate-0">
                <div className="flex flex-col gap-4">
                  <GlassInput 
                    label="Email" 
                    placeholder="your@email.com" 
                  />
                  <div className="flex gap-4">
                    <GlassSwitch checked={true} />
                    <span>Remember me</span>
                  </div>
                  <GlassButton variant="frosted" fullWidth>Sign In</GlassButton>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Theme Control Section */}
      <section id="themes" className="py-20 relative" style={{ display: activeSection === 'themes' || activeSection === 'home' ? 'block' : 'none' }}>
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 inline-block">
              <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Theme Customization</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Switch between light and dark themes to see how GlassyUI adapts to different contexts
            </p>
          </div>
          
          <GlassCard className="flex items-center justify-center p-10 mx-auto max-w-md backdrop-blur-xl">
            <div className="flex items-center gap-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-400 mb-3"></div>
                <span className="text-lg">Light</span>
              </div>
              
              <GlassSwitch 
                checked={switchOn} 
                onChange={handleThemeToggle} 
                size="large"
              />
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-700 to-purple-900 mb-3"></div>
                <span className="text-lg">Dark</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Components Showcase Section */}
      <section id="components" className="py-20" style={{ display: activeSection === 'components' || activeSection === 'home' ? 'block' : 'none' }}>
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 inline-block">
              <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Beautiful Components</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Explore our collection of glassmorphic UI components designed for modern web applications
            </p>
          </div>
          
          {/* Cards Grid - Interactive Elements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Buttons Card */}
            <GlassCard className="p-6 hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-4">Buttons</h3>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <GlassButton variant="default">Default</GlassButton>
                  <GlassButton variant="outline">Outline</GlassButton>
                  <GlassButton variant="frosted">Frosted</GlassButton>
                </div>
                <div className="pt-2">
                  <GlassButton onClick={() => setModalOpen(true)} fullWidth>Open Modal</GlassButton>
                </div>
              </div>
            </GlassCard>
            
            {/* Form Elements Card */}
            <GlassCard className="p-6 hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-4">Form Controls</h3>
              <div className="space-y-4">
                <GlassInput 
                  label="Username" 
                  placeholder="Enter your username" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <GlassSelect
                  label="Framework"
                  options={selectOptions}
                  value={selectValue}
                  onChange={setSelectValue}
                  placeholder="Choose a framework"
                />
              </div>
            </GlassCard>
            
            {/* Loaders Card */}
            <GlassCard className="p-6 hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-4">Loaders</h3>
              <div className="flex items-center justify-around">
                <div className="flex flex-col items-center">
                  <GlassSpinner size="small" />
                  <span className="mt-2">Small</span>
                </div>
                <div className="flex flex-col items-center">
                  <GlassSpinner size="medium" />
                  <span className="mt-2">Medium</span>
                </div>
                <div className="flex flex-col items-center">
                  <GlassSpinner size="large" />
                  <span className="mt-2">Large</span>
                </div>
              </div>
              <div className="mt-4">
                <GlassButton 
                  onClick={() => {
                    setShowSpinner(true);
                    setTimeout(() => setShowSpinner(false), 2000);
                  }}
                  fullWidth
                >
                  Show Fullscreen Spinner
                </GlassButton>
              </div>
            </GlassCard>
          </div>
          
          {/* Information Components */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {/* Tabs Component */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-4">Tabs</h3>
              <GlassTabs tabs={tabItems} />
            </div>
            
            {/* Accordion Component */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-4">Accordion</h3>
              <GlassAccordion items={accordionItems} />
            </div>
          </div>
          
          {/* Badges and Tooltips Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Badges */}
            <GlassCard className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Badges</h3>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <GlassBadge>Default</GlassBadge>
                  <GlassBadge variant="success">Success</GlassBadge>
                  <GlassBadge variant="warning">Warning</GlassBadge>
                  <GlassBadge variant="error">Error</GlassBadge>
                  <GlassBadge variant="info">Info</GlassBadge>
                </div>
                <div className="flex flex-wrap gap-3">
                  <GlassBadge pill>Pill</GlassBadge>
                  <GlassBadge pill variant="success">Pill Success</GlassBadge>
                  <GlassBadge pill variant="warning">Pill Warning</GlassBadge>
                </div>
              </div>
            </GlassCard>
            
            {/* Tooltips */}
            <GlassCard className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Tooltips</h3>
              <div className="flex flex-wrap justify-around gap-4">
                <GlassTooltip content="Information appears on hover" position="top">
                  <GlassButton>Hover Me</GlassButton>
                </GlassTooltip>
                
                <GlassTooltip content="Bottom tooltip with more content" position="bottom">
                  <GlassButton variant="outline">Another Tooltip</GlassButton>
                </GlassTooltip>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
      
      {/* Toast Notifications Section */}
      <section className="py-20" style={{ display: activeSection === 'components' || activeSection === 'home' ? 'block' : 'none' }}>
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 inline-block">
              <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Notifications</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Beautiful toast notifications to inform your users
            </p>
          </div>
          
          <GlassCard className="p-8 max-w-3xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <GlassButton onClick={() => handleShowToast('info')} variant="frosted">
                Info Toast
              </GlassButton>
              <GlassButton onClick={() => handleShowToast('success')} variant="frosted">
                Success Toast
              </GlassButton>
              <GlassButton onClick={() => handleShowToast('warning')} variant="frosted">
                Warning Toast
              </GlassButton>
              <GlassButton onClick={() => handleShowToast('error')} variant="frosted">
                Error Toast
              </GlassButton>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20" style={{ display: activeSection === 'about' || activeSection === 'home' ? 'block' : 'none' }}>
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 inline-block">
              <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">About GlassyUI</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              The modern solution for creating beautiful, glassmorphic interfaces
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard className="p-6 hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-4">Modern Design</h3>
              <p className="text-white/80">
                GlassyUI embraces the glassmorphism trend with beautiful, translucent components that add depth to your applications.
              </p>
            </GlassCard>
            
            <GlassCard className="p-6 hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-4">Easy Integration</h3>
              <p className="text-white/80">
                Built for React applications with TypeScript support, GlassyUI is easy to integrate into your existing projects.
              </p>
            </GlassCard>
            
            <GlassCard className="p-6 hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-4">Customizable</h3>
              <p className="text-white/80">
                Customize themes, colors, and styles to match your brand and create a unique user experience.
              </p>
            </GlassCard>
          </div>
          
          <div className="mt-16 text-center">
            <GlassButton size="large" variant="frosted">
              Get Started
            </GlassButton>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto max-w-6xl px-6 text-center">
          <p className="text-white/60">
            © {new Date().getFullYear()} GlassyUI. All rights reserved.
          </p>
        </div>
      </footer>

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