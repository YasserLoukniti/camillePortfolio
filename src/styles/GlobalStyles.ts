import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: ${theme.fonts.primary};
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
    line-height: ${theme.lineHeights.normal};
    overflow-x: hidden;
    position: relative;
  }

  ::selection {
    background: ${theme.colors.violet};
    color: ${theme.colors.white};
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.blackLight};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.gray700};
    border-radius: ${theme.borderRadius.full};
    transition: ${theme.transitions.base};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.gray600};
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: ${theme.fontWeights.semibold};
    line-height: ${theme.lineHeights.tight};
    letter-spacing: -0.02em;
  }

  h1 {
    font-size: clamp(${theme.fontSizes['4xl']}, 5vw, ${theme.fontSizes['7xl']});
    font-weight: ${theme.fontWeights.bold};
  }

  h2 {
    font-size: clamp(${theme.fontSizes['3xl']}, 4vw, ${theme.fontSizes['5xl']});
  }

  h3 {
    font-size: clamp(${theme.fontSizes['2xl']}, 3vw, ${theme.fontSizes['4xl']});
  }

  h4 {
    font-size: clamp(${theme.fontSizes.xl}, 2.5vw, ${theme.fontSizes['3xl']});
  }

  h5 {
    font-size: clamp(${theme.fontSizes.lg}, 2vw, ${theme.fontSizes['2xl']});
  }

  h6 {
    font-size: clamp(${theme.fontSizes.base}, 1.5vw, ${theme.fontSizes.xl});
  }

  p {
    font-size: ${theme.fontSizes.base};
    line-height: ${theme.lineHeights.relaxed};
    color: ${theme.colors.gray300};
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: ${theme.transitions.base};
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    transition: ${theme.transitions.base};
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background: none;
    border: none;
    outline: none;
  }

  .container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 ${theme.spacing['4']};

    @media (min-width: ${theme.breakpoints.sm}) {
      padding: 0 ${theme.spacing['6']};
    }

    @media (min-width: ${theme.breakpoints.lg}) {
      padding: 0 ${theme.spacing['8']};
    }
  }

  .gradient-text {
    background: ${theme.colors.gradientAI};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .glow-effect {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: ${theme.colors.gradientAI};
      border-radius: inherit;
      opacity: 0;
      z-index: -1;
      transition: opacity ${theme.transitions.base};
      filter: blur(10px);
    }
    &:hover::before {
      opacity: 0.6;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .fade-in {
    animation: fadeIn 0.6s ease-out forwards;
  }

  .slide-in-left {
    animation: slideInLeft 0.6s ease-out forwards;
  }

  .slide-in-right {
    animation: slideInRight 0.6s ease-out forwards;
  }

  .scale-in {
    animation: scaleIn 0.6s ease-out forwards;
  }

  .float {
    animation: float 3s ease-in-out infinite;
  }

  .pulse {
    animation: pulse 2s ease-in-out infinite;
  }
`;