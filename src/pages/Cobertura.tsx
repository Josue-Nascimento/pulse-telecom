import React, { useState } from "react";
import styled from "styled-components";
import { MapPin, CheckCircle2, Phone, MessageCircle } from "lucide-react";
import Layout from "../components/layout/Layout";

const Cobertura: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<number | null>(null);

  const cities = [
    {
      name: "Bananal",
      state: "São Paulo",
      address: "Rua Manoel de Aguiar, 181, Centro, Bananal - SP",
    },
    {
      name: "Arapeí",
      state: "São Paulo",
      address: "Avenida Sebastião Angelo da Costa, 435 - Centro - Arapeí/SP",
    },
    {
      name: "Vassouras",
      state: "Rio de Janeiro",
      address: "Praça Martinho Nóbrega, 10, loja 7 - Centro, Vassouras - RJ",
    },
    {
      name: "São José do Barreiro",
      state: "São Paulo",
      address:
        "Rua Doutor Olimpio Alves Magalhães, 07, Centro, São José do Barreiro - SP",
    },
    {
      name: "Resende",
      state: "Rio de Janeiro",
      address: "Avenida Perimetral Norte, 1012, Nova Alegria, Resende - RJ",
    },
    {
      name: "Cachoeira Paulista",
      state: "São Paulo",
      address: "Av. Sarah Kubitschek, 37, Cachoeira Paulista - SP, 12630-000",
    },
  ];

  return (
    <Layout>
      <CitiesSection>
        <Container>
          <SectionTitle>
            <h2>Cidades Atendidas</h2>
            <p>Estamos presentes em 6 cidades da região</p>
          </SectionTitle>
          <CitiesGrid>
            {cities.map((city, index) => (
              <CityCard
                key={index}
                onClick={() =>
                  setSelectedCity(selectedCity === index ? null : index)
                }
              >
                <CityIcon>
                  <MapPin size={36} />
                </CityIcon>

                <CityName>{city.name}</CityName>
                <CityState>{city.state}</CityState>

                {selectedCity === index && (
                  <CityAddress>{city.address}</CityAddress>
                )}
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
              lista, entre em contato conosco. Podemos avaliar a viabilidade de
              levar nossos serviços até você.
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

  align-items: start; /* 🔥 ESSENCIAL */

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;


const CityCard = styled.div<{ $active: boolean }>`
  background: ${({ $active }) => ($active ? "#1f2fbf" : "#0b1a6e")};
  border-radius: 1.25rem;
  padding: 2.5rem;
  text-align: center;
  cursor: pointer;

  transition: all 0.35s ease;

  &:hover {
    background: #1f2fbf;
    transform: translateY(-4px);
  }
`;

const CityIcon = styled.div<{ $active: boolean }>`
  width: 70px;
  height: 70px;
  margin: 0 auto 1.25rem;

  border-radius: 50%;
  background: ${({ $active }) => ($active ? "#00ff66" : "#ffffff")};

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${({ $active }) => ($active ? "#0b1a6e" : "#1f2fbf")};
  }

  transition: all 0.3s ease;
`;

const CityName = styled.h3`
  font-size: 1.4rem;
  color: #ffffff;
  margin-bottom: 0.25rem;
`;

const CityState = styled.p`
  color: #c7d2fe;
  margin-bottom: 1rem;
`;

const CityStatus = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;

  background: rgba(255, 255, 255, 0.15);
  color: #ffffff;

  padding: 0.45rem 1rem;
  border-radius: 1rem;
  font-size: 0.85rem;
`;

const CityAddress = styled.p`
  margin-top: 0.5rem;
  font-size: 0.95rem;
  line-height: 1.5;
  color: #e0e7ff;
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
