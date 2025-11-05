import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiTarget, FiSearch, FiTrendingUp } from 'react-icons/fi';
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

const ResearchSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing['8']};
  margin-top: ${theme.spacing['8']};

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ResearchBox = styled.div`
  background: linear-gradient(135deg,
    ${theme.colors.gray900} 0%,
    rgba(168, 85, 247, 0.05) 100%
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
    background: radial-gradient(circle, rgba(168, 85, 247, 0.1), transparent);
    border-radius: 50%;
    transform: translate(30%, -30%);
  }

  h3 {
    font-size: ${theme.fontSizes.xl};
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacing['6']};
    display: flex;
    align-items: center;
    gap: ${theme.spacing['3']};
  }
`;

const InsightItem = styled.div`
  display: flex;
  gap: ${theme.spacing['3']};
  margin-bottom: ${theme.spacing['4']};
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }
`;

const InsightIcon = styled.div`
  width: 32px;
  height: 32px;
  min-width: 32px;
  border-radius: ${theme.borderRadius.lg};
  background: linear-gradient(135deg, ${theme.colors.violet}, ${theme.colors.orange});
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.sm};
`;

const InsightText = styled.p`
  color: ${theme.colors.gray300};
  font-size: ${theme.fontSizes.base};
  line-height: ${theme.lineHeights.relaxed};
  margin: 0;
`;

const ImageBlock = styled(motion.div)`
  margin: ${theme.spacing['12']} 0;
`;

const ImageContainer = styled.div<{ isMobile?: boolean; isLarge?: boolean }>`
  width: 100%;
  max-width: ${props => props.isLarge ? '800px' : props.isMobile ? '500px' : '100%'};
  margin: 0 auto;
  border-radius: ${theme.borderRadius.xl};
  overflow: hidden;
  background: ${theme.colors.gray900};
  margin-bottom: ${theme.spacing['4']};
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
`;

const Image = styled.img<{ isMobile?: boolean; isLarge?: boolean }>`
  width: 100%;
  max-height: ${props => props.isLarge ? '900px' : props.isMobile ? '700px' : 'none'};
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

const WeNeedsWidgets: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <HeroSection bgImage="/projects/weneeds/widgets-hero.png">
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
            Étude de cas 01 • WeNeeds
          </CategoryBadge>
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Widgets personnalisables iOS-inspired
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            40+ widgets modulaires pour créer des profils engageants et uniques
          </Subtitle>
          <TagsRow
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Tag color="violet">Product Design</Tag>
            <Tag color="orange">AI Personalization</Tag>
            <Tag color="pink">Design System</Tag>
            <Tag color="blue">iOS-Inspired</Tag>
          </TagsRow>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <IntroText
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Comment permettre aux candidats et entreprises de créer des profils qui reflètent vraiment leur identité ?
          J'ai conçu un système de widgets personnalisables inspiré d'iOS, avec 3 tailles (petit/moyen/grand) et une
          intelligence contextuelle qui propose automatiquement les widgets pertinents selon le profil utilisateur.
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
            <ObjectiveCard
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <p>Créer de l'engagement utilisateur par la personnalisation</p>
            </ObjectiveCard>
            <ObjectiveCard
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <p>Différencier Weneeds des acteurs majeurs (Indeed, LinkedIn)</p>
            </ObjectiveCard>
            <ObjectiveCard
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <p>Permettre l'expression de la personnalité et de la culture d'entreprise</p>
            </ObjectiveCard>
            <ObjectiveCard
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <p>Maintenir la simplicité d'utilisation malgré la complexité</p>
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
              <FiSearch size={24} />
            </SectionIcon>
            <SectionTitle>Recherche & Insights</SectionTitle>
          </SectionHeader>

          <ResearchSection>
            <ResearchBox>
              <h3>User Research</h3>
              <InsightItem>
                <InsightIcon>1</InsightIcon>
                <InsightText>
                  Interviews avec 30+ candidats : frustration du "CV qui ne me ressemble pas"
                </InsightText>
              </InsightItem>
              <InsightItem>
                <InsightIcon>2</InsightIcon>
                <InsightText>
                  Observation de 15+ recruteurs : "j'ai du mal à me faire une idée de la personne"
                </InsightText>
              </InsightItem>
              <InsightItem>
                <InsightIcon>3</InsightIcon>
                <InsightText>
                  Analyse concurrentielle : LinkedIn/Indeed = formats rigides, peu de personnalité
                </InsightText>
              </InsightItem>
            </ResearchBox>

            <ResearchBox>
              <h3>Insights Clés</h3>
              <InsightItem>
                <InsightIcon>💡</InsightIcon>
                <InsightText>
                  Les candidats veulent montrer des facettes variées (créativité, passions, projets)
                </InsightText>
              </InsightItem>
              <InsightItem>
                <InsightIcon>🎯</InsightIcon>
                <InsightText>
                  Les entreprises veulent communiquer leur culture, pas juste des infos corporate
                </InsightText>
              </InsightItem>
              <InsightItem>
                <InsightIcon>⚡</InsightIcon>
                <InsightText>
                  Besoin d'adaptabilité : un designer ≠ un restaurateur ≠ un ingénieur
                </InsightText>
              </InsightItem>
            </ResearchBox>
          </ResearchSection>
        </SectionBlock>

        <ImageBlock
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ImageContainer>
            <Image src="/projects/weneeds/widg1.png" alt="Grille des widgets V3" />
          </ImageContainer>
          <ImageCaption>
            3 versions successives sur 18 mois. V3 : chaque widget devient un mini-écosystème visuel avec des couleurs
            audacieuses et des identités fortes. La cohérence vient de la diversité unifiée – comme iOS.
          </ImageCaption>
        </ImageBlock>

        <ImageBlock
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ImageContainer isMobile>
            <Image src="/projects/weneeds/widg2.png" alt="Onboarding avec suggestions IA" isMobile />
          </ImageContainer>
          <ImageCaption>
            Personnalisation intelligente : l'IA détecte "UX/UI Designer" et propose automatiquement le widget Portfolio,
            pas le widget Permis poids lourd. L'utilisateur se sent compris dès les premières secondes.
          </ImageCaption>
        </ImageBlock>

        <ImageBlock
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ImageContainer isMobile>
            <Image src="/projects/weneeds/Badge.png" alt="Widgets avec badges émotionnels" isMobile />
          </ImageContainer>
          <ImageCaption>
            Micro-interactions émotionnelles : des badges (♥ "j'ai adoré", 💡 "instructif") permettent d'exprimer
            son ressenti en un tap. Ces détails créent de l'engagement et de la connexion humaine.
          </ImageCaption>
        </ImageBlock>

        <ImageBlock
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ImageContainer isMobile>
            <Image src="/projects/weneeds/Reformuler.png" alt="Widget avec feature reformulation IA" isMobile />
          </ImageContainer>
          <ImageCaption>
            L'IA comme coach discret : bouton "Améliorer la description" dans le widget Expérience pro. L'IA reformule
            pour être plus impactant, l'utilisateur valide ou modifie. Élever le niveau de tous sans effort.
          </ImageCaption>
        </ImageBlock>

        <ImageBlock
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ImageContainer isMobile>
            <Image src="/projects/weneeds/Personnalité.png" alt="Test de personnalité gamifié" isMobile />
          </ImageContainer>
          <ImageCaption>
            Engagement par le jeu : test de personnalité designé pour être fun et visuellement attrayant. Les utilisateurs
            passent en moyenne 5 min sur ce widget – un record d'engagement.
          </ImageCaption>
        </ImageBlock>

        <ImageBlock
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ImageContainer isLarge>
            <Image src="/projects/weneeds/Formulaire.png" alt="Formulaires adaptatifs" isLarge />
          </ImageContainer>
          <ImageCaption>
            Défi : créer des formulaires qui s'adaptent à tous.
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
              <p>Temps passé sur les profils</p>
              <strong>+150%</strong>
            </MetricItem>
            <MetricItem>
              <p>Utilisateurs avec 3+ widgets custom</p>
              <strong>85%</strong>
            </MetricItem>
            <MetricItem>
              <p>Closing entreprises B2B</p>
              <strong>Argument majeur</strong>
            </MetricItem>
          </MetricsGrid>
        </MetricsCard>
      </ContentSection>
    </PageContainer>
  );
};

export default WeNeedsWidgets;
