import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiLinkedin, FiMail, FiGithub, FiArrowUp } from 'react-icons/fi';
import { theme } from '../../styles/theme';
import { portfolioData } from '../../data/portfolio';

const FooterSection = styled.footer`
  padding: ${theme.spacing['16']} 0 ${theme.spacing['8']};
  background: ${theme.colors.blackLight};
  border-top: 1px solid ${theme.colors.gray800};
  position: relative;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${theme.spacing['6']};
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: ${theme.spacing['12']};
  margin-bottom: ${theme.spacing['12']};

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing['8']};
  }
`;

const BrandSection = styled.div``;

const Logo = styled.div`
  font-size: ${theme.fontSizes['3xl']};
  font-weight: ${theme.fontWeights.bold};
  background: ${theme.colors.gradientAI};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${theme.spacing['4']};
`;

const BrandDescription = styled.p`
  color: ${theme.colors.gray400};
  font-size: ${theme.fontSizes.base};
  line-height: ${theme.lineHeights.relaxed};
  max-width: 400px;
  margin-bottom: ${theme.spacing['6']};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing['4']};
`;

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.gray900};
  border: 1px solid ${theme.colors.gray800};
  border-radius: ${theme.borderRadius.lg};
  color: ${theme.colors.gray400};
  transition: all ${theme.transitions.base};

  &:hover {
    background: ${theme.colors.gradientAI};
    border-color: transparent;
    color: ${theme.colors.white};
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.glow};
  }
`;

const FooterColumn = styled.div``;

const ColumnTitle = styled.h4`
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing['4']};
`;

const FooterLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing['3']};
`;

const FooterLink = styled(motion.a)`
  color: ${theme.colors.gray400};
  font-size: ${theme.fontSizes.base};
  transition: all ${theme.transitions.base};
  display: inline-block;

  &:hover {
    color: ${theme.colors.violet};
    transform: translateX(4px);
  }
`;

const FooterBottom = styled.div`
  padding-top: ${theme.spacing['8']};
  border-top: 1px solid ${theme.colors.gray800};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${theme.spacing['4']};
`;

const Copyright = styled.p`
  color: ${theme.colors.gray500};
  font-size: ${theme.fontSizes.sm};
`;

const BackToTop = styled(motion.button)`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.gray900};
  border: 1px solid ${theme.colors.gray800};
  border-radius: ${theme.borderRadius.full};
  color: ${theme.colors.gray400};
  cursor: pointer;
  transition: all ${theme.transitions.base};

  &:hover {
    background: ${theme.colors.gradientAI};
    border-color: transparent;
    color: ${theme.colors.white};
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.glow};
  }
`;

const quickLinks = [
  { name: 'Projets', href: '#projects' },
  { name: 'Compétences', href: '#skills' },
  { name: 'À propos', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  { name: 'Design UI/UX', href: '#' },
  { name: 'Design de produit', href: '#' },
  { name: 'Design AI', href: '#' },
  { name: 'Consultation', href: '#' },
];

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterSection>
      <Container>
        <FooterContent>
          <BrandSection>
            <Logo>CP</Logo>
            <BrandDescription>
              Designer de produits IA passionnée par la création d'expériences
              utilisateur exceptionnelles qui allient innovation et élégance.
            </BrandDescription>
            <SocialLinks>
              <SocialLink
                href={portfolioData.personal.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiLinkedin />
              </SocialLink>
              <SocialLink
                href={`mailto:${portfolioData.personal.email}`}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiMail />
              </SocialLink>
              <SocialLink
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiGithub />
              </SocialLink>
            </SocialLinks>
          </BrandSection>

          <FooterColumn>
            <ColumnTitle>Navigation</ColumnTitle>
            <FooterLinks>
              {quickLinks.map(link => (
                <li key={link.name}>
                  <FooterLink
                    href={link.href}
                    whileHover={{ x: 4 }}
                  >
                    {link.name}
                  </FooterLink>
                </li>
              ))}
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <ColumnTitle>Services</ColumnTitle>
            <FooterLinks>
              {services.map(service => (
                <li key={service.name}>
                  <FooterLink
                    href={service.href}
                    whileHover={{ x: 4 }}
                  >
                    {service.name}
                  </FooterLink>
                </li>
              ))}
            </FooterLinks>
          </FooterColumn>
        </FooterContent>

        <FooterBottom>
          <Copyright>
            © {new Date().getFullYear()} {portfolioData.personal.fullName}. Tous droits réservés.
          </Copyright>
          <BackToTop
            onClick={scrollToTop}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Retour en haut"
          >
            <FiArrowUp />
          </BackToTop>
        </FooterBottom>
      </Container>
    </FooterSection>
  );
};

export default Footer;