import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink, FiCalendar, FiBriefcase } from 'react-icons/fi';
import { theme } from '../../styles/theme';
import Badge from './Badge';
import Button from './Button';

interface ProjectModalProps {
  project: any;
  isOpen: boolean;
  onClose: () => void;
}

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: ${theme.spacing['6']};
  overflow-y: auto;
`;

const ModalContent = styled(motion.div)`
  background: ${theme.colors.blackLight};
  border-radius: 24px;
  max-width: 900px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  position: relative;
  padding: ${theme.spacing['10']};

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: ${theme.spacing['6']};
    max-height: none;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: ${theme.spacing['4']};
  right: ${theme.spacing['4']};
  background: ${theme.colors.gray800};
  border: none;
  width: 40px;
  height: 40px;
  border-radius: ${theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${theme.transitions.base};
  color: ${theme.colors.white};
  z-index: 10;

  &:hover {
    background: ${theme.colors.gray700};
    transform: rotate(90deg);
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing['8']};
`;

const ProjectHeader = styled.div`
  h2 {
    font-size: ${theme.fontSizes['3xl']};
    font-weight: ${theme.fontWeights.bold};
    margin-bottom: ${theme.spacing['2']};
    color: ${theme.colors.white};
  }
`;

const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing['4']};
  margin-bottom: ${theme.spacing['4']};
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing['2']};
  color: ${theme.colors.gray400};
  font-size: ${theme.fontSizes.base};

  svg {
    color: ${theme.colors.violet};
  }
`;

const Description = styled.p`
  color: ${theme.colors.gray300};
  line-height: ${theme.lineHeights.relaxed};
  margin-bottom: ${theme.spacing['6']};
  font-size: ${theme.fontSizes.lg};
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing['2']};
`;

const Highlights = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing['4']};
  margin: ${theme.spacing['8']} 0;
`;

const HighlightCard = styled.div`
  padding: ${theme.spacing['4']};
  background: ${theme.colors.gray900};
  border-radius: ${theme.borderRadius.lg};
  border-left: 3px solid ${theme.colors.violet};

  span {
    display: block;
    color: ${theme.colors.gray300};
    font-size: ${theme.fontSizes.sm};
    line-height: ${theme.lineHeights.relaxed};
  }
`;


const ProjectActions = styled.div`
  display: flex;
  gap: ${theme.spacing['4']};
  margin-top: ${theme.spacing['8']};
  padding-top: ${theme.spacing['6']};
  border-top: 1px solid ${theme.colors.gray800};
`;

const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing['4']};
  margin: ${theme.spacing['8']} 0;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: ${theme.borderRadius.lg};
  transition: transform ${theme.transitions.base};
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <ModalContent
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={onClose}>
              <FiX />
            </CloseButton>

            <ProjectInfo>
              <ProjectHeader>
                <h2>{project.title}</h2>
                <CompanyInfo>
                  {project.company && (
                    <InfoItem>
                      <FiBriefcase />
                      <span>{project.company}</span>
                    </InfoItem>
                  )}
                  {project.dateRange && (
                    <InfoItem>
                      <FiCalendar />
                      <span>{project.dateRange}</span>
                    </InfoItem>
                  )}
                </CompanyInfo>
              </ProjectHeader>

              <Description>{project.description}</Description>

              <TagsContainer>
                {project.tags?.map((tag: string) => (
                  <Badge key={tag} size="sm" variant="primary">
                    {tag}
                  </Badge>
                ))}
              </TagsContainer>

              {project.highlights && (
                <Highlights>
                  {project.highlights.map((highlight: string, index: number) => (
                    <HighlightCard key={index}>
                      <span>{highlight}</span>
                    </HighlightCard>
                  ))}
                </Highlights>
              )}

              {(project as any).images && (
                <ImageGallery>
                  {(project as any).images.slice(0, 4).map((img: string, index: number) => (
                    <GalleryImage
                      key={index}
                      src={img}
                      alt={`${project.title} - Image ${index + 1}`}
                    />
                  ))}
                </ImageGallery>
              )}

              <ProjectActions>
                <Button variant="primary" size="lg">
                  <FiExternalLink />
                  Voir le projet complet
                </Button>
                <Button variant="outline" size="lg">
                  Contactez-moi
                </Button>
              </ProjectActions>
            </ProjectInfo>
          </ModalContent>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;