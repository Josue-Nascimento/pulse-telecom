import styled from "styled-components";

export default function ChamarWhatsApp() {
  return (
    <>
      <HighlightWrapper>
        <HighlightGrid>
          <HighlightTitle>
            <h1>
              Descubra o poder <br />
              de uma conexão perfeita <br />
              <span>e transforme o seu jeito</span> <br />
              <span>de aproveitar a internet.</span>
            </h1>
          </HighlightTitle>

          <HighlightDescription>
            <p>
              Escolha a <strong>Pulse</strong> e tenha uma experiência
              incomparável de internet e entretenimento. Junte-se a milhares de
              clientes satisfeitos que confiam em nossa infraestrutura de última
              geração.
            </p>
          </HighlightDescription>
        </HighlightGrid>

        <HighlightAction>
          <HighlightButton
            href="https://api.whatsapp.com/send?phone=551231165043"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chamar no WhatsApp agora
          </HighlightButton>
        </HighlightAction>
      </HighlightWrapper>
    </>
  );
}

const HighlightWrapper = styled.section`
  width: 95%;
  padding: 4.5rem 2rem;
  border-radius: 32px;
  background: linear-gradient(135deg, #0b1a6e, #2d2df5);
  color: #ffffff;
  @media (max-width: 1024px) {
    height: 900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 480px) {
    height: 700px;
    padding: 2rem 1rem;
  }
`;

const HighlightGrid = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: end; /* 🖥 PC OK */

  /* 📱 TABLET + MOBILE */
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1.4rem;
    align-items: flex-start; /* 🔥 sobe o conteúdo */
    text-align: center;
  }
`;

const HighlightTitle = styled.div`
  width: 100%;
  margin-bottom: 0.8rem; /* 🔥 separação bonita */

  h1 {
    font-size: 2.8rem;
    line-height: 1.2;
    font-weight: 700;
    text-align: right;

    span {
      color: #02f711;
    }

    /* 📱 TABLET */
    @media (max-width: 900px) {
      font-size: 3.3rem;
      text-align: center;
      max-width: 100%;
      word-break: normal;
      overflow-wrap: break-word;
    }

    /* 📱 MOBILE */
    @media (max-width: 480px) {
      font-size: 1.6rem;
      line-height: 1.25;
  
      white-space: normal;
      word-break: keep-all;
  
      /* 🔥 REMOVE SOMENTE O PRIMEIRO <br> */
      br:first-of-type {
        display: none;
      }
    }
  }
`;

const HighlightDescription = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  p {
    font-size: 1.5rem; /* 🖥 PC INALTERADO */
    line-height: 1.4;
    opacity: 0.95;
    font-weight: 300;

    strong {
      color: #19ff28;
    }

    /* 📱 TABLET */
    @media (max-width: 1024px) {
      font-size: 2.3rem;
    }

    /* 📱 MOBILE */
    @media (max-width: 480px) {
      font-size: 1.3rem;
      line-height: 1.6;
    
    }
  }
`;

const HighlightAction = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
`;

const HighlightButton = styled.a`
  background: #ffffff;
  color: #2241ef;
  padding: 0.5rem 2.4rem;
  border-radius: 10px;
  font-weight: 700;
  font-size: 15px; /* 🖥 PC INALTERADO */
  text-decoration: none;
  transition: all 0.25s ease;

  width: 20%; /* 🖥 PC INALTERADO */
  height: 50px; /* 🖥 PC INALTERADO */

  display: inline-flex;
  justify-content: center;
  align-items: center;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.25);
  }

  /* 📱 TABLET */
   @media (max-width: 1024px) {
    width: 80%;
    height: 80px;
    font-size: 2rem;
    order: 2;
  }

  /* 📱 MOBILE */
  @media (max-width: 480px) {
    width: 100%;
    height: 58px;
    font-size: 1.1rem;
  }
`;
