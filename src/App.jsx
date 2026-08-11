import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from './components';

const Page = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const Main = styled.main`
    flex: 1;
`;

export default function App() {
  return (
    <Page>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Page>
  )
}
