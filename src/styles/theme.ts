export const theme = {
  colors: {
    primary: '#1a365d',
    primaryLight: '#2c5282',
    secondary: '#38b2ac',
    secondaryLight: '#4fd1c5',
    accent: '#48bb78',
    background: '#f7fafc',
    backgroundDark: '#0d1b2a',
    text: '#2d3748',
    textLight: '#718096',
    white: '#ffffff',
    gray: {
      100: '#f7fafc',
      200: '#edf2f7',
      300: '#e2e8f0',
      400: '#cbd5e0',
      500: '#a0aec0',
      600: '#718096',
      700: '#4a5568',
      800: '#2d3748',
      900: '#1a202c',
    },
  },
  fonts: {
    primary: "'Poppins', sans-serif",
    secondary: "'Inter', sans-serif",
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
  },
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 12px rgba(0, 0, 0, 0.15)',
    large: '0 8px 24px rgba(0, 0, 0, 0.2)',
  },
  transitions: {
    fast: '0.2s ease',
    medium: '0.3s ease',
    slow: '0.5s ease',
  },
};

export type Theme = typeof theme;
