import styled from 'styled-components';

const Main = styled.div`
    display: flex;
    align-items: center;

    justify-content: center;
    min-height: 100vh;
    width: 100vw;

    h1 {
        color: transparent;
        background: linear-gradient(to right, ${({ theme }) => theme.colors.primary.x200}, ${({ theme }) => theme.colors.primary.x400});
        background-clip: text;
        -webkit-background-clip: text;
    }

    background-color: white;
    color: black;

`;

const Botao = styled.div`
    background-color: purple;
    color: white;
    height: 35px;
    width: 150px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    justify-content: center;
    display: flex;
    align-items: center;

    margin: 10px;
`;

export default function Home() {
    return (
        <Main>
            <Botao>
                <p>Julia</p>
            </Botao>
        </Main>
    )
}
