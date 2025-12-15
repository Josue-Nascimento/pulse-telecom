import React from 'react';
import styled from 'styled-components';
import { MapPin, CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import Layout from '../components/layout/Layout';



const Cobertura: React.FC = () => {
  const cities = [
    { name: 'Bananal', state: 'São Paulo', status: 'Cobertura Total' },
    { name: 'Arapeí', state: 'São Paulo', status: 'Cobertura Total' },
    { name: 'Vassouras', state: 'Rio de Janeiro', status: 'Cobertura Total' },
    { name: 'São José do Barreiro', state: 'São Paulo', status: 'Cobertura Total' },
    { name: 'Resende', state: 'Rio de Janeiro', status: 'Cobertura Parcial' },
    { name: 'Bocaina de Minas', state: 'Minas Gerais', status: 'Cobertura Total' },
  ];

  return (
    <Layout>
      <PageHeader>
        <h1>Área de Cobertura</h1>
        <p>
          Confira as cidades onde a Pulse Telecom está presente com internet de
          alta velocidade.
        </p>
      </PageHeader>

      <CitiesSection>
        <Container>
          <SectionTitle>
            <h2>Cidades Atendidas</h2>
            <p>Estamos presentes em 6 cidades da região</p>
          </SectionTitle>
          <CitiesGrid>
            {cities.map((city, index) => (
              <CityCard key={index}>
                <CityIcon>
                  <MapPin size={36} />
                </CityIcon>
                <CityName>{city.name}</CityName>
                <CityState>{city.state}</CityState>
                <CityStatus>
                  <CheckCircle2 size={16} />
                  {city.status}
                </CityStatus>
              </CityCard>
            ))}
          </CitiesGrid>
        </Container>
      </CitiesSection>

      <InfoSection>
        <InfoContent>
          <InfoText>
            <h2>
              Não encontrou sua <span>cidade</span>?
            </h2>
            <p>
              Estamos em constante expansão! Se sua cidade ainda não está na
              lista, entre em contato conosco. Podemos avaliar a viabilidade
              de levar nossos serviços até você.
            </p>
            <InfoList>
              <InfoItem>
                <CheckCircle2 size={20} />
                Análise de viabilidade técnica gratuita
              </InfoItem>
              <InfoItem>
                <CheckCircle2 size={20} />
                Planejamento de expansão contínuo
              </InfoItem>
              <InfoItem>
                <CheckCircle2 size={20} />
                Lista de espera para novas regiões
              </InfoItem>
              <InfoItem>
                <CheckCircle2 size={20} />
                Atendimento personalizado
              </InfoItem>
            </InfoList>
          </InfoText>
          <InfoImage>
            <MapPin size={250} strokeWidth={1} />
          </InfoImage>
        </InfoContent>
      </InfoSection>

      <CTASection>
        <h2>Quer saber se atendemos sua região?</h2>
        <p>
          Entre em contato conosco e descubra se podemos levar internet de
          qualidade até você!
        </p>
        <CTAButtons>
          <PrimaryButton
            href="https://wa.me/5524999999999?text=Olá! Gostaria de saber se vocês atendem minha região."
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={20} />
            WhatsApp
          </PrimaryButton>
          <SecondaryButton href="tel:+552499999999">
            <Phone size={20} />
            Ligar Agora
          </SecondaryButton>
        </CTAButtons>
      </CTASection>
    </Layout>
  );
};
const PageHeader = styled.section`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.secondary} 100%
  );
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

const CitiesSection = styled.section`
  padding: 5rem 2rem;
  background: ${({ theme }) => theme.colors.gray[100]};
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 1.125rem;
  }
`;

const CitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const CityCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 1.5rem;
  padding: 2.5rem;
  text-align: center;
  transition: all ${({ theme }) => theme.transitions.medium};
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`;

const CityIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.secondary},
    ${({ theme }) => theme.colors.accent}
  );
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;

  svg {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const CityName = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const CityState = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 1rem;
`;

const CityStatus = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.colors.accent}20;
  color: ${({ theme }) => theme.colors.accent};
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-weight: 500;
  font-size: 0.875rem;

  svg {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const InfoSection = styled.section`
  padding: 5rem 2rem;
  background: ${({ theme }) => theme.colors.white};
`;

const InfoContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const InfoText = styled.div`
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

const InfoList = styled.ul`
  margin-bottom: 2rem;
`;

const InfoItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${({ theme }) => theme.colors.text};
  padding: 0.75rem 0;

  svg {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const InfoImage = styled.div`
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
    width: 250px;
    height: 250px;
    color: ${({ theme }) => theme.colors.secondary};
    opacity: 0.7;
  }
`;

const CTASection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.primaryLight}
  );
  color: ${({ theme }) => theme.colors.white};
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    opacity: 0.9;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const CTAButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: #25d366;
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem 2rem;
  border-radius: 2rem;
  font-weight: 600;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem 2rem;
  border-radius: 2rem;
  font-weight: 600;
  border: 2px solid ${({ theme }) => theme.colors.white};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default Cobertura;
