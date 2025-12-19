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
    "Bocaina de Minas",
  ];

  return (
    <>
      <CoverageSection id="cobertura">
        <CoverageContent>
          <h2>Nossas Lojas</h2>
          <p>
            Estamos presentes em 6 cidades da região, levando internet de
            qualidade para você.
          </p>
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
  color: linear-gradient(90deg, #0b1a6e, #1f2fbf, #3b4cff);
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

const CityTag = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(90deg, #0b1a6e, #1f2fbf, #3b4cff);
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
  transition: all ${({ theme }) => theme.transitions.fast};
  color: white;
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
  svg {
    color: linear-gradient(90deg, #0b1a6e, #1f2fbf, #3b4cff);
  }
`;
