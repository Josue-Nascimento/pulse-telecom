import styled from "styled-components";
import chipPulse from "/Elemento Gráfico Chip Pulse.png";
import telefonePulse from "/Elemento Gráfico Telefone Fixo.png";
export default function ChipTelefone() {
  return (
    <>
      <Section>
        <BackgroundPulse />

        <Content>
          {/* ESQUERDA */}
          <Images>
            <Chip src={chipPulse} alt="Chip Pulse" />
            <Phone src={telefonePulse} alt="Telefone Fixo Pulse" />
          </Images>

          {/* DIREITA */}
          <Text>
            <h2>Tenha uma conexão completa</h2>

            <p>
              Conectividade completa para o seu dia a dia. Oferecemos telefonia fixa com chamadas nítidas e rede móvel 5G com ultravelocidade para você ficar sempre online. A solução ideal para casa, escritório e onde mais você for.
            </p>

            <ActionButton href="#">Soluções para comunicação</ActionButton>
          </Text>
        </Content>
      </Section>
    </>
  );
}

//estilos do titulo tenha uma conexao completa, telefone e chip
const Section = styled.section`
  position: relative;
  overflow: hidden;

  background: linear-gradient(90deg, #0b1a6e 0%, #1f2fbf 50%, #1225c7 100%);
  padding: 6rem 2rem;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
    height: 700px;
    display: flex;
  }
`;


const BackgroundPulse = styled.div`
  position: absolute;
  inset: 0;

  background-image: url("/Elemento Gráfico Pulse.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 180%;
  opacity: 0.8;
  z-index: 1;

  @media (max-width: 768px) {
    background-size: 240%;
    opacity: 0.5;
  }
`;


const Content = styled.div`
  position: relative;
  z-index: 2;

  max-width: 1300px;
  margin: 0 auto;
  width: 100%;

  display: grid;
  grid-template-columns: 1.1fr 1fr;
  align-items: center;
  gap: 4rem;

  @media (max-width: 900px) {
  grid-template-columns: 1fr;
    gap: 0.1rem; /* 👈 bem menor no mobile */
    text-align: center;
  }
`;

/* IMAGENS */
const Images = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

    @media (max-width: 900px) {
    display: none;
  }
`;


const Chip = styled.img`
  width: 450px;
  position: absolute;
  top: -100px;
  transform: rotate(-8deg);

  @media (max-width: 900px) {
    position: static;
    width: 280px;
    transform: none;
    transform: rotate(-8deg);
  }
`;


const Phone = styled.img`
  width: 470px;
  position: relative;
  top: 80px;

  @media (max-width: 900px) {
    width: 320px;
    top: -60px;
  }
`;


/* TEXTO */
const Text = styled.div`
  width: 100%;
  color: #ffffff;

  h2 {
    font-size: 2.8rem;
    margin-bottom: 1.5rem;
font-weight:bold ;
    @media (max-width: 768px) {
      font-size: 2.1rem;
      
    }
  }

  p {
    font-size: 1.05rem;
    line-height: 1.7;
    max-width: 520px;
    margin-bottom: 2.5rem;

    @media (max-width: 900px) {
      max-width: 100%;
      margin: 0 auto 2rem;
      font-size: 1.3rem;
    }
  }
`;


const ActionButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background: #ffffff;
  color: #1f2fbf;
  font-weight: 600;

  padding: 1rem 2.4rem;
  border-radius: 12px;
  text-decoration: none;
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  
  }
    @media (max-width: 900px) {
      max-width: 100%;
      font-size: 1.1rem;
    }
`;
