import styled from 'styled-components';
import { CheckCircle, Users, Award, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../components/Container.style.jsx';
import {
    HeroSection,
    Section,
    SectionTitle,
    GradientText,
    CardElevated,
    FadeInUp,
    IconBox,
    ButtonPrimary,
    ButtonWhite,
} from '../components/UI.style.jsx';

const programs = [
    {
        id: 1,
        title: 'Oficina - Introdução a Arduino',
        description: 'Oficinas voltadas ao ensino de circuitos básicos com Arduino e programação em C++.',
        duration: '01h30',
        format: 'Presencial',
        modules: ['Fundamentos STEAM', 'Robótica Educacional', 'Circuitos Elétricos', 'Programação', 'Metodologia Ativa', 'Inclusão de Meninas'],
    },
    {
        id: 2,
        title: 'Aprendendo com Massinha!',
        description: 'Ensino de conceitos básicos de eletriciadade e exploração dos diferentes tipos de circuito e seus componentes.',
        duration: '01h30',
        format: 'Presencial',
        modules: ['Componentes elétricos', 'Circuitos elétricos', 'Projetos práticos', 'Utilização de massinha'],
    },
    {
        id: 3,
        title: 'Aprendendo para educar!',
        description: 'Aprofundamento em metodologias e técnicas para aplicação em salas de aula.',
        duration: '03h00',
        format: 'Presencial',
        modules: ['Formação para docentes', 'Componentes Eletrônicos', 'Projetos simples', 'Eletricidade básica', 'Utilização de massinha'],
    },
];

const benefits = [
    { icon: Award, color: '#6B46C1', bg: '#ede9fe', title: 'Certificação', text: 'Receba certificado reconhecido ao completar o programa.' },
    { icon: Users, color: '#FF6B9D', bg: '#fce7f3', title: 'Comunidade', text: 'Conecte-se com outros educadores e compartilhe experiências.' },
    { icon: Zap, color: '#00b8d9', bg: '#cffafe', title: 'Prático', text: 'Aprendizado hands-on com projetos reais e aplicáveis.' },
    { icon: CheckCircle, color: '#6B46C1', bg: '#ede9fe', title: 'Suporte', text: 'Suporte contínuo durante e após o programa.' },
];

const testimonials = [
    { name: 'Maria Silva', role: 'Educadora, São Paulo', text: 'A formação foi transformadora! Agora consigo ministrar oficinas com muito mais confiança e segurança.' },
    { name: 'Ana Costa', role: 'Professora, Rio de Janeiro', text: 'Excelente material didático e instrutores muito dedicados. Recomendo para todos!' },
    { name: 'Juliana Oliveira', role: 'Coordenadora, Minas Gerais', text: 'Consegui implementar a metodologia ativa em minhas aulas e as meninas adoraram!' },
];

const HeroBlock = styled.div`
    color: white;
    padding: 4rem 0;
`;

const HeroTitle = styled.h1`
    font-size: 3rem;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
        font-size: 3.75rem;
    }
`;

const HeroSubtitle = styled.p`
    font-size: 1.25rem;
    color: #f3f4f6;
    max-width: 42rem;
`;

const ProgramCard = styled(CardElevated)`
    border-left: 4px solid ${({ theme }) => theme.colors.purple};
`;

const ProgramGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    @media (min-width: 768px) {
        grid-template-columns: 2fr 1fr;
    }
`;

const ProgramTitle = styled.h3`
    font-size: 1.75rem;
    color: ${({ theme }) => theme.colors.gray.x900};
    margin-bottom: 0.75rem;
`;

const ProgramDescription = styled.p`
    color: ${({ theme }) => theme.colors.gray.x700};
    font-size: 1.125rem;
    margin-bottom: 1.5rem;
    line-height: 1.6;
`;

const ModulesTitle = styled.h4`
    color: ${({ theme }) => theme.colors.gray.x900};
    margin-bottom: 0.75rem;
`;

const ModulesGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.5rem;

    @media (min-width: 480px) {
        grid-template-columns: 1fr 1fr;
    }
`;

const ModuleItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.gray.x700};
`;

const ProgramInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const InfoBox = styled.div`
    padding: 1rem;
    border-radius: 0.5rem;
    background: ${({ $bg }) => $bg};
    margin-bottom: 1rem;

    p:first-child {
        font-size: 0.875rem;
        color: ${({ theme }) => theme.colors.gray.x600};
        margin-bottom: 0.25rem;
    }
`;

const InfoValue = styled.p`
    font-size: 1.5rem;
    color: ${({ $color }) => $color};
`;

const BenefitsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

const BenefitCard = styled(CardElevated)`
    text-align: center;
`;

const BenefitTitle = styled.h3`
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.gray.x900};
    margin-bottom: 0.75rem;
`;

const TestimonialsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const Stars = styled.div`
    color: #facc15;
    margin-bottom: 1rem;
    letter-spacing: 2px;
`;

const TestimonialText = styled.p`
    color: ${({ theme }) => theme.colors.gray.x700};
    font-style: italic;
    margin-bottom: 1rem;
`;

const TestimonialName = styled.p`
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray.x900};
`;

const TestimonialRole = styled.p`
    color: ${({ theme }) => theme.colors.gray.x600};
    font-size: 0.875rem;
`;

const CtaSection = styled(Section)`
    background: ${({ theme }) => theme.gradients.primary};
    text-align: center;
    color: white;
`;

export default function Formacao() {
    return (
        <>
            <HeroSection>
                <Container>
                    <HeroBlock>
                        <HeroTitle>Programas de Formação</HeroTitle>
                        <HeroSubtitle>
                            Capacite-se para transformar a educação em STEAM com nossas
                            formações especializadas.
                        </HeroSubtitle>
                    </HeroBlock>
                </Container>
            </HeroSection>

            <Section>
                <Container>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {programs.map((program, index) => (
                            <FadeInUp key={program.id} $delay={`${index * 0.1}s`}>
                                <ProgramCard>
                                    <ProgramGrid>
                                        <div>
                                            <ProgramTitle>{program.title}</ProgramTitle>
                                            <ProgramDescription>{program.description}</ProgramDescription>

                                            <div>
                                                <ModulesTitle>Módulos inclusos:</ModulesTitle>
                                                <ModulesGrid>
                                                    {program.modules.map((module) => (
                                                        <ModuleItem key={module}>
                                                            <CheckCircle size={18} color="#FF6B9D" style={{ flexShrink: 0 }} />
                                                            <span>{module}</span>
                                                        </ModuleItem>
                                                    ))}
                                                </ModulesGrid>
                                            </div>
                                        </div>

                                        <ProgramInfo>
                                            <div>
                                                <InfoBox $bg="#F3EEFC">
                                                    <p>Duração</p>
                                                    <InfoValue $color="#6B46C1">{program.duration}</InfoValue>
                                                </InfoBox>
                                                <InfoBox $bg="#FFF0F5">
                                                    <p>Formato</p>
                                                    <InfoValue $color="#e0568a" style={{ fontSize: '1.125rem' }}>{program.format}</InfoValue>
                                                </InfoBox>
                                            </div>
                                            <ButtonPrimary type="button" style={{ width: '100%' }}>
                                                Saiba Mais
                                            </ButtonPrimary>
                                        </ProgramInfo>
                                    </ProgramGrid>
                                </ProgramCard>
                            </FadeInUp>
                        ))}
                    </div>
                </Container>
            </Section>

            <Section $bg="#F9FAFB">
                <Container>
                    <SectionTitle $center $mb="3rem"><GradientText>Por que se Formar Conosco?</GradientText></SectionTitle>

                    <BenefitsGrid>
                        {benefits.map((benefit, index) => {
                            const IconComponent = benefit.icon;
                            return (
                                <FadeInUp key={benefit.title} $delay={`${index * 0.1}s`}>
                                    <BenefitCard>
                                        <IconBox $bg={benefit.bg}>
                                            <IconComponent color={benefit.color} size={32} />
                                        </IconBox>
                                        <BenefitTitle>{benefit.title}</BenefitTitle>
                                        <p style={{ color: '#4B5563' }}>{benefit.text}</p>
                                    </BenefitCard>
                                </FadeInUp>
                            );
                        })}
                    </BenefitsGrid>
                </Container>
            </Section>

            <Section>
                <Container>
                    <SectionTitle $center $mb="3rem"><GradientText>O que Dizem Nossos Alunos</GradientText></SectionTitle>

                    <TestimonialsGrid>
                        {testimonials.map((t, index) => (
                            <FadeInUp key={t.name} $delay={`${index * 0.1}s`}>
                                <CardElevated>
                                    <Stars>★★★★★</Stars>
                                    <TestimonialText>&ldquo;{t.text}&rdquo;</TestimonialText>
                                    <TestimonialName>{t.name}</TestimonialName>
                                    <TestimonialRole>{t.role}</TestimonialRole>
                                </CardElevated>
                            </FadeInUp>
                        ))}
                    </TestimonialsGrid>
                </Container>
            </Section>

            <CtaSection>
                <Container>
                    <SectionTitle $center $mb="1.5rem" style={{ color: 'white' }}>
                        Pronto para Transformar Sua Prática Educacional?
                    </SectionTitle>
                    <p style={{ fontSize: '1.25rem', marginBottom: '2rem', maxWidth: '42rem', margin: '0 auto 2rem', color: '#f3f4f6' }}>
                        Inscreva-se em um de nossos programas de formação e faça parte da
                        revolução STEAM.
                    </p>
                    <ButtonWhite as={Link} to="/contato">Inscrever-se Agora</ButtonWhite>
                </Container>
            </CtaSection>
        </>
    );
}
