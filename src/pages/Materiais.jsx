import styled from 'styled-components';
import { Download, FileText, BookOpen, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../components/Container.style.jsx';
import {
    HeroSection,
    Section,
    SectionTitle,
    GradientText,
    CardElevated,
    FadeInUp,
    Badge,
    IconBox,
    ButtonPrimary,
    ButtonSecondary,
    ButtonAccent,
    ButtonWhite,
} from '../components/UI.style.jsx';

const materials = [
    {
        id: 1,
        title: 'Guia de Circuitos Elétricos Básicos',
        description: 'Material completo para iniciantes com conceitos fundamentais de eletricidade, componentes e primeiros projetos.',
        category: 'Circuitos Elétricos',
        level: 'Iniciante',
        format: 'PDF',
        icon: FileText,
        color: 'purple',
    },
    {
        id: 2,
        title: 'Projetos de Robótica Educacional',
        description: 'Passo a passo para construir e programar robôs simples, desenvolvendo habilidades de engenharia.',
        category: 'Robótica',
        level: 'Intermediário',
        format: 'PDF + Vídeos',
        icon: Code,
        color: 'pink',
    },
    {
        id: 3,
        title: 'Metodologia Ativa na Prática',
        description: 'Estratégias e técnicas para implementar aprendizado ativo em suas oficinas e aulas.',
        category: 'Metodologia',
        level: 'Avançado',
        format: 'PDF + Guia',
        icon: BookOpen,
        color: 'cyan',
    },
    {
        id: 4,
        title: 'Experimentos de Eletrônica Criativa',
        description: 'Projetos inovadores combinando arte e eletrônica para estimular criatividade.',
        category: 'Circuitos Elétricos',
        level: 'Intermediário',
        format: 'PDF + Imagens',
        icon: FileText,
        color: 'purple',
    },
    {
        id: 5,
        title: 'Programação para Robôs',
        description: 'Tutorial completo de programação com linguagens visuais e código para robótica.',
        category: 'Robótica',
        level: 'Intermediário',
        format: 'PDF + Código',
        icon: Code,
        color: 'pink',
    },
    {
        id: 6,
        title: 'Inclusão de Meninas em STEAM',
        description: 'Guia de boas práticas para criar ambientes inclusivos e acolhedores para meninas.',
        category: 'Metodologia',
        level: 'Iniciante',
        format: 'PDF',
        icon: BookOpen,
        color: 'cyan',
    },
];

const colorMap = {
    purple: { bg: '#ede9fe', text: '#6B46C1' },
    pink: { bg: '#fce7f3', text: '#FF6B9D' },
    cyan: { bg: '#cffafe', text: '#00b8d9' },
};

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

const IntroText = styled.p`
    color: ${({ theme }) => theme.colors.gray.x600};
    font-size: 1.125rem;
    margin-bottom: 3rem;
`;

const MaterialsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const BadgeRow = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
`;

const MaterialTitle = styled.h3`
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.gray.x900};
    margin-bottom: 0.75rem;
`;

const MaterialDescription = styled.p`
    color: ${({ theme }) => theme.colors.gray.x600};
    margin-bottom: 1.5rem;
    line-height: 1.6;
`;

const MaterialFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 1rem;
    border-top: 1px solid ${({ theme }) => theme.colors.gray.x200};
`;

const FormatLabel = styled.span`
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.gray.x500};
    font-weight: 500;
`;

const SmallButtonPrimary = styled(ButtonPrimary)`
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
`;

const ResourcesGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
`;

const CtaSection = styled(Section)`
    background: ${({ theme }) => theme.gradients.primary};
    text-align: center;
    color: white;
`;

export default function Materiais() {
    return (
        <>
            <HeroSection>
                <Container>
                    <HeroBlock>
                        <HeroTitle>Material Didático</HeroTitle>
                        <HeroSubtitle>
                            Acesse recursos completos para oficinas de robótica, circuitos
                            elétricos e metodologia ativa.
                        </HeroSubtitle>
                    </HeroBlock>
                </Container>
            </HeroSection>

            <Section>
                <Container>
                    <IntroText>
                        Encontre materiais organizados por categoria e nível de dificuldade.
                        Todos os recursos estão disponíveis para download.
                    </IntroText>

                    <MaterialsGrid>
                        {materials.map((material, index) => {
                            const IconComponent = material.icon;
                            const colors = colorMap[material.color];

                            return (
                                <FadeInUp key={material.id} $delay={`${index * 0.1}s`}>
                                    <CardElevated>
                                        <IconBox $bg={colors.bg}>
                                            <IconComponent color={colors.text} size={32} />
                                        </IconBox>

                                        <BadgeRow>
                                            <Badge $bg={colors.bg} $color={colors.text}>{material.category}</Badge>
                                            <Badge>{material.level}</Badge>
                                        </BadgeRow>

                                        <MaterialTitle>{material.title}</MaterialTitle>
                                        <MaterialDescription>{material.description}</MaterialDescription>

                                        <MaterialFooter>
                                            <FormatLabel>{material.format}</FormatLabel>
                                            <SmallButtonPrimary type="button">
                                                <Download size={16} />
                                                Download
                                            </SmallButtonPrimary>
                                        </MaterialFooter>
                                    </CardElevated>
                                </FadeInUp>
                            );
                        })}
                    </MaterialsGrid>
                </Container>
            </Section>

            <Section $bg="#F9FAFB">
                <Container>
                    <SectionTitle $center $mb="3rem"><GradientText>Recursos Adicionais</GradientText></SectionTitle>

                    <ResourcesGrid>
                        <CardElevated>
                            <MaterialTitle>Vídeo-Aulas</MaterialTitle>
                            <MaterialDescription>
                                Tutoriais em vídeo passo a passo para facilitar o aprendizado de
                                robótica e circuitos.
                            </MaterialDescription>
                            <ButtonSecondary type="button">Acessar Vídeos</ButtonSecondary>
                        </CardElevated>

                        <CardElevated>
                            <MaterialTitle>Comunidade</MaterialTitle>
                            <MaterialDescription>
                                Conecte-se com outras educadoras e compartilhe experiências e
                                dúvidas.
                            </MaterialDescription>
                            <ButtonAccent type="button">Entrar na Comunidade</ButtonAccent>
                        </CardElevated>
                    </ResourcesGrid>
                </Container>
            </Section>

            <CtaSection>
                <Container>
                    <SectionTitle $center $mb="1.5rem" style={{ color: 'white' }}>
                        Precisa de Ajuda?
                    </SectionTitle>
                    <p style={{ fontSize: '1.25rem', marginBottom: '2rem', maxWidth: '42rem', margin: '0 auto 2rem', color: '#f3f4f6' }}>
                        Entre em contato conosco para dúvidas sobre os materiais ou para
                        solicitar recursos customizados.
                    </p>
                    <ButtonWhite as={Link} to="/contato">Fale Conosco</ButtonWhite>
                </Container>
            </CtaSection>
        </>
    );
}
