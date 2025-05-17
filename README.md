# GlassyUI

<div align="center">
  <img src="https://img.shields.io/badge/React-19.1.0-blue" alt="React v19.1.0" />
  <img src="https://img.shields.io/badge/TypeScript-5.8.3-blue" alt="TypeScript v5.8.3" />
  <img src="https://img.shields.io/badge/TailwindCSS-4.1.7-blue" alt="Tailwind v4.1.7" />
  <img src="https://img.shields.io/badge/License-MIT-green" alt="MIT License" />
</div>

<p align="center">
  A beautiful glassmorphism-styled React component library for modern web applications
</p>

<p align="center">
  <img src="https://via.placeholder.com/700x350?text=GlassyUI+Preview" alt="GlassyUI Preview" />
</p>

## Features

- 🔍 **Modern Glassmorphism** - Beautiful frosted glass effect for all components
- 🎨 **Dark & Light Themes** - Built-in theme system with smooth transitions
- 🧩 **Component Rich** - 14+ customizable components
- 📱 **Responsive** - Fully responsive design for all screen sizes
- 🔧 **Customizable** - Easy to customize with Tailwind CSS
- 📦 **TypeScript Support** - Full TypeScript definitions for all components

## Installation

```bash
# With npm
npm install glassy-ui

# With yarn
yarn add glassy-ui

# With pnpm
pnpm add glassy-ui
```

## Quick Start

Wrap your application with `ThemeProvider` to enable theme switching:

```jsx
import React from 'react';
import { ThemeProvider, GlassButton } from 'glassy-ui';
import 'glassy-ui/dist/styles.css';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-gradient-to-br from-indigo-600 to-purple-800 min-h-screen flex items-center justify-center">
        <GlassButton>Click Me</GlassButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
```

## Components

### Core Components

- `GlassButton` - Versatile buttons with multiple variants
- `GlassCard` - Container component with glass effect
- `GlassInput` - Styled input field
- `GlassSelect` - Dropdown select component
- `GlassModal` - Modal/dialog component
- `GlassSwitch` - Toggle switch component
- `GlassTooltip` - Tooltip component for displaying information
- `GlassNavbar` - Navigation bar component

### Advanced Components

- `GlassAccordion` - Collapsible content panels
- `GlassTabs` - Tab navigation component
- `GlassBadge` - Badge/label component
- `GlassSpinner` - Loading spinner with multiple sizes
- `ToastProvider/useToast` - Toast notification system

## Component Examples

### GlassButton

```jsx
import { GlassButton } from 'glassy-ui';

function ButtonDemo() {
  return (
    <div className="space-x-2">
      <GlassButton>Default</GlassButton>
      <GlassButton variant="outline">Outline</GlassButton>
      <GlassButton variant="soft">Soft</GlassButton>
      <GlassButton variant="frosted">Frosted</GlassButton>
    </div>
  );
}
```

### GlassCard

```jsx
import { GlassCard } from 'glassy-ui';

function CardDemo() {
  return (
    <GlassCard className="p-6" hoverEffect shadow>
      <h2 className="text-xl font-bold mb-2">Glass Card</h2>
      <p>This is a card with a glass effect, hover animation, and shadow.</p>
    </GlassCard>
  );
}
```

### Theme Switching

```jsx
import { useTheme, GlassSwitch } from 'glassy-ui';

function ThemeToggle() {
  const { theme, setTheme, isDark } = useTheme();
  
  return (
    <div className="flex items-center gap-2">
      <span>Light</span>
      <GlassSwitch 
        checked={isDark} 
        onChange={(checked) => setTheme(checked ? 'dark' : 'light')} 
      />
      <span>Dark</span>
    </div>
  );
}
```

### Toast Notifications

```jsx
import { useToast, GlassButton, ToastProvider } from 'glassy-ui';

function ToastDemo() {
  const { showToast } = useToast();
  
  return (
    <GlassButton 
      onClick={() => showToast('Operation successful!', 'success')}
    >
      Show Success Toast
    </GlassButton>
  );
}

// Wrap your app with ToastProvider
function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <YourApp />
      </ToastProvider>
    </ThemeProvider>
  );
}
```

## Styling & Customization

GlassyUI uses Tailwind CSS for styling. You can customize the appearance by:

1. **Extending component styles** using the className props
2. **Creating theme variations** by extending the CSS variables in your application

```css
/* Custom theme variation */
.theme-purple {
  --glass-bg: rgba(125, 60, 180, 0.2);
  --glass-border: rgba(180, 120, 220, 0.3);
  --accent-color: rgba(150, 100, 200, 0.6);
}
```

## Prerequisites

GlassyUI requires:

- React 16.8+ (hooks support)
- Tailwind CSS 3.0+

## Browser Support

GlassyUI uses modern CSS features like `backdrop-filter` which has the following browser support:

- Chrome/Edge 76+
- Firefox 70+ (requires enabling)
- Safari 9+
- iOS Safari 9+

For older browsers, components will still work but without the glass effect.

## Contributing

We welcome contributions to GlassyUI! Please see our [Contributing Guide](CONTRIBUTING.md) for more details.

## License

GlassyUI is released under the MIT License. See the [LICENSE](LICENSE) file for more details.