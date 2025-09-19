import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FiArrowDown, FiMail } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';
import { theme } from '../../styles/theme';
import Button from '../ui/Button';
import GlowEffect from '../ui/GlowEffect';
import { portfolioData } from '../../data/portfolio';

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: ${theme.colors.black};
`;

const BackgroundGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at 30% 50%,
    rgba(168, 85, 247, 0.1) 0%,
    transparent 50%
  ),
  radial-gradient(
    circle at 70% 50%,
    rgba(255, 107, 53, 0.1) 0%,
    transparent 50%
  );
  pointer-events: none;
`;

const ParticlesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
`;

const Particle = styled.div<{ delay: number; x: number; y: number }>`
  position: absolute;
  width: 4px;
  height: 4px;
  background: ${theme.colors.violet};
  border-radius: 50%;
  left: ${props => props.x}%;
  top: ${props => props.y}%;
  opacity: 0.5;
  animation: ${floatAnimation} ${props => 3 + props.delay}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
`;

const ContentContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${theme.spacing['6']};
  text-align: center;
  position: relative;
  z-index: 1;
`;

const TagLine = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing['2']};
  padding: ${theme.spacing['2']} ${theme.spacing['4']};
  background: rgba(168, 85, 247, 0.1);
  border: 1px solid rgba(168, 85, 247, 0.3);
  border-radius: ${theme.borderRadius.full};
  margin-bottom: ${theme.spacing['8']};
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.violet};

  svg {
    animation: ${floatAnimation} 2s ease-in-out infinite;
  }
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: ${theme.fontWeights.bold};
  line-height: 1.1;
  margin-bottom: ${theme.spacing['6']};
  letter-spacing: -0.04em;

  .gradient {
    background: linear-gradient(
      90deg,
      ${theme.colors.white} 0%,
      ${theme.colors.violet} 25%,
      ${theme.colors.orange} 50%,
      ${theme.colors.violet} 75%,
      ${theme.colors.white} 100%
    );
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${gradientAnimation} 4s linear infinite;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.gray400};
  max-width: 700px;
  margin: 0 auto ${theme.spacing['10']};
  line-height: ${theme.lineHeights.relaxed};
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: ${theme.spacing['4']};
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: ${theme.spacing['16']};
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: ${theme.spacing['8']};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing['2']};
  color: ${theme.colors.gray600};
  cursor: pointer;

  svg {
    animation: bounce 2s ease-in-out infinite;
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
  }
`;

const TypewriterText = styled.span`
  position: relative;

  &::after {
    content: '|';
    position: absolute;
    right: -10px;
    animation: blink 1s step-end infinite;
  }

  @keyframes blink {
    0%, 50% {
      opacity: 1;
    }
    51%, 100% {
      opacity: 0;
    }
  }
`;

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Product Designer & Gestion Produit';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
  }));

  return (
    <HeroSection id="home">
      <BackgroundGradient />

      <ParticlesContainer>
        {particles.map(particle => (
          <Particle
            key={particle.id}
            x={particle.x}
            y={particle.y}
            delay={particle.delay}
          />
        ))}
      </ParticlesContainer>

      <ContentContainer>
        <TagLine
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <HiSparkles />
          Disponible pour des projets innovants
        </TagLine>

        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {portfolioData.personal.firstName} {portfolioData.personal.lastName}
          <br />
          <TypewriterText className="gradient">{typedText}</TypewriterText>
        </Title>

        <Subtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Je crée des expériences utilisateur exceptionnelles en combinant
          design innovant et intelligence artificielle pour transformer
          vos idées en produits remarquables.
        </Subtitle>

        <ButtonGroup
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button variant="primary" size="lg" href="#projects">
            Voir mes projets
          </Button>
          <Button
            variant="outline"
            size="lg"
            href="#contact"
            icon={<FiMail />}
          >
            Me contacter
          </Button>
        </ButtonGroup>

        <GlowEffect color="gradient" size="lg" intensity="high" />
      </ContentContainer>

      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        onClick={() => {
          document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span>Scroll</span>
        <FiArrowDown />
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;