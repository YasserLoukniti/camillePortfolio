import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiTarget, FiAlertCircle, FiTrendingUp } from 'react-icons/fi';
import { theme } from '../styles/theme';

const PageContainer = styled.div`
  min-height: 100vh;
  background: ${theme.colors.black};
`;

const HeroSection = styled.section<{ bgImage?: string }>`
  min-height: 70vh;
  position: relative;
  background: ${props => props.bgImage
    ? `linear-gradient(to bottom, rgba(0,0,0,0.4), ${theme.colors.black}), url(${props.bgImage})`
    : theme.colors.gradientAI};
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

const ContentSection = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: ${theme.spacing['16']} ${theme.spacing['6']};
`;

const IntroText = styled(motion.p)`
  font-size: ${theme.fontSizes['2xl']};
  color: ${theme.colors.gray300};
  line-height: ${theme.lineHeights.relaxed};
  margin-bottom: ${theme.spacing['12']};
  text-align: center;
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

const ObjectivesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${theme.spacing['4']};
  margin-top: ${theme.spacing['8']};
`;

const ObjectiveCard = styled(motion.div)`
  background: linear-gradient(135deg,
    ${theme.colors.gray900} 0%,
    rgba(168, 85, 247, 0.03) 100%
  );
  border: 1px solid ${theme.colors.gray800};
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing['6']};
  position: relative;
  overflow: hidden;
  transition: all ${theme.transitions.base};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${theme.colors.gradientAI};
    transform: scaleY(0);
    transform-origin: top;
    transition: transform ${theme.transitions.base};
  }

  &:hover {
    transform: translateY(-4px);
    border-color: ${theme.colors.violet};
    box-shadow: ${theme.shadows.glow};

    &::before {
      transform: scaleY(1);
    }
  }

  p {
    color: ${theme.colors.gray300};
    font-size: ${theme.fontSizes.base};
    line-height: ${theme.lineHeights.relaxed};
  }
`;

const PainPointsSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing['8']};
  margin-top: ${theme.spacing['8']};

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const PainPointBox = styled.div`
  background: linear-gradient(135deg,
    ${theme.colors.gray900} 0%,
    rgba(255, 140, 90, 0.05) 100%
  );
  border: 1px solid ${theme.colors.gray800};
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing['8']};
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, rgba(255, 140, 90, 0.1), transparent);
    border-radius: 50%;
    transform: translate(30%, -30%);
  }

  h3 {
    font-size: ${theme.fontSizes.xl};
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacing['6']};
  }
`;

const PainPointItem = styled.div`
  display: flex;
  gap: ${theme.spacing['3']};
  margin-bottom: ${theme.spacing['4']};
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '"';
    font-size: ${theme.fontSizes['4xl']};
    color: ${theme.colors.orange};
    font-weight: ${theme.fontWeights.bold};
    line-height: 1;
    opacity: 0.3;
  }

  p {
    color: ${theme.colors.gray300};
    font-size: ${theme.fontSizes.base};
    line-height: ${theme.lineHeights.relaxed};
    margin: 0;
    font-style: italic;
  }
`;

const ImageBlock = styled(motion.div)`
  margin: ${theme.spacing['12']} 0;
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
  font-size: ${theme.fontSizes.base};
  color: ${theme.colors.gray400};
  line-height: ${theme.lineHeights.relaxed};
  font-style: italic;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
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
  margin-bottom: ${theme.spacing['6']};
  display: flex;
  align-items: center;
  gap: ${theme.spacing['3']};
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing['6']};
`;

const MetricItem = styled.div`
  p {
    font-size: ${theme.fontSizes.base};
    color: ${theme.colors.gray400};
    margin-bottom: ${theme.spacing['2']};
  }

  strong {
    font-size: ${theme.fontSizes['2xl']};
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.white};
    display: block;
  }
`;

const WeNeedsInterview: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <HeroSection bgImage="/projects/weneeds/interview-hero.png">
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
            Étude de cas 02 • WeNeeds
          </CategoryBadge>
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Interview IA conversationnelle
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Remplacer les appels de 15 min par une expérience empathique et efficace
          </Subtitle>
          <TagsRow
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Tag color="violet">Conversational AI</Tag>
            <Tag color="pink">Empathetic Design</Tag>
            <Tag color="blue">Real-time UX</Tag>
            <Tag color="orange">Automation</Tag>
          </TagsRow>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <IntroText
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Les appels de pré-qualification RH sont chronophages et frustrants pour tous. J'ai conçu une interface
          conversationnelle où l'IA pose les questions de manière dynamique, avec timer et questions adaptatives.
          En cas de réussite : accès direct au calendrier du recruteur. En cas d'échec : message empathique et
          suggestions d'autres offres.
        </IntroText>

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
            <SectionTitle>Objectifs</SectionTitle>
          </SectionHeader>
          <ObjectivesGrid>
            <ObjectiveCard whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
              <p>Remplacer les calls de 15min par une expérience asynchrone</p>
            </ObjectiveCard>
            <ObjectiveCard whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
              <p>Pré-qualifier automatiquement avec précision</p>
            </ObjectiveCard>
            <ObjectiveCard whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
              <p>Maintenir (voire améliorer) la qualité relationnelle</p>
            </ObjectiveCard>
            <ObjectiveCard whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
              <p>En cas de réussite : débloquer accès direct au calendrier recruteur</p>
            </ObjectiveCard>
            <ObjectiveCard whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
              <p>En cas d'échec : proposer alternatives, pas de porte fermée</p>
            </ObjectiveCard>
          </ObjectivesGrid>
        </SectionBlock>

        <SectionBlock
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader>
            <SectionIcon>
              <FiAlertCircle size={24} />
            </SectionIcon>
            <SectionTitle>Recherche & Pain Points</SectionTitle>
          </SectionHeader>

          <PainPointsSection>
            <PainPointBox>
              <h3>Côté Recruteur</h3>
              <PainPointItem>
                <p>Je passe 3h/jour à poser les mêmes questions basiques</p>
              </PainPointItem>
              <PainPointItem>
                <p>J'aimerais me concentrer sur les meilleurs candidats</p>
              </PainPointItem>
              <PainPointItem>
                <p>Les no-shows me font perdre un temps fou</p>
              </PainPointItem>
            </PainPointBox>

            <PainPointBox>
              <h3>Côté Candidat</h3>
              <PainPointItem>
                <p>J'attends des semaines sans nouvelles</p>
              </PainPointItem>
              <PainPointItem>
                <p>Le rejet par email automatique est humiliant</p>
              </PainPointItem>
              <PainPointItem>
                <p>Je ne sais jamais où j'en suis dans le processus</p>
              </PainPointItem>
            </PainPointBox>
          </PainPointsSection>
        </SectionBlock>

        <ImageBlock
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ImageContainer>
            <Image src="/projects/weneeds/Interview.png" alt="Interface web" />
          </ImageContainer>
          <ImageCaption>
            Version web : style messagerie familier avec bannière entreprise, timer visible et barre de progression.
            Les questions s'affichent progressivement pour créer un rythme naturel.
          </ImageCaption>
        </ImageBlock>

        <ImageBlock
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ImageContainer>
            <Image src="/projects/weneeds/mobile.png" alt="Interface mobile" />
          </ImageContainer>
          <ImageCaption>
            Challenge mobile : éviter le "simple chat". Solution : expérience immersive avec bannière en fond blur,
            questions en très gros, barre de progression circulaire. Une expérience à part. Flexibilité : questions
            ouvertes pour les réponses détaillées, QCM pour les infos factuelles. L'IA adapte le type de question
            selon ce qu'elle cherche à évaluer.
          </ImageCaption>
        </ImageBlock>

        <ImageBlock
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ImageContainer isMobile>
            <Image src="/projects/weneeds/felicitations.png" alt="Message d'échec empathique" isMobile />
          </ImageContainer>
          <ImageCaption>
            Automatisation ≠ froideur. En cas d'échec, message personnalisé généré par l'IA qui explique pourquoi
            (sans blesser) et propose 3 offres similaires. Pas de porte fermée.
          </ImageCaption>
        </ImageBlock>

        <ImageBlock
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ImageContainer isMobile>
            <Image src="/projects/weneeds/calendrier.png" alt="Calendrier de prise de RDV" isMobile />
          </ImageContainer>
          <ImageCaption>
            Si réussite : accès instantané au calendrier du recruteur. Réservation en 2 clics, confirmation auto,
            ajout Google Cal/Outlook. Zéro friction.
          </ImageCaption>
        </ImageBlock>

        <MetricsCard
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <MetricsTitle>
            <FiTrendingUp size={28} />
            Impact
          </MetricsTitle>
          <MetricsGrid>
            <MetricItem>
              <p>Temps RH économisé sur pré-qualification</p>
              <strong>~70%</strong>
            </MetricItem>
            <MetricItem>
              <p>Réduction des no-shows</p>
              <strong>-60%</strong>
            </MetricItem>
            <MetricItem>
              <p>Satisfaction candidat vs process classique</p>
              <strong>+45%</strong>
            </MetricItem>
          </MetricsGrid>
        </MetricsCard>
      </ContentSection>
    </PageContainer>
  );
};

export default WeNeedsInterview;
