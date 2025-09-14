import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';

interface BadgeProps {
  variant?: 'default' | 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const BadgeVariants = {
  default: css`
    background: ${theme.colors.gray800};
    color: ${theme.colors.gray300};
    border: 1px solid ${theme.colors.gray700};
  `,

  primary: css`
    background: linear-gradient(135deg, ${theme.colors.violet}, ${theme.colors.violetDark});
    color: ${theme.colors.white};
    border: none;
  `,

  secondary: css`
    background: linear-gradient(135deg, ${theme.colors.orange}, ${theme.colors.orangeDark});
    color: ${theme.colors.white};
    border: none;
  `,

  outline: css`
    background: transparent;
    color: ${theme.colors.violet};
    border: 1px solid ${theme.colors.violet};
  `,
};

const BadgeSizes = {
  sm: css`
    padding: ${theme.spacing['1']} ${theme.spacing['2']};
    font-size: ${theme.fontSizes.xs};
  `,
  md: css`
    padding: ${theme.spacing['1']} ${theme.spacing['3']};
    font-size: ${theme.fontSizes.sm};
  `,
};

const StyledBadge = styled(motion.span)<BadgeProps>`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing['1']};
  font-weight: ${theme.fontWeights.medium};
  border-radius: ${theme.borderRadius.full};
  transition: all ${theme.transitions.base};
  white-space: nowrap;

  ${props => BadgeVariants[props.variant || 'default']}
  ${props => BadgeSizes[props.size || 'md']}

  &:hover {
    transform: scale(1.05);
  }
`;

const Badge: React.FC<BadgeProps> = ({ children, icon, ...props }) => {
  return (
    <StyledBadge
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {children}
    </StyledBadge>
  );
};

export default Badge;