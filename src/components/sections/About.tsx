import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCalendar, FiMapPin, FiAward, FiUsers, FiTarget, FiTrendingUp, FiGlobe, FiBriefcase, FiArrowRight, FiZap, FiCode, FiLayers } from 'react-icons/fi';
import { HiSparkles, HiAcademicCap, HiLightningBolt } from 'react-icons/hi';
import { theme } from '../../styles/theme';
import { portfolioData } from '../../data/portfolio';

const floatingAnimation = keyframes`
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
`;

const pulseGlow = keyframes`
  0%, 100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
`;

const AboutSection = styled.section`
  padding: ${theme.spacing['32']} 0;
  background: ${theme.colors.black};
  position: relative;
  overflow: hidden;
`;

const FloatingShape = styled.div<{ $delay: number; $size: number; $left: string; $top: string }>`
  position: absolute;
  left: ${props => props.$left};
  top: ${props => props.$top};
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  background: linear-gradient(135deg, ${theme.colors.violet}, ${theme.colors.orange});
  opacity: 0.03;
  border-radius: 50%;
  filter: blur(40px);
  animation: ${floatingAnimation} ${props => 10 + props.$delay}s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${theme.spacing['6']};
  position: relative;
  z-index: 1;
`;

const SectionHeader = styled.div`
  margin-bottom: ${theme.spacing['20']};
  position: relative;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(3rem, 7vw, 6rem);
  font-weight: ${theme.fontWeights.black};
  text-align: center;
  line-height: 0.9;
  letter-spacing: -0.06em;
  position: relative;
  margin-bottom: ${theme.spacing['8']};

  span {
    display: block;
    position: relative;
  }

  .line1 {
    color: ${theme.colors.white};
    opacity: 0.2;
    font-size: 0.5em;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    margin-bottom: ${theme.spacing['2']};
  }

  .line2 {
    background: linear-gradient(
      135deg,
      ${theme.colors.white} 0%,
      ${theme.colors.violet} 30%,
      ${theme.colors.orange} 60%,
      ${theme.colors.white} 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const HeroIntro = styled(motion.div)`
  text-align: center;
  margin-bottom: ${theme.spacing['24']};
  position: relative;
`;

const IntroCard = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(135deg, ${theme.colors.violet}, ${theme.colors.orange});
    border-radius: 30px;
    opacity: 0.3;
    filter: blur(20px);
    animation: ${pulseGlow} 4s ease-in-out infinite;
  }
`;

const IntroContent = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 30px;
  padding: ${theme.spacing['12']};

  p {
    font-size: ${theme.fontSizes['2xl']};
    line-height: 1.5;
    color: ${theme.colors.gray200};
    font-weight: ${theme.fontWeights.light};

    strong {
      color: ${theme.colors.white};
      font-weight: ${theme.fontWeights.medium};
      background: linear-gradient(135deg, ${theme.colors.violet}, ${theme.colors.orange});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }
`;

const InteractiveTimeline = styled.div`
  position: relative;
  margin-bottom: ${theme.spacing['24']};
`;

const TimelineNav = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing['2']};
  margin-bottom: ${theme.spacing['12']};
  flex-wrap: wrap;
`;

const TimelineButton = styled(motion.button)<{ $active: boolean }>`
  padding: ${theme.spacing['3']} ${theme.spacing['6']};
  background: ${props => props.$active
    ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(251, 146, 60, 0.2))'
    : 'rgba(255, 255, 255, 0.02)'};
  border: 1px solid ${props => props.$active
    ? 'rgba(139, 92, 246, 0.5)'
    : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 100px;
  color: ${props => props.$active ? theme.colors.white : theme.colors.gray400};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.medium};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 1px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent);
    transition: all 0.5s ease;
    transform: translate(-50%, -50%);
  }

  &:hover::before {
    width: 200%;
    height: 200%;
  }

  &:hover {
    transform: translateY(-2px);
    color: ${theme.colors.white};
  }
`;

const TimelineContent = styled(AnimatePresence)``;

const ExperienceGrid = styled(motion.div)`
  display: grid;
  gap: ${theme.spacing['4']};
`;

const ExperienceItem = styled(motion.div)`
  position: relative;
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: ${theme.spacing['8']};
  padding: ${theme.spacing['8']};

  &::before {
    content: '';
    position: absolute;
    left: 232px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(
      180deg,
      transparent 0%,
      ${theme.colors.violet} 20%,
      ${theme.colors.orange} 50%,
      ${theme.colors.violet} 80%,
      transparent 100%
    );
    opacity: 0.3;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing['4']};

    &::before {
      display: none;
    }
  }
`;

const DateBadge = styled.div`
  text-align: right;

  @media (max-width: ${theme.breakpoints.md}) {
    text-align: left;
  }
`;

const DateText = styled.div`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.violet};
  font-weight: ${theme.fontWeights.semibold};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: ${theme.spacing['2']};
`;

const LocationText = styled.div`
  font-size: ${theme.fontSizes.xs};
  color: ${theme.colors.gray500};
  display: flex;
  align-items: center;
  gap: ${theme.spacing['1']};
  justify-content: flex-end;

  @media (max-width: ${theme.breakpoints.md}) {
    justify-content: flex-start;
  }
`;

const ExperienceDetails = styled.div`
  position: relative;
`;

const ExperienceCard = styled.div`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.02) 0%,
    rgba(139, 92, 246, 0.02) 100%
  );
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: ${theme.spacing['6']};
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(139, 92, 246, 0.1),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    transform: translateX(10px);
    border-color: rgba(139, 92, 246, 0.2);
  }
`;

const ExperienceTitle = styled.h3`
  font-size: ${theme.fontSizes['2xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing['2']};
`;

const ExperienceCompany = styled.div`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.gray400};
  margin-bottom: ${theme.spacing['4']};
  font-weight: ${theme.fontWeights.light};
`;

const ExperienceDescription = styled.p`
  font-size: ${theme.fontSizes.md};
  color: ${theme.colors.gray300};
  line-height: 1.8;
  margin-bottom: ${theme.spacing['4']};
`;

const SkillPills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing['2']};
`;

const SkillPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing['1']};
  padding: ${theme.spacing['1']} ${theme.spacing['3']};
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 100px;
  font-size: ${theme.fontSizes.xs};
  color: ${theme.colors.violet};
  font-weight: ${theme.fontWeights.medium};
  position: relative;
  overflow: hidden;

  &::before {
    content: '✨';
    position: absolute;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const StatsSection = styled.div`
  margin-top: ${theme.spacing['24']};
  position: relative;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${theme.spacing['6']};

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatCard = styled(motion.div)`
  position: relative;
  text-align: center;
  padding: ${theme.spacing['8']};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(139, 92, 246, 0.05),
      rgba(251, 146, 60, 0.05)
    );
    border-radius: 20px;
    transform: rotate(-3deg);
  }

  &:nth-child(even)::before {
    transform: rotate(3deg);
  }
`;

const StatNumber = styled(motion.div)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: ${theme.fontWeights.black};
  background: linear-gradient(135deg, ${theme.colors.violet}, ${theme.colors.orange});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: ${theme.spacing['2']};
`;

const StatLabel = styled.div`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.gray400};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: ${theme.fontWeights.medium};
`;

const LanguageSection = styled.div`
  margin-top: ${theme.spacing['16']};
  display: flex;
  justify-content: center;
  gap: ${theme.spacing['8']};
  flex-wrap: wrap;
`;

const LanguageBubble = styled(motion.div)`
  position: relative;
  padding: ${theme.spacing['3']} ${theme.spacing['6']};
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 100px;
  font-size: ${theme.fontSizes.md};
  color: ${theme.colors.white};
  transition: all 0.3s ease;

  &::after {
    content: attr(data-level);
    position: absolute;
    top: -10px;
    right: -10px;
    padding: ${theme.spacing['1']} ${theme.spacing['2']};
    background: linear-gradient(135deg, ${theme.colors.violet}, ${theme.colors.orange});
    border-radius: 100px;
    font-size: ${theme.fontSizes.xs};
    font-weight: ${theme.fontWeights.bold};
  }

  &:hover {
    transform: scale(1.1) rotate(-5deg);
    border-color: rgba(139, 92, 246, 0.3);
  }
`;

const About: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('experience');

  const categories = [
    { id: 'experience', label: 'Expériences', icon: FiBriefcase },
    { id: 'education', label: 'Formation', icon: HiAcademicCap },
    { id: 'skills', label: 'Compétences', icon: FiCode },
  ];

  const stats = [
    { number: '5+', label: "Années", icon: FiTrendingUp },
    { number: '20+', label: 'Projets', icon: FiTarget },
    { number: '120+', label: 'MVP Testés', icon: FiZap },
    { number: '3M€', label: 'Levés', icon: FiAward },
  ];

  return (
    <AboutSection id="about">
      {/* Floating shapes for depth */}
      <FloatingShape $delay={0} $size={300} $left="10%" $top="20%" />
      <FloatingShape $delay={2} $size={200} $left="80%" $top="60%" />
      <FloatingShape $delay={4} $size={250} $left="50%" $top="40%" />

      <Container>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="line1">Design + Innovation</span>
            <span className="line2">Mon Parcours</span>
          </SectionTitle>
        </SectionHeader>

        <HeroIntro
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <IntroCard>
            <IntroContent>
              <p>
                Je suis <strong>Camille Perlès</strong>, une designer qui transforme
                l'<strong>intelligence artificielle</strong> en expériences utilisateur
                intuitives. Mon approche unique mêle <strong>créativité</strong>,
                <strong>stratégie produit</strong> et <strong>innovation technologique</strong> pour
                créer des produits qui marquent la différence.
              </p>
            </IntroContent>
          </IntroCard>
        </HeroIntro>

        <InteractiveTimeline>
          <TimelineNav>
            {categories.map((cat) => (
              <TimelineButton
                key={cat.id}
                $active={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat.label}
              </TimelineButton>
            ))}
          </TimelineNav>

          <TimelineContent>
            {activeCategory === 'experience' && (
              <ExperienceGrid
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
              >
                {portfolioData.experiences.map((exp, index) => (
                  <ExperienceItem
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <DateBadge>
                      <DateText>{exp.dateRange}</DateText>
                      <LocationText>
                        <FiMapPin size={12} />
                        {exp.location || 'Paris'}
                      </LocationText>
                    </DateBadge>

                    <ExperienceDetails>
                      <ExperienceCard>
                        <ExperienceTitle>{exp.title}</ExperienceTitle>
                        <ExperienceCompany>{exp.company}</ExperienceCompany>
                        <ExperienceDescription>
                          {exp.description}
                        </ExperienceDescription>
                        <SkillPills>
                          {exp.skills.slice(0, 4).map((skill) => (
                            <SkillPill key={skill}>{skill}</SkillPill>
                          ))}
                        </SkillPills>
                      </ExperienceCard>
                    </ExperienceDetails>
                  </ExperienceItem>
                ))}
              </ExperienceGrid>
            )}

            {activeCategory === 'education' && (
              <ExperienceGrid
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
              >
                {portfolioData.education.map((edu, index) => (
                  <ExperienceItem
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <DateBadge>
                      <DateText>{edu.dateRange}</DateText>
                      <LocationText>
                        <HiAcademicCap size={12} />
                        Formation
                      </LocationText>
                    </DateBadge>

                    <ExperienceDetails>
                      <ExperienceCard>
                        <ExperienceTitle>{edu.degree}</ExperienceTitle>
                        <ExperienceCompany>{edu.school}</ExperienceCompany>
                        <ExperienceDescription>
                          {edu.field}
                        </ExperienceDescription>
                      </ExperienceCard>
                    </ExperienceDetails>
                  </ExperienceItem>
                ))}
              </ExperienceGrid>
            )}

            {activeCategory === 'skills' && (
              <ExperienceGrid
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
              >
                <div style={{
                  display: 'grid',
                  gap: theme.spacing['8'],
                  textAlign: 'center',
                  padding: theme.spacing['8']
                }}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 style={{
                      fontSize: theme.fontSizes['3xl'],
                      marginBottom: theme.spacing['6'],
                      background: 'linear-gradient(135deg, #8B5CF6, #FB923C)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      Expertise Multi-disciplinaire
                    </h3>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: theme.spacing['4'],
                      justifyContent: 'center',
                      maxWidth: '800px',
                      margin: '0 auto'
                    }}>
                      {['Design Systems', 'User Research', 'Prototypage', 'IA & ML',
                        'Product Strategy', 'Design Thinking', 'Figma', 'React',
                        'Analytics', 'A/B Testing', 'Agile', 'Leadership'].map((skill, i) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                          whileHover={{ scale: 1.1, rotate: Math.random() * 10 - 5 }}
                          style={{
                            padding: `${theme.spacing['3']} ${theme.spacing['6']}`,
                            background: `linear-gradient(135deg,
                              rgba(139, 92, 246, ${0.1 + Math.random() * 0.1}),
                              rgba(251, 146, 60, ${0.1 + Math.random() * 0.1}))`,
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '100px',
                            color: theme.colors.white,
                            fontSize: theme.fontSizes.sm,
                            fontWeight: theme.fontWeights.medium,
                            cursor: 'pointer'
                          }}
                        >
                          {skill}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </ExperienceGrid>
            )}
          </TimelineContent>
        </InteractiveTimeline>

        <StatsSection>
          <StatsGrid>
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <StatNumber
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatCard>
            ))}
          </StatsGrid>
        </StatsSection>

        <LanguageSection>
          {portfolioData.languages.map((lang, index) => (
            <LanguageBubble
              key={lang.name}
              data-level={lang.proficiency}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring"
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              {lang.name}
            </LanguageBubble>
          ))}
        </LanguageSection>
      </Container>
    </AboutSection>
  );
};

export default About;