import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiTarget, FiTrendingUp } from 'react-icons/fi';
import { HiOutlineLightBulb } from 'react-icons/hi';
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

const Paragraph = styled.p`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.gray400};
  line-height: ${theme.lineHeights.relaxed};
  margin-bottom: ${theme.spacing['4']};
`;

const AudienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing['6']};
  margin: ${theme.spacing['8']} 0;
`;

const AudienceCard = styled(motion.div)`
  background: linear-gradient(135deg,
    ${theme.colors.gray900} 0%,
    rgba(168, 85, 247, 0.05) 100%
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

  h3 {
    font-size: ${theme.fontSizes.xl};
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacing['3']};
  }

  p {
    font-size: ${theme.fontSizes.base};
    color: ${theme.colors.gray400};
    line-height: ${theme.lineHeights.relaxed};
    margin-bottom: ${theme.spacing['4']};

    &:last-child {
      margin-bottom: 0;
    }
  }

  .label {
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.violet};
    font-weight: ${theme.fontWeights.semibold};
    margin-bottom: ${theme.spacing['2']};
  }
`;

const SolutionCard = styled.div`
  background: linear-gradient(135deg,
    ${theme.colors.gray900} 0%,
    rgba(255, 140, 90, 0.05) 100%
  );
  border: 1px solid ${theme.colors.gray800};
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing['8']};
  margin-bottom: ${theme.spacing['8']};
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, rgba(255, 140, 90, 0.1), transparent);
    border-radius: 50%;
    transform: translate(30%, -30%);
  }

  h3 {
    font-size: ${theme.fontSizes['2xl']};
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacing['3']};
  }

  .approach {
    font-size: ${theme.fontSizes.lg};
    color: ${theme.colors.gray300};
    margin-bottom: ${theme.spacing['6']};
    font-style: italic;
  }
`;

const ImpactBox = styled.div`
  background: linear-gradient(135deg,
    rgba(168, 85, 247, 0.1) 0%,
    rgba(255, 140, 90, 0.1) 100%
  );
  border: 1px solid ${theme.colors.violet};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing['4']};
  margin-top: ${theme.spacing['6']};

  p {
    color: ${theme.colors.gray300};
    font-size: ${theme.fontSizes.base};
    line-height: ${theme.lineHeights.relaxed};
    margin: 0;

    strong {
      color: ${theme.colors.white};
      font-weight: ${theme.fontWeights.bold};
    }
  }
`;

const ImageBlock = styled(motion.div)`
  margin: ${theme.spacing['12']} 0;
`;

const ImageContainer = styled.div`
  width: 100%;
  border-radius: ${theme.borderRadius.xl};
  overflow: hidden;
  background: ${theme.colors.gray900};
  margin-bottom: ${theme.spacing['4']};
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
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

const LearningCard = styled(motion.div)`
  background: linear-gradient(135deg,
    ${theme.colors.gray900} 0%,
    rgba(168, 85, 247, 0.03) 100%
  );
  border: 1px solid ${theme.colors.gray800};
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing['6']};
  margin-bottom: ${theme.spacing['4']};
  transition: all ${theme.transitions.base};

  &:hover {
    transform: translateY(-2px);
    border-color: ${theme.colors.violet};
  }

  h3 {
    font-size: ${theme.fontSizes.xl};
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacing['3']};
  }

  p {
    font-size: ${theme.fontSizes.base};
    color: ${theme.colors.gray400};
    line-height: ${theme.lineHeights.relaxed};
  }
`;

const EDF: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <HeroSection bgImage="/projects/edf/edf.png">
        <BackButton
          onClick={() => navigate('/')}
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
            Projet • EDF Agregio
          </CategoryBadge>
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Produit B2B Énergétique
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Design d'outils digitaux pour 3 audiences radicalement différentes dans l'industrie énergétique
          </Subtitle>
          <TagsRow
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Tag color="violet">B2B SaaS</Tag>
            <Tag color="orange">Industrial Design</Tag>
            <Tag color="blue">Multi-Audience</Tag>
            <Tag color="pink">UX Research</Tag>
          </TagsRow>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <SectionBlock
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SectionHeader>
            <SectionIcon>
              <FiTarget size={24} />
            </SectionIcon>
            <SectionTitle>Le Challenge</SectionTitle>
          </SectionHeader>
          <Paragraph>
            Concevoir des outils digitaux pour une entreprise industrielle B2B sans culture UX établie, en adressant
            3 audiences aux besoins radicalement différents :
          </Paragraph>

          <AudienceGrid>
            <AudienceCard whileHover={{ y: -4 }}>
              <h3>Techniciens de terrain</h3>
              <p className="label">Contexte d'usage</p>
              <p>
                Debout devant des équipements complexes, dans le bruit, avec des gants. Besoin d'instructions
                séquentielles ultra-claires pour paramétrer des systèmes énergétiques.
              </p>
              <p>
                <strong>Aucune place à l'erreur, aucune tolérance pour la complexité.</strong>
              </p>
            </AudienceCard>

            <AudienceCard whileHover={{ y: -4 }}>
              <h3>Project Managers énergétiques</h3>
              <p className="label">Contexte d'usage</p>
              <p>
                En réunion avec clients et parties prenantes. Besoin de comprendre l'état des projets en un coup d'œil
                avec de la data temps réel pour prendre des décisions rapides.
              </p>
              <p>
                <strong>Présenter des chiffres complexes de manière compréhensible.</strong>
              </p>
            </AudienceCard>

            <AudienceCard whileHover={{ y: -4 }}>
              <h3>Décideurs business</h3>
              <p className="label">Contexte d'usage</p>
              <p>
                Investissent dans des projets d'optimisation énergétique coûteux. Besoin de comprendre le ROI, les
                rendements sur plusieurs années, et l'impact business.
              </p>
              <p>
                <strong>Sans se noyer dans la technique.</strong>
              </p>
            </AudienceCard>
          </AudienceGrid>

          <ImpactBox>
            <p>
              <strong>Contrainte supplémentaire :</strong> Aucun processus UX existant dans l'entreprise. Partir de
              zéro et prouver la valeur du design dans un secteur industriel complexe.
            </p>
          </ImpactBox>
        </SectionBlock>

        <SectionBlock
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader>
            <SectionIcon>
              <HiOutlineLightBulb size={24} />
            </SectionIcon>
            <SectionTitle>La Solution</SectionTitle>
          </SectionHeader>

          <SolutionCard>
            <h3>Pour les Techniciens : EMS Step-by-Step</h3>
            <p className="approach">
              Guidage séquentiel qui transforme un processus technique manuel en interface self-service intuitive.
            </p>
          </SolutionCard>

          <ImageBlock
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ImageContainer>
              <Image src="/projects/edf/EMS.png" alt="EMS Step-by-Step" />
            </ImageContainer>
            <ImageCaption>
              Interface EMS guidant les techniciens pas à pas dans le paramétrage des systèmes énergétiques.
            </ImageCaption>
          </ImageBlock>

          <SolutionCard>
            <h3>Pour les Project Managers : Dashboard Temps Réel</h3>
            <p className="approach">
              Transformer des données techniques complexes en visualisations compréhensibles et actionnables.
            </p>
          </SolutionCard>

          <ImageBlock
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ImageContainer>
              <Image src="/projects/edf/edf-dashboard.png" alt="Dashboard temps réel" />
            </ImageContainer>
            <ImageCaption>
              Dashboard de gestion et de suivi de la consommation énergétique avec visualisations de données complexes
              et indicateurs clés de performance.
            </ImageCaption>
          </ImageBlock>

          <SolutionCard>
            <h3>Pour les Décideurs : StorAdvisor</h3>
            <p className="approach">
              Rendre accessible un calculateur complexe de ROI pour installations énergétiques, créant un pont entre données techniques et vision business.
            </p>
          </SolutionCard>

          <ImageBlock
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ImageContainer>
              <Image src="/projects/edf/edf-landing.png" alt="Landing page StorAdvisor" />
            </ImageContainer>
            <ImageCaption>
              Landing page et parcours de connexion optimisés pour une prise en main rapide et sécurisée de la plateforme.
            </ImageCaption>
          </ImageBlock>

          <ImageBlock
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ImageContainer>
              <Image src="/projects/edf/edf-connexion.png" alt="Interface de connexion" />
            </ImageContainer>
            <ImageCaption>
              Interface de connexion sécurisée adaptée aux différents profils utilisateurs.
            </ImageCaption>
          </ImageBlock>
        </SectionBlock>

        <SectionBlock
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader>
            <SectionIcon>
              <FiTrendingUp size={24} />
            </SectionIcon>
            <SectionTitle>Learnings Stratégiques</SectionTitle>
          </SectionHeader>

          <LearningCard whileHover={{ y: -2 }}>
            <h3>Design industriel ≠ design consumer</h3>
            <p>
              Les techniciens ont besoin de fonctionnel, pas de "joli". Priorité absolue : clarté, rapidité, fiabilité.
              Le bon langage technique (pas de simplification) = confiance.
            </p>
          </LearningCard>

          <LearningCard whileHover={{ y: -2 }}>
            <h3>Mobile-first prend un sens différent</h3>
            <p>
              Pas juste "responsive". C'est repenser l'interaction pour des mains gantées, de la lumière extérieure,
              et du réseau instable.
            </p>
          </LearningCard>

          <LearningCard whileHover={{ y: -2 }}>
            <h3>La recherche révèle les vrais enjeux</h3>
            <p>
              Analyse de 70 entretiens : l'adoption ne dépend pas de l'impact environnemental (contrairement aux
              croyances) mais de l'avantage économique, de la facilité d'intégration, et de la minimisation des risques.
              Gap produit-marché identifié.
            </p>
          </LearningCard>

          <LearningCard whileHover={{ y: -2 }}>
            <h3>Un design pour plusieurs audiences</h3>
            <p>
              Même entreprise, 3 produits radicalement différents. Impossible de faire du "one size fits all". Le
              contexte d'usage dicte tout.
            </p>
          </LearningCard>

          <LearningCard whileHover={{ y: -2 }}>
            <h3>Prouver la valeur du design dans l'industriel</h3>
            <p>
              Dans un secteur où personne ne parle d'UX, montrer des résultats concrets (-65% erreurs, -80% temps)
              est essentiel pour gagner en crédibilité et influence.
            </p>
          </LearningCard>
        </SectionBlock>
      </ContentSection>
    </PageContainer>
  );
};

export default EDF;
