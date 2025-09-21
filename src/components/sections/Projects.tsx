import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiEye } from 'react-icons/fi';
import { theme } from '../../styles/theme';
import Badge from '../ui/Badge';
import { portfolioData } from '../../data/portfolio';

const ProjectsSection = styled.section`
  padding: ${theme.spacing['32']} 0;
  background: ${theme.colors.blackLight};
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${theme.spacing['6']};
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing['12']};
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: ${theme.fontWeights.bold};
  margin-bottom: ${theme.spacing['3']};
  letter-spacing: -0.03em;
  line-height: 1.2;
  background: linear-gradient(
    90deg,
    ${theme.colors.white} 0%,
    ${theme.colors.violet} 25%,
    ${theme.colors.orange} 50%,
    ${theme.colors.violet} 75%,
    ${theme.colors.white} 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionSubtitle = styled(motion.p)`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.gray400};
  font-weight: ${theme.fontWeights.regular};
  max-width: 600px;
  margin: 0 auto;
  opacity: 0.9;
  line-height: ${theme.lineHeights.relaxed};
`;


const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${theme.spacing['8']};

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  position: relative;
  background: ${theme.colors.black};
  border: 2px solid ${theme.colors.gray800};
  border-radius: ${theme.borderRadius.xl};
  overflow: hidden;
  cursor: pointer;
  height: auto;
  transition: all ${theme.transitions.base};

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(255, 140, 90, 0.3);
    box-shadow:
      0 20px 40px rgba(255, 140, 90, 0.15),
      0 0 80px rgba(255, 140, 90, 0.1),
      0 0 120px rgba(236, 72, 153, 0.05);
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150%;
    height: 150%;
    background: radial-gradient(
      circle,
      rgba(255, 140, 90, 0.08) 0%,
      rgba(236, 72, 153, 0.05) 30%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity ${theme.transitions.base};
    pointer-events: none;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const ProjectImage = styled.div<{ image?: string }>`
  width: 100%;
  height: 220px;
  background: ${props => props.image
    ? `url(${props.image}) center/cover no-repeat`
    : `linear-gradient(135deg,
        rgba(255, 140, 90, 0.2) 0%,
        rgba(236, 72, 153, 0.2) 50%,
        rgba(139, 92, 246, 0.2) 100%)`};
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  transition: transform ${theme.transitions.base};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      transparent 50%,
      rgba(0, 0, 0, 0.3) 100%
    );
  }

  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

const ProjectOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 220px;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(4px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing['6']};
  opacity: 0;
  transition: all ${theme.transitions.base};
  pointer-events: none;

  ${ProjectCard}:hover & {
    opacity: 1;
    pointer-events: auto;
  }
`;

const ProjectContent = styled.div`
  padding: ${theme.spacing['6']};
  position: relative;
`;

const ProjectTitle = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.semibold};
  margin-bottom: ${theme.spacing['2']};
  color: ${theme.colors.white};
`;

const ProjectDescription = styled.p`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.gray400};
  margin-bottom: ${theme.spacing['4']};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ProjectTags = styled.div`
  display: flex;
  gap: ${theme.spacing['2']};
  flex-wrap: wrap;
  margin-top: ${theme.spacing['3']};
`;

const ProjectActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${theme.spacing['6']};
`;

const ActionButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: ${theme.spacing['2']};
  padding: ${theme.spacing['3']} ${theme.spacing['4']};
  background: ${theme.colors.white};
  color: ${theme.colors.black};
  border: none;
  border-radius: ${theme.borderRadius.lg};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.semibold};
  cursor: pointer;
  transition: all ${theme.transitions.base};
  z-index: 10;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    transform: scale(1.05);
    background: ${theme.colors.whiteLight};
    box-shadow: ${theme.shadows.lg};
  }
`;

const Projects: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = portfolioData.projects;

  const handleProjectClick = (project: any) => {
    const slug = project.slug || project.id;
    navigate(`/project/${slug}`);
  };

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Projets récents
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Mes dernières créations
          </SectionSubtitle>
        </SectionHeader>

        <AnimatePresence mode="wait">
          <ProjectsGrid
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                onClick={() => handleProjectClick(project)}
              >
                <ProjectImage image={project.image}>
                  <ProjectOverlay
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                  <ProjectActions>
                    <ActionButton
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProjectClick(project);
                      }}
                    >
                      <FiEye />
                      Voir le projet
                    </ActionButton>
                  </ProjectActions>
                  </ProjectOverlay>
                </ProjectImage>

                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>
                    {(project as any).shortDescription || project.description}
                  </ProjectDescription>
                  <ProjectTags>
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge
                        key={tag}
                        size="sm"
                        variant="default"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </ProjectTags>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            marginTop: theme.spacing['12'],
            color: theme.colors.gray400,
            fontSize: theme.fontSizes.lg,
            fontStyle: 'italic'
          }}
        >
          + 5 autres projets
        </motion.div>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;