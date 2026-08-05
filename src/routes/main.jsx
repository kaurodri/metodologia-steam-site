import styled from 'styled-components';

import imagemCapacita from '../image/capacita-meninas.jpg';
import imagemFaced from '../image/faced-mar.jpg';
import imagemOficina from '../image/oficina-2023.png';
import imagemSteam from '../image/steam-junho.jpg';

const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100vw;
    background: #f5f5f5;
    padding: 32px;
    box-sizing: border-box;
`;

const Gallery = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    width: 100%;
    max-width: 1200px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const Overlay = styled.div`
    position: absolute;
    inset: 0;
    background: #1565c0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 24px;
    text-align: center;

    color: white;

    opacity: 0;
    transition: opacity 0.3s ease;
`;

const OverlayTitle = styled.h3`
    margin: 0 0 12px;
    font-size: 1.4rem;
`;

const OverlayText = styled.p`
    margin: 0;
    line-height: 1.6;
    font-size: 0.95rem;
`;

const TagsContainer = styled.div`
    position: absolute;
    bottom: 12px;
    right: 12px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 6px;
    max-width: 80%;
    transition: opacity 0.3s ease;
`;

const Tag = styled.span`
    background: rgba(0, 0, 0, 0.75);
    color: white;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 500;
    backdrop-filter: blur(4px);
`;

const ImageLayer = styled.div`
    position: absolute;
    inset: 0;

    background-size: cover;
    background-position: center;

    transition: opacity 0.3s ease;
`;

const Badge = styled.div`
    background: white;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    height: 320px;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    }

    &:hover ${Overlay} {
        opacity: 1;
    }

    &:hover ${ImageLayer} {
        opacity: 0;
    }

    &:hover ${TagsContainer} {
        opacity: 0;
    }
`;

const BadgeTitle = styled.div`
    background: #1e88e5;
    color: white;
    font-size: 1.3rem;
    font-weight: bold;
    text-align: center;
    padding: 16px;
`;

const ProjectImage = styled.div`
    position: relative;
    height: calc(100% - 60px);
`;

export default function Home() {
    return (
        <Main>
            <Gallery>
                <Badge>
                    <BadgeTitle>GEPIT - Educação STEAM</BadgeTitle>

                    <ProjectImage>
                        <ImageLayer
                            style={{
                                backgroundImage:
                                    `url(${imagemSteam})`,
                            }}
                        />

                        <TagsContainer>
                            <Tag>2026</Tag>
                            <Tag>Oficina</Tag>
                            <Tag>Arduino</Tag>
                        </TagsContainer>

                        <Overlay>
                            <OverlayTitle>Oficina com alunos STEAM do 5º ao 2º EM</OverlayTitle>
                            <OverlayText>
                                Oficina voltada ao ensino de conceitos básicos relacionados a robótica, eletrônica e circutos com Arduino
                            </OverlayText>
                        </Overlay>
                    </ProjectImage>
                </Badge>

                <Badge>
                    <BadgeTitle>FACED - Ensino Superior</BadgeTitle>

                    <ProjectImage>
                        <ImageLayer
                            style={{
                                backgroundImage:
                                    `url(${imagemFaced})`,
                            }}
                        />

                        <TagsContainer>
                            <Tag>2025</Tag>
                            <Tag>Oficina</Tag>
                            <Tag>Massinha Circuitos</Tag>
                        </TagsContainer>

                        <Overlay>
                            <OverlayTitle>Massinha Circuitos</OverlayTitle>
                            <OverlayText>
                                Oficina realizada em parceria com a FACED
                                utilizando circuitos elétricos construídos
                                com massinha condutiva para ensinar conceitos
                                básicos de eletrônica de forma lúdica.
                            </OverlayText>
                        </Overlay>
                    </ProjectImage>
                </Badge>

                <Badge>
                    <BadgeTitle>GEPIT - Oficina 4º e 5º Ano</BadgeTitle>

                    <ProjectImage>
                        <ImageLayer
                            style={{
                                backgroundImage:
                                    `url(${imagemCapacita})`,
                            }}
                        />

                        <TagsContainer>
                            <Tag>2025</Tag>
                            <Tag>Capacitação</Tag>
                            <Tag>Massinha Circuitos</Tag>
                        </TagsContainer>

                        <Overlay>
                            <OverlayTitle>Capacitação Escolar</OverlayTitle>
                            <OverlayText>
                                Atividade desenvolvida para estudantes do
                                4º e 5º ano, apresentando conceitos de
                                eletricidade, criatividade e pensamento
                                científico através de oficinas práticas.
                            </OverlayText>
                        </Overlay>
                    </ProjectImage>
                </Badge>

                <Badge>
                    <BadgeTitle>ESEBA - Iniciação 2º e 3º Ano</BadgeTitle>

                    <ProjectImage>
                        <ImageLayer
                            style={{
                                backgroundImage:
                                    `url(${imagemOficina})`,
                            }}
                        />

                        <TagsContainer>
                            <Tag>2023</Tag>
                            <Tag>Oficina</Tag>
                            <Tag>Massinha Circuitos</Tag>
                        </TagsContainer>

                        <Overlay>
                            <OverlayTitle>Iniciação Científica</OverlayTitle>
                            <OverlayText>
                                Projeto de introdução à ciência e tecnologia
                                para alunos do 2º e 3º ano, utilizando
                                atividades interativas para despertar o
                                interesse pela pesquisa e inovação.
                            </OverlayText>
                        </Overlay>
                    </ProjectImage>
                </Badge>
            </Gallery>
        </Main>
    );
}