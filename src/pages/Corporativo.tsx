import React from 'react';
import styled from 'styled-components';
import { Check, Building2, Server, Shield, Headphones, Clock, Zap, MessageCircle } from 'lucide-react';
import Layout from '../components/layout/Layout';

const PageHeader = styled.section`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.primaryLight} 100%
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
    max-width: 700px;
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
    grid-template-columns: 1fr;
  }
`;

const PlanCard = styled.div<{ $featured?: boolean }>`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 1.5rem;
  padding: 2.5rem;
  transition: all ${({ theme }) => theme.transitions.medium};
  border: 2px solid ${({ theme, $featured }) =>
    $featured ? theme.colors.primary : 'transparent'};
  position: relative;

  ${({ $featured, theme }) =>
    $featured &&
    `
    box-shadow: ${theme.shadows.large};
  `}

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`;

const FeaturedBadge = styled.div`
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.primaryLight}
  );
  color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
`;

const PlanHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

const PlanIcon = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.primaryLight}
  );
  border-radius: 1rem;
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

const PlanDescription = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
`;

const PlanPrice = styled.div`
  .label {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textLight};
    margin-bottom: 0.25rem;
  }

  .price {
    font-size: 1.75rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
  }

  .consult {
    font-size: 1.25rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const PlanFeatures = styled.ul`
  margin-bottom: 2rem;
`;

const PlanFeature = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: ${({ theme }) => theme.colors.text};
  padding: 0.75rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};

  svg {
    color: ${({ theme }) => theme.colors.secondary};
    flex-shrink: 0;
    margin-top: 2px;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const PlanButton = styled.a`
  display: block;
  text-align: center;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.primaryLight}
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

const DiferenciaisSection = styled.section`
  padding: 5rem 2rem;
  background: ${({ theme }) => theme.colors.white};
`;

const DiferenciaisGrid = styled.div`
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

const DiferencialCard = styled.div`
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

const DiferencialIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.secondary},
    ${({ theme }) => theme.colors.accent}
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

const DiferencialTitle = styled.h4`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const DiferencialText = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.9rem;
  line-height: 1.6;
`;

const CTASection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.secondary},
    ${({ theme }) => theme.colors.accent}
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
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
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

const Corporativo: React.FC = () => {
  const plans = [
    {
      name: 'Business Start',
      icon: <Building2 size={32} />,
      description: 'Ideal para pequenas empresas e escritórios',
      price: 'A partir de R$ 199,90',
      features: [
        'Internet até 300 Mbps',
        'IP Fixo dedicado',
        'Suporte empresarial',
        'SLA de atendimento',
        'Instalação prioritária',
      ],
    },
    {
      name: 'Business Pro',
      icon: <Server size={32} />,
      description: 'Para empresas que precisam de alta performance',
      price: 'A partir de R$ 399,90',
      featured: true,
      features: [
        'Link dedicado até 500 Mbps',
        'IP Fixo + Bloco de IPs',
        'Suporte 24/7 prioritário',
        'SLA garantido 99.5%',
        'Gerenciamento de rede',
        'Backup de link opcional',
      ],
    },
    {
      name: 'Enterprise',
      icon: <Shield size={32} />,
      description: 'Soluções customizadas para grandes empresas',
      isConsult: true,
      features: [
        'Link dedicado personalizado',
        'Infraestrutura sob medida',
        'Suporte VIP dedicado',
        'SLA garantido 99.9%',
        'Gerente de conta exclusivo',
        'Soluções de segurança',
        'Backup redundante',
      ],
    },
  ];

  const diferenciais = [
    {
      icon: <Zap size={28} />,
      title: 'Link Dedicado',
      text: 'Banda garantida sem compartilhamento',
    },
    {
      icon: <Shield size={28} />,
      title: 'SLA Garantido',
      text: 'Acordo de nível de serviço contratual',
    },
    {
      icon: <Headphones size={28} />,
      title: 'Suporte Prioritário',
      text: 'Atendimento técnico especializado',
    },
    {
      icon: <Clock size={28} />,
      title: 'Uptime 99.9%',
      text: 'Máxima disponibilidade de conexão',
    },
  ];

  return (
    <Layout>
      <PageHeader>
        <h1>Soluções Corporativas</h1>
        <p>
          Internet empresarial com link dedicado, suporte prioritário e SLA garantido.
          Soluções sob medida para sua empresa crescer.
        </p>
      </PageHeader>

      <PlansSection>
        <Container>
          <SectionTitle>
            <h2>Planos Empresariais</h2>
            <p>Escolha a solução ideal para o seu negócio</p>
          </SectionTitle>
          <PlansGrid>
            {plans.map((plan, index) => (
              <PlanCard key={index} $featured={plan.featured}>
                {plan.featured && <FeaturedBadge>Mais Popular</FeaturedBadge>}
                <PlanHeader>
                  <PlanIcon>{plan.icon}</PlanIcon>
                  <PlanName>{plan.name}</PlanName>
                  <PlanDescription>{plan.description}</PlanDescription>
                  <PlanPrice>
                    {plan.isConsult ? (
                      <div className="consult">Consulte-nos</div>
                    ) : (
                      <>
                        <div className="label">Investimento</div>
                        <div className="price">{plan.price}</div>
                      </>
                    )}
                  </PlanPrice>
                </PlanHeader>
                <PlanFeatures>
                  {plan.features.map((feature, i) => (
                    <PlanFeature key={i}>
                      <Check size={18} />
                      {feature}
                    </PlanFeature>
                  ))}
                </PlanFeatures>
                <PlanButton href="#contato">Solicitar Proposta</PlanButton>
              </PlanCard>
            ))}
          </PlansGrid>
        </Container>
      </PlansSection>

      <DiferenciaisSection>
        <SectionTitle>
          <h2>Diferenciais Corporativos</h2>
          <p>Por que empresas escolhem a Pulse Telecom</p>
        </SectionTitle>
        <DiferenciaisGrid>
          {diferenciais.map((dif, index) => (
            <DiferencialCard key={index}>
              <DiferencialIcon>{dif.icon}</DiferencialIcon>
              <DiferencialTitle>{dif.title}</DiferencialTitle>
              <DiferencialText>{dif.text}</DiferencialText>
            </DiferencialCard>
          ))}
        </DiferenciaisGrid>
      </DiferenciaisSection>

      <CTASection id="contato">
        <h2>Vamos conversar?</h2>
        <p>
          Nossa equipe comercial está pronta para entender suas necessidades
          e apresentar a melhor solução para sua empresa.
        </p>
        <WhatsAppButton
          href="https://wa.me/5524999999999?text=Olá! Gostaria de saber mais sobre as soluções corporativas."
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={24} />
          Falar com Comercial
        </WhatsAppButton>
      </CTASection>
    </Layout>
  );
};

export default Corporativo;
