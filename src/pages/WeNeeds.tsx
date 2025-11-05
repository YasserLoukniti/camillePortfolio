import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { theme } from '../styles/theme';

const PageContainer = styled.div`
  min-height: 100vh;
  background: ${theme.colors.black};
`;

const HeroSection = styled.section`
  height: 60vh;
  position: relative;
  background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url('/projects/Background.png');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing['16']} 0;
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
  text-align: center;
`;

const LogoImage = styled(motion.img)`
  height: clamp(60px, 10vw, 100px);
  width: auto;
  margin: 0 auto ${theme.spacing['6']};
  display: block;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3));
`;

const Subtitle = styled(motion.p)`
  font-size: ${theme.fontSizes['2xl']};
  color: ${theme.colors.gray300};
  max-width: 800px;
  margin: 0 auto;
  line-height: ${theme.lineHeights.relaxed};
`;

const ContentSection = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: ${theme.spacing['16']} ${theme.spacing['6']};
`;

const SectionTitle = styled.h2`
  font-size: ${theme.fontSizes['4xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing['4']};
  text-align: center;
`;

const SectionDescription = styled.p`
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.gray400};
  text-align: center;
  max-width: 700px;
  margin: 0 auto ${theme.spacing['12']};
  line-height: ${theme.lineHeights.relaxed};
`;

const CaseStudiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${theme.spacing['8']};
  margin-top: ${theme.spacing['12']};

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const CaseStudyCard = styled(motion.div)`
  position: relative;
  background: linear-gradient(135deg,
    ${theme.colors.gray900} 0%,
    rgba(168, 85, 247, 0.05) 100%
  );
  border: 1px solid ${theme.colors.gray800};
  border-radius: ${theme.borderRadius['2xl']};
  padding: ${theme.spacing['8']};
  cursor: pointer;
  overflow: hidden;
  transition: all ${theme.transitions.base};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${theme.colors.gradientAI};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform ${theme.transitions.base};
  }

  &:hover {
    transform: translateY(-8px);
    border-color: ${theme.colors.violet};
    box-shadow: ${theme.shadows.glow};

    &::before {
      transform: scaleX(1);
    }

    .arrow {
      transform: translateX(8px);
    }
  }
`;

const CardNumber = styled.div`
  font-size: ${theme.fontSizes['5xl']};
  font-weight: ${theme.fontWeights.bold};
  background: ${theme.colors.gradientAI};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${theme.spacing['4']};
`;

const CardTitle = styled.h3`
  font-size: ${theme.fontSizes['2xl']};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing['3']};
`;

const CardDescription = styled.p`
  font-size: ${theme.fontSizes.base};
  color: ${theme.colors.gray400};
  line-height: ${theme.lineHeights.relaxed};
  margin-bottom: ${theme.spacing['6']};
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${theme.spacing['6']};
  padding-top: ${theme.spacing['4']};
  border-top: 1px solid ${theme.colors.gray800};
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing['2']};
`;

const Tag = styled.span`
  font-size: ${theme.fontSizes.xs};
  color: ${theme.colors.violet};
  background: rgba(168, 85, 247, 0.1);
  padding: ${theme.spacing['1']} ${theme.spacing['3']};
  border-radius: ${theme.borderRadius.full};
`;

const ArrowIcon = styled.div`
  color: ${theme.colors.violet};
  transition: transform ${theme.transitions.base};
`;

const caseStudies = [
  {
    id: 1,
    number: "01",
    title: "Système de Widgets Personnalisables",
    description: "Architecture produit permettant une personnalisation poussée du profil via des widgets modulaires.",
    tags: ["Product Architecture", "Modularity", "UX"],
    path: "/weneeds/widgets"
  },
  {
    id: 2,
    number: "02",
    title: "Interface d'Interview IA Conversationnelle",
    description: "Expérience d'onboarding magique où l'IA génère automatiquement un profil complet en quelques secondes.",
    tags: ["AI Integration", "Conversational UX", "Onboarding"],
    path: "/weneeds/interview"
  },
  {
    id: 3,
    number: "03",
    title: "Dashboard Analytique IA pour Recruteurs",
    description: "Dashboard analytics complet avec analyse poussée du candidat et recommandations d'entretien.",
    tags: ["Analytics", "Data Visualization", "AI"],
    path: "/weneeds/dashboard"
  }
];

const WeNeeds: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <HeroSection>
        <BackButton
          onClick={() => navigate('/')}
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiArrowLeft />
          Retour
        </BackButton>

        <HeroContent>
          <LogoImage
            src="/projects/Lgogo weneeds.png"
            alt="WeNeeds Logo"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Plateforme B2B SaaS de recrutement propulsée par l'IA
          </Subtitle>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <SectionTitle>Études de Cas</SectionTitle>
        <SectionDescription>
          Découvrez comment j'ai conçu une expérience de recrutement innovante, de l'onboarding magique aux analytics avancés.
        </SectionDescription>

        <CaseStudiesGrid>
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => navigate(study.path)}
            >
              <CardNumber>{study.number}</CardNumber>
              <CardTitle>{study.title}</CardTitle>
              <CardDescription>{study.description}</CardDescription>

              <CardFooter>
                <Tags>
                  {study.tags.map(tag => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </Tags>
                <ArrowIcon className="arrow">
                  <FiArrowRight size={24} />
                </ArrowIcon>
              </CardFooter>
            </CaseStudyCard>
          ))}
        </CaseStudiesGrid>
      </ContentSection>
    </PageContainer>
  );
};

export default WeNeeds;
