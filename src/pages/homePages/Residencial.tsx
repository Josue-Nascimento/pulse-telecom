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
              Experimente a velocidade incomparável de até <strong>1 GIGA</strong>  com a nossa rede Wi-Fi 6. Navegue, transmita e jogue online de forma mais rápida e eficiente. Tenha a melhor internet do mercado ao seu alcance.
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
  scroll-margin-top: 120px;
 @media (max-width: 1024px) {
  height: 900px;
  display: flex;
  align-items: center;
  }
  @media (max-width: 768px) {
    height: 700px;
    }
`;

const HeroContent = styled.div`
max-width:90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  gap: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;


const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
   max-width: 100%;
  /* NÃO mexemos no desktop */

  h1 {
 
    font-size: 3rem;
    margin-bottom: 1.2rem;
    font-weight: bold;

    background: linear-gradient(90deg, #0b1a6e, #1f2fbf, #3b4cff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    /* TABLET */
    @media (min-width: 769px) and (max-width: 1024px) {
      font-size: 3rem;
      max-width: 90%;
      text-align: center;
    }

    /* MOBILE */
    @media (max-width: 768px) {
      font-size: 38px;
      line-height: 1.1;
      max-width: 96%;
      text-align: center;
    }
  }

  && p {
    font-size: 1.5rem;
    max-width: 100%;
    margin-bottom: 2rem;

    /* TABLET */
    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 2.3rem;
      max-width: 80%;
      text-align: center;
    }

    /* MOBILE */
    @media (max-width: 767px) {
      height: 200px;
      font-size: 1.1rem;
      max-width: 100%;
      text-align: center;
    }
  }
`;



const HeroButton = styled.a`
 display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;

  width: 50%; /* 🖥 desktop INALTERADO */
  height: 80px; /* 🖥 desktop INALTERADO */

  background: linear-gradient(90deg, #0b1a6e, #1f2fbf, #3b4cff);
  color: #ffffff;
  font-size: 20px; /* 🖥 desktop INALTERADO */
  font-weight: 600;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(1.1);
    transform: translateY(-2px);
  }

  /* ===== TABLET ===== */
  @media (max-width: 1024px) {
    width: 80%;
    font-size: 2rem;
    height: 80px;
    svg {
      display: none; /* 🔥 some a seta */
    }
  }
  
  @media (max-width: 768px) {
    width: 100%;
    height: 58px;
    font-size: 1.1rem;

    svg {
      display: none; /* 🔥 some a seta */
    }
  }
  /* ===== MOBILE ===== */
`;


const HeroImages = styled.div`
  position: relative;
  width: 420px;
  height: 420px;

  @media (max-width: 1024px) {
    margin: 0 auto;
    display: none;
  }

  @media (max-width: 768px) {
    width: 350px;
    height: 300px;
    display: none;
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
    @media (max-width: 1024px) {
    display: none;
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

