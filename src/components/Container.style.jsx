import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1rem;

    @media (min-width: 640px) {
        padding: 0 1.5rem;
    }

    @media (min-width: 1024px) {
        padding: 0 2rem;
    }
`;

export default Container;
