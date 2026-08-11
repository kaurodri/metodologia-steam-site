import styled from 'styled-components';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../components/Container.style.jsx';
import { GradientText, ButtonPrimary } from '../components/UI.style.jsx';

const Wrapper = styled.div`
    min-height: calc(100vh - 4rem);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem 0;
`;

const Content = styled.div`
    text-align: center;
`;

const Code = styled.h1`
    font-size: 6rem;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
        font-size: 9rem;
    }
`;

const Title = styled.h2`
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.gray.x900};
    margin-bottom: 1rem;
`;

const Text = styled.p`
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.gray.x600};
    max-width: 42rem;
    margin: 0 auto 2rem;
`;

export default function NotFound() {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <Code><GradientText>404</GradientText></Code>
                    <Title>Página Não Encontrada</Title>
                    <Text>
                        Desculpe, a página que você está procurando não existe ou foi movida.
                    </Text>
                    <ButtonPrimary as={Link} to="/">
                        <ArrowLeft size={20} />
                        Voltar para Início
                    </ButtonPrimary>
                </Content>
            </Container>
        </Wrapper>
    );
}
