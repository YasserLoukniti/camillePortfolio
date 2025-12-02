import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import {
  FiFigma, FiLayers, FiGrid,
  FiBriefcase, FiCpu
} from 'react-icons/fi';
import { SiAdobexd, SiAdobephotoshop, SiAdobeillustrator } from 'react-icons/si';
import { HiSparkles } from 'react-icons/hi';
import { theme } from '../../styles/theme';
import Card from '../ui/Card';
import { portfolioData } from '../../data/portfolio';

const fillAnimation = keyframes`
  from {
    width: 0%;
  }
  to {
    width: var(--progress);
  }
`;

const SkillsSection = styled.section`
  padding: ${theme.spacing['32']} 0;
  background: ${theme.colors.black};
  position: relative;
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
  background: ${theme.colors.gradientAI};
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${theme.spacing['8']};
  margin-bottom: ${theme.spacing['12']};
`;

const SkillCategory = styled(motion.div)``;

const CategoryTitle = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.semibold};
  margin-bottom: ${theme.spacing['8']};
  display: flex;
  align-items: center;
  gap: ${theme.spacing['3']};
  color: ${theme.colors.white};

  svg {
    color: ${theme.colors.violet};
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing['5']};
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing['2']};
`;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SkillName = styled.span`
  font-size: ${theme.fontSizes.base};
  color: ${theme.colors.gray300};
  font-weight: ${theme.fontWeights.medium};
`;

const SkillLevel = styled.span`
  font-size: ${theme.fontSizes.base};
  color: ${theme.colors.white};
  font-weight: ${theme.fontWeights.bold};
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: ${theme.colors.gray800};
  border-radius: ${theme.borderRadius.full};
  overflow: hidden;
  position: relative;
`;

const ProgressFill = styled(motion.div)<{ level: number }>`
  height: 100%;
  background: ${theme.colors.gradientAI};
  border-radius: ${theme.borderRadius.full};
  position: relative;
  --progress: ${props => props.level}%;
  animation: ${fillAnimation} 1.5s ease-out forwards;
`;

const ToolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${theme.spacing['4']};
  margin-top: ${theme.spacing['16']};
`;

const ToolCard = styled(motion.div)<{ $index?: number }>`
  background: ${theme.colors.gray900};
  border: 1px solid ${theme.colors.gray800};
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing['6']};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing['3']};
  transition: all ${theme.transitions.base};
  cursor: pointer;

  &:hover {
    transform: translateY(-4px) scale(1.05);
    border-color: ${props =>
      props.$index === 0 || props.$index === 4 ? theme.colors.violet :
      props.$index === 1 || props.$index === 3 || props.$index === 5 ? theme.colors.orange :
      props.$index === 2 || props.$index === 6 ? theme.colors.pink :
      theme.colors.violet
    };
    box-shadow:
      ${theme.shadows.lg},
      0 0 40px ${props =>
        props.$index === 0 || props.$index === 4 ? 'rgba(139, 92, 246, 0.3)' :
        props.$index === 1 || props.$index === 3 || props.$index === 5 ? 'rgba(251, 146, 60, 0.3)' :
        props.$index === 2 || props.$index === 6 ? 'rgba(236, 72, 153, 0.3)' :
        'rgba(139, 92, 246, 0.3)'
      };
    background: ${theme.colors.gray800};

    svg {
      color: ${props =>
        props.$index === 0 || props.$index === 4 ? theme.colors.violet :
        props.$index === 1 || props.$index === 3 || props.$index === 5 ? theme.colors.orange :
        props.$index === 2 || props.$index === 6 ? theme.colors.pink :
        theme.colors.violet
      };
      transform: rotate(360deg);
    }
  }

  svg {
    font-size: 2rem;
    color: ${theme.colors.gray400};
    transition: all ${theme.transitions.slow};
  }

  span {
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.gray400};
    font-weight: ${theme.fontWeights.medium};
  }
`;

const tools = [
  { name: 'Figma', icon: <FiFigma /> },
  { name: 'Adobe XD', icon: <SiAdobexd /> },
  { name: 'Photoshop', icon: <SiAdobephotoshop /> },
  { name: 'Illustrator', icon: <SiAdobeillustrator /> },
  { name: 'Framer', icon: <FiLayers /> },
  { name: 'Magic Patterns', icon: <HiSparkles /> },
  { name: 'Lovable', icon: <FiCpu /> },
  { name: 'Design Systems', icon: <FiGrid /> },
];

const Skills: React.FC = () => {

  const skillCategories = [
    {
      title: 'Design',
      icon: <FiFigma />,
      skills: portfolioData.skills.design
    },
    {
      title: 'Product Management',
      icon: <FiBriefcase />,
      skills: portfolioData.skills.productManagement
    },
    {
      title: 'IA & Technique',
      icon: <FiCpu />,
      skills: portfolioData.skills.aiTechnical
    }
  ];

  return (
    <SkillsSection id="skills">
      <Container>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Compétences & Expertises
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Compétences diversifiées pour créer des expériences exceptionnelles
          </SectionSubtitle>
        </SectionHeader>

        <SkillsGrid>
          {skillCategories.map((category, categoryIndex) => (
            <SkillCategory
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card variant="gradient" glowOnHover>
                <CategoryTitle>
                  {category.icon}
                  {category.title}
                </CategoryTitle>
                <SkillsList>
                  {category.skills.map((skill, index) => (
                    <SkillItem
                      key={skill.name}
                    >
                      <SkillHeader>
                        <SkillName>{skill.name}</SkillName>
                        <SkillLevel>{skill.level}%</SkillLevel>
                      </SkillHeader>
                      <ProgressBar>
                        <ProgressFill
                          level={skill.level}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </ProgressBar>
                    </SkillItem>
                  ))}
                </SkillsList>
              </Card>
            </SkillCategory>
          ))}
        </SkillsGrid>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <CategoryTitle style={{ textAlign: 'center', marginBottom: theme.spacing['8'] }}>
            <FiBriefcase />
            Outils & Technologies
          </CategoryTitle>
          <ToolsGrid>
            {tools.map((tool, index) => (
              <ToolCard
                key={tool.name}
                $index={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                {tool.icon}
                <span>{tool.name}</span>
              </ToolCard>
            ))}
          </ToolsGrid>
        </motion.div>
      </Container>
    </SkillsSection>
  );
};

export default Skills;