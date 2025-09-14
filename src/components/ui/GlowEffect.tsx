import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';

interface GlowEffectProps {
  color?: 'violet' | 'orange' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  intensity?: 'low' | 'medium' | 'high';
  animated?: boolean;
  children?: React.ReactNode;
}

const pulseAnimation = keyframes`
  0%, 100% {
    opacity: 0.6;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
`;

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const GlowColors = {
  violet: theme.colors.violet,
  orange: theme.colors.orange,
  gradient: theme.colors.gradientAI,
};

const GlowSizes = {
  sm: '100px',
  md: '200px',
  lg: '300px',
};

const GlowIntensity = {
  low: '30px',
  medium: '50px',
  high: '80px',
};

const GlowContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const GlowOrb = styled(motion.div)<GlowEffectProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${props => GlowSizes[props.size || 'md']};
  height: ${props => GlowSizes[props.size || 'md']};
  background: ${props => GlowColors[props.color || 'gradient']};
  border-radius: 50%;
  filter: blur(${props => GlowIntensity[props.intensity || 'medium']});
  opacity: 0.5;
  pointer-events: none;
  z-index: -1;

  ${props => props.animated && `
    animation: ${pulseAnimation} 3s ease-in-out infinite;
  `}
`;

const GradientOrb = styled(motion.div)<{ size?: string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${props => props.size || '200px'};
  height: ${props => props.size || '200px'};
  background: conic-gradient(
    from 0deg,
    ${theme.colors.violet},
    ${theme.colors.orange},
    ${theme.colors.violet}
  );
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.6;
  pointer-events: none;
  z-index: -1;
  animation: ${rotateAnimation} 10s linear infinite;
`;

const GlowEffect: React.FC<GlowEffectProps> = ({
  children,
  color = 'gradient',
  size = 'md',
  intensity = 'medium',
  animated = true,
}) => {
  if (!children) {
    return (
      <>
        {color === 'gradient' ? (
          <GradientOrb
            size={GlowSizes[size]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1 }}
          />
        ) : (
          <GlowOrb
            color={color}
            size={size}
            intensity={intensity}
            animated={animated}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1 }}
          />
        )}
      </>
    );
  }

  return (
    <GlowContainer>
      {children}
      {color === 'gradient' ? (
        <GradientOrb
          size={GlowSizes[size]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1 }}
        />
      ) : (
        <GlowOrb
          color={color}
          size={size}
          intensity={intensity}
          animated={animated}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
        />
      )}
    </GlowContainer>
  );
};

export default GlowEffect;