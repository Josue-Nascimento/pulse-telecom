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
`;

const HighlightGrid = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: end;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;


const HighlightTitle = styled.div`
  h1 {
    font-size: 2.8rem;
    line-height: 1.2;
    font-weight: 700;
    text-align: right;

    span {
      color: #02f711;
      @media (max-width: 480px) {
      font-size: 1.3rem;
      line-height: 1.25;
    }
    }

    @media (max-width: 900px) {
      font-size: 2.2rem;
      text-align: center;
    }

    @media (max-width: 480px) {
      font-size: 1.3rem;
      line-height: 1.5;
    }
  }
`;


const HighlightDescription = styled.div`
  p {
    font-size: 1.5rem;
    line-height: 1.4;
    opacity: 0.95;
    font-weight: 300;

    strong {
      color: #19ff28;
    }

    @media (max-width: 900px) {
      font-size: 1.3rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
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
  font-size: 15px;
  text-decoration: none;
  transition: all 0.25s ease;

  width: 20%;
  height: 50px;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  white-space: nowrap;      /* 🔑 NÃO QUEBRA LINHA */
  overflow: hidden;
  text-overflow: ellipsis;  /* segurança, se faltar espaço */

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 900px) {
    width: 60%;
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 14px;
  }
`;
