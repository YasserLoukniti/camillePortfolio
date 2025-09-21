import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiX } from 'react-icons/fi';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import { theme } from '../styles/theme';
import { portfolioData } from '../data/portfolio';

// ===== CONTAINER PRINCIPAL =====
const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #000000;
`;

// ===== HEADER ULTRA MINIMAL =====
const MinimalHeader = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 60px;
  background: rgba(0, 0, 0, 0.98);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  z-index: 100;
  display: flex;
  align-items: center;
  padding: 0 30px;
`;

const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 24px;
`;

const BackButtonSmall = styled.button`
  background: none;
  border: none;
  color: #808080;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  cursor: pointer;
  padding: 0;
  transition: color 0.2s;

  &:hover {
    color: #ffffff;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const TitleGroup = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  flex: 1;
`;

const ProjectTitle = styled.h1`
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
`;

const ProjectDate = styled.span`
  font-size: 12px;
  color: #606060;
`;

const ProjectDesc = styled.span`
  font-size: 12px;
  color: #808080;
  max-width: 350px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TagsRow = styled.div`
  display: flex;
  gap: 8px;
`;

const SmallTag = styled.div`
  padding: 4px 10px;
  border-radius: 10px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  background: ${props => {
    if (props.children === 'Product Design') return 'rgba(255, 140, 90, 0.15)';
    if (props.children === 'Mobile Design') return 'rgba(236, 72, 153, 0.15)';
    return 'rgba(255, 182, 193, 0.15)';
  }};
  color: ${props => {
    if (props.children === 'Product Design') return 'rgb(255, 140, 90)';
    if (props.children === 'Mobile Design') return 'rgb(236, 72, 153)';
    return 'rgb(255, 182, 193)';
  }};
`;

// ===== SECTION IMAGES GRANDES =====
const ImagesSection = styled.div`
  width: 100%;
  padding: 20px;
`;

const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  max-width: 1400px;
  margin: 0 auto;
`;

const BigImageCard = styled(motion.div)`
  width: 100%;
  position: relative;
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
  background: #0a0a0a;

  &:hover img {
    transform: scale(1.02);
  }
`;

const BigImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.4s ease;
`;

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%);
  color: white;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;

  ${BigImageCard}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ImageTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin: 0;
`;

// ===== IMPACTS FLOTTANTS =====
const FloatingMetrics = styled(motion.div)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 16px 24px;
  display: flex;
  gap: 30px;
  z-index: 50;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MetricBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const MetricValue = styled.div`
  font-size: 18px;
  font-weight: 700;
  background: linear-gradient(135deg, #FB923C 0%, #EC4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const MetricLabel = styled.div`
  font-size: 10px;
  color: #606060;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

// ===== MODALE FULLSCREEN =====
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.98);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalImage = styled.img`
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const ModalNavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  svg {
    width: 24px;
    height: 24px;
  }

  &.prev {
    left: 30px;
  }

  &.next {
    right: 30px;
  }
`;

const ModalInfo = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: white;
`;

const ModalTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 8px 0;
`;

const ModalDesc = styled.p`
  font-size: 13px;
  color: #808080;
  margin: 0 0 16px 0;
`;

const ModalCounter = styled.div`
  font-size: 12px;
  color: #606060;
  padding: 6px 16px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  display: inline-block;
`;

// ===== DESCRIPTIONS DES IMAGES =====
const imageData: Record<string, Record<string, { title: string; description: string }>> = {
  weneeds: {
    "/projects/weneeds/Profil candidat.png": {
      title: "Profil Candidat Enrichi",
      description: "Widgets personnalisables pour un profil complet"
    },
    "/projects/weneeds/onboarding.png": {
      title: "Onboarding Magique",
      description: "IA génère le profil depuis CV/LinkedIn"
    },
    "/projects/weneeds/analyse.png": {
      title: "Analytics RH",
      description: "Dashboard d'analyse des candidats"
    },
    "/projects/weneeds/mobile.png": {
      title: "Version Mobile",
      description: "Application responsive et adaptative"
    }
  },
  edf: {
    "/projects/edf/edf dashboard.png": {
      title: "Dashboard Énergétique",
      description: "Pilotage temps réel de la consommation"
    },
    "/projects/edf/edf landing.png": {
      title: "Landing Page",
      description: "Page d'accueil moderne et engageante"
    },
    "/projects/edf/edf connexion.png": {
      title: "Connexion Sécurisée",
      description: "Parcours adapté aux profils utilisateurs"
    }
  },
  poleEmploi: {
    "/projects/pole emploi/pole emploi design.png": {
      title: "Emploi Store",
      description: "Recommandations intelligentes"
    },
    "/projects/pole emploi/pole emploi gestion des projets.png": {
      title: "Gestion Projets",
      description: "Tableau de bord centralisé"
    },
    "/projects/pole emploi/pole emploi projet creatin.png": {
      title: "Création Projet",
      description: "Interface guidée et intuitive"
    }
  }
};

// ===== COMPOSANT PRINCIPAL =====
const ProjectDetail: React.FC = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = portfolioData.projects.find(p => p.id === Number(projectId));

  if (!project) {
    return (
      <PageWrapper>
        <MinimalHeader>
          <HeaderContent>
            <BackButtonSmall onClick={() => navigate('/')}>
              <FiArrowLeft /> Retour
            </BackButtonSmall>
            <ProjectTitle>Projet non trouvé</ProjectTitle>
          </HeaderContent>
        </MinimalHeader>
      </PageWrapper>
    );
  }

  const images = (project as any).images || [];
  const projectKey = project.id === 1 ? 'weneeds' : project.id === 2 ? 'edf' : 'poleEmploi';
  const descriptions = imageData[projectKey] || {};

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const navigateModal = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
    } else {
      setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
    }
  };

  // Navigation clavier
  React.useEffect(() => {
    if (!modalOpen) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') navigateModal('prev');
      if (e.key === 'ArrowRight') navigateModal('next');
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [modalOpen, currentImageIndex]);

  return (
    <PageWrapper>
      {/* Header minimal sur une ligne */}
      <MinimalHeader>
        <HeaderContent>
          <BackButtonSmall onClick={() => navigate('/')}>
            <FiArrowLeft /> Retour
          </BackButtonSmall>

          <TitleGroup>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDate>{(project as any).dateRange || '2024'}</ProjectDate>
            <ProjectDesc>{(project as any).shortDescription}</ProjectDesc>
          </TitleGroup>

          <TagsRow>
            <SmallTag>Product Design</SmallTag>
            <SmallTag>Mobile Design</SmallTag>
            <SmallTag>AI Integration</SmallTag>
          </TagsRow>
        </HeaderContent>
      </MinimalHeader>

      {/* Images grandes */}
      <ImagesSection>
        <ImagesGrid>
          {images.map((image: string, index: number) => (
            <BigImageCard
              key={index}
              onClick={() => openModal(index)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BigImage
                src={image}
                alt={descriptions[image]?.title || `Image ${index + 1}`}
              />
              <ImageOverlay>
                <ImageTitle>
                  {descriptions[image]?.title || `Maquette ${index + 1}`}
                </ImageTitle>
              </ImageOverlay>
            </BigImageCard>
          ))}
        </ImagesGrid>
      </ImagesSection>

      {/* Metrics flottantes */}
      <FloatingMetrics
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <MetricBlock>
          <MetricValue>+45%</MetricValue>
          <MetricLabel>Engage</MetricLabel>
        </MetricBlock>
        <MetricBlock>
          <MetricValue>2x</MetricValue>
          <MetricLabel>Convert</MetricLabel>
        </MetricBlock>
        <MetricBlock>
          <MetricValue>-30%</MetricValue>
          <MetricLabel>Time</MetricLabel>
        </MetricBlock>
      </FloatingMetrics>

      {/* Modale */}
      <AnimatePresence>
        {modalOpen && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <ModalImage
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              onClick={(e) => e.stopPropagation()}
            />

            <ModalCloseButton onClick={closeModal}>
              <FiX />
            </ModalCloseButton>

            <ModalNavButton
              className="prev"
              onClick={(e) => {
                e.stopPropagation();
                navigateModal('prev');
              }}
            >
              <HiArrowLeft />
            </ModalNavButton>

            <ModalNavButton
              className="next"
              onClick={(e) => {
                e.stopPropagation();
                navigateModal('next');
              }}
            >
              <HiArrowRight />
            </ModalNavButton>

            <ModalInfo>
              {descriptions[images[currentImageIndex]] && (
                <>
                  <ModalTitle>
                    {descriptions[images[currentImageIndex]].title}
                  </ModalTitle>
                  <ModalDesc>
                    {descriptions[images[currentImageIndex]].description}
                  </ModalDesc>
                </>
              )}
              <ModalCounter>
                {currentImageIndex + 1} / {images.length}
              </ModalCounter>
            </ModalInfo>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
};

export default ProjectDetail;