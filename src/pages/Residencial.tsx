import React from 'react';
import styled from 'styled-components';
import { Check, Wifi, Tv, Gamepad2, Briefcase, MessageCircle } from 'lucide-react';
import Layout from '../components/layout/Layout';

const PageHeader = styled.section`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.secondary} 0%,
    ${({ theme }) => theme.colors.accent} 100%
  );
  color: ${({ theme }) => theme.colors.white};
  padding: 6rem 2rem;
  text-align: center;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 2.25rem;
    }
  }

  p {
    font-size: 1.25rem;
    opacity: 0.9;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const PlansSection = styled.section`
  padding: 5rem 2rem;
  background: ${({ theme }) => theme.colors.gray[100]};
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 1.125rem;
  }
`;

const PlansGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const PlanCard = styled.div<{ $featured?: boolean }>`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 1.5rem;
  padding: 2.5rem;
  text-align: center;
  transition: all ${({ theme }) => theme.transitions.medium};
  border: 2px solid ${({ theme, $featured }) =>
    $featured ? theme.colors.secondary : 'transparent'};
  position: relative;
  overflow: hidden;

  ${({ $featured, theme }) =>
    $featured &&
    `
    transform: scale(1.05);
    box-shadow: ${theme.shadows.large};

    @media (max-width: ${theme.breakpoints.desktop}) {
      transform: none;
    }
  `}

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`;

const FeaturedBadge = styled.div`
  position: absolute;
  top: 20px;
  right: -35px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.secondary},
    ${({ theme }) => theme.colors.accent}
  );
  color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem 3rem;
  font-size: 0.875rem;
  font-weight: 600;
  transform: rotate(45deg);
`;

const PlanIcon = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.secondary},
    ${({ theme }) => theme.colors.accent}
  );
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;

  svg {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const PlanName = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const PlanSpeed = styled.div`
  font-size: 3rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 0.5rem;

  span {
    font-size: 1.25rem;
    font-weight: 500;
  }
`;

const PlanPrice = styled.div`
  margin-bottom: 1.5rem;

  .price {
    font-size: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};

    span {
      font-size: 1rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.textLight};
    }
  }
`;

const PlanFeatures = styled.ul`
  text-align: left;
  margin-bottom: 2rem;
`;

const PlanFeature = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${({ theme }) => theme.colors.text};
  padding: 0.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};

  svg {
    color: ${({ theme }) => theme.colors.secondary};
    flex-shrink: 0;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const PlanButton = styled.a`
  display: block;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.secondary},
    ${({ theme }) => theme.colors.accent}
  );
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem 2rem;
  border-radius: 2rem;
  font-weight: 600;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const BenefitsSection = styled.section`
  padding: 5rem 2rem;
  background: ${({ theme }) => theme.colors.white};
`;

const BenefitsGrid = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled.div`
  text-align: center;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.gray[100]};
  border-radius: 1rem;
  transition: all ${({ theme }) => theme.transitions.medium};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const BenefitIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.primaryLight}
  );
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;

  svg {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const BenefitTitle = styled.h4`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const BenefitText = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.9rem;
  line-height: 1.6;
`;

const CTASection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.primaryLight}
  );
  color: ${({ theme }) => theme.colors.white};
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    opacity: 0.9;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const WhatsAppButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: #25d366;
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem 2.5rem;
  border-radius: 2rem;
  font-weight: 600;
  font-size: 1.125rem;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`;

const Residencial: React.FC = () => {
  const plans = [
    {
      name: 'Essencial',
      speed: 100,
      price: 79.90,
      features: [
        'Download até 100 Mbps',
        'Upload até 50 Mbps',
        'Wi-Fi 5 incluso',
        'Instalação grátis',
        'Suporte 24/7',
      ],
    },
    {
      name: 'Plus',
      speed: 300,
      price: 99.90,
      featured: true,
      features: [
        'Download até 300 Mbps',
        'Upload até 150 Mbps',
        'Wi-Fi 6 incluso',
        'Instalação grátis',
        'Suporte prioritário',
        'IP Fixo opcional',
      ],
    },
    {
      name: 'Ultra',
      speed: 500,
      price: 149.90,
      features: [
        'Download até 500 Mbps',
        'Upload até 250 Mbps',
        'Wi-Fi 6 premium',
        'Instalação grátis',
        'Suporte VIP',
        'IP Fixo incluso',
      ],
    },
  ];

  const benefits = [
    {
      icon: <Wifi size={28} />,
      title: 'Fibra Óptica',
      text: 'Tecnologia 100% fibra até sua casa',
    },
    {
      icon: <Tv size={28} />,
      title: 'Streaming',
      text: 'Assista filmes e séries sem travamentos',
    },
    {
      icon: <Gamepad2 size={28} />,
      title: 'Games',
      text: 'Baixa latência para jogos online',
    },
    {
      icon: <Briefcase size={28} />,
      title: 'Home Office',
      text: 'Videoconferências sem interrupções',
    },
  ];

  return (
    <Layout>
      <PageHeader>
        <h1>Internet Residencial</h1>
        <p>
          Planos de internet de alta velocidade para sua casa. Navegue, assista
          e trabalhe sem limites.
        </p>
      </PageHeader>

      <PlansSection>
        <Container>
          <SectionTitle>
            <h2>Escolha seu Plano</h2>
            <p>Velocidade e estabilidade para toda a família</p>
          </SectionTitle>
          <PlansGrid>
            {plans.map((plan, index) => (
              <PlanCard key={index} $featured={plan.featured}>
                {plan.featured && <FeaturedBadge>Popular</FeaturedBadge>}
                <PlanIcon>
                  <Wifi size={32} />
                </PlanIcon>
                <PlanName>{plan.name}</PlanName>
                <PlanSpeed>
                  {plan.speed} <span>Mbps</span>
                </PlanSpeed>
                <PlanPrice>
                  <div className="price">
                    R$ {plan.price.toFixed(2).replace('.', ',')}
                    <span>/mês</span>
                  </div>
                </PlanPrice>
                <PlanFeatures>
                  {plan.features.map((feature, i) => (
                    <PlanFeature key={i}>
                      <Check size={18} />
                      {feature}
                    </PlanFeature>
                  ))}
                </PlanFeatures>
                <PlanButton href="#contato">Assinar Agora</PlanButton>
              </PlanCard>
            ))}
          </PlansGrid>
        </Container>
      </PlansSection>

      <BenefitsSection>
        <SectionTitle>
          <h2>Benefícios</h2>
          <p>O que você ganha com a Pulse Telecom</p>
        </SectionTitle>
        <BenefitsGrid>
          {benefits.map((benefit, index) => (
            <BenefitCard key={index}>
              <BenefitIcon>{benefit.icon}</BenefitIcon>
              <BenefitTitle>{benefit.title}</BenefitTitle>
              <BenefitText>{benefit.text}</BenefitText>
            </BenefitCard>
          ))}
        </BenefitsGrid>
      </BenefitsSection>

      <CTASection id="contato">
        <h2>Ficou interessado?</h2>
        <p>
          Entre em contato conosco pelo WhatsApp e contrate seu plano agora mesmo!
        </p>
        <WhatsAppButton
          href="https://wa.me/5524999999999?text=Olá! Gostaria de saber mais sobre os planos residenciais."
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={24} />
          Falar pelo WhatsApp
        </WhatsAppButton>
      </CTASection>
    </Layout>
  );
};

export default Residencial;
