import { Container, Navbar } from './components';
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <Container>
      <Outlet />
    </Container>
  )
}
