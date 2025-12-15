import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

// 👉 IMPORT DA LOGO

const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        {/* ESQUERDA */}
        <Left>
          <h2>Sobre nós</h2>
          <p>
            Nascemos para levar conectividade de qualidade a todos. Somos uma
            equipe comprometida em oferecer uma experiência positiva, unindo
            tecnologia de ponta a um atendimento ético, transparente e
            profissional.
          </p>
        </Left>

        {/* CENTRO */}
        <Center>
          <Social>
            <img src="/Logo Pulse-Photoroom.png" alt="Logo Pulse" />
            <Icons>
              <a href="#">
                <MessageCircle size={22} />
              </a>
              <a href="#">
                <Instagram size={22} />
              </a>
              <a href="#">
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
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

/* ESQUERDA */
const Left = styled.div`
  h2 {
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.7;
    max-width: 420px;
    color: #e5e7eb;
  }

  @media (max-width: 900px) {
    p {
      margin: 0 auto;
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
  a {
    margin: 10px;
  }
`;

const Social = styled.div`
  display: flex;
  flex-direction: column;

  a {
    color: #ffffff;
    transition: 0.3s;
  }

  a:hover {
    color: #00ff66;
  }
  img {
    width: 350px;
    margin-bottom: 20px;
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
