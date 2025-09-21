import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLinkedin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { theme } from '../../styles/theme';
import Button from '../ui/Button';
import Card from '../ui/Card';
import GlowEffect from '../ui/GlowEffect';
import { portfolioData } from '../../data/portfolio';

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

const ContactGrid = styled.div`
  max-width: 600px;
  margin: 0 auto;
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


const CTASection = styled.div`
  text-align: center;
  margin-top: ${theme.spacing['12']};
  padding: ${theme.spacing['12']};
  background: ${theme.colors.gray900};
  border-radius: ${theme.borderRadius['3xl']};
  position: relative;
  overflow: hidden;
`;

const CTATitle = styled.h3`
  font-size: ${theme.fontSizes['2xl']};
  font-weight: ${theme.fontWeights.semibold};
  margin-bottom: ${theme.spacing['3']};
  color: ${theme.colors.white};
  letter-spacing: -0.02em;
`;

const CTAText = styled.p`
  font-size: ${theme.fontSizes.base};
  color: ${theme.colors.gray400};
  margin-bottom: ${theme.spacing['6']};
  opacity: 0.9;
  line-height: ${theme.lineHeights.relaxed};
`;

const Notification = styled(motion.div)<{ type: 'success' | 'error' }>`
  position: fixed;
  top: ${theme.spacing['8']};
  right: ${theme.spacing['8']};
  padding: ${theme.spacing['4']} ${theme.spacing['6']};
  background: ${props => props.type === 'success'
    ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
    : 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'};
  color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.xl};
  display: flex;
  align-items: center;
  gap: ${theme.spacing['3']};
  z-index: 9999;
  font-weight: ${theme.fontWeights.medium};

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    show: boolean;
    type: 'success' | 'error';
    message: string;
  }>({
    show: false,
    type: 'success',
    message: ''
  });

  // Initialize EmailJS with public key
  React.useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    if (!serviceId || !templateId) {
      console.log('EmailJS not configured. Form data:', formData);
      setNotification({
        show: true,
        type: 'error',
        message: 'Le service email n\'est pas configuré. Contactez-moi via LinkedIn.'
      });
      setTimeout(() => setNotification(prev => ({ ...prev, show: false })), 5000);
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company || 'Non spécifiée',
          budget: formData.budget || 'Non spécifié',
          message: formData.message
        }
      );

      setNotification({
        show: true,
        type: 'success',
        message: 'Message envoyé avec succès ! Je vous répondrai rapidement.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        budget: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setNotification({
        show: true,
        type: 'error',
        message: 'Erreur lors de l\'envoi. Veuillez réessayer ou me contacter via LinkedIn.'
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setNotification(prev => ({ ...prev, show: false })), 5000);
    }
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
            Prête à transformer vos idées en expériences exceptionnelles
          </SectionSubtitle>
        </SectionHeader>

        <ContactGrid>

          <FormContainer
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card variant="default">
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label htmlFor="name">Nom</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Votre nom"
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
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>


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
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
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

      {/* Notification */}
      <AnimatePresence>
        {notification.show && (
          <Notification
            type={notification.type}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
          >
            {notification.type === 'success' ? <FiCheck /> : <FiAlertCircle />}
            {notification.message}
          </Notification>
        )}
      </AnimatePresence>
    </ContactSection>
  );
};

export default Contact;