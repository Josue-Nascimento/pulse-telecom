import styled from "styled-components";

export default function Videos() {
  return (
    <Container>
      <Video
        src="/Vídeo inicial.mp4"
        muted
        autoPlay
        loop
        playsInline
      />

      <Overlay>
        <Text>
          Conectando você <br />
          <span>a mais de 20 anos</span>
        </Text>
      </Overlay>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  touch-action: pan-y;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center; /* desktop padrão */

  @media (max-width: 768px) {
    object-position: 30% center; /* 👈 joga o foco pra esquerda */
  }

  @media (max-width: 480px) {
    object-position: 75% center; /* 👈 ainda mais foco nas pessoas */
  }
`;

/* Camada por cima do vídeo */
const Overlay = styled.div`
  position: absolute;
  inset: 0;

  display: flex;
  align-items: center;
  padding-left: 6rem;

  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.55),
    rgba(0, 0, 0, 0.2),
    transparent
  );

  @media (max-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const Text = styled.h1`
  color: #ffffff;
  font-size: 3.2rem;
  font-weight: bold;
  line-height: 1.2;
  max-width: 520px;

span {
  background: linear-gradient(
    to right,        /* vindo da direita */
    #00ff66 0%,     /* verde do site */
    #00ff66 60%,
    rgba(0, 0, 0, 0.8) 130% /* preto suave */
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  font-weight: bold;
}



  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;
