import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiCalendar, FiBriefcase } from 'react-icons/fi';
import { theme } from '../styles/theme';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { portfolioData } from '../data/portfolio';

const ProjectDetailSection = styled.section`
  min-height: 100vh;
  background: ${theme.colors.black};
  padding: ${theme.spacing['24']} 0;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${theme.spacing['6']};
`;

const BackButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: ${theme.spacing['2']};
  padding: ${theme.spacing['3']} ${theme.spacing['4']};
  background: ${theme.colors.gray900};
  border: 1px solid ${theme.colors.gray800};
  border-radius: ${theme.borderRadius.lg};
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.base};
  cursor: pointer;
  transition: all ${theme.transitions.base};
  margin-bottom: ${theme.spacing['8']};

  &:hover {
    background: ${theme.colors.gray800};
    transform: translateX(-4px);
  }
`;

const ProjectHeader = styled.div`
  margin-bottom: ${theme.spacing['12']};
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: ${theme.fontWeights.bold};
  margin-bottom: ${theme.spacing['4']};
  background: ${theme.colors.gradientAI};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ProjectMeta = styled.div`
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
  font-size: ${theme.fontSizes.lg};

  svg {
    color: ${theme.colors.violet};
  }
`;

const Description = styled(motion.p)`
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.gray300};
  line-height: ${theme.lineHeights.relaxed};
  margin-bottom: ${theme.spacing['8']};
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing['3']};
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing['16']};
`;

const Section = styled.div``;

const SectionTitle = styled.h2`
  font-size: ${theme.fontSizes['2xl']};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing['6']};
`;

const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing['4']};
  margin-bottom: ${theme.spacing['12']};
`;

const HighlightCard = styled(motion.div)`
  padding: ${theme.spacing['6']};
  background: ${theme.colors.gray900};
  border-radius: ${theme.borderRadius.xl};
  border-left: 3px solid ${theme.colors.violet};
  transition: all ${theme.transitions.base};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.lg};
  }

  p {
    color: ${theme.colors.gray300};
    line-height: ${theme.lineHeights.relaxed};
  }
`;

const ImageSection = styled.div`
  margin: ${theme.spacing['12']} 0;
`;

const ImageGrid = styled.div`
  display: grid;
  gap: ${theme.spacing['8']};
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  overflow: hidden;
  border-radius: ${theme.borderRadius.xl};
  background: ${theme.colors.gray900};
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const ImageCaption = styled.div`
  padding: ${theme.spacing['4']} ${theme.spacing['6']};
  background: ${theme.colors.gray900};
  border-top: 1px solid ${theme.colors.gray800};
`;

const CaptionTitle = styled.h3`
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing['2']};
`;

const CaptionText = styled.p`
  font-size: ${theme.fontSizes.base};
  color: ${theme.colors.gray400};
  line-height: ${theme.lineHeights.relaxed};
`;

const KeyProjectsSection = styled.div`
  margin: ${theme.spacing['12']} 0;
`;

const KeyProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${theme.spacing['6']};
`;

const KeyProjectCard = styled(motion.div)`
  padding: ${theme.spacing['6']};
  background: ${theme.colors.gray900};
  border-radius: ${theme.borderRadius.xl};
  border: 1px solid ${theme.colors.gray800};
  transition: all ${theme.transitions.base};

  &:hover {
    border-color: ${theme.colors.violet};
    transform: translateY(-4px);
  }

  h3 {
    font-size: ${theme.fontSizes.xl};
    font-weight: ${theme.fontWeights.semibold};
    color: ${theme.colors.violet};
    margin-bottom: ${theme.spacing['3']};
  }

  p {
    color: ${theme.colors.gray400};
    line-height: ${theme.lineHeights.relaxed};
  }
`;

const CTASection = styled.div`
  margin-top: ${theme.spacing['16']};
  padding: ${theme.spacing['12']};
  background: ${theme.colors.gray900};
  border-radius: ${theme.borderRadius['2xl']};
  text-align: center;
`;

const CTATitle = styled.h3`
  font-size: ${theme.fontSizes['2xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing['4']};
`;

const CTAButtons = styled.div`
  display: flex;
  gap: ${theme.spacing['4']};
  justify-content: center;
  flex-wrap: wrap;
  margin-top: ${theme.spacing['8']};
`;

// Image descriptions pour chaque projet
const imageDescriptions: Record<string, Record<string, { title: string; description: string }>> = {
  weneeds: {
    "/projects/weneeds/Profil candidat.png": {
      title: "Profil Candidat Enrichi",
      description: "Interface permettant aux candidats de créer un profil complet avec widgets personnalisables. Design moderne inspiré d'Apple avec des visuels colorés et attrayants."
    },
    "/projects/weneeds/onboarding.png": {
      title: "Onboarding IA Magique",
      description: "Expérience d'onboarding où l'IA génère automatiquement un profil complet depuis un CV/LinkedIn en quelques secondes. Transformation d'un point de friction en avantage concurrentiel."
    },
    "/projects/weneeds/analyse.png": {
      title: "Dashboard Analytics RH",
      description: "Dashboard complet pour l'analyse approfondie des candidats avec résumé IA, points forts/faibles et recommandations d'entretien."
    },
    "/projects/weneeds/mobile.png": {
      title: "Version Mobile Responsive",
      description: "Application mobile avec widgets adaptatifs et parcours utilisateur optimisé pour tous les types de profils."
    }
  },
  edf: {
    "/projects/edf/edf dashboard.png": {
      title: "Dashboard de Gestion Énergétique",
      description: "Interface de pilotage énergétique permettant le suivi en temps réel de la consommation, du stockage et des prévisions de dépenses."
    },
    "/projects/edf/edf landing.png": {
      title: "Landing Page Optimisée",
      description: "Page d'accueil moderne présentant les solutions de management énergétique avec un design visuel différenciant sur le marché industriel."
    },
    "/projects/edf/edf connexion.png": {
      title: "Parcours de Connexion Sécurisé",
      description: "Interface de connexion adaptée aux différents profils utilisateurs (techniciens, managers, ingénieurs commerciaux) avec authentification sécurisée."
    }
  },
  poleEmploi: {
    "/projects/pole emploi/pole emploi design.png": {
      title: "Emploi Store Nouvelle Génération",
      description: "Interface innovante avec système de recommandations intelligentes pour personnaliser l'accompagnement à l'emploi."
    },
    "/projects/pole emploi/pole emploi gestion des projets.png": {
      title: "Gestion des Projets",
      description: "Tableau de bord permettant aux demandeurs d'emploi de gérer leurs candidatures et projets professionnels de manière centralisée."
    },
    "/projects/pole emploi/pole emploi projet creatin.png": {
      title: "Création de Projet Professionnel",
      description: "Interface guidée pour aider les utilisateurs à définir et structurer leur projet professionnel avec recommandations personnalisées."
    }
  }
};

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const project = portfolioData.projects.find(p => p.id === Number(projectId));

  if (!project) {
    return (
      <ProjectDetailSection>
        <Container>
          <h1>Projet non trouvé</h1>
          <Button onClick={() => navigate('/')}>Retour à l'accueil</Button>
        </Container>
      </ProjectDetailSection>
    );
  }

  const projectKey = project.id === 1 ? 'weneeds' : project.id === 2 ? 'edf' : 'poleEmploi';
  const descriptions = imageDescriptions[projectKey as keyof typeof imageDescriptions] || {};

  return (
    <ProjectDetailSection>
      <Container>
        <BackButton
          onClick={() => navigate('/')}
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiArrowLeft />
          Retour aux projets
        </BackButton>

        <ProjectHeader>
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {project.title}
          </Title>

          <ProjectMeta>
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
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {(project as any).description}
          </Description>

          <TagsContainer>
            {project.tags.map(tag => (
              <Badge key={tag} size="md" variant="primary">
                {tag}
              </Badge>
            ))}
          </TagsContainer>
        </ProjectHeader>

        <ContentGrid>
          {(project as any).highlights && (
            <Section>
              <SectionTitle>Points Clés du Projet</SectionTitle>
              <HighlightsGrid>
                {(project as any).highlights.map((highlight: string, index: number) => (
                  <HighlightCard
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <p>{highlight}</p>
                  </HighlightCard>
                ))}
              </HighlightsGrid>
            </Section>
          )}

          {(project as any).images && (
            <ImageSection>
              <SectionTitle>Visuels du Projet</SectionTitle>
              <ImageGrid>
                {(project as any).images.map((image: string, index: number) => (
                  <ImageContainer
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <ProjectImage src={image} alt={`${project.title} - ${index + 1}`} />
                    {descriptions && descriptions[image] && (
                      <ImageCaption>
                        <CaptionTitle>{descriptions[image].title}</CaptionTitle>
                        <CaptionText>{descriptions[image].description}</CaptionText>
                      </ImageCaption>
                    )}
                  </ImageContainer>
                ))}
              </ImageGrid>
            </ImageSection>
          )}

          {(project as any).keyProjects && (
            <KeyProjectsSection>
              <SectionTitle>Projets Réalisés</SectionTitle>
              <KeyProjectGrid>
                {(project as any).keyProjects.map((kp: any, index: number) => (
                  <KeyProjectCard
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <h3>{kp.name}</h3>
                    <p>{kp.description}</p>
                  </KeyProjectCard>
                ))}
              </KeyProjectGrid>
            </KeyProjectsSection>
          )}
        </ContentGrid>

        <CTASection>
          <CTATitle>Intéressé par ce type de projet ?</CTATitle>
          <CTAButtons>
            <Button variant="primary" size="lg" href="/#contact">
              Discutons de votre projet
            </Button>
            <Button variant="outline" size="lg" href="/#projects">
              Voir d'autres projets
            </Button>
          </CTAButtons>
        </CTASection>
      </Container>
    </ProjectDetailSection>
  );
};

export default ProjectDetail;