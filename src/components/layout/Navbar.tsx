import React, { useState } from "react";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  User,
  MessageCircle,
  Facebook,
  Instagram,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate(); // 👈 PRIMEIRO OS HOOKS

  /* =====================
     FUNÇÕES
  ===================== */

  const handleScrollToResidencial = () => {
    setIsOpen(false);

    const scroll = () => {
      const section = document.getElementById("residencial");
      section?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    if (location.pathname === "/") {
      setTimeout(scroll, 300);
    } else {
      navigate("/");
      setTimeout(scroll, 600);
    }
  };

  const handleScrollToCorporativo = () => {
    setIsOpen(false);
    navigate("/#solucoes-corporativas");
  };

  const handleScrollToCoverage = () => {
    setIsOpen(false);

    const scroll = () => {
      const section = document.getElementById("cobertura");
      section?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    if (location.pathname === "/") {
      setTimeout(scroll, 300);
    } else {
      navigate("/");
      setTimeout(scroll, 500);
    }
  };

  /* =====================
     ITENS DO MENU MOBILE
  ===================== */

  const navItems = [
    { label: "Sobre nós", action: () => navigate("/sobre") },
    { label: "Soluções residenciais", action: handleScrollToResidencial },
    { label: "Soluções corporativas", action: handleScrollToCorporativo },
    { label: "Cobertura", action: handleScrollToCoverage },
  ];
  return (
    <Nav>
      <NavContainer>
        <Logo to="/">
          <img src="/Logo Pulse.png" alt="Pulse Telecom" />
        </Logo>

        <DesktopNav>
          <NavItem to="/sobre" $active={location.pathname === "/sobre"}>
            Sobre nós
          </NavItem>

          <NavItemButton onClick={handleScrollToResidencial}>
            Soluções residenciais
          </NavItemButton>

          {/* 👇 AQUI É O IMPORTANTE */}
          <NavItemButton onClick={handleScrollToCorporativo}>
            Soluções corporativas
          </NavItemButton>

          <NavItem to="/cobertura" $active={location.pathname === "/cobertura"}>
            Cobertura
          </NavItem>
        </DesktopNav>

        <RightGroup>
          <TopActions>
            <ClientArea
              target="_blank"
              rel="noopener noreferrer"
              href=" https://erp.brasil-ip.net/central_assinante_web/login"
            >
              <User size={14} /> Área do cliente
            </ClientArea>
            <SocialIcon
              target="_blank"
              rel="noopener noreferrer"
              href="https://api.whatsapp.com/send?phone=551231165043"
            >
              <FaWhatsapp size={18} />
            </SocialIcon>
            <SocialIcon
              target="_blank"
              rel="noopener noreferrer"
              href=" https://www.facebook.com/pulsetelecom.sp"
            >
              <Facebook size={16} />
            </SocialIcon>
            <SocialIcon
              target="_blank"
              rel="noopener noreferrer"
              href=" https://www.instagram.com/pulse_telecom_/"
            >
              <Instagram size={16} />
            </SocialIcon>
          </TopActions>
          <CTAButton
            href=" https://pulsetelecom.conecte.ai/?cupom=site-novo-2026"
            target="_blank"
            rel="noopener noreferrer"
          >
            Assine já!
          </CTAButton>
        </RightGroup>

        <MobileButton onClick={() => setIsOpen(!isOpen)} $open={isOpen}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </MobileButton>
      </NavContainer>

      <MobileMenu $open={isOpen}>
        {navItems.map((item) => (
          <MobileButtonLink
            key={item.label}
            onClick={() => {
              setIsOpen(false);
              item.action();
            }}
          >
            {item.label}
          </MobileButtonLink>
          
        ))}
        <MobileClientArea
              target="_blank"
              rel="noopener noreferrer"
              href=" https://erp.brasil-ip.net/central_assinante_web/login"
            >
            Área do cliente
            </MobileClientArea>
         <CTAButton
            href=" https://pulsetelecom.conecte.ai/?cupom=site-novo-2026"
            target="_blank"
            rel="noopener noreferrer"
          >
            Assine já!
          </CTAButton>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;
const MobileButtonLink = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    color: #00ff66;
  }
`;

/* =====================
   ESTILOS
===================== */
const NavItemButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  color: #fff;
  font-size: 18px;
  font-weight: 500;

  &:hover {
    color: #00ff66;
  }
`;

const Nav = styled.nav`
  background: linear-gradient(90deg, #0b1a6e, #1f2fbf, #3b4cff);
  height: 110px;
  display: flex;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

const NavContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  img {
    width: 180px;
  }
`;

/* ===== DESKTOP ===== */
const DesktopNav = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 1024px) {
    display: none;
    
  }
`;

const NavItem = styled(Link)<{ $active?: boolean }>`
  color: ${({ $active }) => ($active ? "#00ff66" : "#fff")};
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;

  &:hover {
    color: #00ff66;
  }
`;

/* ===== AÇÕES DIREITA ===== */
const RightGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.4rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const TopActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  color: #fff;
  font-size: 0.85rem;
`;
const MobileClientArea = styled.a`
   background: none;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
`;


const ClientArea = styled.a`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: #fff;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialIcon = styled.a`
  color: #fff;
  display: flex;
`;

const CTAButton = styled.a`
  background: linear-gradient(
    to right,
    #00ff3b 0%,
    #00ff3b 70%,
    rgba(0, 0, 0, 0.25) 150%
  );

  color: #ffffff;
  font-weight: 700;
  padding: 0.6rem 1.4rem;
  border-radius: 0.7rem;
  text-decoration: none;
  width: 200px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    filter: brightness(0.95);
  }

  @media (max-width: 1024px) {
    margin-top: 1rem;
  }
`;

/* ===== MOBILE ===== */
const MobileButton = styled.button<{ $open?: boolean }>`
  display: none;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;

  transition: transform 0.4s ease;

  transform: rotate(${({ $open }) => ($open ? "90deg" : "0deg")});

  @media (max-width: 1024px) {
    display: block;
  }
`;

const MobileMenu = styled.div<{ $open: boolean }>`
  position: absolute;
  top: 110px;
  left: 0;
  right: 0;

  background: linear-gradient(180deg, #0b1a6e, #1f2fbf);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  padding: 2rem 1rem;

  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transform: ${({ $open }) => ($open ? "translateY(0)" : "translateY(-20px)")};

  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};

  transition: all 0.4s ease;
`;
