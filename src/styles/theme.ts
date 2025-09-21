export const theme = {
  colors: {
    // Primary colors - Maximum contrast
    black: '#000000',
    blackLight: '#050505',
    white: '#FFFFFF',
    whiteLight: '#FAFAFA',

    // Grays - Higher contrast
    gray100: '#F8F8F8',
    gray200: '#E8E8E8',
    gray300: '#D0D0D0',
    gray400: '#A0A0A0',
    gray500: '#808080',
    gray600: '#606060',
    gray700: '#404040',
    gray800: '#1A1A1A',
    gray900: '#0A0A0A',

    // Vibrant accent colors
    violet: '#8B5CF6',
    violetLight: '#A78BFA',
    violetDark: '#7C3AED',
    violetPale: '#E9D5FF',

    orange: '#FB923C',
    orangeLight: '#FED7AA',
    orangeDark: '#F97316',
    orangePale: '#FFF7ED',

    pink: '#EC4899',
    pinkLight: '#F9A8D4',
    pinkDark: '#DB2777',

    // Modern gradients - Bold and vibrant
    gradientAI: 'linear-gradient(135deg, #FB923C 0%, #EC4899 50%, #8B5CF6 100%)',
    gradientAISubtle: 'linear-gradient(135deg, rgba(251, 146, 60, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
    gradientDark: 'linear-gradient(180deg, #000000 0%, #0A0A0A 100%)',
    gradientSunset: 'linear-gradient(135deg, #FB923C 0%, #EC4899 100%)',
    gradientViolet: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',

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
    extrabold: 800,
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
    sm: '0.25rem',      // 4px
    base: '0.5rem',     // 8px
    md: '0.75rem',      // 12px
    lg: '1rem',         // 16px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '2rem',      // 32px
    full: '9999px',
  },

  shadows: {
    xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    sm: '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
    base: '0 4px 6px -1px rgba(0, 0, 0, 0.15)',
    md: '0 6px 10px -2px rgba(0, 0, 0, 0.2)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.25)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
    glow: '0 0 30px rgba(139, 92, 246, 0.5)',
    glowOrange: '0 0 30px rgba(251, 146, 60, 0.5)',
    glowPink: '0 0 30px rgba(236, 72, 153, 0.5)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.1)',
    glass: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
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