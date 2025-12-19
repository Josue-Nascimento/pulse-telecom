import styled from "styled-components";
import { ArrowRight } from "lucide-react";
export default function Residencial() {
  

  return (
    <>
      <HeroSection id="residencial">
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
    </>
  );
}

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
