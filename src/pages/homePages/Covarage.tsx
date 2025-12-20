import styled from "styled-components";
import { Link } from "react-router-dom";
import { Zap, Shield, Users, MapPin, ArrowRight } from "lucide-react";
export default function CovarageSection() {
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
    "Cachoeira Paulista"
  ];

  return (
    <>
      <CoverageSection id="cobertura">
        <CoverageContent>
          <h2>Nossas Lojas</h2>
          <CitiesGrid>
            {cities.map((city) => (
              <CityTag to="/cobertura" key={city}>
                <MapPin size={18} />
                {city}
              </CityTag>
            ))}
          </CitiesGrid>
        </CoverageContent>
      </CoverageSection>
    </>
  );
}


const CoverageSection = styled.section`
  padding: 5rem 2rem;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const CoverageContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-weight:bold ;
    background: linear-gradient(90deg, #0b1a6e, #1f2fbf, #3b4cff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;


const CitiesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 480px) {
    gap: 0.75rem;
  }
`;


const CityTag = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  background: linear-gradient(90deg, #0b1a6e, #1f2fbf, #3b4cff);
  padding: 0.7rem 1.4rem;
  border-radius: 0.5rem;

  font-size: 0.95rem;
  font-weight: bolder;
  color: #ffffff;
  text-decoration: none;
 display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.25);
  }

  svg {
    color: #ffffff;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 0.6rem 1.2rem;
  }
`;
