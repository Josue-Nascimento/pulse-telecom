import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Wifi, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.backgroundDark};
  color: ${({ theme }) => theme.colors.white};
  padding: 4rem 2rem 2rem;
`;

const FooterContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;

  svg {
    color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: center;
  }
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.gray[400]};
  line-height: 1.8;
`;

const FooterLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.gray[400]};
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${({ theme }) => theme.colors.gray[400]};
  margin-bottom: 1rem;

  svg {
    color: ${({ theme }) => theme.colors.secondary};
    flex-shrink: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: center;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.white};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-3px);
  }
`;

const FooterBottom = styled.div`
  max-width: 1280px;
  margin: 3rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[700]};
  text-align: center;
  color: ${({ theme }) => theme.colors.gray[500]};
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <Logo>
            <Wifi size={28} />
            Pulse Telecom
          </Logo>
          <Description>
            Conectando você ao futuro com internet de alta velocidade e qualidade.
            Sua melhor escolha em telecomunicações.
          </Description>
          <SocialLinks>
            <SocialIcon href="#" aria-label="Facebook">
              <Facebook size={20} />
            </SocialIcon>
            <SocialIcon href="#" aria-label="Instagram">
              <Instagram size={20} />
            </SocialIcon>
            <SocialIcon href="#" aria-label="LinkedIn">
              <Linkedin size={20} />
            </SocialIcon>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <h3>Links Rápidos</h3>
          <FooterLinks>
            <li><FooterLink to="/">Home</FooterLink></li>
            <li><FooterLink to="/sobre">Sobre Nós</FooterLink></li>
            <li><FooterLink to="/residencial">Residencial</FooterLink></li>
            <li><FooterLink to="/corporativo">Corporativo</FooterLink></li>
            <li><FooterLink to="/cobertura">Cobertura</FooterLink></li>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <h3>Nossos Planos</h3>
          <FooterLinks>
            <li><FooterLink to="/residencial">Internet Residencial</FooterLink></li>
            <li><FooterLink to="/corporativo">Internet Corporativa</FooterLink></li>
            <li><FooterLink to="/corporativo">Link Dedicado</FooterLink></li>
            <li><FooterLink to="/corporativo">Soluções Empresariais</FooterLink></li>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <h3>Contato</h3>
          <ContactItem>
            <Phone size={18} />
            <span>(24) 9999-9999</span>
          </ContactItem>
          <ContactItem>
            <Mail size={18} />
            <span>contato@pulsetelecom.com.br</span>
          </ContactItem>
          <ContactItem>
            <MapPin size={18} />
            <span>Atendemos em 6 cidades da região</span>
          </ContactItem>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <p>&copy; {new Date().getFullYear()} Pulse Telecom. Todos os direitos reservados.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
