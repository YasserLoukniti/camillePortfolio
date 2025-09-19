import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiCalendar, FiBriefcase, FiX } from 'react-icons/fi';
import { theme } from '../styles/theme';
import Badge from '../components/ui/Badge';
import { portfolioData } from '../data/portfolio';

const PageContainer = styled.div`
  min-height: 100vh;
  background: ${theme.colors.black};
`;

// Hero Section avec image de fond
const HeroSection = styled.section<{ bgImage?: string }>`
  height: 70vh;
  position: relative;
  background: ${props => props.bgImage
    ? `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${props.bgImage})`
    : theme.colors.gradientAI};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  padding: ${theme.spacing['16']} 0;
`;

const HeroOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 200px;
  background: linear-gradient(to top, ${theme.colors.black}, transparent);
`;

const HeroContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${theme.spacing['6']};
  position: relative;
  z-index: 10;
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

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing['4']};
  letter-spacing: -0.02em;
`;

const ProjectMeta = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing['8']};
  margin-bottom: ${theme.spacing['6']};
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing['2']};
  color: ${theme.colors.gray300};
  font-size: ${theme.fontSizes.lg};

  svg {
    color: ${theme.colors.violet};
  }
`;

const TagsRow = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing['2']};
`;

// Content Section
const ContentSection = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: ${theme.spacing['16']} ${theme.spacing['6']};
`;


const Description = styled(motion.p)`
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.gray300};
  line-height: ${theme.lineHeights.relaxed};
  margin-bottom: ${theme.spacing['12']};
`;

// Modern Gallery
const GallerySection = styled.section`
  margin: ${theme.spacing['16']} 0;
`;

const SectionTitle = styled.h2`
  font-size: ${theme.fontSizes['3xl']};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.white};
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing['8']};

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const GalleryItem = styled(motion.div)`
  cursor: pointer;
  transition: all ${theme.transitions.base};

  &:hover {
    transform: translateY(-8px);

    img {
      transform: scale(1.02);
    }
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: ${theme.borderRadius.xl};
  transition: transform ${theme.transitions.slow};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;

const ImageInfo = styled.div`
  padding: ${theme.spacing['4']} 0;
`;

const ImageTitle = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing['2']};
`;

const ImageDescription = styled.p`
  font-size: ${theme.fontSizes.base};
  color: ${theme.colors.gray400};
  line-height: ${theme.lineHeights.relaxed};
`;

// Apple-style Modal
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(20px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing['8']};
`;

const ModalContent = styled(motion.div)`
  background: ${theme.colors.blackLight};
  border-radius: 24px;
  max-width: 1200px;
  width: 90%;
  max-height: 85vh;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    max-height: 90vh;
  }
`;

const ModalText = styled.div`
  padding: ${theme.spacing['12']};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${theme.breakpoints.lg}) {
    padding: ${theme.spacing['8']};
  }
`;

const ModalImageContainer = styled.div`
  position: relative;
  background: ${theme.colors.gray900};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ModalTitle = styled.h2`
  font-size: ${theme.fontSizes['3xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing['4']};
  letter-spacing: -0.02em;
`;

const ModalDescription = styled.p`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.gray300};
  line-height: ${theme.lineHeights.relaxed};
  margin-bottom: ${theme.spacing['6']};
`;

const ModalMeta = styled.div`
  padding-top: ${theme.spacing['6']};
  border-top: 1px solid ${theme.colors.gray800};
  color: ${theme.colors.gray500};
  font-size: ${theme.fontSizes.sm};
`;

const ModalNav = styled.div`
  position: absolute;
  bottom: ${theme.spacing['6']};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: ${theme.spacing['2']};
  z-index: 10;
`;

const NavDot = styled.button<{ active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.active ? theme.colors.white : 'rgba(255, 255, 255, 0.3)'};
  border: none;
  cursor: pointer;
  transition: all ${theme.transitions.base};

  &:hover {
    background: ${props => props.active ? theme.colors.white : 'rgba(255, 255, 255, 0.5)'};
    transform: scale(1.2);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: ${theme.spacing['6']};
  right: ${theme.spacing['6']};
  width: 40px;
  height: 40px;
  border-radius: ${theme.borderRadius.full};
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: ${theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${theme.transitions.base};
  z-index: 20;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: rotate(90deg);
  }
`;

// Highlights Cards
const HighlightsSection = styled.section`
  margin: ${theme.spacing['16']} 0;
`;

const HighlightGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing['6']};
`;

const HighlightCard = styled(motion.div)`
  padding: ${theme.spacing['6']};
  background: linear-gradient(135deg,
    ${theme.colors.gray900} 0%,
    rgba(168, 85, 247, 0.05) 100%
  );
  border: 1px solid ${theme.colors.gray800};
  border-radius: ${theme.borderRadius.xl};
  position: relative;
  overflow: hidden;
  transition: all ${theme.transitions.base};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background: ${theme.colors.gradientAI};
  }

  &:hover {
    transform: translateY(-4px);
    border-color: ${theme.colors.violet};
    box-shadow: ${theme.shadows.glow};
  }

  h3 {
    font-size: ${theme.fontSizes.lg};
    font-weight: ${theme.fontWeights.semibold};
    color: ${theme.colors.violet};
    margin-bottom: ${theme.spacing['3']};
  }

  p {
    color: ${theme.colors.gray300};
    line-height: ${theme.lineHeights.relaxed};
  }
`;

// Key Projects
const KeyProjectCard = styled(motion.div)`
  display: flex;
  gap: ${theme.spacing['6']};
  padding: ${theme.spacing['8']};
  background: ${theme.colors.gray900};
  border-radius: ${theme.borderRadius.xl};
  margin-bottom: ${theme.spacing['6']};
  transition: all ${theme.transitions.base};

  &:hover {
    background: ${theme.colors.gray800};
    transform: translateX(8px);
  }

  .number {
    font-size: ${theme.fontSizes['4xl']};
    font-weight: ${theme.fontWeights.bold};
    background: ${theme.colors.gradientAI};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .content {
    flex: 1;

    h3 {
      font-size: ${theme.fontSizes.xl};
      font-weight: ${theme.fontWeights.semibold};
      color: ${theme.colors.white};
      margin-bottom: ${theme.spacing['2']};
    }

    p {
      color: ${theme.colors.gray400};
      line-height: ${theme.lineHeights.relaxed};
    }
  }
`;

// Image descriptions
const imageDescriptions: Record<string, Record<string, { title: string; description: string }>> = {
  weneeds: {
    "/projects/weneeds/Profil candidat.png": {
      title: "Profil Candidat Enrichi",
      description: "Interface permettant aux candidats de créer un profil complet avec widgets personnalisables."
    },
    "/projects/weneeds/onboarding.png": {
      title: "Onboarding IA Magique",
      description: "Expérience où l'IA génère automatiquement un profil complet depuis un CV/LinkedIn."
    },
    "/projects/weneeds/analyse.png": {
      title: "Dashboard Analytics RH",
      description: "Analyse approfondie des candidats avec résumé IA et recommandations d'entretien."
    },
    "/projects/weneeds/mobile.png": {
      title: "Version Mobile",
      description: "Application mobile responsive avec parcours utilisateur optimisé."
    }
  },
  edf: {
    "/projects/edf/edf dashboard.png": {
      title: "Dashboard de Gestion",
      description: "Pilotage énergétique en temps réel avec visualisations avancées."
    },
    "/projects/edf/edf landing.png": {
      title: "Landing Page",
      description: "Présentation moderne des solutions de management énergétique."
    },
    "/projects/edf/edf connexion.png": {
      title: "Espace Connexion",
      description: "Interface sécurisée adaptée aux différents profils utilisateurs."
    }
  },
  poleEmploi: {
    "/projects/pole emploi/pole emploi design.png": {
      title: "Emploi Store",
      description: "Interface avec système de recommandations intelligentes."
    },
    "/projects/pole emploi/pole emploi gestion des projets.png": {
      title: "Gestion des Projets",
      description: "Tableau de bord centralisé pour les candidatures."
    },
    "/projects/pole emploi/pole emploi projet creatin.png": {
      title: "Création de Projet",
      description: "Interface guidée pour structurer son projet professionnel."
    }
  }
};

const ProjectDetailModern: React.FC = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = portfolioData.projects.find(p => p.id === Number(projectId));

  if (!project) {
    return (
      <PageContainer>
        <ContentSection>
          <h1>Projet non trouvé</h1>
        </ContentSection>
      </PageContainer>
    );
  }

  const projectKey = project.id === 1 ? 'weneeds' : project.id === 2 ? 'edf' : 'poleEmploi';
  const descriptions = imageDescriptions[projectKey] || {};
  const projectImages = (project as any).images || [];

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  return (
    <PageContainer>
      <HeroSection bgImage={project.image}>
        <BackButton
          onClick={() => navigate('/')}
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiArrowLeft />
          Retour
        </BackButton>

        <HeroOverlay />

        <HeroContent>
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {project.title}
          </Title>

          <ProjectMeta
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {(project as any).company && (
              <MetaItem>
                <FiBriefcase />
                {(project as any).company}
              </MetaItem>
            )}
            {(project as any).dateRange && (
              <MetaItem>
                <FiCalendar />
                {(project as any).dateRange}
              </MetaItem>
            )}
          </ProjectMeta>

          <TagsRow
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {project.tags.map(tag => (
              <Badge key={tag} size="md" variant="primary">
                {tag}
              </Badge>
            ))}
          </TagsRow>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <Description
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: '800px', margin: '0 auto', marginBottom: theme.spacing['16'] }}
        >
          {(project as any).description}
        </Description>

        {/* Gallery Section First */}
        {projectImages.length > 0 && (
          <GallerySection>
            <SectionTitle style={{ marginBottom: theme.spacing['8'] }}>
              Visuels du Projet
            </SectionTitle>

            <GalleryGrid>
              {projectImages.map((image: string, index: number) => (
                <GalleryItem
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => openModal(index)}
                  whileHover={{ y: -8 }}
                >
                  <GalleryImage src={image} alt={`${project.title} - ${index + 1}`} />
                  {descriptions[image] && (
                    <ImageInfo>
                      <ImageTitle>{descriptions[image].title}</ImageTitle>
                      <ImageDescription>{descriptions[image].description}</ImageDescription>
                    </ImageInfo>
                  )}
                </GalleryItem>
              ))}
            </GalleryGrid>
          </GallerySection>
        )}

        {/* Key Projects */}
        {(project as any).keyProjects && (
          <div style={{ marginTop: theme.spacing['16'], marginBottom: theme.spacing['16'] }}>
            <SectionTitle style={{ marginBottom: theme.spacing['8'] }}>
              Réalisations Clés
            </SectionTitle>
            {(project as any).keyProjects.map((kp: any, index: number) => (
              <KeyProjectCard
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="number">{String(index + 1).padStart(2, '0')}</div>
                <div className="content">
                  <h3>{kp.name}</h3>
                  <p>{kp.description}</p>
                </div>
              </KeyProjectCard>
            ))}
          </div>
        )}

        {/* Impact Section at the Bottom */}
        {(project as any).highlights && (
          <HighlightsSection>
            <SectionTitle style={{ marginBottom: theme.spacing['8'] }}>
              Impact & Résultats
            </SectionTitle>
            <HighlightGrid>
              {(project as any).highlights.map((highlight: string, index: number) => (
                <HighlightCard
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <p>{highlight}</p>
                </HighlightCard>
              ))}
            </HighlightGrid>
          </HighlightsSection>
        )}
      </ContentSection>

      {/* Apple-style Modal */}
      <AnimatePresence>
        {modalOpen && projectImages.length > 0 && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
          >
            <ModalContent
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={() => setModalOpen(false)}>
                <FiX size={20} />
              </CloseButton>

              <ModalText>
                <ModalTitle>
                  {descriptions[projectImages[currentImageIndex]]?.title || 'Image du projet'}
                </ModalTitle>
                <ModalDescription>
                  {descriptions[projectImages[currentImageIndex]]?.description || ''}
                </ModalDescription>
                <ModalMeta>
                  {(project as any).company} • {(project as any).dateRange}
                </ModalMeta>
              </ModalText>

              <ModalImageContainer>
                <ModalImage
                  src={projectImages[currentImageIndex]}
                  alt={`${project.title} - ${currentImageIndex + 1}`}
                />
                <ModalNav>
                  {projectImages.map((_, index) => (
                    <NavDot
                      key={index}
                      active={index === currentImageIndex}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </ModalNav>
              </ModalImageContainer>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </PageContainer>
  );
};

export default ProjectDetailModern;