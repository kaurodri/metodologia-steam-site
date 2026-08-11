import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Users, BookOpen, Lightbulb } from 'lucide-react';
import Container from '../components/Container.style.jsx';
import {
    HeroSection,
    Section,
    SectionTitle,
    GradientText,
    CardElevated,
    FadeIn,
    FadeInUp,
    ButtonWhite,
    ButtonOutlineWhite,
    IconBox,
} from '../components/UI.style.jsx';

import imagemSteam from '../image/steam-junho.jpg';
import imagemFaced from '../image/faced-mar.jpg';
import imagemCapacita from '../image/capacita-meninas.jpg';
import imagemOficina from '../image/oficina-2023.png';

const HeroImageWrap = styled.div`
    position: absolute;
    inset: 0;
    opacity: 0.18;
    background-image: url(${(props) => props.$src});
    background-size: cover;
    background-position: center;
`;

const HeroContent = styled.div`
    position: relative;
    z-index: 10;
    text-align: center;
    color: white;
    padding: 6rem 0;
`;

const HeroTitle = styled.h1`
    font-size: 3rem;
    margin-bottom: 1.5rem;
    line-height: 1.1;

    @media (min-width: 768px) {
        font-size: 4.5rem;
    }
`;

const HeroSubtitle = styled.p`
    font-size: 1.25rem;
    margin-bottom: 2rem;
    color: #f3f4f6;
    max-width: 42rem;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 768px) {
        font-size: 1.5rem;
    }
`;

const HeroHighlight = styled.span`
    color: #a5f3fc;
`;

const HeroActions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;

    @media (min-width: 640px) {
        flex-direction: row;
    }
`;

const AboutGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: center;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
`;

const AboutText = styled.p`
    color: ${({ theme }) => theme.colors.gray.x700};
    font-size: 1.125rem;
    margin-bottom: 1rem;
    line-height: 1.7;
`;

const Highlights = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 1.5rem;
`;

const HighlightRow = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;

    h4 {
        font-family: ${({ theme }) => theme.fonts.heading};
        color: ${({ theme }) => theme.colors.gray.x900};
        margin-bottom: 0.15rem;
    }

    p {
        color: ${({ theme }) => theme.colors.gray.x600};
        font-size: 0.9rem;
    }
`;

const RoundedImage = styled.img`
    width: 100%;
    border-radius: 0.75rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    display: block;
`;

const ImpactGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: center;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
`;

const InfoCards = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const InfoCardRow = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 1rem;

    h3 {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.colors.gray.x900};
        margin-bottom: 0.5rem;
    }
`;

const IconTile = styled.div`
    flex-shrink: 0;
    padding: 1rem;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.gradients.primary};
`;

const ImpactNumber = styled.p`
    font-size: 3rem;
    font-family: ${({ theme }) => theme.fonts.heading};
    color: ${({ theme }) => theme.colors.cyanDark};
    margin: 0.25rem 0;
`;

const WorkshopSubtitle = styled.p`
    text-align: center;
    color: ${({ theme }) => theme.colors.gray.x600};
    font-size: 1.125rem;
    max-width: 42rem;
    margin: 0 auto 4rem;
`;

const WorkshopGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 3rem;

    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const WorkshopLink = styled(Link)`
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: ${({ $color }) => $color};
    cursor: pointer;
`;

const BannerImage = styled.img`
    width: 100%;
    height: 24rem;
    object-fit: cover;
    border-radius: 0.75rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    display: block;
`;

const CtaSection = styled(Section)`
    background: ${({ theme }) => theme.gradients.primary};
    text-align: center;
    color: white;
`;

export default function Home() {
    return (
        <>
            <HeroSection $tall>
                <HeroImageWrap $src={imagemSteam} />
                <Container>
                    <HeroContent>
                        <FadeIn>
                            <HeroTitle>
                                Metodologia <HeroHighlight>STEAM</HeroHighlight>
                            </HeroTitle>
                            <HeroSubtitle>
                                Incentivando meninas a ingressarem nas áreas de Ciência, Tecnologia,
                                Engenharia, Artes e Matemática
                            </HeroSubtitle>
                            <HeroActions>
                                <ButtonWhite as={Link} to="/materiais">
                                    Explorar Materiais <ArrowRight size={20} />
                                </ButtonWhite>
                                <ButtonOutlineWhite as={Link} to="/contato">
                                    Entrar em Contato
                                </ButtonOutlineWhite>
                            </HeroActions>
                        </FadeIn>
                    </HeroContent>
                </Container>
            </HeroSection>

            <Section $bg="linear-gradient(135deg, #F3EEFC 0%, #FFF0F5 100%)">
                <Container>
                    <AboutGrid>
                        <FadeInUp>
                            <SectionTitle><GradientText>O que é a Ação?</GradientText></SectionTitle>
                            <AboutText>
                                A Metodologia STEAM é um projeto de iniciação científica dedicado ao
                                desenvolvimento de material didático para oficinas de robótica e
                                circuitos elétricos. Nosso objetivo principal é incentivar meninas do
                                ensino fundamental a descobrirem sua paixão pelas áreas STEAM.
                            </AboutText>
                            <AboutText>
                                Utilizamos uma abordagem inovadora que combina a{' '}
                                <strong style={{ color: '#6B46C1' }}>Metodologia Ativa</strong> com os
                                princípios <strong style={{ color: '#FF6B9D' }}>STEAM</strong>, criando
                                um ambiente de aprendizado prático, colaborativo e inspirador.
                            </AboutText>

                            <Highlights>
                                <HighlightRow>
                                    <Lightbulb color="#6B46C1" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                                    <div>
                                        <h4>Aprendizado Prático</h4>
                                        <p>Oficinas hands-on com robótica e circuitos reais</p>
                                    </div>
                                </HighlightRow>
                                <HighlightRow>
                                    <Zap color="#FF6B9D" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                                    <div>
                                        <h4>Metodologia Ativa</h4>
                                        <p>Participantes são protagonistas do próprio aprendizado</p>
                                    </div>
                                </HighlightRow>
                                <HighlightRow>
                                    <BookOpen color="#00D9FF" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                                    <div>
                                        <h4>Abordagem STEAM</h4>
                                        <p>Integração de Ciência, Tecnologia, Engenharia, Artes e Matemática</p>
                                    </div>
                                </HighlightRow>
                            </Highlights>
                        </FadeInUp>

                        <FadeIn>
                            <RoundedImage src={imagemFaced} alt="Oficina de circuitos com a FACED" />
                        </FadeIn>
                    </AboutGrid>
                </Container>
            </Section>

            <Section>
                <Container>
                    <SectionTitle $center $mb="4rem">
                        <GradientText>Nosso Público-Alvo e Impacto</GradientText>
                    </SectionTitle>

                    <ImpactGrid>
                        <FadeIn>
                            <RoundedImage src={imagemCapacita} alt="Meninas celebrando conquistas em STEAM" />
                        </FadeIn>

                        <FadeInUp>
                            <InfoCards>
                                <CardElevated>
                                    <InfoCardRow>
                                        <IconTile>
                                            <Users color="white" size={32} />
                                        </IconTile>
                                        <div>
                                            <h3>Público-Alvo</h3>
                                            <p style={{ fontSize: '1.125rem', color: '#374151' }}>
                                                <strong>Estudantes do Ensino Fundamental</strong>
                                            </p>
                                            <p style={{ color: '#4B5563', marginTop: '0.5rem' }}>
                                                Com foco especial em meninas, incentivando sua
                                                participação e protagonismo nas áreas STEAM.
                                            </p>
                                        </div>
                                    </InfoCardRow>
                                </CardElevated>

                                <CardElevated style={{ background: 'linear-gradient(135deg, #E6FBFF 0%, #eff6ff 100%)', border: '2px solid #99f0ff' }}>
                                    <InfoCardRow>
                                        <IconTile style={{ background: 'linear-gradient(135deg, #00D9FF 0%, #3b82f6 100%)' }}>
                                            <Zap color="white" size={32} />
                                        </IconTile>
                                        <div>
                                            <h3>Impacto Alcançado</h3>
                                            <ImpactNumber>160+</ImpactNumber>
                                            <p style={{ fontSize: '1.125rem', color: '#374151' }}>
                                                pessoas já foram impactadas por nossas oficinas e
                                                materiais didáticos.
                                            </p>
                                        </div>
                                    </InfoCardRow>
                                </CardElevated>
                            </InfoCards>
                        </FadeInUp>
                    </ImpactGrid>
                </Container>
            </Section>

            <Section $bg="#F9FAFB">
                <Container>
                    <SectionTitle $center $mb="1rem"><GradientText>Nossas Oficinas</GradientText></SectionTitle>
                    <WorkshopSubtitle>
                        Oficinas práticas e interativas que combinam robótica, circuitos elétricos e
                        metodologia ativa
                    </WorkshopSubtitle>

                    <WorkshopGrid>
                        <FadeInUp>
                            <CardElevated>
                                <IconBox $bg="#ede9fe">
                                    <Zap color="#6B46C1" size={32} />
                                </IconBox>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: '#111827' }}>
                                    Circuitos Elétricos
                                </h3>
                                <p style={{ color: '#374151', marginBottom: '1rem' }}>
                                    Aprenda os fundamentos da eletricidade através de experimentos
                                    práticos e interativos.
                                </p>
                                <WorkshopLink to="/materiais" $color="#6B46C1">
                                    Saiba mais <ArrowRight size={16} />
                                </WorkshopLink>
                            </CardElevated>
                        </FadeInUp>

                        <FadeInUp $delay="0.1s">
                            <CardElevated>
                                <IconBox $bg="#fce7f3">
                                    <Lightbulb color="#FF6B9D" size={32} />
                                </IconBox>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: '#111827' }}>
                                    Robótica Educacional
                                </h3>
                                <p style={{ color: '#374151', marginBottom: '1rem' }}>
                                    Construa e programe robôs, desenvolvendo habilidades de
                                    engenharia e lógica.
                                </p>
                                <WorkshopLink to="/materiais" $color="#FF6B9D">
                                    Saiba mais <ArrowRight size={16} />
                                </WorkshopLink>
                            </CardElevated>
                        </FadeInUp>

                        <FadeInUp $delay="0.2s">
                            <CardElevated>
                                <IconBox $bg="#cffafe">
                                    <BookOpen color="#00b8d9" size={32} />
                                </IconBox>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: '#111827' }}>
                                    Metodologia Ativa
                                </h3>
                                <p style={{ color: '#374151', marginBottom: '1rem' }}>
                                    Aprendizado colaborativo onde você é o protagonista da sua
                                    própria jornada.
                                </p>
                                <WorkshopLink to="/formacao" $color="#00b8d9">
                                    Saiba mais <ArrowRight size={16} />
                                </WorkshopLink>
                            </CardElevated>
                        </FadeInUp>
                    </WorkshopGrid>

                    <FadeIn>
                        <BannerImage src={imagemOficina} alt="Oficina de robótica e eletrônica" />
                    </FadeIn>
                </Container>
            </Section>

            <CtaSection>
                <Container>
                    <SectionTitle $center $mb="1.5rem" style={{ color: 'white' }}>
                        Pronta para Começar?
                    </SectionTitle>
                    <p style={{ fontSize: '1.25rem', marginBottom: '2rem', maxWidth: '42rem', margin: '0 auto 2rem', color: '#f3f4f6' }}>
                        Explore nossos materiais didáticos, conheça nossa metodologia e entre em
                        contato conosco.
                    </p>
                    <HeroActions>
                        <ButtonWhite as={Link} to="/materiais">
                            Ver Materiais <ArrowRight size={20} />
                        </ButtonWhite>
                        <ButtonOutlineWhite as={Link} to="/contato">
                            Fale Conosco
                        </ButtonOutlineWhite>
                    </HeroActions>
                </Container>
            </CtaSection>
        </>
    );
}
