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
      extraSpace: true,
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
      extraSpace: true,
    },
    {
      name: "Valença",
      state: "Minas Gerais",
      address: "Av. Sarah Kubitschek, 37, Cachoeira Paulista - SP, 12630-000",
    },
    {
      name: "Visconde de Mauá",
      state: "Rio de Janeiro",
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
                  <CityAddress $extra={city.extraSpace}>
                    {city.address}
                  </CityAddress>
                )}
              </CityCard>
            ))}
          </CitiesGrid>
        </Container>
      </CitiesSection>
      <CTASection>
        <h2>Quer saber se atendemos sua região?</h2>
        <p>
          Entre em contato conosco e descubra se podemos levar internet de
          qualidade até você!
        </p>
        <CTAButtons>
          <PrimaryButton
            href="https://api.whatsapp.com/send?phone=551231165043&text=Olá%21%20Gostaria%20de%20saber%20se%20voc%C3%AAs%20atendem%20minha%20regi%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </PrimaryButton>
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
    font-weight: bold;
    background: linear-gradient(90deg, #0b1a6e, #1f2fbf, #3b4cff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 1.125rem;
  }
`;

const CitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 colunas */
  gap: 2rem;
  align-items: start;

  /* tablet */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); /* 2 colunas */
  }

  /* mobile */
  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* 1 coluna */
  }
`;

const CityCard = styled.div<{ $active: boolean }>`
  position: relative;
  background: ${({ $active }) => ($active ? "#1f2fbf" : "#0b1a6e")};
  border-radius: 1.25rem;
  padding: 2.5rem;
  text-align: center;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
  overflow: visible; /* IMPORTANTE */
  min-height: 275px;
  &:hover {
    background: #1f2fbf;
    transform: translateY(-4px);
  }
`;

const CityAddress = styled.div`
  position: absolute;
  left: 1rem;
top: ${({ $extra }) => ($extra ? "13.6rem" : "12.6rem")};
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(8px);
  border-radius: 0.75rem;
  width: 90%;
  font-size: 0.7rem;
  line-height: 1.4;
  color: #ffffff;
  padding: 10px;
  animation: fadeUp 0.3s ease;
  z-index: 5;

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
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

const CTASection = styled.section`
  padding: 5rem 2rem;
  background: ${({ theme }) => theme.colors.gray[100]};
  text-align: center;

  h2 {
    font-size: 2.4rem;
    margin-bottom: 1rem;
    font-weight: bold;
    background: linear-gradient(90deg, #0b1a6e, #1f2fbf, #3b4cff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.15rem;
    opacity: 0.9;
    margin-bottom: 2.5rem;
    max-width: 620px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const CTAButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  flex-wrap: wrap;
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;

  background: #0dff00; /* verde Pulse */
  color: #0b1a6e; /* azul escuro para contraste */

  padding: 0.9rem 2.2rem;
  border-radius: 2rem;
  font-weight: 600;
  font-size: 1rem;

  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 22px rgba(0, 255, 102, 0.35);
  }
`;

export default Cobertura;
