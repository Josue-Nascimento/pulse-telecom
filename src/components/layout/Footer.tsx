import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import {
  Phone,
  Facebook,
  Instagram,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Footer: React.FC = () => {
  const location = useLocation();

  const isSobreNosPage = location.pathname === "/sobre";


  return (
    <Container>
      <Content>
        {/* ESQUERDA */}
  <Left>
  {!isSobreNosPage && (
    <>
      <h2>Sobre nós</h2>
      <p>
        Nascemos para levar conectividade de qualidade a todos. Somos uma
        equipe comprometida em oferecer uma experiência positiva, unindo
        tecnologia de ponta a um atendimento ético, transparente e
        profissional.
      </p>
      <br />
    </>
  )}

  <h3>Contrato de prestação de serviços</h3>
  <p className="cnpj">
    PULSE GESTÃO DE DADOS LTDA 07.054.431/0001-80
  </p>
</Left>



        {/* CENTRO */}
        <Center>
          <Social>
            <img src="/Logo Pulse.png" alt="Logo Pulse" />
            <Icons>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://api.whatsapp.com/send?phone=551231165043"
              >
                <FaWhatsapp size={24} />
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/pulse_telecom_/"
              >
                <Instagram size={22} />
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/pulsetelecom.sp"
              >
                <Facebook size={22} />
              </a>
            </Icons>
          </Social>
        </Center>

        {/* DIREITA */}
        <Right>
          <h2>Nossos contatos</h2>

          <Contact>
            <Phone size={20} />
            <span>(12) 3003 - 5640</span>
          </Contact>

          <Contact>
            <span>(12) 3116 - 5043</span>
          </Contact>
        </Right>
      </Content>
    </Container>
  );
};

/* ================== STYLES ================== */

const Container = styled.section`
  background: linear-gradient(90deg, #0b1a6e 0%, #1f2fbf 50%, #1225c7 100%);
  padding: 4rem 2rem;
  color: #ffffff;
`;

const Content = styled.div`
  max-width: 100%px;
  margin: 0 auto;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 3rem;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`;

/* ESQUERDA */
const Left = styled.div`
  h2 {
    font-size: 50px;
    margin-bottom: 1rem;
    font-weight: bolder;
  }

  p {
    line-height: 1.5;
    max-width: 340px;
    color: #e5e7eb;
    font-weight: 500;
  }
  p.cnpj {
    margin-top: 5px;
    font-size: 10px;
  }
@media (max-width: 900px) {
  p:first-of-type {
    margin: 0 auto;
 
      text-align: justify;
     
      max-width: 90%; 
    }
  }
`;

/* CENTRO */
const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Social = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* 👈 CENTRALIZA TUDO */
  justify-content: center;
  gap: 1rem;

  a {
    color: #ffffff;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #00ff66;
  }

  img {
    width: 400px;
    max-width: 100%;
    margin-bottom: 0.5rem;

    @media (max-width: 900px) {
      width: 280px;
    }

    @media (max-width: 480px) {
      width: 220px;
    }
  }
`;


/* DIREITA */
const Right = styled.div`
  text-align: right;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 900px) {
    text-align: center;
  }
`;

const Contact = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.6rem;
  margin-bottom: 0.8rem;
  font-size: 1.1rem;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export default Footer;
