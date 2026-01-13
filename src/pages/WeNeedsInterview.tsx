import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiTarget, FiSearch, FiTrendingUp, FiLayers, FiMessageCircle, FiArrowRight, FiLinkedin, FiUsers, FiCheckCircle } from 'react-icons/fi';
import { theme } from '../styles/theme';
import { portfolioData } from '../data/portfolio';

const PageContainer = styled.div`
  min-height: 100vh;
  background: ${theme.colors.black};
`;

const HeroSection = styled.section`
  min-height: 60vh;
  position: relative;
  background: linear-gradient(to bottom, rgba(0,0,0,0.6), ${theme.colors.black}),
              url('/projects/weneeds/Interview.png');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  padding: ${theme.spacing['16']} 0 ${theme.spacing['12']};
`;

const BackButton = styled(motion.button)`
  position: absolute;
  top: ${theme.spacing['8']};
  left: ${theme.spacing['6']};
  display: flex;
  align-items: center;
  gap: ${theme.spacing['2']};
  padding: ${theme.spacing['2']} ${theme.spacing['4']};
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${theme.borderRadius.full};
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.sm};
  cursor: pointer;
  transition: all ${theme.transitions.base};
  z-index: 20;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateX(-4px);
  }
`;

const HeroContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${theme.spacing['6']};
  width: 100%;
`;

const CategoryBadge = styled(motion.span)`
  display: inline-block;
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.violet};
  background: rgba(168, 85, 247, 0.1);
  padding: ${theme.spacing['2']} ${theme.spacing['4']};
  border-radius: ${theme.borderRadius.full};
  margin-bottom: ${theme.spacing['4']};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(168, 85, 247, 0.2);
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing['4']};
  letter-spacing: -0.02em;
  line-height: 1.1;
`;

const Subtitle = styled(motion.p)`
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.gray300};
  margin-bottom: ${theme.spacing['6']};
  max-width: 700px;
`;

const TagsRow = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing['2']};
  margin-bottom: ${theme.spacing['4']};
`;

const Tag = styled.span<{ color?: string }>`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.white};
  background: ${props => {
    switch(props.color) {
      case 'violet': return 'rgba(168, 85, 247, 0.15)';
      case 'orange': return 'rgba(255, 140, 90, 0.15)';
      case 'pink': return 'rgba(236, 72, 153, 0.15)';
      case 'blue': return 'rgba(59, 130, 246, 0.15)';
      default: return 'rgba(255, 255, 255, 0.1)';
    }
  }};
  padding: ${theme.spacing['2']} ${theme.spacing['4']};
  border-radius: ${theme.borderRadius.full};
  backdrop-filter: blur(10px);
  border: 1px solid ${props => {
    switch(props.color) {
      case 'violet': return 'rgba(168, 85, 247, 0.4)';
      case 'orange': return 'rgba(255, 140, 90, 0.4)';
      case 'pink': return 'rgba(236, 72, 153, 0.4)';
      case 'blue': return 'rgba(59, 130, 246, 0.4)';
      default: return 'rgba(255, 255, 255, 0.2)';
    }
  }};
  font-weight: ${theme.fontWeights.medium};
  transition: all ${theme.transitions.base};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${props => {
      switch(props.color) {
        case 'violet': return 'rgba(168, 85, 247, 0.3)';
        case 'orange': return 'rgba(255, 140, 90, 0.3)';
        case 'pink': return 'rgba(236, 72, 153, 0.3)';
        case 'blue': return 'rgba(59, 130, 246, 0.3)';
        default: return 'rgba(255, 255, 255, 0.2)';
      }
    }};
  }
`;

const ContextNote = styled(motion.div)`
  background: rgba(255, 140, 90, 0.1);
  border: 1px solid rgba(255, 140, 90, 0.3);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing['3']} ${theme.spacing['4']};
  margin-top: ${theme.spacing['4']};
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.orange};
  font-style: italic;
  max-width: 700px;
`;

const ContentSection = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: ${theme.spacing['16']} ${theme.spacing['6']};
`;

const SectionBlock = styled(motion.div)`
  margin-bottom: ${theme.spacing['16']};
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing['3']};
  margin-bottom: ${theme.spacing['6']};
`;

const SectionIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: ${theme.borderRadius.lg};
  background: linear-gradient(135deg, ${theme.colors.violet}, ${theme.colors.orange});
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.white};
`;

const SectionTitle = styled.h2`
  font-size: ${theme.fontSizes['3xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.white};
`;

const SubTitle = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing['4']};
  margin-top: ${theme.spacing['8']};
`;

const NumberedSubTitle = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing['4']};
  margin-top: ${theme.spacing['8']};
  display: flex;
  align-items: center;
  gap: ${theme.spacing['3']};

  &::before {
    content: attr(data-number);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background: ${theme.colors.gradientAI};
    border-radius: ${theme.borderRadius.full};
    font-size: ${theme.fontSizes.base};
    font-weight: ${theme.fontWeights.bold};
  }
`;

const ContextBox = styled.div`
  background: linear-gradient(135deg,
    ${theme.colors.gray900} 0%,
    rgba(168, 85, 247, 0.05) 100%
  );
  border: 1px solid ${theme.colors.gray800};
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing['6']};
  margin-bottom: ${theme.spacing['4']};

  h4 {
    font-size: ${theme.fontSizes.base};
    font-weight: ${theme.fontWeights.semibold};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacing['3']};
  }

  p {
    font-size: ${theme.fontSizes.base};
    color: ${theme.colors.gray300};
    line-height: ${theme.lineHeights.relaxed};
    margin: 0;
  }
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${theme.spacing['4']} 0;

  li {
    font-size: ${theme.fontSizes.base};
    color: ${theme.colors.gray300};
    line-height: ${theme.lineHeights.relaxed};
    margin-bottom: ${theme.spacing['3']};
    padding-left: ${theme.spacing['6']};
    position: relative;

    &::before {
      content: '→';
      position: absolute;
      left: 0;
      color: ${theme.colors.violet};
      font-weight: ${theme.fontWeights.bold};
    }
  }
`;

const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing['6']};
  margin: ${theme.spacing['6']} 0;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const InfoBox = styled.div`
  background: linear-gradient(135deg,
    rgba(168, 85, 247, 0.05) 0%,
    rgba(255, 140, 90, 0.05) 100%
  );
  border: 1px solid rgba(168, 85, 247, 0.2);
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing['6']};

  h4 {
    font-size: ${theme.fontSizes.lg};
    font-weight: ${theme.fontWeights.semibold};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacing['4']};
  }
`;

const FlowDiagram = styled.div`
  background: linear-gradient(135deg,
    ${theme.colors.gray900} 0%,
    rgba(168, 85, 247, 0.05) 100%
  );
  border: 1px solid ${theme.colors.gray800};
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing['8']};
  margin: ${theme.spacing['8']} 0;
  overflow-x: auto;

  pre {
    font-family: 'Courier New', monospace;
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.gray200};
    line-height: 1.8;
    white-space: pre;
    margin: 0;
  }
`;

const ImageBlock = styled(motion.div)`
  margin: ${theme.spacing['8']} 0;
`;

const ImageContainer = styled.div<{ isMobile?: boolean }>`
  width: 100%;
  max-width: ${props => props.isMobile ? '500px' : '100%'};
  margin: 0 auto;
  border-radius: ${theme.borderRadius.xl};
  overflow: hidden;
  background: ${theme.colors.gray900};
  margin-bottom: ${theme.spacing['4']};
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
`;

const Image = styled.img<{ isMobile?: boolean }>`
  width: 100%;
  max-height: ${props => props.isMobile ? '700px' : 'none'};
  height: auto;
  display: block;
  object-fit: contain;
`;

const ImageCaption = styled.p`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.gray400};
  line-height: ${theme.lineHeights.relaxed};
  font-style: italic;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const HighlightBox = styled.div`
  background: linear-gradient(135deg,
    rgba(168, 85, 247, 0.1) 0%,
    rgba(255, 140, 90, 0.1) 100%
  );
  border-left: 4px solid ${theme.colors.violet};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing['6']};
  margin: ${theme.spacing['6']} 0;

  p {
    font-size: ${theme.fontSizes.base};
    color: ${theme.colors.gray200};
    line-height: ${theme.lineHeights.relaxed};
    margin: 0;

    strong {
      color: ${theme.colors.white};
    }
  }
`;

const MetricsCard = styled(motion.div)`
  background: linear-gradient(135deg,
    rgba(168, 85, 247, 0.1) 0%,
    rgba(255, 140, 90, 0.1) 100%
  );
  border: 2px solid ${theme.colors.violet};
  border-radius: ${theme.borderRadius['2xl']};
  padding: ${theme.spacing['8']};
  margin: ${theme.spacing['16']} 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${theme.colors.gradientAI};
  }
`;

const MetricsTitle = styled.h3`
  font-size: ${theme.fontSizes['2xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing['2']};
  display: flex;
  align-items: center;
  gap: ${theme.spacing['3']};
`;

const MetricsSubtitle = styled.p`
  font-size: ${theme.fontSizes.base};
  color: ${theme.colors.gray400};
  margin-bottom: ${theme.spacing['6']};
`;

const MetricBar = styled.div`
  margin-bottom: ${theme.spacing['6']};

  &:last-child {
    margin-bottom: 0;
  }
`;

const MetricLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing['2']};
  font-size: ${theme.fontSizes.base};
  color: ${theme.colors.gray300};

  span:last-child {
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.white};
  }
`;

const MetricBarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing['3']};
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.gray400};
`;

const MetricBarBefore = styled.div<{ width: number }>`
  height: 8px;
  background: rgba(168, 85, 247, 0.3);
  border-radius: ${theme.borderRadius.full};
  width: ${props => props.width}%;
  min-width: 60px;
`;

const MetricBarAfter = styled.div<{ width: number }>`
  height: 8px;
  background: ${theme.colors.gradientAI};
  border-radius: ${theme.borderRadius.full};
  width: ${props => props.width}%;
  min-width: 40px;
`;

const ProtocolBox = styled.div`
  background: ${theme.colors.gray900};
  border: 1px solid ${theme.colors.gray800};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing['4']};
  margin: ${theme.spacing['4']} 0;

  h5 {
    font-size: ${theme.fontSizes.base};
    font-weight: ${theme.fontWeights.semibold};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacing['3']};
  }
`;

const ResultsBox = styled.div`
  background: linear-gradient(135deg,
    rgba(168, 85, 247, 0.05) 0%,
    rgba(255, 140, 90, 0.05) 100%
  );
  border: 1px solid rgba(168, 85, 247, 0.2);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing['4']};
  margin: ${theme.spacing['4']} 0;

  h5 {
    font-size: ${theme.fontSizes.base};
    font-weight: ${theme.fontWeights.semibold};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacing['3']};
  }
`;

const LearningsBox = styled(motion.div)`
  background: linear-gradient(135deg,
    rgba(255, 140, 90, 0.1) 0%,
    rgba(236, 72, 153, 0.1) 100%
  );
  border: 2px solid ${theme.colors.orange};
  border-radius: ${theme.borderRadius['2xl']};
  padding: ${theme.spacing['8']};
  margin-top: ${theme.spacing['16']};
`;

const LearningItem = styled.div`
  background: ${theme.colors.gray900};
  border: 1px solid ${theme.colors.gray800};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing['5']};
  margin-bottom: ${theme.spacing['4']};
  transition: all ${theme.transitions.base};

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    border-color: ${theme.colors.orange};
    transform: translateX(4px);
  }

  h4 {
    font-size: ${theme.fontSizes.base};
    font-weight: ${theme.fontWeights.semibold};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacing['2']};
    display: flex;
    align-items: center;
    gap: ${theme.spacing['2']};

    &::before {
      content: attr(data-number);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      background: ${theme.colors.gradientAI};
      border-radius: ${theme.borderRadius.full};
      font-size: ${theme.fontSizes.sm};
    }
  }

  p {
    font-size: ${theme.fontSizes.base};
    color: ${theme.colors.gray300};
    line-height: ${theme.lineHeights.relaxed};
    margin: 0;
  }
`;

const RelatedCaseStudies = styled(motion.section)`
  max-width: 1280px;
  margin: ${theme.spacing['20']} auto 0;
  padding: ${theme.spacing['16']} ${theme.spacing['6']};
`;

const RelatedTitle = styled.h2`
  font-size: ${theme.fontSizes['3xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.white};
  text-align: center;
  margin-bottom: ${theme.spacing['12']};
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing['8']};

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const RelatedCard = styled(motion.div)`
  background: ${theme.colors.gray900};
  border: 2px solid ${theme.colors.gray800};
  border-radius: ${theme.borderRadius.xl};
  overflow: hidden;
  cursor: pointer;
  transition: all ${theme.transitions.base};

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(255, 140, 90, 0.5);
    box-shadow: 0 20px 40px rgba(255, 140, 90, 0.2);
  }
`;

const RelatedImage = styled.div<{ image: string }>`
  width: 100%;
  height: 280px;
  background: url(${props => props.image}) center/cover no-repeat;
  position: relative;
  overflow: hidden;
`;

const RelatedContent = styled.div`
  padding: ${theme.spacing['6']};
`;

const RelatedCardTitle = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing['3']};
`;

const RelatedDescription = styled.p`
  font-size: ${theme.fontSizes.base};
  color: ${theme.colors.gray400};
  line-height: ${theme.lineHeights.relaxed};
  margin-bottom: ${theme.spacing['4']};
`;

const RelatedLink = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing['2']};
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.orange};
  font-weight: ${theme.fontWeights.semibold};
  transition: gap ${theme.transitions.base};

  ${RelatedCard}:hover & {
    gap: ${theme.spacing['3']};
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
  }
`;

const WeNeedsInterview: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      {/* SECTION 1 - HERO */}
      <HeroSection>
        <BackButton
          onClick={() => navigate('/weneeds')}
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiArrowLeft />
          Retour
        </BackButton>

        <HeroContent>
          <CategoryBadge
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Étude de cas • WeNeeds
          </CategoryBadge>
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Interview IA Conversationnelle
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Automatiser la pré-qualification sans déshumaniser le recrutement
          </Subtitle>
          <TagsRow
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Tag color="violet">AI Product Design</Tag>
            <Tag color="orange">Conversational AI</Tag>
            <Tag color="pink">User Research</Tag>
            <Tag color="blue">Data Driven</Tag>
            <Tag color="violet">Cross-team Coordination</Tag>
            <Tag color="orange">Mobile Design</Tag>
          </TagsRow>
          <ContextNote
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Note de contexte : Produit en phase de test interne (non déployé en production)
          </ContextNote>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        {/* IMAGE INTERVIEW.PNG */}
        <ImageBlock
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ImageContainer>
            <Image src="/projects/weneeds/Interview.png" alt="Interface de l'interview IA" />
          </ImageContainer>
          <ImageCaption>
            Interface conversationnelle de l'interview IA avec bannière entreprise et barre de progression
          </ImageCaption>
        </ImageBlock>

        {/* SECTION 2 - CONTEXTE ET CHALLENGE */}
        <SectionBlock
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader>
            <SectionIcon>
              <FiTarget size={24} />
            </SectionIcon>
            <SectionTitle>Contexte et Challenge</SectionTitle>
          </SectionHeader>

          <SubTitle>Contexte</SubTitle>
          <ContextBox>
            <h4>Rôle</h4>
            <p>Seule Product Designer chez Weneeds (startup recrutement IA, 2 ans)</p>
          </ContextBox>
          <ContextBox>
            <h4>Équipe</h4>
            <p>3 développeurs, 1 Data Scientist, CEO</p>
          </ContextBox>

          <SubTitle>Le problème business</SubTitle>
          <TwoColumnGrid>
            <InfoBox>
              <h4>Côté recruteurs :</h4>
              <BulletList>
                <li>60h par mois perdues en calls de préqualif répétitifs</li>
                <li>25% de no-shows = 6h par semaine de temps planifié perdu</li>
              </BulletList>
            </InfoBox>
            <InfoBox>
              <h4>Côté candidats :</h4>
              <BulletList>
                <li>Attente de 2-3 semaines sans retour</li>
                <li>Rejets impersonnels déshumanisants</li>
              </BulletList>
            </InfoBox>
          </TwoColumnGrid>

          <SubTitle>Challenge design</SubTitle>
          <HighlightBox>
            <p><strong>Comment automatiser la préqualif avec l'IA sans tomber dans le "chatbot froid" ?</strong></p>
          </HighlightBox>

          <ContextBox>
            <h4>Contraintes :</h4>
            <BulletList>
              <li>Budget 0€ recherche externe</li>
              <li>Pas de clients réels pour tester (phase pre-launch)</li>
              <li>L'IA peut générer trop de texte = coût et UX dégradée</li>
            </BulletList>
          </ContextBox>
        </SectionBlock>

        {/* SECTION 3 - MA DÉMARCHE */}
        <SectionBlock
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader>
            <SectionIcon>
              <FiSearch size={24} />
            </SectionIcon>
            <SectionTitle>Ma démarche</SectionTitle>
          </SectionHeader>

          {/* Étape 1 */}
          <NumberedSubTitle data-number="1">Recherche utilisateur (avec moyens limités)</NumberedSubTitle>

          <ProtocolBox>
            <h5>Méthodologie :</h5>
            <BulletList>
              <li>4 sessions de shadowing avec CEO (ex-recruteur, plus de 1000 CV traités)</li>
              <li>6 entretiens RH de notre réseau (15-20min via LinkedIn)</li>
              <li>8 discussions informelles avec candidats en recherche d'emploi</li>
              <li>Mon expérience perso : 7 mois de recherche, 50+ candidatures</li>
            </BulletList>
          </ProtocolBox>

          <ResultsBox>
            <h5>Insights clés :</h5>
            <BulletList>
              <li>Recruteurs : "70% du temps sur des questions basiques répétitives"</li>
              <li>Candidats : "Le pire c'est l'attente + le rejet par email robot"</li>
            </BulletList>
          </ResultsBox>

          {/* Étape 2 */}
          <NumberedSubTitle data-number="2">Tests early-stage (validation concept rapide)</NumberedSubTitle>

          <ProtocolBox>
            <h5>Protocole :</h5>
            <BulletList>
              <li>Wireframes Figma clickables</li>
              <li>12 participants (6 candidats, 6 recruteurs)</li>
              <li>Sessions 20min en visio</li>
            </BulletList>
          </ProtocolBox>

          <ResultsBox>
            <h5>Résultats :</h5>
            <BulletList>
              <li>Feedback : "Plus agréable qu'un formulaire, on dirait que je parle à quelqu'un"</li>
              <li><strong>Décision : Green light</strong></li>
            </BulletList>
          </ResultsBox>

          {/* Étape 3 */}
          <NumberedSubTitle data-number="3">Itération avec le Data Scientist</NumberedSubTitle>

          <SubTitle>Contraintes techniques identifiées :</SubTitle>

          <HighlightBox>
            <p>
              <strong>Problème 1 :</strong> L'IA peut générer des questions infinies<br />
              <strong>Solution design :</strong> Limiter à 200 caractères de réponse max<br />
              <strong>Impact :</strong> -40% coûts API + analyse IA plus précise (89% vs 73%)
            </p>
          </HighlightBox>

          <HighlightBox>
            <p>
              <strong>Problème 2 :</strong> Timer trop court stresse les candidats<br />
              <strong>Solution design :</strong> Tests avec 30s vs 45s<br />
              <strong>Résultat :</strong> 45s = 95% complétion (vs 78% avec 30s)
            </p>
          </HighlightBox>

          <SubTitle>Schéma du parcours utilisateur simplifié</SubTitle>
          <FlowDiagram>
            <pre>{`
Accueil  →  Questions (avec timer)  →  Résultat
                                          ↓
                        ┌─────────────────┴─────────────────┐
                        ↓                                   ↓
                    Réussite                              Échec
                        ↓                                   ↓
                Calendrier recruteur              Message empathique
                        ↓                                   ↓
                Booking instantané         Suggestions offres + Contact direct RH
            `}</pre>
          </FlowDiagram>
        </SectionBlock>

        {/* SECTION 4 - SOLUTIONS DESIGN CLÉS */}
        <SectionBlock
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader>
            <SectionIcon>
              <FiLayers size={24} />
            </SectionIcon>
            <SectionTitle>Solutions design clés</SectionTitle>
          </SectionHeader>

          {/* Solution 1 */}
          <NumberedSubTitle data-number="1">Interface conversationnelle (pas formulaire)</NumberedSubTitle>

          <SubTitle>Web :</SubTitle>
          <BulletList>
            <li>Layout vertical type messagerie</li>
            <li>Bannière entreprise en header</li>
            <li>Barre de progression</li>
          </BulletList>

          <SubTitle>Mobile :</SubTitle>
          <BulletList>
            <li>Expérience immersive plein écran</li>
            <li>Bannière en fond avec blur</li>
            <li>Question en très gros (focus total)</li>
          </BulletList>

          <HighlightBox>
            <p><strong>Pourquoi ce choix ?</strong> Tests A/B (12 personnes, 6 par version) : interface conversationnelle perçue comme plus humaine et engageante</p>
          </HighlightBox>

          <ImageBlock
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ImageContainer isMobile>
              <Image src="/projects/weneeds/mobile.png" alt="Interface mobile conversationnelle" isMobile />
            </ImageContainer>
            <ImageCaption>
              Interface mobile immersive avec questions en plein écran et timer visible
            </ImageCaption>
          </ImageBlock>

          {/* Solution 2 */}
          <NumberedSubTitle data-number="2">Empathie dans l'échec (différenciation majeure)</NumberedSubTitle>

          <HighlightBox>
            <p>
              <strong>Le problème :</strong> Version naive : "Désolé, votre profil ne correspond pas" → NPS 3/10
            </p>
          </HighlightBox>

          <SubTitle>Ma solution :</SubTitle>
          <p style={{ color: theme.colors.gray300, marginBottom: theme.spacing['4'] }}>
            Message personnalisé par l'IA avec :
          </p>
          <BulletList>
            <li>Explication du rejet (sans blesser)</li>
            <li>3 suggestions d'offres similaires</li>
            <li>Option contact direct avec recruteur</li>
          </BulletList>

          <HighlightBox>
            <p><strong>Impact :</strong> Feedback : "Même en cas de rejet, je me sens respecté"</p>
          </HighlightBox>

          <ImageBlock
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ImageContainer isMobile>
              <Image src="/projects/weneeds/felicitations.png" alt="Message empathique" isMobile />
            </ImageContainer>
            <ImageCaption>
              Message empathique personnalisé en cas d'échec avec suggestions d'offres alternatives
            </ImageCaption>
          </ImageBlock>

          {/* Solution 3 */}
          <NumberedSubTitle data-number="3">Parcours post-interview optimisés</NumberedSubTitle>

          <SubTitle>En cas de réussite :</SubTitle>
          <BulletList>
            <li>Accès direct au calendrier du recruteur</li>
            <li>Booking instantané de RDV</li>
            <li>Confirmation auto (Google Cal/Outlook)</li>
          </BulletList>

          <SubTitle>Dashboard RDV pour gérer :</SubTitle>
          <BulletList>
            <li>Tous les prochains entretiens (liste cards)</li>
            <li>Filtres par date/type (présentiel/Zoom/tel)</li>
            <li>Actions : Modifier/Annuler/Reprogrammer</li>
          </BulletList>
        </SectionBlock>

        {/* SECTION 5 - IMPACT MESURÉ */}
        <MetricsCard
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <MetricsTitle>
            <FiTrendingUp size={28} />
            Impact mesuré (tests internes sur 3 mois)
          </MetricsTitle>
          <MetricsSubtitle>
            Protocole : 8 recruteurs tests (CEO + 7 personnes du réseau) • 120 candidats tests (vraies candidatures Indeed, avec accord)
          </MetricsSubtitle>

          <SubTitle>Résultats :</SubTitle>
          <TwoColumnGrid>
            <InfoBox>
              <h4>Temps RH :</h4>
              <BulletList>
                <li>Avant : 15 min de call par candidat</li>
                <li>Après : 0 min (asynchrone) + 3 min review dashboard</li>
                <li>Réduction de 80% du temps de préqualif</li>
              </BulletList>
            </InfoBox>
            <InfoBox>
              <h4>Satisfaction :</h4>
              <BulletList>
                <li>95% des recruteurs tests : "je continuerais à utiliser"</li>
              </BulletList>
            </InfoBox>
          </TwoColumnGrid>
        </MetricsCard>

        {/* SECTION 6 - LEARNINGS */}
        <LearningsBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionTitle style={{ marginBottom: theme.spacing['6'] }}>Ce que j'ai appris</SectionTitle>

          <LearningItem>
            <h4 data-number="1">Contraindre l'IA par le design = levier business</h4>
            <p>Limiter les réponses à 200 caractères a réduit les coûts ET amélioré l'analyse IA.</p>
          </LearningItem>

          <LearningItem>
            <h4 data-number="2">L'empathie se design dans les détails</h4>
            <p>Le message d'échec personnalisé a fait passer le NPS de 3/10 à 7/10. L'automatisation peut être humaine.</p>
          </LearningItem>

          <LearningItem>
            <h4 data-number="3">Tester avec peu de moyens, c'est possible</h4>
            <p>12 tests early-stage suffisent pour valider/invalider un concept. Pas besoin de budget recherche énorme.</p>
          </LearningItem>

          <LearningItem>
            <h4 data-number="4">Designer seule = être Product Owner de fait</h4>
            <p>J'ai dû cadrer le problème, prioriser, justifier mes choix en termes business, pas juste UX.</p>
          </LearningItem>
        </LearningsBox>

        {/* SECTION 7 - EXTENSION : ASSISTANT IA */}
        <SectionBlock
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader>
            <SectionIcon>
              <FiMessageCircle size={24} />
            </SectionIcon>
            <SectionTitle>Extension : Assistant IA</SectionTitle>
          </SectionHeader>

          <p style={{ fontSize: theme.fontSizes.base, color: theme.colors.gray300, lineHeight: theme.lineHeights.relaxed, marginBottom: theme.spacing['4'] }}>
            Nous avons plus tard chez Weneeds décidé d'intégrer un <strong>"Assistant IA"</strong> capable de répondre à tout type de requêtes du recruteur et du candidat.
          </p>

          <p style={{ fontSize: theme.fontSizes.base, color: theme.colors.gray300, lineHeight: theme.lineHeights.relaxed, marginBottom: theme.spacing['4'] }}>
            Mon expérience de l'interview m'a permis de réutiliser mes connaissances dans cette fonctionnalité :
          </p>

          <SubTitle>Réutilisation du pattern conversationnel pour créer un assistant capable de :</SubTitle>
          <BulletList>
            <li>Répondre aux questions recruteurs/candidats</li>
            <li>Informer sur rendez-vous et matching</li>
            <li>Gérer discussions (ajout/suppression, états de chargement)</li>
          </BulletList>

          <HighlightBox>
            <p><strong>Design pattern :</strong> Messagerie + réponses visuelles structurées (cards, listes, boutons d'action).</p>
          </HighlightBox>

          <ImageBlock
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ImageContainer>
              <Image src="/projects/weneeds/assistant.png" alt="Assistant IA" />
            </ImageContainer>
            <ImageCaption>
              Premiers prototypes de l'Assistant IA avec interface conversationnelle et réponses structurées
            </ImageCaption>
          </ImageBlock>

          <p style={{ fontSize: theme.fontSizes.base, color: theme.colors.gray400, fontStyle: 'italic', marginTop: theme.spacing['4'] }}>
            Cet assistant est encore en cours de création...
          </p>

          <SubTitle>Articles LinkedIn connexes :</SubTitle>
          <BulletList>
            <li><a href="https://www.linkedin.com/feed/update/urn:li:activity:7263556690327949312/" target="_blank" rel="noopener noreferrer" style={{ color: theme.colors.violet, textDecoration: 'none' }}>Article sur l'Assistant IA</a></li>
            <li><a href="https://www.linkedin.com/feed/update/urn:li:activity:7266038331838595072/" target="_blank" rel="noopener noreferrer" style={{ color: theme.colors.violet, textDecoration: 'none' }}>Insights sur la conception conversationnelle</a></li>
          </BulletList>
        </SectionBlock>
      </ContentSection>

      {/* RELATED CASE STUDIES */}
      <RelatedCaseStudies
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <RelatedTitle>Découvrir les autres études de cas WeNeeds</RelatedTitle>
        <RelatedGrid>
          <RelatedCard
            onClick={() => navigate('/weneeds/widgets')}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
          >
            <RelatedImage image="/projects/weneeds/widg1.png" />
            <RelatedContent>
              <RelatedCardTitle>Widgets personnalisables iOS-inspired</RelatedCardTitle>
              <RelatedDescription>
                40+ widgets modulaires pour créer des profils engageants et uniques avec intelligence contextuelle IA
              </RelatedDescription>
              <RelatedLink>
                Voir l'étude de cas <FiArrowRight />
              </RelatedLink>
            </RelatedContent>
          </RelatedCard>
          <RelatedCard
            onClick={() => navigate('/weneeds/dashboard')}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
          >
            <RelatedImage image="/projects/weneeds/dashboard-hero.png" />
            <RelatedContent>
              <RelatedCardTitle>Dashboard analytique IA</RelatedCardTitle>
              <RelatedDescription>
                Aider les recruteurs à prendre de meilleures décisions en 3 minutes avec des insights IA actionnables
              </RelatedDescription>
              <RelatedLink>
                Voir l'étude de cas <FiArrowRight />
              </RelatedLink>
            </RelatedContent>
          </RelatedCard>
        </RelatedGrid>
      </RelatedCaseStudies>

      {/* CTA SECTION */}
      <ContentSection>
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
      </ContentSection>
    </PageContainer>
  );
};

export default WeNeedsInterview;
