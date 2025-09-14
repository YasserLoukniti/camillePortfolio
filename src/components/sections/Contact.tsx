import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiSend, FiMapPin } from 'react-icons/fi';
import { theme } from '../../styles/theme';
import Button from '../ui/Button';
import Card from '../ui/Card';
import GlowEffect from '../ui/GlowEffect';
import { portfolioData } from '../../data/portfolio';

const pulseAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
`;

const ContactSection = styled.section`
  padding: ${theme.spacing['32']} 0;
  background: ${theme.colors.black};
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing['12']};
  align-items: start;

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled(motion.div)``;

const InfoCard = styled(Card)`
  margin-bottom: ${theme.spacing['8']};
`;

const InfoTitle = styled.h3`
  font-size: ${theme.fontSizes['2xl']};
  font-weight: ${theme.fontWeights.semibold};
  margin-bottom: ${theme.spacing['6']};
  color: ${theme.colors.white};
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing['4']};
  padding: ${theme.spacing['4']} 0;
  color: ${theme.colors.gray300};
  transition: all ${theme.transitions.base};
  cursor: pointer;

  &:hover {
    color: ${theme.colors.violet};
    transform: translateX(4px);

    svg {
      color: ${theme.colors.violet};
      transform: rotate(10deg);
    }
  }

  svg {
    font-size: 1.5rem;
    color: ${theme.colors.gray500};
    transition: all ${theme.transitions.base};
  }
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing['1']};
`;

const InfoLabel = styled.span`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.gray500};
`;

const InfoValue = styled.span`
  font-size: ${theme.fontSizes.base};
`;

const FormContainer = styled(motion.div)``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing['6']};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing['2']};
`;

const Label = styled.label`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.gray400};
  font-weight: ${theme.fontWeights.medium};
`;

const Input = styled.input`
  padding: ${theme.spacing['3']} ${theme.spacing['4']};
  background: ${theme.colors.gray900};
  border: 1px solid ${theme.colors.gray800};
  border-radius: ${theme.borderRadius.lg};
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.base};
  transition: all ${theme.transitions.base};

  &:focus {
    border-color: ${theme.colors.violet};
    box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.1);
  }

  &::placeholder {
    color: ${theme.colors.gray600};
  }
`;

const TextArea = styled.textarea`
  padding: ${theme.spacing['3']} ${theme.spacing['4']};
  background: ${theme.colors.gray900};
  border: 1px solid ${theme.colors.gray800};
  border-radius: ${theme.borderRadius.lg};
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.base};
  min-height: 150px;
  resize: vertical;
  transition: all ${theme.transitions.base};

  &:focus {
    border-color: ${theme.colors.violet};
    box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.1);
  }

  &::placeholder {
    color: ${theme.colors.gray600};
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing['6']};

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const AvailabilityBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing['2']};
  padding: ${theme.spacing['2']} ${theme.spacing['4']};
  background: rgba(52, 211, 153, 0.1);
  border: 1px solid rgba(52, 211, 153, 0.3);
  border-radius: ${theme.borderRadius.full};
  color: ${theme.colors.success};
  font-size: ${theme.fontSizes.sm};
  margin-bottom: ${theme.spacing['6']};

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background: ${theme.colors.success};
    border-radius: 50%;
    animation: ${pulseAnimation} 2s ease-in-out infinite;
  }
`;

const CTASection = styled.div`
  text-align: center;
  margin-top: ${theme.spacing['16']};
  padding: ${theme.spacing['16']};
  background: ${theme.colors.gray900};
  border-radius: ${theme.borderRadius['3xl']};
  position: relative;
  overflow: hidden;
`;

const CTATitle = styled.h3`
  font-size: ${theme.fontSizes['3xl']};
  font-weight: ${theme.fontWeights.bold};
  margin-bottom: ${theme.spacing['4']};
  color: ${theme.colors.white};
`;

const CTAText = styled.p`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.gray400};
  margin-bottom: ${theme.spacing['8']};
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <ContactSection id="contact">
      <Container>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Travaillons ensemble
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Prête à transformer vos idées en expériences utilisateur exceptionnelles
          </SectionSubtitle>
        </SectionHeader>

        <ContactGrid>
          <ContactInfo
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <AvailabilityBadge
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Disponible pour de nouveaux projets
            </AvailabilityBadge>

            <InfoCard variant="gradient" glowOnHover>
              <InfoTitle>Contactez-moi</InfoTitle>

              <InfoItem>
                <FiMail />
                <InfoText>
                  <InfoLabel>Email</InfoLabel>
                  <InfoValue>{portfolioData.personal.email}</InfoValue>
                </InfoText>
              </InfoItem>

              <InfoItem>
                <FiLinkedin />
                <InfoText>
                  <InfoLabel>LinkedIn</InfoLabel>
                  <InfoValue>@camille-perles</InfoValue>
                </InfoText>
              </InfoItem>

              <InfoItem>
                <FiMapPin />
                <InfoText>
                  <InfoLabel>Localisation</InfoLabel>
                  <InfoValue>{portfolioData.personal.location}</InfoValue>
                </InfoText>
              </InfoItem>
            </InfoCard>

            <Card variant="glass">
              <h4 style={{ marginBottom: theme.spacing['4'], color: theme.colors.white }}>
                Réponse sous 24h
              </h4>
              <p style={{ color: theme.colors.gray400 }}>
                Je m'engage à répondre rapidement à toutes les demandes sérieuses
                de collaboration sur des projets innovants.
              </p>
            </Card>
          </ContactInfo>

          <FormContainer
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card variant="default">
              <Form onSubmit={handleSubmit}>
                <FormRow>
                  <FormGroup>
                    <Label htmlFor="name">Nom complet</Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                </FormRow>

                <FormRow>
                  <FormGroup>
                    <Label htmlFor="company">Entreprise</Label>
                    <Input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Startup AI"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="budget">Budget estimé</Label>
                    <Input
                      type="text"
                      id="budget"
                      name="budget"
                      placeholder="5k - 10k €"
                      value={formData.budget}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </FormRow>

                <FormGroup>
                  <Label htmlFor="message">Message</Label>
                  <TextArea
                    id="message"
                    name="message"
                    placeholder="Parlez-moi de votre projet..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  icon={<FiSend />}
                >
                  Envoyer le message
                </Button>
              </Form>
            </Card>
          </FormContainer>
        </ContactGrid>

        <CTASection>
          <GlowEffect color="gradient" size="lg" intensity="high" />
          <CTATitle>Prêt à créer quelque chose d'exceptionnel ?</CTATitle>
          <CTAText>
            Discutons de la façon dont je peux aider votre entreprise à se démarquer
          </CTAText>
          <Button
            variant="primary"
            size="lg"
            href={portfolioData.personal.linkedIn}
            icon={<FiLinkedin />}
          >
            Connectons-nous sur LinkedIn
          </Button>
        </CTASection>
      </Container>
    </ContactSection>
  );
};

export default Contact;