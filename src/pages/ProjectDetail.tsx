import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiX, FiChevronLeft, FiChevronRight, FiAward, FiTarget, FiZap, FiArrowRight, FiLinkedin } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';
import { theme } from '../styles/theme';
import { portfolioData } from '../data/portfolio';

// ========= MAIN CONTAINER =========
const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(180deg, #000000 0%, #0a0a0a 100%);
`;

// ========= NAVIGATION BAR =========
const NavBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  z-index: 1000;
  display: flex;
  align-items: center;
`;

const NavContent = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const BackButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 100px;
  color: ${theme.colors.white};
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateX(-2px);

    svg {
      transform: translateX(-4px);
    }
  }
`;

const NavTags = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavTag = styled.span<{ $color: string }>`
  padding: 6px 14px;
  border-radius: 100px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  background: ${props =>
    props.$color === 'orange' ? 'rgba(255, 140, 90, 0.1)' :
    props.$color === 'pink' ? 'rgba(236, 72, 153, 0.1)' :
    'rgba(139, 92, 246, 0.1)'
  };
  color: ${props =>
    props.$color === 'orange' ? '#ff8c5a' :
    props.$color === 'pink' ? '#ec4899' :
    '#8b5cf6'
  };
  border: 1px solid ${props =>
    props.$color === 'orange' ? 'rgba(255, 140, 90, 0.2)' :
    props.$color === 'pink' ? 'rgba(236, 72, 153, 0.2)' :
    'rgba(139, 92, 246, 0.2)'
  };
`;

// ========= HERO SECTION =========
const HeroSection = styled.div`
  padding: 140px 40px 40px;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 100px 20px 40px;
  }
`;

const ProjectHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const ProjectTitle = styled(motion.h1)`
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 700;
  margin: 0 0 20px 0;
  letter-spacing: -0.02em;
  line-height: 1.2;
  background: linear-gradient(135deg,
    ${theme.colors.white} 0%,
    rgba(255, 140, 90, 0.9) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ProjectSubtitle = styled(motion.p)`
  font-size: 18px;
  color: ${theme.colors.gray300};
  margin: 0 auto 28px;
  max-width: 650px;
  line-height: 1.6;
  font-weight: 300;
`;

const MetaInfo = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    align-items: center;
  }
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 100px;

  svg {
    width: 16px;
    height: 16px;
    color: #ff8c5a;
  }

  strong {
    color: ${theme.colors.white};
    font-size: 14px;
    font-weight: 600;
  }

  span {
    color: ${theme.colors.gray400};
    font-size: 13px;
  }
`;

// ========= METRICS SECTION =========
const MetricsSection = styled(motion.div)<{ $single?: boolean }>`
  display: grid;
  grid-template-columns: ${props => props.$single ? '1fr' : 'repeat(auto-fit, minmax(180px, 1fr))'};
  gap: 20px;
  margin-bottom: 80px;
  max-width: ${props => props.$single ? '400px' : '800px'};
  margin-left: auto;
  margin-right: auto;
  perspective: 1000px;
`;

const MetricCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 24px;
  text-align: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg,
      rgba(255, 140, 90, 0) 0%,
      rgba(255, 140, 90, 0.8) 50%,
      rgba(236, 72, 153, 0) 100%
    );
    transform: scaleX(0);
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      rgba(255, 140, 90, 0.1) 0%,
      transparent 70%
    );
    opacity: 0;
    transform: scale(0);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    background: rgba(255, 255, 255, 0.04);
    border-color: rgba(255, 140, 90, 0.4);
    box-shadow:
      0 20px 40px rgba(255, 140, 90, 0.2),
      0 0 60px rgba(255, 140, 90, 0.1),
      inset 0 0 30px rgba(255, 140, 90, 0.05);

    &::before {
      transform: scaleX(1);
    }

    &::after {
      opacity: 1;
      transform: scale(1.5);
    }
  }
`;

const MetricIcon = styled(motion.div)`
  width: 40px;
  height: 40px;
  margin: 0 auto 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 140, 90, 0.1);
  border-radius: 12px;
  position: relative;

  svg {
    width: 20px;
    height: 20px;
    color: #ff8c5a;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(45deg,
      #ff8c5a,
      #ec4899,
      #8b5cf6
    );
    border-radius: 12px;
    opacity: 0;
    filter: blur(8px);
    transition: opacity 0.4s ease;
  }

  ${MetricCard}:hover & {
    animation: pulse 2s infinite;

    &::after {
      opacity: 0.6;
    }
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`;

const MetricValue = styled(motion.div)`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 6px;
  background: linear-gradient(135deg,
    ${theme.colors.white} 0%,
    rgba(255, 140, 90, 0.9) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  display: inline-block;

  ${MetricCard}:hover & {
    animation: countUp 0.6s ease-out;
    background: linear-gradient(135deg,
      #ff8c5a 0%,
      #ec4899 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @keyframes countUp {
    0% {
      transform: scale(0.8) translateY(10px);
      opacity: 0;
    }
    50% {
      transform: scale(1.1) translateY(-5px);
    }
    100% {
      transform: scale(1) translateY(0);
      opacity: 1;
    }
  }
`;

const MetricLabel = styled.div`
  font-size: 12px;
  color: ${theme.colors.gray400};
  text-transform: uppercase;
  letter-spacing: 1.2px;
  font-weight: 600;
  opacity: 0.8;
  transition: all 0.3s ease;

  ${MetricCard}:hover & {
    color: ${theme.colors.gray300};
    opacity: 1;
  }
`;

// ========= CHALLENGE & SOLUTION =========
const StorySection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StoryCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 24px;
  padding: 40px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${props =>
      props.className === 'challenge'
        ? 'linear-gradient(90deg, #ff8c5a 0%, #ff6b6b 100%)'
        : 'linear-gradient(90deg, #ec4899 0%, #8b5cf6 100%)'
    };
  }
`;

const StoryTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  margin: 0 0 20px 0;
  display: flex;
  align-items: center;
  gap: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const StoryText = styled.p`
  font-size: 16px;
  color: ${theme.colors.gray300};
  line-height: 1.8;
  margin: 0;
`;

// ========= IMAGES SHOWCASE =========
const ShowcaseSection = styled.div`
  margin-bottom: 10px;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 13px;
  font-weight: 700;
  text-align: center;
  margin: 0 0 48px 0;
  color: ${theme.colors.gray400};
  text-transform: uppercase;
  letter-spacing: 2px;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg,
      rgba(255, 140, 90, 0.8) 0%,
      rgba(236, 72, 153, 0.8) 100%
    );
    margin: 16px auto 0;
  }
`;


const VisualsSlider = styled.div`
  width: 100%;
  overflow-x: hidden;
  overflow-y: visible;
  padding: 60px 0 20px;
  margin-bottom: 80px;
  background: linear-gradient(180deg,
    rgba(255, 140, 90, 0.02) 0%,
    rgba(236, 72, 153, 0.01) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: 24px;
  position: relative;
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 2px;
    background: linear-gradient(90deg,
      transparent 0%,
      rgba(255, 140, 90, 0.5) 50%,
      transparent 100%
    );
  }
`;

const SliderContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 15px 40px 20px;
  overflow-x: auto;
  overflow-y: visible;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  align-items: stretch;
  height: 520px;

  /* Hide scrollbar */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SliderCard = styled(motion.div)<{ $isMobile?: boolean; $isWeb?: boolean; $adjustPosition?: boolean }>`
  flex: 0 0 auto;
  width: ${props => props.$isMobile ? '280px' : props.$isWeb ? '800px' : '500px'};
  height: calc(100% - 20px);
  scroll-snap-align: center;
  position: relative;
  border-radius: ${props => props.$isMobile ? '24px' : '20px'};
  overflow: hidden;
  background: #0a0a0a;
  cursor: pointer;
  border: 2px solid rgba(255, 255, 255, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;

  &:hover {
    transform: translateY(-8px) scale(1.015);
    box-shadow:
      0 15px 40px rgba(255, 140, 90, 0.2),
      0 10px 25px rgba(0, 0, 0, 0.5),
      0 0 60px rgba(255, 140, 90, 0.1);
    border-color: rgba(255, 140, 90, 0.4);
    z-index: 10;
  }

  img {
    width: ${props => props.$isMobile ? '150%' : '100%'};
    height: 100%;
    object-fit: ${props => props.$isMobile ? 'cover' : props.$isWeb ? 'cover' : 'contain'};
    object-position: ${props => {
      if (props.$adjustPosition) return 'center 20%';
      return props.$isMobile ? 'center top' : 'center top';
    }};
    background: ${props => props.$isMobile ? '#000' : props.$isWeb ? 'transparent' : '#0a0a0a'};
    position: ${props => props.$isMobile ? 'relative' : 'static'};
    left: ${props => props.$isMobile ? '50%' : 'auto'};
    transform: ${props => props.$isMobile ? 'translateX(-50%)' : 'none'};
  }
`;

const SliderButton = styled.button<{ $direction: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.$direction === 'left' ? 'left: 20px' : 'right: 20px'};
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 100;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);

  &:hover {
    background: rgba(255, 140, 90, 0.3);
    border-color: rgba(255, 140, 90, 0.5);
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 6px 20px rgba(255, 140, 90, 0.3);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;


const ImageCard = styled(motion.div)<{ $isMobile?: boolean; $isLong?: boolean }>`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  background: #0a0a0a;
  cursor: pointer;
  aspect-ratio: ${props => props.$isMobile ? '9/16' : props.$isLong ? 'auto' : '16/10'};
  max-height: ${props => props.$isLong ? '800px' : 'none'};
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  ${props => props.$isMobile ? `
    max-width: 320px;
    margin: 0 auto;
  ` : ''}

  img {
    width: 100%;
    height: ${props => props.$isLong ? 'auto' : '100%'};
    object-fit: ${props => props.$isMobile ? 'contain' : props.$isLong ? 'contain' : 'cover'};
    object-position: ${props => props.$isMobile || props.$isLong ? 'top center' : 'center'};
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    background: ${props => props.$isMobile || props.$isLong ? '#0a0a0a' : 'transparent'};
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow:
      0 20px 60px rgba(255, 140, 90, 0.15),
      0 10px 30px rgba(0, 0, 0, 0.5);
    border-color: rgba(255, 140, 90, 0.3);

    img {
      transform: ${props => props.$isLong ? 'scale(1.02) translateY(-20px)' : 'scale(1.08)'};
    }
  }
`;

const FullWidthImageCard = styled(ImageCard)`
  aspect-ratio: ${props => props.$isLong ? 'auto' : '21/9'};
  max-height: ${props => props.$isLong ? '600px' : 'none'};
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.9) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24px;
  opacity: 0;
  transition: all 0.4s ease;

  ${ImageCard}:hover &,
  ${FullWidthImageCard}:hover &,
  ${SliderCard}:hover & {
    opacity: 1;
  }

  &::before {
    content: '⤢';
    position: absolute;
    top: 16px;
    right: 16px;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    font-size: 18px;
  }
`;

const ImageCaption = styled.div`
  h4 {
    font-size: 18px;
    font-weight: 600;
    color: white;
    margin: 0 0 8px 0;
    letter-spacing: -0.02em;
  }

  p {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
    line-height: 1.6;
  }
`;

// ========= KEY FEATURES =========
const FeaturesSection = styled.div`
  margin-top: -100px;
  margin-bottom: 60px;
  width: 100vw;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  padding: 60px 40px;
  background: linear-gradient(180deg,
    transparent 0%,
    rgba(255, 140, 90, 0.02) 50%,
    rgba(236, 72, 153, 0.01) 100%
  );
`;

const FeaturesList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureItem = styled(motion.div)`
  padding: 32px;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg,
      rgba(255, 140, 90, 0.6) 0%,
      rgba(236, 72, 153, 0.6) 100%
    );
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.03);
    border-color: rgba(255, 140, 90, 0.3);
    transform: translateY(-4px);
    box-shadow: 0 15px 40px rgba(255, 140, 90, 0.15);

    &::before {
      transform: scaleX(1);
    }
  }
`;

const FeatureTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  margin: 0 0 10px 0;
  text-align: center;
`;

const FeatureDesc = styled.p`
  font-size: 14px;
  color: ${theme.colors.gray400};
  line-height: 1.6;
  margin: 0;
  text-align: center;
`;

// ========= RELATED CASE STUDIES =========
const RelatedSection = styled.section`
  max-width: 1400px;
  margin: 80px auto 0;
  padding: 80px 40px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);

  @media (max-width: 768px) {
    padding: 60px 20px 0;
    margin-top: 60px;
  }
`;

const RelatedTitle = styled.h3`
  font-size: 32px;
  font-weight: 700;
  color: ${theme.colors.white};
  text-align: center;
  margin-bottom: 48px;
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const RelatedCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(139, 92, 246, 0.4);
    box-shadow: 0 20px 40px rgba(139, 92, 246, 0.2);
  }
`;

const RelatedImage = styled.div<{ $image: string }>`
  width: 100%;
  height: 240px;
  background: url(${props => props.$image}) center/cover no-repeat;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.9));
  }
`;

const RelatedContent = styled.div`
  padding: 32px;
`;

const RelatedCardTitle = styled.h4`
  font-size: 24px;
  font-weight: 600;
  color: ${theme.colors.white};
  margin-bottom: 12px;
`;

const RelatedDescription = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
  margin-bottom: 20px;
`;

const RelatedLink = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #8b5cf6;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;

  svg {
    transition: transform 0.3s ease;
  }

  ${RelatedCard}:hover & {
    gap: 12px;

    svg {
      transform: translateX(4px);
    }
  }
`;

const CTASection = styled(motion.div)`
  text-align: center;
  margin-top: ${theme.spacing['16']};
  padding: ${theme.spacing['12']} ${theme.spacing['6']};
  background: linear-gradient(135deg,
    rgba(168, 85, 247, 0.1) 0%,
    rgba(255, 140, 90, 0.1) 100%
  );
  border-radius: ${theme.borderRadius['2xl']};
  border: 1px solid rgba(168, 85, 247, 0.2);
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
`;

const CTATitle = styled.h3`
  font-size: ${theme.fontSizes['2xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing['3']};
`;

const CTAText = styled.p`
  font-size: ${theme.fontSizes.base};
  color: ${theme.colors.gray400};
  margin-bottom: ${theme.spacing['6']};
  line-height: ${theme.lineHeights.relaxed};
`;

const LinkedInButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing['2']};
  padding: ${theme.spacing['3']} ${theme.spacing['6']};
  background: linear-gradient(135deg, ${theme.colors.violet}, ${theme.colors.orange});
  color: ${theme.colors.white};
  border: none;
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.semibold};
  text-decoration: none;
  cursor: pointer;
  transition: all ${theme.transitions.base};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(168, 85, 247, 0.3);
  }

  svg {
    width: 20px;
    height: 20px;

    svg {
      transform: translateX(4px);
    }
  }
`;

// ========= LIGHTBOX =========
const Lightbox = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.97);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

const LightboxImageContainer = styled.div<{ $isZoomed: boolean }>`
  position: relative;
  display: ${props => props.$isZoomed ? 'block' : 'flex'};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  cursor: ${props => props.$isZoomed ? 'zoom-out' : 'zoom-in'};
  overflow: ${props => props.$isZoomed ? 'auto' : 'hidden'};
  padding: 40px;
`;

const LightboxImage = styled(motion.img)<{ $isMobile?: boolean; $isZoomed: boolean }>`
  max-width: ${props => {
    if (!props.$isZoomed) {
      return props.$isMobile ? '400px' : '90%';
    }
    // Zoom modéré : 120% de la taille normale
    return props.$isMobile ? '480px' : 'min(120%, 1200px)';
  }};
  max-height: ${props => props.$isZoomed ? 'none' : '85vh'};
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: ${props => props.$isMobile ? '20px' : '12px'};
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  cursor: inherit;
  display: ${props => props.$isZoomed ? 'block' : 'initial'};
  margin: ${props => props.$isZoomed ? '0 auto' : '0'};
  transform: ${props => props.$isZoomed ? 'scale(1.2)' : 'scale(1)'};
  transition: transform 0.3s ease;
  ${props => props.$isMobile ? `
    border: 8px solid #222;
    background: #000;
  ` : ''}
`;

const LightboxClose = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1) rotate(90deg);
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const LightboxNav = styled.button<{ $dir: 'prev' | 'next' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.$dir === 'prev' ? 'left: 30px' : 'right: 30px'};
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 20px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-50%) scale(1.1);
  }
`;

// ========= DATA =========
const galleryData: Record<string, any> = {
  1: [
    {
      src: '/projects/weneeds/onb1.png',
      title: 'Onboarding IA Magique',
      description: "L'IA génère automatiquement un profil complet depuis un CV/LinkedIn",
      isWeb: true,
      showInSlider: true,
      order: 1
    },
    {
      src: '/projects/weneeds/onb2.png',
      title: 'Onboarding Tour sur un profil candidat',
      description: 'Interface mobile intuitive avec widgets personnalisables',
      isMobile: true,
      showInSlider: true,
      order: 2
    },
    {
      src: '/projects/weneeds/onb3.png',
      title: 'Onboarding tour intelligent',
      description: 'Système de personnalisation du remplissage de profil',
      isMobile: true,
      showInSlider: true,
      order: 3
    },
    {
      src: '/projects/weneeds/widg1.png',
      title: 'Profil candidat avec widgets modulaires',
      description: 'Écosystème de widgets adaptables en 3 formats',
      isWeb: true,
      showInSlider: true,
      order: 4
    },
    {
      src: '/projects/weneeds/widg4.png',
      title: 'Version Mobile Complète',
      description: 'Experience responsive optimisée',
      isMobile: true,
      showInSlider: true,
      order: 5
    },
    {
      src: '/projects/weneeds/analyse.png',
      title: 'Dashboard Analytics RH',
      description: 'Analyse approfondie des candidats avec IA',
      isWeb: true,
      adjustPosition: true,
      showInSlider: true,
      order: 6
    },
    {
      src: '/projects/weneeds/widg2.png',
      title: 'Recommandations personnalisées',
      description: 'Widgets candidat mobile',
      isMobile: true,
      showInSlider: true,
      order: 7
    },
    {
      src: '/projects/weneeds/widg3.png',
      title: 'Parcourir les widgets',
      description: 'Modale de sélection rapide',
      isMobile: true,
      showInSlider: true,
      order: 8
    }
  ],
  2: [
    {
      src: '/projects/edf/edf-landing.png',
      title: 'Landing Page Moderne',
      description: 'Page d\'accueil présentant les solutions de management énergétique',
      isWeb: true,
      showInSlider: true,
      order: 1
    },
    {
      src: '/projects/edf/edf-connexion.png',
      title: 'Parcours de Connexion',
      description: 'Interface de connexion sécurisée adaptée aux différents profils',
      isWeb: true,
      showInSlider: true,
      order: 2
    },
    {
      src: '/projects/edf/edf-dashboard.png',
      title: 'Dashboard de Pilotage',
      description: 'Interface de gestion énergétique avec visualisations temps réel',
      isWeb: true,
      showInSlider: true,
      order: 3
    }
  ],
  3: [
    {
      src: '/projects/pole-emploi/pole-emploi-design.png',
      title: 'Design System',
      description: 'Système de design cohérent et accessible pour l\'ensemble des interfaces',
      isWeb: true,
      showInSlider: true,
      order: 1
    },
    {
      src: '/projects/pole-emploi/pole-emploi-projet-creatin.png',
      title: 'Création de Projet',
      description: 'Interface guidée pour définir son projet professionnel',
      isWeb: true,
      showInSlider: true,
      order: 2
    },
    {
      src: '/projects/pole-emploi/pole-emploi-gestion-des-projets.png',
      title: 'Gestion des Projets',
      description: 'Tableau de bord pour gérer candidatures et projets',
      isWeb: true,
      showInSlider: true,
      order: 3
    }
  ]
};

// ========= COMPONENT =========
const ProjectDetail: React.FC = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  // Scroll to top when component mounts or projectId changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [projectId]);

  const project = portfolioData.projects.find(p =>
    p.id === Number(projectId) || (p as any).slug === projectId
  );

  if (!project) {
    return (
      <PageContainer>
        <NavBar>
          <NavContent>
            <BackButton onClick={() => navigate('/')}>
              <FiArrowLeft /> Retour
            </BackButton>
          </NavContent>
        </NavBar>
        <HeroSection>
          <ProjectTitle>Projet non trouvé</ProjectTitle>
        </HeroSection>
      </PageContainer>
    );
  }

  const images = galleryData[project.id] || [];
  const metrics = project.id === 1 ? [
    { label: 'Clients', value: '200+', icon: <FiTarget /> },
    { label: 'Gain de temps', value: '70%', icon: <FiZap /> },
    { label: 'Satisfaction', value: '92%', icon: <FiAward /> },
    { label: 'ROI', value: 'x3.5', icon: <HiOutlineSparkles /> }
  ] : project.id === 2 ? [
    { label: 'Testeurs MVP', value: '120', icon: <FiTarget /> },
    { label: 'Produit Scalable', value: '100%', icon: <FiZap /> },
    { label: 'Dev Time', value: '-40%', icon: <FiAward /> },
    { label: 'Insights UX', value: '70+', icon: <HiOutlineSparkles /> }
  ] : project.id === 3 ? [
    { label: 'Satisfaction des Conseillers', value: '↗', icon: <FiAward /> }
  ] : [
    { label: 'Impact', value: '1M+', icon: <FiTarget /> },
    { label: 'Engagement', value: '+60%', icon: <FiZap /> },
    { label: 'Satisfaction', value: '88%', icon: <FiAward /> },
    { label: 'Conversion', value: 'x2.5', icon: <HiOutlineSparkles /> }
  ];

  const features = (project as any).keyProjects || [];

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
    setIsZoomed(false);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    const flatImages = images.filter((img: any) => img);
    if (direction === 'next') {
      setSelectedImage((selectedImage + 1) % flatImages.length);
    } else {
      setSelectedImage(selectedImage === 0 ? flatImages.length - 1 : selectedImage - 1);
    }
  };

  useEffect(() => {
    if (selectedImage === null) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isZoomed) {
          setIsZoomed(false);
        } else {
          setSelectedImage(null);
        }
      }
      if (e.key === 'ArrowRight') navigateLightbox('next');
      if (e.key === 'ArrowLeft') navigateLightbox('prev');
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, isZoomed]);

  return (
    <PageContainer>
      {/* Navigation */}
      <NavBar>
        <NavContent>
          <BackButton
            onClick={() => navigate('/')}
            whileHover={{ x: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiArrowLeft /> Retour
          </BackButton>
          <NavTags>
            {project.tags.slice(0, 3).map((tag, idx) => (
              <NavTag
                key={tag}
                $color={idx === 0 ? 'orange' : idx === 1 ? 'pink' : 'purple'}
              >
                {tag}
              </NavTag>
            ))}
          </NavTags>
        </NavContent>
      </NavBar>

      {/* Hero Section */}
      <HeroSection>
        <ProjectHeader>
          <ProjectTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {project.title}
          </ProjectTitle>

          <ProjectSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            {project.description}
          </ProjectSubtitle>

          <MetaInfo
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <MetaItem>
              <FiTarget />
              <span>Entreprise</span>
              <strong>{(project as any).company}</strong>
            </MetaItem>
            <MetaItem>
              <FiAward />
              <span>Rôle</span>
              <strong>{(project as any).role}</strong>
            </MetaItem>
            <MetaItem>
              <FiZap />
              <span>Durée</span>
              <strong>{(project as any).dateRange}</strong>
            </MetaItem>
          </MetaInfo>
        </ProjectHeader>

        {/* Metrics */}
        <MetricsSection
          $single={metrics.length === 1}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {metrics.map((metric, idx) => (
            <MetricCard
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.3 + idx * 0.1,
                ease: "easeOut"
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <MetricIcon
                initial={{ rotate: 0 }}
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                {metric.icon}
              </MetricIcon>
              <MetricValue>{metric.value}</MetricValue>
              <MetricLabel>{metric.label}</MetricLabel>
            </MetricCard>
          ))}
        </MetricsSection>

        {/* Challenge & Solution */}
        <StorySection>
          <StoryCard
            className="challenge"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <StoryTitle>
              <FiTarget />
              Le Challenge
            </StoryTitle>
            <StoryText>
              {project.id === 1
                ? "Transformer le recrutement traditionnel en créant une plateforme qui connecte instantanément talents et entreprises grâce à l'IA, tout en gardant l'aspect humain au centre du processus."
                : project.id === 2
                ? "Transformer une suite de produits énergétiques sur-mesure en solutions scalables dans le secteur industriel, sans processus UX établi."
                : "Repenser l'expérience des Conseillers Pôle Emploi en intégrant des recommandations personnalisées basées sur l'IA pour maximiser l'efficacité de leur accompagnement."
              }
            </StoryText>
          </StoryCard>

          <StoryCard
            className="solution"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <StoryTitle>
              <HiOutlineSparkles />
              La Solution
            </StoryTitle>
            <StoryText>
              {project.id === 1
                ? "Une expérience du recrutement complètement différente des outils RH habituels, avec une IA intégrée dans plusieurs fonctionnalités : onboarding, interview, personnalisation du profil, etc. Le tout dans un design \"bento\" moderne et innovant pour des usages encore nouveaux pour les utilisateurs."
                : project.id === 2
                ? "Création d'un écosystème UX complet : de la recherche utilisateur à l'interface scalable, en passant par l'implémentation du premier processus centré utilisateur de l'entreprise."
                : "Un système de recommandations intelligent, une interface moderne et engageante, et des outils de suivi de progression pour accompagner chaque étape du parcours."
              }
            </StoryText>
          </StoryCard>
        </StorySection>

        {/* Images Showcase */}
        <ShowcaseSection>
          <SectionTitle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Visuels du projet
          </SectionTitle>

          {/* Mixed Visuals Slider */}
          <VisualsSlider>
            <SliderButton
              $direction="left"
              onClick={() => {
                const container = document.getElementById('visuals-slider');
                if (container) {
                  container.scrollBy({ left: -600, behavior: 'smooth' });
                }
              }}
            >
              <FiChevronLeft />
            </SliderButton>

            <SliderContainer id="visuals-slider">
              {images
                .filter((img: any) => img.showInSlider)
                .sort((a: any, b: any) => (a.order || 999) - (b.order || 999))
                .map((image: any, index: number) => {
                  const originalIndex = images.findIndex((img: any) => img.src === image.src);
                  return (
                    <SliderCard
                      key={index}
                      $isMobile={image.isMobile}
                      $isWeb={image.isWeb}
                      $adjustPosition={image.adjustPosition}
                      onClick={() => handleImageClick(originalIndex)}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.1 * index,
                        ease: "easeOut"
                      }}
                      whileHover={{ y: -8 }}
                    >
                      <img src={image.src} alt={image.title} />
                      <ImageOverlay>
                        <ImageCaption>
                          <h4>{image.title}</h4>
                          <p>{image.description}</p>
                        </ImageCaption>
                      </ImageOverlay>
                    </SliderCard>
                  );
                })}
            </SliderContainer>

            <SliderButton
              $direction="right"
              onClick={() => {
                const container = document.getElementById('visuals-slider');
                if (container) {
                  container.scrollBy({ left: 600, behavior: 'smooth' });
                }
              }}
            >
              <FiChevronRight />
            </SliderButton>
          </VisualsSlider>
        </ShowcaseSection>

        {/* Key Features */}
        {features.length > 0 && (
          <FeaturesSection>
            <SectionTitle
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              style={{ marginBottom: '32px' }}
            >
              Points clés du projet
            </SectionTitle>
            <FeaturesList>
              {features.map((feature: any, idx: number) => (
                <FeatureItem
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 * idx,
                    ease: "easeOut"
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <FeatureTitle>{feature.name}</FeatureTitle>
                  <FeatureDesc>{feature.description}</FeatureDesc>
                </FeatureItem>
              ))}
            </FeaturesList>
          </FeaturesSection>
        )}

        {/* Related Case Studies - Only for Pôle Emploi */}
        {project.id === 3 && (
          <RelatedSection>
            <RelatedTitle>Découvrir d'autres études de cas</RelatedTitle>
            <RelatedGrid>
              <RelatedCard
                whileHover={{ y: -8 }}
                onClick={() => navigate('/weneeds/interview')}
              >
                <RelatedImage $image="/projects/weneeds/Interview.png" />
                <RelatedContent>
                  <RelatedCardTitle>Interview IA Conversationnelle</RelatedCardTitle>
                  <RelatedDescription>
                    Interface conversationnelle où l'IA remplace les appels de pré-qualification RH par une expérience empathique et efficace
                  </RelatedDescription>
                  <RelatedLink>
                    Voir l'étude de cas <FiArrowRight />
                  </RelatedLink>
                </RelatedContent>
              </RelatedCard>

              <RelatedCard
                whileHover={{ y: -8 }}
                onClick={() => navigate('/edf')}
              >
                <RelatedImage $image="/projects/edf/edf-dashboard.png" />
                <RelatedContent>
                  <RelatedCardTitle>Produit B2B Énergétique - EDF</RelatedCardTitle>
                  <RelatedDescription>
                    Design d'une plateforme SaaS de gestion énergétique et standardisation de produits B2B scalables
                  </RelatedDescription>
                  <RelatedLink>
                    Voir l'étude de cas <FiArrowRight />
                  </RelatedLink>
                </RelatedContent>
              </RelatedCard>
            </RelatedGrid>
          </RelatedSection>
        )}

        {/* CTA Section for Pôle Emploi */}
        {project.id === 3 && (
          <CTASection
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <CTATitle>Intéressé par ce projet ?</CTATitle>
            <CTAText>
              Discutons de la façon dont je peux contribuer à vos projets
            </CTAText>
            <LinkedInButton
              href={portfolioData.personal.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin />
              Me contacter sur LinkedIn
            </LinkedInButton>
          </CTASection>
        )}
      </HeroSection>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <Lightbox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              if (isZoomed) {
                setIsZoomed(false);
              } else {
                setSelectedImage(null);
              }
            }}
          >
            <LightboxImageContainer
              $isZoomed={isZoomed}
              onClick={(e) => {
                e.stopPropagation();
                setIsZoomed(!isZoomed);
              }}
            >
              <LightboxImage
                src={images[selectedImage].src}
                alt={images[selectedImage].title}
                $isMobile={images[selectedImage].isMobile}
                $isZoomed={isZoomed}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut"
                }}
                draggable={false}
              />
            </LightboxImageContainer>

            <LightboxClose onClick={() => setSelectedImage(null)}>
              <FiX />
            </LightboxClose>

            {images.length > 1 && (
              <>
                <LightboxNav
                  $dir="prev"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateLightbox('prev');
                  }}
                >
                  <FiChevronLeft />
                </LightboxNav>
                <LightboxNav
                  $dir="next"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateLightbox('next');
                  }}
                >
                  <FiChevronRight />
                </LightboxNav>
              </>
            )}
          </Lightbox>
        )}
      </AnimatePresence>
    </PageContainer>
  );
};

export default ProjectDetail;