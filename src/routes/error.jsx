import styled from 'styled-components';

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30rem;

    justify-content: center;
    min-height: 100vh;
    width: 100vw;

    h1 {
        color: transparent;
        background: linear-gradient(to right, ${({ theme }) => theme.colors.primary.x200}, ${({ theme }) => theme.colors.primary.x400});
        background-clip: text;
        -webkit-background-clip: text;
        font-size: 50px;
    }

`;

const Desc = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    height: 0.5rem;
    border-bottom: 2px solid #b8b8b8;

    p {
        margin-top: 0.8rem;
        color: #b8b8b8;
        font-weight: 300;
    }
`;

export default function ErrorPage() {
    return (
        <Main>
            <h1>Erro 404! :(</h1>
            <Desc>
                <p>Alguma coisa deu errado</p>
            </Desc>
        </Main>
    )
}
