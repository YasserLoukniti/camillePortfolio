import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiCalendar, FiBriefcase, FiX, FiChevronLeft, FiChevronRight, FiMail, FiLinkedin } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';
import { theme } from '../styles/theme';
import Badge from '../components/ui/Badge';
import { portfolioData } from '../data/portfolio';

// ========================================
// LAYOUT COMPONENTS
// ========================================

const PageContainer = styled.div`
  min-height: 100vh;
  background: ${theme.colors.black};
`;

const ContentWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${theme.spacing['6']};
`;

// ========================================
// HERO SECTION COMPONENTS
// ========================================

const HeroSection = styled.section`
  padding: ${theme.spacing['16']} 0 ${theme.spacing['12']} 0;
  background: linear-gradient(135deg,
    ${theme.colors.black} 0%,
    ${theme.colors.gray900} 100%);
  border-bottom: 1px solid ${theme.colors.gray800};
  position: relative;
`;

const BackButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing['2']};
  padding: ${theme.spacing['2']} ${theme.spacing['4']};
  background: transparent;
  border: 1px solid ${theme.colors.gray800};
  border-radius: ${theme.borderRadius.full};
  color: ${theme.colors.gray300};
  font-size: ${theme.fontSizes.sm};
  cursor: pointer;
  transition: all ${theme.transitions.base};
  margin-bottom: ${theme.spacing['8']};

  &:hover {
    background: ${theme.colors.gray900};
    border-color: ${theme.colors.gray700};
    color: ${theme.colors.white};
    transform: translateX(-4px);
  }
`;

const Title = styled(motion.h1)`
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: ${theme.fontWeights.bold};
  background: ${theme.colors.gradientAI};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${theme.spacing['4']};
  letter-spacing: -0.02em;
`;

const ProjectMeta = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing['6']};
  margin-bottom: ${theme.spacing['6']};
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing['2']};
  color: ${theme.colors.gray400};
  font-size: ${theme.fontSizes.base};

  svg {
    color: ${theme.colors.violet};
    width: 18px;
    height: 18px;
  }
`;

const TagsRow = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing['2']};
`;

const Description = styled(motion.p)`
  font-size: ${theme.fontSizes.base};
  color: ${theme.colors.gray300};
  line-height: ${theme.lineHeights.relaxed};
  max-width: 800px;
  margin-bottom: ${theme.spacing['8']};
`;

// ========================================
// GALLERY SECTION COMPONENTS
// ========================================

const GallerySection = styled.section`
  margin-bottom: ${theme.spacing['16']};
  padding: ${theme.spacing['8']} 0;
`;

const SectionHeader = styled.div`
  margin-bottom: ${theme.spacing['6']};
  padding-bottom: ${theme.spacing['4']};
  border-bottom: 1px solid ${theme.colors.gray800};
`;

const SectionTitle = styled.h2`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing['2']};
  display: flex;
  align-items: center;
  gap: ${theme.spacing['3']};

  &::before {
    content: '';
    width: 4px;
    height: 24px;
    background: ${theme.colors.gradientAI};
    border-radius: 2px;
  }
`;

const SectionDescription = styled.p`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.gray500};
  line-height: ${theme.lineHeights.relaxed};
  margin-left: calc(4px + ${theme.spacing['3']});
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing['2']};
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const GalleryCard = styled(motion.div)`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: ${theme.borderRadius.lg};
  background: ${theme.colors.gray900};
  border: 1px solid ${theme.colors.gray800};
  aspect-ratio: 16/11;
  transition: all ${theme.transitions.base};

  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 30px 60px rgba(168, 85, 247, 0.2);
    border-color: ${theme.colors.violet};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform ${theme.transitions.base};
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.9) 100%);
  display: flex;
  align-items: flex-end;
  padding: ${theme.spacing['6']};
  transition: all ${theme.transitions.base};

  ${GalleryCard}:hover & {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.95) 100%);
  }
`;

const CardText = styled.div`
  color: ${theme.colors.white};

  h3 {
    font-size: ${theme.fontSizes.lg};
    font-weight: ${theme.fontWeights.semibold};
    margin-bottom: ${theme.spacing['1']};
    display: flex;
    align-items: center;
    gap: ${theme.spacing['2']};
  }

  p {
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.gray300};
    opacity: 0;
    transform: translateY(10px);
    transition: all ${theme.transitions.base};
  }

  ${GalleryCard}:hover & p {
    opacity: 1;
    transform: translateY(0);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

// ========================================
// MOBILE MOCKUP COMPONENTS - Removed unused components
// ========================================

// ========================================
// MODAL COMPONENTS
// ========================================

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing['8']};
`;

const ModalContent = styled(motion.div)`
  background: ${theme.colors.gray900};
  border-radius: 24px;
  max-width: 1400px;
  width: 90%;
  max-height: 85vh;
  display: grid;
  grid-template-columns: 380px 1fr;
  overflow: hidden;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8);

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    max-height: 90vh;
  }
`;

const ModalText = styled.div`
  padding: ${theme.spacing['12']};
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${theme.colors.blackLight};
  border-right: 1px solid ${theme.colors.gray800};

  @media (max-width: ${theme.breakpoints.lg}) {
    padding: ${theme.spacing['8']};
    border-right: none;
    border-bottom: 1px solid ${theme.colors.gray800};
  }
`;

const ModalImageContainer = styled.div`
  position: relative;
  background: ${theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing['8']};
`;

const SliderButton = styled(motion.button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: none;
  color: ${theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 100;
  transition: all 0.3s ease;
  outline: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

  &:hover {
    background: ${theme.colors.white};
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }

  &.prev {
    left: 20px;
  }

  &.next {
    right: 20px;
  }

  svg {
    width: 28px;
    height: 28px;
    stroke-width: 2.5;
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    width: 48px;
    height: 48px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;


const ModalTitle = styled.h2`
  font-size: ${theme.fontSizes['2xl']};
  font-weight: ${theme.fontWeights.bold};
  background: ${theme.colors.gradientAI};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${theme.spacing['4']};
`;

const ModalDescription = styled.div`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.gray400};
  line-height: ${theme.lineHeights.relaxed};
  margin-bottom: ${theme.spacing['6']};
  white-space: pre-wrap;
  max-height: 400px;
  overflow-y: auto;
  padding-right: ${theme.spacing['4']};

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: ${theme.colors.gray800};
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.gray600};
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.gray500};
  }
`;

const ModalImageInfo = styled.div`
  margin-top: auto;
  padding-top: ${theme.spacing['6']};
  border-top: 1px solid ${theme.colors.gray800};
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${theme.colors.gray500};
  font-size: ${theme.fontSizes.sm};
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

const ModalNav = styled.div`
  position: absolute;
  bottom: ${theme.spacing['6']};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: ${theme.spacing['3']};
  z-index: 20;
  padding: ${theme.spacing['3']} ${theme.spacing['4']};
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border-radius: ${theme.borderRadius.full};
`;

const NavDot = styled.button<{ active: boolean }>`
  width: ${props => props.active ? '24px' : '8px'};
  height: 8px;
  border-radius: 4px;
  background: ${props => props.active ? theme.colors.white : 'rgba(255, 255, 255, 0.4)'};
  border: none;
  cursor: pointer;
  transition: all ${theme.transitions.base};
  outline: none;

  &:hover {
    background: ${props => props.active ? theme.colors.white : 'rgba(255, 255, 255, 0.6)'};
    transform: scale(1.15);
  }
`;

// ========================================
// IMPACT SECTION COMPONENTS
// ========================================

const ImpactSection = styled.section`
  margin-top: ${theme.spacing['16']};
  padding-top: ${theme.spacing['16']};
  border-top: 1px solid ${theme.colors.gray800};
`;

const ImpactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing['6']};
`;

const ImpactCard = styled(motion.div)`
  padding: ${theme.spacing['6']};
  background: linear-gradient(135deg,
    ${theme.colors.gray900} 0%,
    rgba(168, 85, 247, 0.05) 100%
  );
  border: 1px solid ${theme.colors.gray800};
  border-radius: ${theme.borderRadius.xl};
  position: relative;
  overflow: hidden;

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

  p {
    color: ${theme.colors.gray300};
    line-height: ${theme.lineHeights.relaxed};
  }
`;

// ========================================
// FOOTER COMPONENT
// ========================================

const FooterSection = styled.footer`
  margin-top: ${theme.spacing['32']};
  padding: ${theme.spacing['16']} 0;
  background: ${theme.colors.gray900};
  border-top: 1px solid ${theme.colors.gray800};
`;

const FooterContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${theme.spacing['6']};
  text-align: center;
`;

const FooterTitle = styled.h3`
  font-size: ${theme.fontSizes['2xl']};
  font-weight: ${theme.fontWeights.bold};
  background: ${theme.colors.gradientAI};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${theme.spacing['4']};
`;

const FooterText = styled.p`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.gray400};
  margin-bottom: ${theme.spacing['8']};
`;

const FooterLinks = styled.div`
  display: flex;
  gap: ${theme.spacing['4']};
  justify-content: center;
  margin-bottom: ${theme.spacing['12']};
`;

const FooterLink = styled(motion.a)`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${theme.colors.blackLight};
  border: 1px solid ${theme.colors.gray800};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.gray400};
  transition: all ${theme.transitions.base};

  &:hover {
    background: ${theme.colors.violet};
    border-color: ${theme.colors.violet};
    color: ${theme.colors.white};
    transform: translateY(-4px);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const FooterDivider = styled.div`
  width: 100%;
  height: 1px;
  background: ${theme.colors.gray800};
  margin: ${theme.spacing['8']} 0;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.gray500};
  font-size: ${theme.fontSizes.sm};

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${theme.spacing['4']};
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterSection>
      <FooterContent>
        <FooterTitle>Intéressé par ce projet ?</FooterTitle>
        <FooterText>
          Discutons de vos besoins et voyons comment je peux vous aider
        </FooterText>

        <FooterLinks>
          <FooterLink
            href={`mailto:${portfolioData.personal.email}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiMail />
          </FooterLink>
          <FooterLink
            href={portfolioData.personal.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiLinkedin />
          </FooterLink>
        </FooterLinks>

        <FooterDivider />

        <FooterBottom>
          <span>© 2024 {portfolioData.personal.fullName}</span>
          <span>Crafted with passion & creativity</span>
        </FooterBottom>
      </FooterContent>
    </FooterSection>
  );
};

// ========================================
// MAIN COMPONENT
// ========================================

const ProjectGallery: React.FC = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [currentGallery, setCurrentGallery] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentGalleryData, setCurrentGalleryData] = useState<any>(null);

  // Scroll to top on mount
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  // Get project data - support both slug and ID
  const project = portfolioData.projects.find(p =>
    (p as any).slug === projectId || p.id === Number(projectId)
  );

  if (!project) {
    return (
      <PageContainer>
        <ContentWrapper>
          <BackButton onClick={() => navigate('/')}>
            <FiArrowLeft /> Retour
          </BackButton>
          <Title>Projet non trouvé</Title>
        </ContentWrapper>
      </PageContainer>
    );
  }

  const galleries = (project as any).galleries || [];

  const openModal = (gallery: any, index: number = 0) => {
    setCurrentGalleryData(gallery);
    setCurrentGallery(gallery.images || []);
    setCurrentIndex(index);
    setCurrentImage(gallery.images?.[index] || '');
    setModalOpen(true);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % currentGallery.length;
    setCurrentIndex(nextIndex);
    setCurrentImage(currentGallery[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
    setCurrentIndex(prevIndex);
    setCurrentImage(currentGallery[prevIndex]);
  };

  const handleModalImageChange = (index: number) => {
    setCurrentIndex(index);
    setCurrentImage(currentGallery[index]);
  };

  // Keyboard navigation
  React.useEffect(() => {
    if (!modalOpen) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        const nextIndex = (currentIndex + 1) % currentGallery.length;
        setCurrentIndex(nextIndex);
        setCurrentImage(currentGallery[nextIndex]);
      }
      if (e.key === 'ArrowLeft') {
        const prevIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
        setCurrentIndex(prevIndex);
        setCurrentImage(currentGallery[prevIndex]);
      }
      if (e.key === 'Escape') {
        setModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [modalOpen, currentIndex, currentGallery]);

  return (
    <PageContainer>
      {/* HERO SECTION */}
      <HeroSection>
        <ContentWrapper>
          <BackButton
            onClick={() => navigate('/')}
            whileHover={{ x: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiArrowLeft />
            Retour aux projets
          </BackButton>

          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {project.title}
          </Title>

          <ProjectMeta
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
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

          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {(project as any).description}
          </Description>

          <TagsRow
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {project.tags.map(tag => (
              <Badge key={tag} size="sm" variant="primary">
                {tag}
              </Badge>
            ))}
          </TagsRow>
        </ContentWrapper>
      </HeroSection>

      {/* GALLERIES SECTION */}
      <ContentWrapper>

        {/* Single Gallery Section with 3 cards in a row */}
        <GallerySection>

          <GalleryGrid>
            {galleries.map((gallery: any, index: number) => (
              <GalleryCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => openModal(gallery, 0)}
                whileHover={{ y: -4 }}
              >
                <img src={gallery.images?.[0]} alt={gallery.title} />
                <CardOverlay>
                  <CardText>
                    <h3>
                      <HiSparkles />
                      {gallery.title}
                    </h3>
                    <p>{gallery.images?.length} interfaces à découvrir</p>
                  </CardText>
                </CardOverlay>
              </GalleryCard>
            ))}
          </GalleryGrid>
        </GallerySection>

        {(project as any).highlights && (
          <ImpactSection>
            <SectionHeader>
              <SectionTitle>Impact & Résultats</SectionTitle>
            </SectionHeader>
            <ImpactGrid>
              {(project as any).highlights.map((highlight: string, index: number) => (
                <ImpactCard
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <p>{highlight}</p>
                </ImpactCard>
              ))}
            </ImpactGrid>
          </ImpactSection>
        )}
      </ContentWrapper>

      {/* FOOTER */}
      <Footer />

      {/* IMAGE MODAL */}
      <AnimatePresence>
        {modalOpen && currentImage && (
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
                  {currentGalleryData?.title || 'Vue détaillée'}
                </ModalTitle>
                <ModalDescription>
                  {currentGalleryData?.description || 'Explorez cette interface en détail'}
                </ModalDescription>
                <ModalImageInfo>
                  <span>Image {currentIndex + 1} / {currentGallery.length}</span>
                  <span style={{ color: theme.colors.violet }}>
                    {(project as any).company}
                  </span>
                </ModalImageInfo>
              </ModalText>

              <ModalImageContainer>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    src={currentImage}
                    alt={`Vue ${currentIndex + 1}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      maxHeight: '75vh'
                    }}
                  />
                </AnimatePresence>

                {currentGallery.length > 1 && (
                  <>
                    <SliderButton
                      className="prev"
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrev();
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiChevronLeft />
                    </SliderButton>

                    <SliderButton
                      className="next"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNext();
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiChevronRight />
                    </SliderButton>

                    <ModalNav>
                      {currentGallery.map((_, index) => (
                        <NavDot
                          key={index}
                          active={index === currentIndex}
                          onClick={() => handleModalImageChange(index)}
                        />
                      ))}
                    </ModalNav>
                  </>
                )}
              </ModalImageContainer>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </PageContainer>
  );
};

export default ProjectGallery;