import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { theme } from '../../styles/theme';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const ButtonVariants = {
  primary: css`
    background: ${theme.colors.gradientAI};
    color: ${theme.colors.white};
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${theme.colors.gradientAI};
      opacity: 0;
      transition: opacity ${theme.transitions.base};
    }

    &:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: ${theme.shadows.lg}, ${theme.shadows.glow};

      &::before {
        opacity: 1;
      }
    }
  `,

  secondary: css`
    background: ${theme.colors.gray800};
    color: ${theme.colors.white};

    &:hover:not(:disabled) {
      background: ${theme.colors.gray700};
      transform: translateY(-2px);
    }
  `,

  outline: css`
    background: rgba(255, 255, 255, 0.05);
    color: ${theme.colors.white};
    border: 1px solid rgba(255, 255, 255, 0.3);

    &:hover:not(:disabled) {
      background: ${theme.colors.white};
      color: ${theme.colors.black};
      border-color: ${theme.colors.white};
      transform: translateY(-2px);
      box-shadow: ${theme.shadows.lg};
    }
  `,

  ghost: css`
    background: transparent;
    color: ${theme.colors.gray300};

    &:hover:not(:disabled) {
      color: ${theme.colors.white};
      background: ${theme.colors.gray900};
    }
  `,
};

const ButtonSizes = {
  sm: css`
    padding: ${theme.spacing['2']} ${theme.spacing['4']};
    font-size: ${theme.fontSizes.sm};
  `,
  md: css`
    padding: ${theme.spacing['3']} ${theme.spacing['6']};
    font-size: ${theme.fontSizes.base};
  `,
  lg: css`
    padding: ${theme.spacing['4']} ${theme.spacing['8']};
    font-size: ${theme.fontSizes.lg};
  `,
};

const StyledButton = styled(motion.button)<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing['2']};
  font-weight: ${theme.fontWeights.medium};
  border-radius: ${theme.borderRadius.lg};
  transition: all ${theme.transitions.base};
  cursor: pointer;
  white-space: nowrap;
  position: relative;
  border: none;
  outline: none;
  text-decoration: none;

  ${props => ButtonVariants[props.variant || 'primary']}
  ${props => ButtonSizes[props.size || 'md']}
  ${props => props.fullWidth && css`width: 100%;`}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }
`;

const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  href,
  onClick,
  ...props
}) => {
  const navigate = useNavigate();

  const content = (
    <>
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </>
  );

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      // Check if it's an internal link (starts with / or #)
      if (href.startsWith('/')) {
        navigate(href);
      } else if (href.startsWith('#')) {
        // Smooth scroll to section
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // External link
        window.location.href = href;
      }
    }
  };

  // For external links, keep using anchor tag
  if (href && !href.startsWith('/') && !href.startsWith('#')) {
    return (
      <StyledButton
        as="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {content}
      </StyledButton>
    );
  }

  return (
    <StyledButton
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {content}
    </StyledButton>
  );
};

export default Button;