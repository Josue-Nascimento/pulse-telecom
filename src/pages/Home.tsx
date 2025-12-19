import React from "react";
import styled from "styled-components";
import Videos from "./homePages/Videos";
import Covarage from "./homePages/Covarage";
import SolucoesCorporativas from "./homePages/Corporativas";
import ChamarWhatsApp from "./homePages/WhatsApp";
import Layout from "../components/layout/Layout";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Residencial from "./homePages/Residencial";
import ChipTelefone from "./homePages/ChipTelefone";
const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);

      element?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [location]);
  return (
    <Layout>
      <ImagePulse>
        <Videos />
      </ImagePulse>
      <Residencial />
      <ChipTelefone />
      <Centralizar>
        <SolucoesCorporativas />
        <ChamarWhatsApp />
        <Covarage />
      </Centralizar>
    </Layout>
  );
};

export default Home;
const Centralizar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImagePulse = styled.div`
  @media (max-width: 1024px) {
    img {
      width: 500px; /* celular / tablet */
      height: 180px;
    }
  }
`;


