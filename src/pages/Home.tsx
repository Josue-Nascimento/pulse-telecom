import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  Wifi,
  Zap,
  Shield,
  Users,
  Building2,
  Home as HomeIcon,
  MapPin,
  ArrowRight,
} from "lucide-react";
import Layout from "../components/layout/Layout";

const Home: React.FC = () => {
  const features = [
    {
      icon: <Zap size={32} />,
      title: "Ultra Velocidade",
      description:
        "Internet de alta velocidade com fibra óptica de última geração.",
    },
    {
      icon: <Shield size={32} />,
      title: "Conexão Estável",
      description:
        "Garantia de estabilidade e baixa latência para suas atividades.",
    },
    {
      icon: <Users size={32} />,
      title: "Suporte 24/7",
      description:
        "Equipe técnica disponível para ajudar quando você precisar.",
    },
  ];

  const cities = [
    "Bananal",
    "Arapeí",
    "Vassouras",
    "São José do Barreiro",
    "Resende",
    "Bocaina de Minas",
  ];

  return (
    <Layout>
      <ImagePulse>
        <img src="imagemBase.png" />
      </ImagePulse>
      <HeroSection>
        <HeroContent>
          <HeroText>
            <h1>A melhor experiência em Wi-Fi ao seu alcance com o Wi-Fi 6</h1>
            <p>
              Experimente uma conexão de alta velocidade com velocidades de até
              <strong> 1 GIGA</strong>. Navegue, jogue e faça downloads com
              estabilidade e desempenho incomparáveis.
            </p>

            <HeroButton
              href="https://pulsetelecom.conecte.ai/?cupom=site"
              target="_blank"
              rel="noopener noreferrer"
            >
              Soluções residenciais <ArrowRight size={18} />
            </HeroButton>
          </HeroText>

          <HeroImages>
            <MainImage>
              <img src="imagemBase.png" alt="Cliente usando internet" />
            </MainImage>

            <FloatingImage>
              <img src="jogando.jpg" alt="Jogos online" />
            </FloatingImage>
          </HeroImages>
        </HeroContent>
      </HeroSection>

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
      <CoverageSection id="cobertura">
        <CoverageContent>
          <h2>Área de Cobertura</h2>
          <p>
            Estamos presentes em 6 cidades da região, levando internet de
            qualidade para você.
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

const ImagePulse = styled.div`
  @media (max-width: 1024px) {
    img {
      width: 500px; /* celular / tablet */
      height: 180px;
    }
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

const PlanIcon = styled.div<{ $variant: "residential" | "corporate" }>`
  width: 80px;
  height: 80px;
  background: ${({ theme, $variant }) =>
    $variant === "residential"
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
const HeroSection = styled.section`
  padding: 5rem 2rem;
  background: ${({ theme }) => theme.colors.white};
`;

const HeroContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroText = styled.div`
  h1 {
    font-size: 3rem;
    margin-bottom: 1.2rem;

    background: linear-gradient(90deg, #0b1a6e, #1f2fbf, #3b4cff);

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    span {
      background: linear-gradient(90deg, #0b1a6e, #1f2fbf, #3b4cff);

      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    @media (max-width: 768px) {
      font-size: 2.2rem;
    }
  }

  p {
    font-size: 1.1rem;

    max-width: 520px;
    margin-bottom: 2rem;

    @media (max-width: 1024px) {
      margin: 0 auto 2rem;
    }
  }
`;

const HeroButton = styled.a`
  display: inline-flex;
  align-items: center; /* eixo vertical */
  justify-content: center; /* eixo horizontal */
  text-align: center;

  gap: 0.5rem;
  width: 42%;
  height: 60px;

  background: linear-gradient(90deg, #0b1a6e, #1f2fbf, #3b4cff);
  color: #ffffff;
  padding: 0.9rem 2.2rem;
  border-radius: 10px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(1.1);
    transform: translateY(-2px);
  }
  /* ===== TABLET ===== */
  @media (max-width: 1024px) {
    width: 70%;
  }

  /* ===== MOBILE ===== */
  @media (max-width: 768px) {
    width: 100%;
    height: 56px;
    font-size: 0.95rem;
  }
`;

const HeroImages = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const MainImage = styled.div`
  img {
    width: 360px;
    height: 360px;
    border-radius: 50%;
    object-fit: cover;

    @media (max-width: 768px) {
      width: 280px;
      height: 280px;
    }
  }
`;

const FloatingImage = styled.div`
  position: absolute;
  bottom: -40px;
  right: -20px;

  img {
    width: 260px;
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.shadows.large};

    @media (max-width: 768px) {
      width: 200px;
      bottom: -20px;
      right: 0;
    }
  }
`;
