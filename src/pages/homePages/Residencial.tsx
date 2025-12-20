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
              Experimente uma conexão de alta velocidade com velocidades de até{" "}
              <strong> 1 GIGA</strong> com inteligência artificial. Navegue,
              transmita e faça downloads com uma velocidade incomparável,
              permitindo que você realize todas as suas atividades online de
              forma rápida e eficiente. Esteja um passo à frente com a melhor
              internet do mercado.
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
              <video src="/Home Office.mp4" autoPlay muted loop playsInline />
            </MainImage>

            <FloatingImage>
              <video src=" /Videogame.mp4" autoPlay muted loop playsInline />
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
font-weight:bold ;
    background: linear-gradient(90deg, #0b1a6e, #1f2fbf, #3b4cff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 768px) {
      font-size: 2.1rem;
      line-height: 1.2;
    }
  }

  p {
    font-size: 1.1rem;
    max-width: 520px;
    margin-bottom: 2rem;

    @media (max-width: 1024px) {
      margin: 0 auto 2rem;
      font-size: 1rem;
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
  width: 420px;
  height: 420px;

  @media (max-width: 1024px) {
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;


const MainImage = styled.div`
  position: relative;
  z-index: 3;
  left: 130px;
  video {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    margin-left: 40px;

    @media (max-width: 768px) {
      width: 200px;
      height: 200px;
    }
  }
   @media (max-width: 768px) {
         left: 28%;
    }
`;

const FloatingImage = styled.div`
  position: absolute;
  bottom: -50px;
  left: 40px;
  z-index: 2;

  video {
    width: 250px;
    height: 220px;
    object-fit: cover;
    border-radius: 1rem;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35);
  }

  @media (max-width: 768px) {
    left: 23%;
    bottom: 10%;
    transform: translateX(-50%);

    video {
      width: 180px;
      height: 120px;
    }
  }
`;

