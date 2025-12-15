import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Wifi, Zap, Shield, Users, Building2, Home as HomeIcon, MapPin, ArrowRight } from 'lucide-react';
import Layout from '../components/layout/Layout';



const Home: React.FC = () => {
  const features = [
    {
      icon: <Zap size={32} />,
      title: 'Ultra Velocidade',
      description: 'Internet de alta velocidade com fibra óptica de última geração.',
    },
    {
      icon: <Shield size={32} />,
      title: 'Conexão Estável',
      description: 'Garantia de estabilidade e baixa latência para suas atividades.',
    },
    {
      icon: <Users size={32} />,
      title: 'Suporte 24/7',
      description: 'Equipe técnica disponível para ajudar quando você precisar.',
    },
  ];

  const cities = [
    'Bananal',
    'Arapeí',
    'Vassouras',
    'São José do Barreiro',
    'Resende',
    'Bocaina de Minas',
  ];

  return (
    <Layout>
    <img src='imagemBase.png'/>

      <FeaturesSection>
        <SectionTitle>
          <h2>Por que escolher a Pulse Telecom?</h2>
          <p>
            Oferecemos a melhor experiência em conectividade para sua casa ou empresa.
          </p>
        </SectionTitle>
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureText>{feature.description}</FeatureText>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </FeaturesSection>

      <PlansSection>
        <SectionTitle>
          <h2>Nossas Soluções</h2>
          <p>Escolha o plano ideal para suas necessidades.</p>
        </SectionTitle>
        <PlansGrid>
          <PlanCard to="/residencial">
            <PlanIcon $variant="residential">
              <HomeIcon size={40} />
            </PlanIcon>
            <PlanTitle>Internet Residencial</PlanTitle>
            <PlanDescription>
              Planos de internet para sua casa com velocidades de até 500 Mbps.
              Streaming, jogos e trabalho remoto sem interrupções.
            </PlanDescription>
            <PlanCTA>
              Conhecer planos <ArrowRight size={18} />
            </PlanCTA>
          </PlanCard>

          <PlanCard to="/corporativo">
            <PlanIcon $variant="corporate">
              <Building2 size={40} />
            </PlanIcon>
            <PlanTitle>Internet Corporativa</PlanTitle>
            <PlanDescription>
              Soluções empresariais com link dedicado e suporte prioritário.
              Ideal para empresas de todos os tamanhos.
            </PlanDescription>
            <PlanCTA>
              Conhecer soluções <ArrowRight size={18} />
            </PlanCTA>
          </PlanCard>
        </PlansGrid>
      </PlansSection>

      <CoverageSection>
        <CoverageContent>
          <h2>Área de Cobertura</h2>
          <p>
            Estamos presentes em 6 cidades da região, levando internet de qualidade
            para você.
          </p>
          <CitiesGrid>
            {cities.map((city) => (
              <CityTag key={city}>
                <MapPin size={18} />
                {city}
              </CityTag>
            ))}
          </CitiesGrid>
          <PrimaryButton to="/cobertura">
            Ver cobertura completa <ArrowRight size={18} />
          </PrimaryButton>
        </CoverageContent>
      </CoverageSection>
    </Layout>
  );
};

export default Home;
const HeroSection = styled.section`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.primaryLight} 50%,
    ${({ theme }) => theme.colors.secondary} 100%
  );
  color: ${({ theme }) => theme.colors.white};
  padding: 6rem 2rem 8rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
`;

const HeroContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroText = styled.div`
  h1 {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    line-height: 1.1;

    span {
      color: ${({ theme }) => theme.colors.secondaryLight};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.25rem;
    opacity: 0.9;
    margin-bottom: 2rem;
    line-height: 1.8;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  padding: 1rem 2rem;
  border-radius: 2rem;
  font-weight: 600;
  font-size: 1rem;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem 2rem;
  border-radius: 2rem;
  font-weight: 600;
  font-size: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.white};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const HeroImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 300px;
    height: 300px;
    opacity: 0.9;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const FeaturesSection = styled.section`
  padding: 5rem 2rem;
  background: ${({ theme }) => theme.colors.white};
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 2rem;
    }
  }

  p {
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 1.125rem;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const FeaturesGrid = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background: ${({ theme }) => theme.colors.gray[100]};
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  transition: all ${({ theme }) => theme.transitions.medium};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const FeatureIcon = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;

  svg {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.75rem;
`;

const FeatureText = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.7;
`;

const PlansSection = styled.section`
  padding: 5rem 2rem;
  background: ${({ theme }) => theme.colors.gray[100]};
`;

const PlansGrid = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const PlanCard = styled(Link)`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 1.5rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all ${({ theme }) => theme.transitions.medium};
  border: 2px solid transparent;

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`;

const PlanIcon = styled.div<{ $variant: 'residential' | 'corporate' }>`
  width: 80px;
  height: 80px;
  background: ${({ theme, $variant }) =>
    $variant === 'residential'
      ? `linear-gradient(135deg, ${theme.colors.secondary}, ${theme.colors.accent})`
      : `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.primaryLight})`};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;

  svg {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const PlanTitle = styled.h3`
  font-size: 1.75rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const PlanDescription = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 1.5rem;
  line-height: 1.7;
`;

const PlanCTA = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 600;

  svg {
    transition: transform ${({ theme }) => theme.transitions.fast};
  }

  &:hover svg {
    transform: translateX(5px);
  }
`;

const CoverageSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.primaryLight}
  );
  color: ${({ theme }) => theme.colors.white};
`;

const CoverageContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.125rem;
    opacity: 0.9;
    margin-bottom: 3rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const CitiesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const CityTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.15);
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  font-weight: 500;
  backdrop-filter: blur(10px);

  svg {
    color: ${({ theme }) => theme.colors.secondaryLight};
  }
`;