import React from "react";
import styled from "styled-components";
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
      <PageHeader>
        <h1>Sobre a Pulse Telecom</h1>
        <p>
          Conheça nossa história, missão e o compromisso que temos com você.
        </p>
      </PageHeader>

      <AboutSection>
        <Container>
          <AboutContent>
            <AboutText>
              <h2>
                Quem somos <span>nós</span>
              </h2>
              <p>
                A Pulse Telecom nasceu com o propósito de levar internet de
                qualidade para cidades do interior que muitas vezes são
                esquecidas pelas grandes operadoras. Acreditamos que todos
                merecem acesso a uma conexão rápida e estável.
              </p>
              <p>
                Com tecnologia de ponta em fibra óptica, oferecemos planos
                residenciais e corporativos que atendem desde o usuário casual
                até empresas que dependem de conexões dedicadas e de alta
                performance.
              </p>
              <p>
                Nossa equipe é formada por profissionais apaixonados por
                tecnologia e comprometidos em oferecer o melhor atendimento e
                suporte técnico da região.
              </p>
            </AboutText>
            <AboutImage>
              <Clock size={200} strokeWidth={1} />
            </AboutImage>
          </AboutContent>
        </Container>
      </AboutSection>
    </Layout>
  );
};
export default SobreNos;

const PageHeader = styled.section`
  background: linear-gradient(90deg, #0b1a6e, #1f2fbf, #3b4cff);
  color: ${({ theme }) => theme.colors.white};
  padding: 6rem 2rem;
  text-align: center;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 2.25rem;
    }
  }

  p {
    font-size: 1.25rem;
    opacity: 0.9;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const AboutSection = styled.section`
  padding: 5rem 2rem;
  background: ${({ theme }) => theme.colors.white};
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutText = styled.div`
  h2 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1.5rem;

    span {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  p {
    color: ${({ theme }) => theme.colors.textLight};
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }
`;

const AboutImage = styled.div`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.gray[100]},
    ${({ theme }) => theme.colors.gray[200]}
  );
  border-radius: 1.5rem;
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 200px;
    height: 200px;
    color: ${({ theme }) => theme.colors.secondary};
    opacity: 0.8;
  }
`;