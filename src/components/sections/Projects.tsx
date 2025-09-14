import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiEye } from 'react-icons/fi';
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
  margin-bottom: ${theme.spacing['16']};
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: ${theme.fontWeights.bold};
  margin-bottom: ${theme.spacing['4']};
  background: ${theme.colors.gradientAI};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionSubtitle = styled(motion.p)`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.gray400};
  max-width: 600px;
  margin: 0 auto;
`;

const FilterTabs = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing['2']};
  margin-bottom: ${theme.spacing['12']};
  flex-wrap: wrap;
`;

const FilterTab = styled.button<{ active: boolean }>`
  padding: ${theme.spacing['2']} ${theme.spacing['6']};
  background: ${props => props.active
    ? theme.colors.gradientAI
    : theme.colors.gray900};
  color: ${theme.colors.white};
  border: 1px solid ${props => props.active
    ? 'transparent'
    : theme.colors.gray800};
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.medium};
  transition: all ${theme.transitions.base};
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.md};
  }
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
  background: ${theme.colors.gray900};
  border-radius: ${theme.borderRadius['2xl']};
  overflow: hidden;
  cursor: pointer;
  height: 400px;
  transition: all ${theme.transitions.base};

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: ${theme.shadows['2xl']}, ${theme.shadows.glow};
  }
`;

const ProjectImage = styled.div<{ image?: string }>`
  width: 100%;
  height: 250px;
  background: ${props => props.image
    ? `url(${props.image})`
    : theme.colors.gradientAI};
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.8) 100%
    );
    opacity: 0;
    transition: opacity ${theme.transitions.base};
  }

  ${ProjectCard}:hover &::before {
    opacity: 1;
  }
`;

const ProjectOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing['8']};
  opacity: 0;
  transition: all ${theme.transitions.base};

  ${ProjectCard}:hover & {
    opacity: 1;
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
`;

const ProjectActions = styled.div`
  display: flex;
  gap: ${theme.spacing['4']};
  margin-top: ${theme.spacing['6']};
`;

const ActionButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: ${theme.spacing['2']};
  padding: ${theme.spacing['3']} ${theme.spacing['6']};
  background: ${theme.colors.gradientAI};
  color: ${theme.colors.white};
  border: none;
  border-radius: ${theme.borderRadius.lg};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.medium};
  cursor: pointer;
  transition: all ${theme.transitions.base};

  &:hover {
    transform: scale(1.05);
    box-shadow: ${theme.shadows.glow};
  }
`;

const Categories = ['Tous', 'Product Design', 'UX/UI Design', 'Mobile Design', 'AI Tools'];

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === 'Tous'
    ? portfolioData.projects
    : portfolioData.projects.filter(project => project.category === selectedCategory);

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
            Découvrez mes dernières créations en design d'interface et d'expérience utilisateur
          </SectionSubtitle>
        </SectionHeader>

        <FilterTabs
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {Categories.map(category => (
            <FilterTab
              key={category}
              active={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </FilterTab>
          ))}
        </FilterTabs>

        <AnimatePresence mode="wait">
          <ProjectsGrid
            key={selectedCategory}
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
              >
                <ProjectImage image={project.image} />

                <ProjectOverlay
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectActions>
                    <ActionButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <FiEye />
                      Voir le projet
                    </ActionButton>
                    <ActionButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <FiExternalLink />
                      Live demo
                    </ActionButton>
                  </ProjectActions>
                </ProjectOverlay>

                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectTags>
                    {project.tags.slice(0, 3).map(tag => (
                      <Badge key={tag} size="sm" variant={project.featured ? 'primary' : 'default'}>
                        {tag}
                      </Badge>
                    ))}
                  </ProjectTags>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </AnimatePresence>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;