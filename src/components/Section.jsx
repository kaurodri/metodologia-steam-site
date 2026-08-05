import styled from 'styled-components';

const Main = styled.div`
    display: flex;
    align-items: center;

    h1 {
        color: transparent;
        background: linear-gradient(to right, ${({ theme }) => theme.colors.primary.x200}, ${({ theme }) => theme.colors.primary.x400});
        background-clip: text;
        -webkit-background-clip: text;
    }

`;

export default function Section() {
    return (
        <Main>
            <h1>Front ASCII HUB</h1>
        </Main>
    )
}
