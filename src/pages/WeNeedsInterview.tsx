import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiTarget, FiSearch, FiTrendingUp, FiLayers, FiMessageCircle, FiArrowRight, FiLinkedin } from 'react-icons/fi';
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

const ContextBox = styled(motion.div)`
  background: linear-gradient(135deg,
    ${theme.colors.gray900} 0%,
    rgba(168, 85, 247, 0.05) 100%
  );
  border: 1px solid ${theme.colors.gray800};
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing['8']};
  margin-bottom: ${theme.spacing['16']};

  p {
    font-size: ${theme.fontSizes.lg};
    color: ${theme.colors.gray300};
    line-height: ${theme.lineHeights.relaxed};
  }
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

const TextContent = styled.div`
  p {
    font-size: ${theme.fontSizes.lg};
    color: ${theme.colors.gray300};
    line-height: ${theme.lineHeights.relaxed};
    margin-bottom: ${theme.spacing['4']};
  }
`;

const CardsGrid = styled.div`
  margin-top: ${theme.spacing['6']};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${theme.spacing['4']};
`;

const MiniCard = styled(motion.div)`
  font-size: ${theme.fontSizes.base};
  color: ${theme.colors.gray200};
  line-height: ${theme.lineHeights.relaxed};
  padding: ${theme.spacing['5']} ${theme.spacing['6']};
  background: linear-gradient(135deg,
    rgba(168, 85, 247, 0.05) 0%,
    rgba(255, 140, 90, 0.05) 100%
  );
  border-radius: ${theme.borderRadius.xl};
  border: 1px solid rgba(168, 85, 247, 0.15);
  transition: all ${theme.transitions.base};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${theme.colors.gradientAI};
    opacity: 0;
    transition: opacity ${theme.transitions.base};
  }

  &:hover {
    background: linear-gradient(135deg,
      rgba(168, 85, 247, 0.1) 0%,
      rgba(255, 140, 90, 0.1) 100%
    );
    border-color: rgba(168, 85, 247, 0.3);
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(168, 85, 247, 0.15);

    &::before {
      opacity: 1;
    }
  }
`;

const SubSection = styled.div`
  margin-top: ${theme.spacing['8']};

  h3 {
    font-size: ${theme.fontSizes.xl};
    font-weight: ${theme.fontWeights.semibold};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacing['4']};
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

const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing['6']};
  margin-top: ${theme.spacing['6']};

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled(motion.div)`
  background: linear-gradient(135deg,
    ${theme.colors.gray900} 0%,
    rgba(168, 85, 247, 0.05) 100%
  );
  border: 1px solid ${theme.colors.gray800};
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing['6']};
  transition: all ${theme.transitions.base};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${theme.colors.gradientAI};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform ${theme.transitions.base};
  }

  &:hover {
    transform: translateY(-4px);
    border-color: ${theme.colors.violet};
    box-shadow: 0 12px 32px rgba(168, 85, 247, 0.15);

    &::before {
      transform: scaleX(1);
    }
  }

  h4 {
    font-size: ${theme.fontSizes.lg};
    font-weight: ${theme.fontWeights.semibold};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacing['4']};
    display: flex;
    align-items: center;
    gap: ${theme.spacing['2']};
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

const RelatedCaseStudies = styled(motion.div)`
  margin-top: ${theme.spacing['16']};
  padding-top: ${theme.spacing['16']};
  border-top: 1px solid ${theme.colors.gray800};
`;

const RelatedTitle = styled.h3`
  font-size: ${theme.fontSizes['2xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.white};
  text-align: center;
  margin-bottom: ${theme.spacing['8']};
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing['6']};

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const RelatedCard = styled(motion.div)`
  background: linear-gradient(135deg,
    ${theme.colors.gray900} 0%,
    rgba(168, 85, 247, 0.05) 100%
  );
  border: 1px solid ${theme.colors.gray800};
  border-radius: ${theme.borderRadius.xl};
  overflow: hidden;
  cursor: pointer;
  transition: all ${theme.transitions.base};

  &:hover {
    transform: translateY(-8px);
    border-color: ${theme.colors.violet};
    box-shadow: 0 20px 40px rgba(168, 85, 247, 0.2);
  }
`;

const RelatedImage = styled.div<{ image: string }>`
  width: 100%;
  height: 200px;
  background: url(${props => props.image}) center/cover no-repeat;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8));
  }
`;

const RelatedContent = styled.div`
  padding: ${theme.spacing['6']};
`;

const RelatedCardTitle = styled.h4`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing['2']};
`;

const RelatedDescription = styled.p`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.gray400};
  line-height: ${theme.lineHeights.relaxed};
  margin-bottom: ${theme.spacing['4']};
`;

const RelatedLink = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing['2']};
  color: ${theme.colors.violet};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.semibold};
  transition: all ${theme.transitions.base};

  svg {
    transition: transform ${theme.transitions.base};
  }

  ${RelatedCard}:hover & {
    gap: ${theme.spacing['3']};

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
            <Tag color="orange">Data Driven</Tag>
            <Tag color="pink">Conversational AI</Tag>
            <Tag color="blue">User Research</Tag>
            <Tag color="violet">Cross-team Coordination</Tag>
            <Tag color="orange">Mobile Design</Tag>
          </TagsRow>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <ContextBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p>
            <strong>Rappel contexte :</strong> J'étais Product Designer chez Weneeds, une plateforme de recrutement, boostée à l'IA.
            Les candidats peuvent passer une interview IA et prendre directement rendez-vous dans le calendrier du recruteur.
          </p>
        </ContextBox>

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
            <SectionTitle>Challenge</SectionTitle>
          </SectionHeader>
          <TextContent>
            <p>
              Remplacer les appels de 15 minutes par une expérience IA conversationnelle qui soit à la fois efficace et empathique.
              L'enjeu : poser les bonnes questions métier sans tomber dans l'effet "chatbot froid", tout en générant de la data
              exploitable pour l'analyse.
            </p>
          </TextContent>
        </SectionBlock>

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
            <SectionTitle>Découverte</SectionTitle>
          </SectionHeader>

          <SubSection>
            <h3>Besoins identifiés :</h3>
            <CardsGrid>
              <MiniCard whileHover={{ y: -4 }}>Interaction familière et rassurante</MiniCard>
              <MiniCard whileHover={{ y: -4 }}>Questions adaptées à l'offre (pas de standardisation)</MiniCard>
              <MiniCard whileHover={{ y: -4 }}>Gestion du temps (limiter les réponses trop longues)</MiniCard>
              <MiniCard whileHover={{ y: -4 }}>Parcours post-interview clair (succès/échec)</MiniCard>
            </CardsGrid>
          </SubSection>

          <SubSection>
            <h3>Contraintes IA :</h3>
            <CardsGrid>
              <MiniCard whileHover={{ y: -4 }}>Output verbeux (questions et réponses trop longues)</MiniCard>
              <MiniCard whileHover={{ y: -4 }}>Nécessité de calibrer le ton (ni trop formel, ni trop décontracté)</MiniCard>
              <MiniCard whileHover={{ y: -4 }}>Équilibre entre questions ouvertes (data riche) et QCM (rapidité)</MiniCard>
            </CardsGrid>
          </SubSection>
        </SectionBlock>

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
            <SectionTitle>Architecture UX</SectionTitle>
          </SectionHeader>

          <SubSection>
            <h3>Web : Interface Messagerie</h3>
            <CardsGrid>
              <MiniCard whileHover={{ y: -4 }}>Layout vertical inspiré des apps de chat</MiniCard>
              <MiniCard whileHover={{ y: -4 }}>Header : bannière entreprise, nom du poste</MiniCard>
              <MiniCard whileHover={{ y: -4 }}>Timer visible + barre de progression</MiniCard>
              <MiniCard whileHover={{ y: -4 }}>Questions affichées progressivement</MiniCard>
              <MiniCard whileHover={{ y: -4 }}>Types de réponses : texte libre ou choix multiples</MiniCard>
            </CardsGrid>
          </SubSection>

          <ImageBlock
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ImageContainer>
              <Image src="/projects/weneeds/Interview.png" alt="Interface web de l'interview" />
            </ImageContainer>
            <ImageCaption>
              Layout inspiré des apps de chat, avec bannière entreprise, timer et barre de progression
            </ImageCaption>
          </ImageBlock>

          <SubSection>
            <h3>Mobile : Expérience Immersive</h3>
            <p style={{ fontSize: theme.fontSizes.base, color: theme.colors.gray300, marginBottom: theme.spacing['4'] }}>
              <strong>Constat :</strong> messagerie trop dense sur petit écran.<br />
              <strong>Solution :</strong> Question-by-question plein écran
            </p>
            <CardsGrid>
              <MiniCard whileHover={{ y: -4 }}>Bannière entreprise en fond (blur + transparence)</MiniCard>
              <MiniCard whileHover={{ y: -4 }}>Question en très gros (focus total)</MiniCard>
              <MiniCard whileHover={{ y: -4 }}>Timer visuel</MiniCard>
              <MiniCard whileHover={{ y: -4 }}>Champ de réponse style messagerie en bas</MiniCard>
              <MiniCard whileHover={{ y: -4 }}>Navigation séquentielle (une question à la fois)</MiniCard>
            </CardsGrid>
          </SubSection>

          <ImageBlock
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ImageContainer>
              <Image src="/projects/weneeds/mobile.png" alt="Interface mobile immersive" />
            </ImageContainer>
            <ImageCaption>
              Expérience mobile immersive avec question plein écran, bannière en fond blur et timer
            </ImageCaption>
          </ImageBlock>
        </SectionBlock>

        <SectionBlock
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionTitle style={{ marginBottom: theme.spacing['6'] }}>Optimisation Conversationnelle</SectionTitle>

          <SubSection>
            <h3>Collaboration Data Scientist :</h3>
            <CardsGrid>
              <MiniCard whileHover={{ y: -4 }}>Contraintes de longueur (questions max 2 lignes, réponses max 200 caractères)</MiniCard>
              <MiniCard whileHover={{ y: -4 }}>Calibrage du timer (5 min/question après tests utilisateurs)</MiniCard>
              <MiniCard whileHover={{ y: -4 }}>Prompt engineering pour ton empathique mais professionnel</MiniCard>
              <MiniCard whileHover={{ y: -4 }}>Itérations sur formulations pour éviter l'effet "robot"</MiniCard>
            </CardsGrid>
          </SubSection>

          <SubSection>
            <h3>Évolution du système :</h3>
            <CardsGrid>
              <MiniCard whileHover={{ y: -4 }}><strong>V1 :</strong> Seulement des questions fermées</MiniCard>
              <MiniCard whileHover={{ y: -4 }}><strong>V2 :</strong> Priorisation questions ouvertes (meilleure data pour analyse dashboard) + questions fermées</MiniCard>
              <MiniCard whileHover={{ y: -4 }}><strong>V3 :</strong> Ajout questions adaptatives (si réponse X → question Y)</MiniCard>
            </CardsGrid>
          </SubSection>
        </SectionBlock>

        <SectionBlock
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionTitle style={{ marginBottom: theme.spacing['6'] }}>Parcours Post-Interview</SectionTitle>

          <TwoColumnGrid>
            <InfoCard whileHover={{ y: -4 }}>
              <h4>✅ Réussite</h4>
              <CardsGrid>
                <MiniCard whileHover={{ y: -4 }}>Écran de félicitations</MiniCard>
                <MiniCard whileHover={{ y: -4 }}>Accès direct au calendrier du recruteur</MiniCard>
                <MiniCard whileHover={{ y: -4 }}>Booking instantané de rendez-vous</MiniCard>
              </CardsGrid>
            </InfoCard>

            <InfoCard whileHover={{ y: -4 }}>
              <h4>💡 Échec</h4>
              <CardsGrid>
                <MiniCard whileHover={{ y: -4 }}>Message empathique personnalisé (généré par IA)</MiniCard>
                <MiniCard whileHover={{ y: -4 }}>Suggestions d'offres similaires</MiniCard>
                <MiniCard whileHover={{ y: -4 }}>Possibilité de "repêchage" par le recruteur (pas de porte fermée)</MiniCard>
              </CardsGrid>
            </InfoCard>
          </TwoColumnGrid>

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
              En cas de réussite : accès direct au calendrier du recruteur pour booking instantané
            </ImageCaption>
          </ImageBlock>

          <ImageBlock
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ImageContainer isMobile>
              <Image src="/projects/weneeds/felicitations.png" alt="Message empathique en cas d'échec" isMobile />
            </ImageContainer>
            <ImageCaption>
              En cas d'échec : message empathique personnalisé avec suggestions d'offres similaires
            </ImageCaption>
          </ImageBlock>
        </SectionBlock>

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
              <p>Pour les recruteurs</p>
              <strong>70% de réduction</strong>
              <p style={{ marginTop: theme.spacing['2'] }}>du temps de pré-qualification</p>
            </MetricItem>
            <MetricItem>
              <p>Data structurée</p>
              <strong>Exploitable</strong>
              <p style={{ marginTop: theme.spacing['2'] }}>dans le dashboard analytique</p>
            </MetricItem>
            <MetricItem>
              <p>Pour les candidats</p>
              <strong>Expérience claire</strong>
              <p style={{ marginTop: theme.spacing['2'] }}>et engageante avec feedback immédiat</p>
            </MetricItem>
          </MetricsGrid>
        </MetricsCard>

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
          <TextContent>
            <p>
              Nous avons plus tard chez Weneeds décidé d'intégrer un <strong>"Assistant IA"</strong> capable de répondre à tout type
              de requêtes du recruteur et du candidat. Celui-ci n'est pas encore 100% designé mais j'ai pu créer des premiers prototypes.
              Mon expérience de l'interview m'a permis de réutiliser mes connaissances dans cette fonctionnalité :
            </p>
            <p>
              Réutilisation du pattern conversationnel pour créer un assistant capable de :
            </p>
            <CardsGrid>
              <MiniCard whileHover={{ y: -4 }}>Répondre aux questions recruteurs/candidats</MiniCard>
              <MiniCard whileHover={{ y: -4 }}>Informer sur rendez-vous et matching</MiniCard>
              <MiniCard whileHover={{ y: -4 }}>Gérer discussions (ajout/suppression, états de chargement)</MiniCard>
            </CardsGrid>
            <p>
              <strong>Design pattern :</strong> Messagerie + réponses visuelles structurées (cards, listes, boutons d'action).
            </p>
          </TextContent>

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

          <TextContent>
            <p style={{ fontStyle: 'italic', color: theme.colors.gray400 }}>
              Cet assistant est encore en cours de création...
            </p>
          </TextContent>
        </SectionBlock>

        <LearningsBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionTitle style={{ marginBottom: theme.spacing['6'] }}>Learnings</SectionTitle>
          <CardsGrid>
            <MiniCard whileHover={{ y: -4 }}><strong>Contraindre l'IA par le design :</strong> limiter l'espace = forcer la concision</MiniCard>
            <MiniCard whileHover={{ y: -4 }}><strong>Mobile ≠ web adapté :</strong> repenser l'expérience en fonction du contexte</MiniCard>
            <MiniCard whileHover={{ y: -4 }}><strong>Itération technique/design :</strong> collaboration étroite Data Scientist indispensable</MiniCard>
            <MiniCard whileHover={{ y: -4 }}><strong>L'empathie passe par les détails :</strong> wording, timing, alternatives post-échec</MiniCard>
          </CardsGrid>
        </LearningsBox>

        <RelatedCaseStudies
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <RelatedTitle>Découvrir les autres études de cas WeNeeds</RelatedTitle>
          <RelatedGrid>
            <RelatedCard
              whileHover={{ y: -8 }}
              onClick={() => navigate('/weneeds/widgets')}
            >
              <RelatedImage image="/projects/weneeds/widg1.png" />
              <RelatedContent>
                <RelatedCardTitle>Widgets Personnalisables</RelatedCardTitle>
                <RelatedDescription>
                  Architecture produit modulaire permettant une personnalisation poussée des profils candidats et entreprises
                </RelatedDescription>
                <RelatedLink>
                  Voir l'étude de cas <FiArrowRight />
                </RelatedLink>
              </RelatedContent>
            </RelatedCard>

            <RelatedCard
              whileHover={{ y: -8 }}
              onClick={() => navigate('/weneeds/dashboard')}
            >
              <RelatedImage image="/projects/weneeds/analyse.png" />
              <RelatedContent>
                <RelatedCardTitle>Dashboard Analytics RH</RelatedCardTitle>
                <RelatedDescription>
                  Dashboard d'analyse complet générant des insights sur les candidats à partir de l'interview IA
                </RelatedDescription>
                <RelatedLink>
                  Voir l'étude de cas <FiArrowRight />
                </RelatedLink>
              </RelatedContent>
            </RelatedCard>
          </RelatedGrid>
        </RelatedCaseStudies>

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
