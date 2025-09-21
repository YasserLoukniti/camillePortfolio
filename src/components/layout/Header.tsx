import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { theme } from '../../styles/theme';
import Button from '../ui/Button';

const HeaderContainer = styled(motion.header)<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${theme.zIndex.sticky};
  transition: all ${theme.transitions.base};

  ${props => props.scrolled && css`
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid ${theme.colors.gray800};
  `}
`;

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: ${theme.spacing['4']} 0;
  max-width: 1280px;
  margin: 0 auto;
  padding-left: ${theme.spacing['6']};
  padding-right: ${theme.spacing['6']};
`;

const Logo = styled(motion.a)`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.black};
  background: ${theme.colors.gradientAI};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
  transition: all ${theme.transitions.base};

  &:hover {
    transform: scale(1.05);
  }
`;

const NavLinks = styled.ul`
  display: none;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing['8']};

  @media (min-width: ${theme.breakpoints.md}) {
    display: flex;
  }
`;

const NavLink = styled(motion.a)`
  color: ${theme.colors.gray300};
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.medium};
  transition: all ${theme.transitions.base};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${theme.colors.gradientAI};
    transition: width ${theme.transitions.base};
  }

  &:hover {
    color: ${theme.colors.white};

    &::after {
      width: 100%;
    }
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${theme.spacing['4']};
`;

const DesktopButton = styled(Button)`
  display: none;

  @media (min-width: ${theme.breakpoints.md}) {
    display: inline-flex;
  }
`;

const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: ${theme.colors.white};
  background: ${theme.colors.gray800};
  border-radius: ${theme.borderRadius.lg};
  transition: all ${theme.transitions.base};

  @media (min-width: ${theme.breakpoints.md}) {
    display: none;
  }

  &:hover {
    background: ${theme.colors.gray700};
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 80%;
  max-width: 400px;
  background: ${theme.colors.blackLight};
  backdrop-filter: blur(20px);
  border-left: 1px solid ${theme.colors.gray800};
  z-index: ${theme.zIndex.modal};
  padding: ${theme.spacing['6']};
`;

const MobileNavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing['6']};
  margin-top: ${theme.spacing['16']};
`;

const MobileNavLink = styled(motion.a)`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.semibold};
  transition: all ${theme.transitions.base};

  &:hover {
    color: ${theme.colors.violet};
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: ${theme.zIndex.modal - 1};
`;

const navItems = [
  { name: 'Projets', href: '#projects' },
  { name: 'Compétences', href: '#skills' },
  { name: 'À propos', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <HeaderContainer
        scrolled={scrolled}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Nav>
          <Logo
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            CP
          </Logo>

          <NavLinks>
            {navItems.map((item, index) => (
              <li key={item.name}>
                <NavLink
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </NavLinks>

          <NavRight>
            <DesktopButton
              variant="primary"
              size="sm"
              href="#contact"
              style={{ cursor: 'pointer' }}
            >
              Discutons
            </DesktopButton>

            <MobileMenuButton
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </MobileMenuButton>
          </NavRight>
        </Nav>
      </HeaderContainer>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <Overlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <MobileMenu
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
            >
              <MobileNavLinks>
                {navItems.map((item, index) => (
                  <li key={item.name}>
                    <MobileNavLink
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.name}
                    </MobileNavLink>
                  </li>
                ))}
              </MobileNavLinks>
              <Button
                variant="primary"
                fullWidth
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                style={{ marginTop: theme.spacing['8'] }}
              >
                Discutons de votre projet
              </Button>
            </MobileMenu>
          </>
        )}
      </AnimatePresence>

    </>
  );
};

export default Header;