import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';

interface CardProps {
  variant?: 'default' | 'gradient' | 'glass';
  hoverable?: boolean;
  glowOnHover?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const CardVariants = {
  default: css`
    background: ${theme.colors.black};
    border: 2px solid ${theme.colors.gray800};
  `,

  gradient: css`
    background: ${theme.colors.gradientAISubtle};
    border: 1px solid rgba(168, 85, 247, 0.2);
    position: relative;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      padding: 1px;
      background: ${theme.colors.gradientAI};
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      opacity: 0.5;
      transition: opacity ${theme.transitions.base};
    }

    &:hover::before {
      opacity: 1;
    }
  `,

  glass: css`
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  `,
};

const StyledCard = styled(motion.div)<CardProps>`
  border-radius: ${theme.borderRadius['3xl']};
  padding: ${theme.spacing['6']};
  transition: all ${theme.transitions.base};
  overflow: hidden;
  position: relative;

  ${props => CardVariants[props.variant || 'default']}

  ${props => props.hoverable && css`
    cursor: pointer;

    &:hover {
      transform: translateY(-4px) scale(1.02);
      box-shadow: ${theme.shadows.xl};
    }
  `}

  ${props => props.glowOnHover && css`
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      transform: translate(-50%, -50%);
      background: ${theme.colors.gradientAI};
      filter: blur(50px);
      opacity: 0;
      transition: opacity ${theme.transitions.base};
      z-index: -1;
    }

    &:hover::after {
      opacity: 0.3;
    }
  `}
`;

const Card: React.FC<CardProps> = ({ children, onClick, ...props }) => {
  return (
    <StyledCard
      onClick={onClick}
      whileHover={props.hoverable ? { y: -4 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </StyledCard>
  );
};

export default Card;