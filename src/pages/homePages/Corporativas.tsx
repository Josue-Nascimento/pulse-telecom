import styled from "styled-components";
import { Building2, ArrowRight } from "lucide-react";

export default function SolucoesCorporativas() {
  return (
    <>
      <PlansSection>
        <SectionTitle>
          <h2>Explore nossas opções de conectividade empresarial</h2>
          <p>
            Descubra como nossos planos de internet podem impulssionar sua
            empresa para um futuro digital
          </p>
        </SectionTitle>
        <PlansGrid>
          <HeroButtonSide
            href="https://pulsetelecom.conecte.ai/?cupom=site"
            target="_blank"
            rel="noopener noreferrer"
          >
            Soluções corporativas
            <span className="arrow">
              <ArrowRight size={18} />
            </span>
          </HeroButtonSide>
          <VideoWrapper>
            <video
              src="Soluções Corporativas.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </VideoWrapper>
        </PlansGrid>
      </PlansSection>
    </>
  );
}
const PlansSection = styled.section.attrs({
  id: "solucoes-corporativas",
})`
  scroll-margin-top: 130px; /* desktop INALTERADO */
  padding: 5rem 2rem;
  background: ${({ theme }) => theme.colors.gray[100]};
`;

const PlansGrid = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 3rem;

  /* TABLET + MOBILE */
@media (max-width: 1024px) {
  min-height: auto;
  padding-bottom: 2rem; /* controla o espaço sem quebrar layout */
  flex-direction: column;
  text-align: center;
}

`;
const SectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 3rem;

  /* ===== DESKTOP ===== */
  h2 {
    font-size: 2.9rem; /* 🖥 desktop (INALTERADO) */
    font-weight: bold;
    background: linear-gradient(90deg, #0b1a6e, #1f2fbf, #3b4cff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
  }

  p {
    font-weight: 500;
    font-size: 18px; /* 🖥 desktop (INALTERADO) */
    text-align: center;
    white-space: nowrap;
    display: block;
  }

  /* ===== TABLET REAL ===== */
  @media (min-width: 769px) and (max-width: 1024px) {
    h2 {
      font-size: 3rem;
    }

    p {
      white-space: normal;
      font-size: 2.3rem;
    }
  }

  /* ===== MOBILE ===== */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 20px;

    h2 {
      font-size: 2rem;
      line-height: 1.1;
    }

    p {
      font-size: 1.3rem;
      line-height: 1.4;
      width: 100%;
      white-space: normal;
    }
  }
`;


const HeroButtonSide = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;

  width: 30%; /* 🖥 desktop INALTERADO */
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

  /* 📱 Tablet */
  @media (max-width: 1024px) {
    width: 80%;
    height: 80px;
    font-size: 2rem;
    order: 2;
     .arrow {
      display: none;
    }
  }

  /* 📱 Mobile */
  @media (max-width: 768px) {
    width: 100%;
    height: 58px;
    font-size: 1.1rem;

    .arrow {
      display: none;
    }
  }
`;

const VideoWrapper = styled.div`
  width: 100%;
  max-width: 520px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  /* 📱 Tablet */
  @media (max-width: 1024px) {
    width: 85%;
  }

  /* 📱 Mobile */
  @media (max-width: 600px) {
    width: 95%;
    border-radius: 14px;
  }

  video {
    width: 100%;
    height: auto;
    display: block;
  }
`;
