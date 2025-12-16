import React, { useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  User,
  MessageCircle,
  Facebook,
  Instagram,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

const navItems = [
  { path: '/sobre', label: 'Sobre nós' },
  { path: '/residencial', label: 'Soluções residenciais' },
  { path: '/corporativo', label: 'Soluções corporativas' },
  { path: 'coverage', label: 'Cobertura', isScroll: true },
];


  const navigate = useNavigate();

  const handleScrollToCoverage = () => {
    setIsOpen(false); // FECHA O MENU

    const scroll = () => {
      const section = document.getElementById("cobertura");
      section?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    if (location.pathname === "/") {
      setTimeout(scroll, 300); // espera menu fechar
    } else {
      navigate("/");
      setTimeout(scroll, 500); // espera navegação + menu
    }
  };

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">
          <img src="/Logo Pulse.png" alt="Pulse Telecom" />
        </Logo>

        <DesktopNav>
          {navItems.map((item) =>
            item.path === "#cobertura" ? (
              <NavItem
                as="button"
                key={item.label}
                onClick={handleScrollToCoverage}
              >
                {item.label}
              </NavItem>
            ) : (
              <NavItem
                key={item.path}
                to={item.path}
                $active={location.pathname === item.path}
              >
                {item.label}
              </NavItem>
            )
          )}
        </DesktopNav>

        <RightGroup>
          <TopActions>
            <ClientArea href="#">
              <User size={14} /> Área do cliente
            </ClientArea>
            <SocialIcon>
              <MessageCircle size={16} />
            </SocialIcon>
            <SocialIcon>
              <Facebook size={16} />
            </SocialIcon>
            <SocialIcon>
              <Instagram size={16} />
            </SocialIcon>
          </TopActions>
          <CTAButton
  href="https://pulsetelecom.conecte.ai/?cupom=site"
  target="_blank"
  rel="noopener noreferrer"
>
  Assine já!
</CTAButton>
        </RightGroup>

        <MobileButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </MobileButton>
      </NavContainer>

     <MobileMenu $open={isOpen}>
  {navItems.map(item =>
    item.isScroll ? (
      <MobileLink
        as="button"
        key={item.label}
        onClick={handleScrollToCoverage}
      >
        {item.label}
      </MobileLink>
    ) : (
      <MobileLink
        key={item.path}
        to={item.path}
        onClick={() => setIsOpen(false)}
      >
        {item.label}
      </MobileLink>
    )
  )}

  <CTAButton
  href="https://pulsetelecom.conecte.ai/?cupom=site"
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

/* =====================
   ESTILOS
===================== */

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
const MobileButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;

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
  display: ${({ $open }) => ($open ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  padding: 2rem 1rem;
`;

const MobileLink = styled(Link)`
  color: #fff;
  font-size: 1.2rem;
  text-decoration: none;

  &:hover {
    color: #00ff66;
  }
`;
