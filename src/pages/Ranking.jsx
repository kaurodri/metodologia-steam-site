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

`;

export default function Ranking() {
    return (
        <Main>
            <h1>Front [ Ranking ] ASCII HUB</h1>
        </Main>
    )
}
