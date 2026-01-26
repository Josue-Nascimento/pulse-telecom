import React from "react";
import styled from "styled-components";
import MulherCelular from "../assets/pages/mulher-celular.png";

import {
  Target,
  Eye,
  Heart,
  Award,
  Users,
  Zap,
  Shield,
  Clock,
} from "lucide-react";
import Layout from "../components/layout/Layout";

const SobreNos: React.FC = () => {
  const values = [
    {
      icon: <Target size={36} />,
      title: "Missão",
      text: "Conectar pessoas e empresas com a melhor tecnologia em telecomunicações, proporcionando experiências excepcionais de conectividade.",
      color: "linear-gradient(135deg, #1a365d, #2c5282)",
    },
    {
      icon: <Eye size={36} />,
      title: "Visão",
      text: "Ser referência regional em soluções de internet e telecomunicações, reconhecida pela qualidade, inovação e compromisso com nossos clientes.",
      color: "linear-gradient(135deg, #38b2ac, #48bb78)",
    },
    {
      icon: <Heart size={36} />,
      title: "Valores",
      text: "Compromisso com a excelência, transparência em nossas relações, inovação constante e respeito aos nossos clientes e colaboradores.",
      color: "linear-gradient(135deg, #805ad5, #d53f8c)",
    },
  ];

  const diferenciais = [
    {
      icon: <Award size={28} />,
      title: "Qualidade Premium",
      text: "Equipamentos de ponta e infraestrutura moderna",
    },
    {
      icon: <Users size={28} />,
      title: "Atendimento Humano",
      text: "Equipe local pronta para atender você",
    },
    {
      icon: <Zap size={28} />,
      title: "Instalação Rápida",
      text: "Ativação em até 48 horas úteis",
    },
    {
      icon: <Shield size={28} />,
      title: "Sem Fidelidade",
      text: "Liberdade para você ficar porque quer",
    },
  ];

  return (
    <Layout>
      <AboutSection>
        <Container>
          <AboutContent>
            <AboutText>
              <h2>
                Quem somos <span>nós ?</span>
              </h2>

              <FirstParagraph>
                <AboutImage>
                  <img
                    src="/PulseLogoNatal.jpg"
                    alt="Imagem institucional Pulse Telecom"
                  />
                </AboutImage>
                <p>
                  Nascemos para levar conectividade de qualidade a todos. Somos
                  uma equipe comprometida em oferecer uma experiência positiva,
                  unindo tecnologia de ponta a um atendimento ético,
                  transparente e profissional. Buscamos ser a referência em
                  telecom na sua região, garantindo um serviço de excelência,
                  com preço justo e o respeito que você merece em cada conexão.
                </p>
              </FirstParagraph>

              <HighlightParagraph>
                Unimos tecnologia de ponta, infraestrutura moderna e soluções
                inovadoras a um atendimento ético, transparente e humano, sempre
                focado nas reais necessidades de nossos clientes. Trabalhamos
                diariamente para garantir desempenho, segurança e
                confiabilidade, porque entendemos que estar conectado é estar
                presente no mundo. Nosso compromisso vai além da instalação,
                buscamos construir relações duradouras, baseadas na confiança,
                no respeito e na excelência. É assim que transformamos
                tecnologia em qualidade de vida e conexão em resultados reais
              </HighlightParagraph>
              <ThirdParagraph>
                <p>
                  Nosso compromisso vai além da instalação: buscamos construir
                  relações duradouras, baseadas na confiança, no respeito e na
                  excelência. É assim que transformamos tecnologia em qualidade
                  de vida e conexão em resultados reais.
                </p>
                <AboutImage>
 <img
  src="/mulher-celular.PNG"
  alt="Mulher usando celular"
/>


                </AboutImage>
              </ThirdParagraph>
            </AboutText>
          </AboutContent>
        </Container>
      </AboutSection>
    </Layout>
  );
};
export default SobreNos;

const AboutSection = styled.section`

  padding: 5rem 2rem;
  background: ${({ theme }) => theme.colors.white};
`;

const Container = styled.div`
width: 100%;
  margin: 0 auto;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutText = styled.div`
  h2 {
    font-size: 2.8rem;
    text-align: center; /* 👈 centraliza */
    background: linear-gradient(90deg, #0b1a6e, #1f2fbf, #3b4cff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 2rem;
    font-weight: bold;
  }

  p {
    color: #0b1a6e;

    margin-bottom: 1rem;
    font-size: 1.1rem;
    padding: 0.5rem 1rem;
    border-radius: 0.8rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    h2 {
      font-size: 2.2rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    h2 {
      font-size: 2rem;
    }
  }
`;
const HighlightParagraph = styled.p`
  && {
    font-size: 20px;
    flex: 1;
    margin: 0;
    background: linear-gradient(90deg, #0b1a6e, #1f2fbf, #3b4cff);
    color: #fff;
    @media (max-width: 480px) {
  font-size: 1.3rem;

  text-align: center;   /* ← TROQUE justify por left */
  line-height: 1.7;

  word-spacing: normal;
  letter-spacing: normal;
}
  }
`;

const ThirdParagraph = styled.div`
  display: flex;
  align-items: center; /* 👈 topo */
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1.5rem;

  p {
    font-size: 20px;
    flex: 1;
    margin: 0;
    
@media (max-width: 480px) {
  font-size: 1.3rem;

   text-align: center;   /* ← TROQUE justify por left */
  line-height: 1.7;

  word-spacing: normal;
  letter-spacing: normal;
}
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    
  }
`;
const FirstParagraph = styled.div`
  display: flex;
  align-items: center; /* 👈 topo */
  justify-content: center;
  gap: 2rem;

p {
  font-size: 20px;
  flex: 1;
  margin: 0;
  line-height: 1.6;

@media (max-width: 480px) {
  font-size: 1.3rem;

  text-align: center;  /* ← TROQUE justify por left */
  line-height: 1.7;

  word-spacing: normal;
  letter-spacing: normal;
}
}



  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const AboutImage = styled.div`
  width: 250px; /* controla o tamanho */
  flex-shrink: 0; /* impede de esmagar */
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 2rem;
    object-fit: contain;
    margin: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 230px;
    display: none;
  }
`;
