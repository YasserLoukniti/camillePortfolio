export const theme = {
  colors: {
    // Primary colors
    black: '#000000',
    blackLight: '#0A0A0A',
    white: '#FFFFFF',
    whiteLight: '#FAFAFA',

    // Grays
    gray100: '#F5F5F7',
    gray200: '#E5E5E7',
    gray300: '#D1D1D6',
    gray400: '#A1A1A6',
    gray500: '#8E8E93',
    gray600: '#636366',
    gray700: '#48484A',
    gray800: '#2C2C2E',
    gray900: '#1C1C1E',

    // AI Accent colors
    violet: '#A855F7',
    violetLight: '#C084FC',
    violetDark: '#8B5CF6',
    violetPale: '#E9D5FF',

    orange: '#FF6B35',
    orangeLight: '#FB923C',
    orangeDark: '#EA580C',
    orangePale: '#FED7AA',

    // Gradients
    gradientAI: 'linear-gradient(135deg, #A855F7 0%, #FF6B35 100%)',
    gradientAISubtle: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(255, 107, 53, 0.1) 100%)',
    gradientDark: 'linear-gradient(180deg, #0A0A0A 0%, #1C1C1E 100%)',

    // Functional colors
    success: '#34D399',
    error: '#EF4444',
    warning: '#F59E0B',
    info: '#3B82F6',
  },

  fonts: {
    primary: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
    mono: "'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', monospace",
  },

  fontSizes: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
    '7xl': '4.5rem',    // 72px
    '8xl': '6rem',      // 96px
  },

  fontWeights: {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },

  lineHeights: {
    tight: 1.1,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2,
  },

  spacing: {
    '0': '0',
    '1': '0.25rem',    // 4px
    '2': '0.5rem',      // 8px
    '3': '0.75rem',     // 12px
    '4': '1rem',        // 16px
    '5': '1.25rem',     // 20px
    '6': '1.5rem',      // 24px
    '8': '2rem',        // 32px
    '10': '2.5rem',     // 40px
    '12': '3rem',       // 48px
    '16': '4rem',       // 64px
    '20': '5rem',       // 80px
    '24': '6rem',       // 96px
    '32': '8rem',       // 128px
    '40': '10rem',      // 160px
    '48': '12rem',      // 192px
    '56': '14rem',      // 224px
    '64': '16rem',      // 256px
  },

  breakpoints: {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  borderRadius: {
    none: '0',
    sm: '0.125rem',     // 2px
    base: '0.25rem',    // 4px
    md: '0.375rem',     // 6px
    lg: '0.5rem',       // 8px
    xl: '0.75rem',      // 12px
    '2xl': '1rem',      // 16px
    '3xl': '1.5rem',    // 24px
    full: '9999px',
  },

  shadows: {
    xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    sm: '0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    base: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    md: '0 6px 10px -2px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    glow: '0 0 20px rgba(168, 85, 247, 0.3)',
    glowOrange: '0 0 20px rgba(255, 107, 53, 0.3)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  },

  transitions: {
    fast: '150ms ease-out',
    base: '300ms ease-out',
    slow: '500ms ease-out',
    slower: '700ms ease-out',
  },

  zIndex: {
    base: 0,
    dropdown: 1000,
    sticky: 1100,
    modal: 1300,
    popover: 1400,
    tooltip: 1500,
  },
};