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
const SectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: 2.9rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 1.8rem;

    }
    
  }

  p {
    display: inline-block;
    font-weight: 500;
    font-size: 12px;
    text-align: center;
    display: flex;
    justify-content: center;
    white-space: nowrap;

    @media (max-width: 1024px) {
      white-space: normal; /* 🔥 deixa quebrar */
    }
  }
`;
const PlansSection = styled.section.attrs({
  id: "solucoes-corporativas",
})`
  scroll-margin-top: 130px; /* altura navbar + respiro */
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

  /* MOBILE */
  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
`;


const HeroButtonSide = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;

  width: 30%;
  height: 80px;

  background: linear-gradient(90deg, #0b1a6e, #1f2fbf, #3b4cff);
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(1.1);
    transform: translateY(-2px);
  }

  /* TABLET */
  @media (max-width: 1024px) {
    width: 70%;
    order: 2; /* 🔥 botão fica abaixo do vídeo */
  }

  /* MOBILE */
  @media (max-width: 768px) {
    width: 100%;
    height: 56px;
    font-size: 1rem;

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

  /* MOBILE → vídeo em cima */
  @media (max-width: 1024px) {
    order: 1;
  }

  video {
    width: 100%;
    height: auto;
    display: block;
  }
`;

