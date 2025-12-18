import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Videos from "./homePages/Videos";
import Covarage from "./homePages/Covarage";
import SolucoesCorporativas from "./homePages/Corporativas";
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
import bgPulse from "/Elemento Gráfico Pulse.png";
import chipPulse from "/Elemento Gráfico Chip Pulse.png";
import telefonePulse from "/Elemento Gráfico Telefone Fixo.png";

const Home: React.FC = () => {
  return (
    <Layout>
      <ImagePulse>
        <Videos />
      </ImagePulse>
      <HeroSection>
        <HeroContent>
          <HeroText>
            <h1>A melhor experiência ao seu alcance com o Wi-Fi 6</h1>
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
      <Section>
        <BackgroundPulse />

        <Content>
          {/* ESQUERDA */}
          <Images>
            <Chip src={chipPulse} alt="Chip Pulse" />
            <Phone src={telefonePulse} alt="Telefone Fixo Pulse" />
          </Images>

          {/* DIREITA */}
          <Text>
            <h2>Tenha uma conexão completa</h2>

            <p>
              Em casa ou no escritório, desfrute da clareza e estabilidade da
              nossa Telefonia Fixa Inteligente, com chamadas de voz em alta
              definição. Na rua, leve a ultravelocidade no bolso com nossa rede
              Móvel 5G, que garante navegação, streaming e downloads
              instantâneos onde você estiver. Fixo ou móvel, a mesma excelência.
              Esteja sempre à frente com a tecnologia que une todos os seus
              mundos.
            </p>

            <ActionButton href="#">Soluções para comunicação</ActionButton>
          </Text>
        </Content>
      </Section>

      <SolucoesCorporativas />
      <Covarage />
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

//estilos do titulo tenha uma conexao completa, telefone e chip
const Section = styled.section`
  position: relative;
  overflow: hidden;

  background: linear-gradient(90deg, #0b1a6e 0%, #1f2fbf 50%, #1225c7 100%);

  padding: 6rem 2rem;
`;

const BackgroundPulse = styled.div`
  position: absolute;
  inset: 0;

  background-image: url("/Elemento Gráfico Pulse.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 180%;

  opacity: 0.8;
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1300px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1.1fr;
  align-items: center;
  gap: 4rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

/* IMAGENS */
const Images = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const Chip = styled.img`
  width: 450px;
  position: absolute;
  top: -100px;
  transform: rotate(-8deg);

  @media (max-width: 900px) {
    position: static;
    margin-bottom: 1.5rem;
  }
`;

const Phone = styled.img`
  width: 470px;
  position: relative;
  top: 80px;
`;

/* TEXTO */
const Text = styled.div`
  width: 100%;
  color: #ffffff;

  h2 {
    font-size: 2.8rem;
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
      font-size: 2.2rem;
    }
  }

  p {
    font-size: 1.05rem;
    line-height: 1.7;
    max-width: 520px;
    margin-bottom: 2.5rem;

    @media (max-width: 900px) {
      margin: 0 auto 2.5rem;
    }
  }
`;

const ActionButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background: #ffffff;
  color: #1f2fbf;
  font-weight: 600;

  padding: 1rem 2.4rem;
  border-radius: 2rem;
  text-decoration: none;
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
`;
//============================================================
