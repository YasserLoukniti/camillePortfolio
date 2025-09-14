import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiBriefcase, FiAward, FiBook, FiGlobe } from 'react-icons/fi';
import { theme } from '../../styles/theme';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { portfolioData } from '../../data/portfolio';

const AboutSection = styled.section`
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

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${theme.spacing['12']};
  margin-bottom: ${theme.spacing['16']};

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const ProfileSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing['8']};
`;

const ProfileImage = styled(motion.div)`
  width: 300px;
  height: 300px;
  border-radius: ${theme.borderRadius['2xl']};
  background: url(${portfolioData.personal.profileImage}) center/cover;
  position: relative;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    background: ${theme.colors.gradientAI};
    border-radius: ${theme.borderRadius['2xl']};
    z-index: -1;
    opacity: 0.5;
    filter: blur(20px);
  }
`;

const BioText = styled(motion.p)`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.gray300};
  line-height: ${theme.lineHeights.relaxed};
  text-align: center;
`;

const InfoSection = styled.div``;

const TabsContainer = styled.div`
  display: flex;
  gap: ${theme.spacing['2']};
  margin-bottom: ${theme.spacing['8']};
  border-bottom: 1px solid ${theme.colors.gray800};
`;

const Tab = styled.button<{ active: boolean }>`
  padding: ${theme.spacing['3']} ${theme.spacing['6']};
  background: transparent;
  color: ${props => props.active ? theme.colors.violet : theme.colors.gray500};
  border: none;
  border-bottom: 2px solid ${props => props.active ? theme.colors.violet : 'transparent'};
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.medium};
  cursor: pointer;
  transition: all ${theme.transitions.base};

  &:hover {
    color: ${theme.colors.white};
  }
`;

const TabContent = styled(motion.div)`
  min-height: 400px;
`;

const Timeline = styled.div`
  position: relative;
  padding-left: ${theme.spacing['8']};

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${theme.colors.gray800};
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: ${theme.spacing['8']};

  &::before {
    content: '';
    position: absolute;
    left: -33px;
    top: 8px;
    width: 10px;
    height: 10px;
    background: ${theme.colors.violet};
    border-radius: 50%;
    box-shadow: 0 0 0 4px ${theme.colors.blackLight};
  }
`;

const TimelineHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${theme.spacing['2']};
  flex-wrap: wrap;
  gap: ${theme.spacing['2']};
`;

const TimelineTitle = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.white};
`;

const TimelineCompany = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing['2']};
  color: ${theme.colors.gray400};
  font-size: ${theme.fontSizes.base};
  margin-bottom: ${theme.spacing['2']};

  img {
    width: 24px;
    height: 24px;
    border-radius: ${theme.borderRadius.md};
  }
`;

const TimelineDate = styled.span`
  color: ${theme.colors.gray500};
  font-size: ${theme.fontSizes.sm};
`;

const TimelineDescription = styled.p`
  color: ${theme.colors.gray400};
  font-size: ${theme.fontSizes.base};
  line-height: ${theme.lineHeights.relaxed};
  margin-bottom: ${theme.spacing['3']};
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing['2']};
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.spacing['6']};
`;

const StatCard = styled(motion.div)`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: ${theme.fontSizes['4xl']};
  font-weight: ${theme.fontWeights.bold};
  background: ${theme.colors.gradientAI};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${theme.spacing['2']};
`;

const StatLabel = styled.div`
  font-size: ${theme.fontSizes.base};
  color: ${theme.colors.gray400};
`;

const About: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('experience');

  const stats = [
    { number: '5+', label: "Années d'expérience" },
    { number: '20+', label: 'Projets complétés' },
    { number: '15+', label: 'Clients satisfaits' },
    { number: '3', label: 'Certifications' },
  ];

  return (
    <AboutSection id="about">
      <Container>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            À propos de moi
          </SectionTitle>
        </SectionHeader>

        <ContentGrid>
          <ProfileSection>
            <ProfileImage
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
            <BioText
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Passionnée par le design et l'innovation, je crée des expériences
              utilisateur qui allient esthétique et fonctionnalité, avec une
              expertise particulière dans les produits IA.
            </BioText>

            <Card variant="glass">
              <h4 style={{ marginBottom: theme.spacing['4'], color: theme.colors.white }}>
                <FiGlobe style={{ marginRight: theme.spacing['2'] }} />
                Langues
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing['3'] }}>
                {portfolioData.languages.map(lang => (
                  <div key={lang.name} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: theme.colors.gray300 }}>{lang.name}</span>
                    <Badge size="sm" variant="outline">{lang.proficiency}</Badge>
                  </div>
                ))}
              </div>
            </Card>
          </ProfileSection>

          <InfoSection>
            <TabsContainer>
              <Tab
                active={activeTab === 'experience'}
                onClick={() => setActiveTab('experience')}
              >
                <FiBriefcase style={{ marginRight: theme.spacing['2'] }} />
                Expérience
              </Tab>
              <Tab
                active={activeTab === 'education'}
                onClick={() => setActiveTab('education')}
              >
                <FiBook style={{ marginRight: theme.spacing['2'] }} />
                Formation
              </Tab>
              <Tab
                active={activeTab === 'certifications'}
                onClick={() => setActiveTab('certifications')}
              >
                <FiAward style={{ marginRight: theme.spacing['2'] }} />
                Certifications
              </Tab>
            </TabsContainer>

            <TabContent
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'experience' && (
                <Timeline>
                  {portfolioData.experiences.map((exp, index) => (
                    <TimelineItem
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <TimelineHeader>
                        <TimelineTitle>{exp.title}</TimelineTitle>
                        <TimelineDate>{exp.dateRange}</TimelineDate>
                      </TimelineHeader>
                      <TimelineCompany>
                        {exp.logo && <img src={exp.logo} alt={exp.company} />}
                        {exp.company}
                      </TimelineCompany>
                      <TimelineDescription>{exp.description}</TimelineDescription>
                      <SkillTags>
                        {exp.skills.slice(0, 4).map(skill => (
                          <Badge key={skill} size="sm" variant="default">
                            {skill}
                          </Badge>
                        ))}
                      </SkillTags>
                    </TimelineItem>
                  ))}
                </Timeline>
              )}

              {activeTab === 'education' && (
                <Timeline>
                  {portfolioData.education.map((edu, index) => (
                    <TimelineItem
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <TimelineHeader>
                        <TimelineTitle>{edu.degree}</TimelineTitle>
                        <TimelineDate>{edu.dateRange}</TimelineDate>
                      </TimelineHeader>
                      <TimelineCompany>
                        {edu.logo && <img src={edu.logo} alt={edu.school} />}
                        {edu.school}
                      </TimelineCompany>
                      <TimelineDescription>{edu.field}</TimelineDescription>
                    </TimelineItem>
                  ))}
                </Timeline>
              )}

              {activeTab === 'certifications' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing['6'] }}>
                  {portfolioData.certifications.map((cert, index) => (
                    <Card
                      key={index}
                      variant="gradient"
                      hoverable
                    >
                      <h4 style={{ marginBottom: theme.spacing['2'], color: theme.colors.white }}>
                        {cert.name}
                      </h4>
                      <p style={{ color: theme.colors.gray400, marginBottom: theme.spacing['2'] }}>
                        {cert.authority}
                      </p>
                      <Badge size="sm" variant="primary">{cert.issued}</Badge>
                    </Card>
                  ))}
                </div>
              )}
            </TabContent>
          </InfoSection>
        </ContentGrid>

        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsGrid>
      </Container>
    </AboutSection>
  );
};

export default About;