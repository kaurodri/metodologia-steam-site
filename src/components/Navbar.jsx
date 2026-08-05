import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px;
`;

const LeftContainer = styled.div`
    margin-left: 2rem;
`;

const Logo = styled.img`
    height: 40px;
`;

const SiteName = styled.span`
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    margin-left: 10px;
`;

const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: 3rem;
`;

const Links = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    font-weight: bold;
    margin-left: 20px;
    padding: 10px 20px;
    transition: all 0.3s ease;
    
    &:hover {
        filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.7));
    }
`;

const LoginButton = styled.button`
    padding: 10px 50px;
    background: transparent;
    border: 2px solid white;
    border-radius: 25px;
    color: white;
    font-weight: bold;
    margin-left: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
        background-color: white;
        color: #333;
        filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.7));
    }
`;

export default function Navbar() {
    return (
        <>
        <Nav>
            <LeftContainer>
                <Links to="/">
                    <Logo src="/icon-ASCII.png" alt="Logo" />
                    <SiteName>ASCII HUB</SiteName>
                </Links>
            </LeftContainer>
    
            <LinksContainer>
                <Links to="/">Home</Links>
                <Links to="/parcerias">Parcerias</Links>
                <Links to="/ranking">Ranking</Links>
                <Link to="/login">
                    <LoginButton>Login</LoginButton>
                </Link>
            </LinksContainer>
        </Nav>
        </>
    );
}
