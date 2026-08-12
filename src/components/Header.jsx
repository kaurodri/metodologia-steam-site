import { useState } from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Container from './Container.style.jsx';

const Wrapper = styled.header`
    position: sticky;
    top: 0;
    z-index: 50;
    background: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
`;

const Brand = styled(Link)`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 1.5rem;
    font-weight: 700;
    text-decoration: none;

    span:first-child {
        color: ${({ theme }) => theme.colors.purple};
    }

    span:last-child {
        color: ${({ theme }) => theme.colors.pink};
    }
`;

const DesktopLinks = styled.div`
    display: none;
    align-items: center;
    gap: 2rem;

    @media (min-width: 768px) {
        display: flex;
    }
`;

const NavItem = styled(NavLink)`
    color: ${({ theme }) => theme.colors.gray.x700};
    font-weight: 500;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
        color: ${({ theme }) => theme.colors.purple};
    }

    &.active {
        color: ${({ theme }) => theme.colors.purple};
    }
`;

const MenuButton = styled.button`
    display: inline-flex;
    background: none;
    border: none;
    padding: 0.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.gray.x900};

    &:hover {
        background: ${({ theme }) => theme.colors.gray.x100};
    }

    @media (min-width: 768px) {
        display: none;
    }
`;

const MobileMenu = styled.div`
    display: ${({ $open }) => ($open ? 'block' : 'none')};
    padding-bottom: 1rem;
    border-top: 1px solid ${({ theme }) => theme.colors.gray.x200};

    @media (min-width: 768px) {
        display: none;
    }
`;

const MobileNavItem = styled(NavLink)`
    display: block;
    padding: 0.75rem 1rem;
    color: ${({ theme }) => theme.colors.gray.x700};
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
        background: ${({ theme }) => theme.colors.purpleLight};
        color: ${({ theme }) => theme.colors.purple};
    }

    &.active {
        color: ${({ theme }) => theme.colors.purple};
    }
`;

const navItems = [
    { label: 'Início', to: '/' },
    { label: 'Material Didático', to: '/materiais' },
    { label: 'Ações', to: '/acoes'},
    { label: 'Conteúdos' , to: '/conteudos'},
    { label: 'Formação', to: '/formacao' },
    { label: 'Contato', to: '/contato' },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Wrapper>
            <Container>
                <Nav>
                    <Brand to="/">
                        <span>STEAM</span>
                        <span>Metodologia</span>
                    </Brand>

                    <DesktopLinks>
                        {navItems.map((item) => (
                            <NavItem key={item.to} to={item.to} end={item.to === '/'}>
                                {item.label}
                            </NavItem>
                        ))}
                    </DesktopLinks>

                    <MenuButton
                        onClick={() => setIsMenuOpen((open) => !open)}
                        aria-label="Alternar menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </MenuButton>
                </Nav>

                <MobileMenu $open={isMenuOpen}>
                    {navItems.map((item) => (
                        <MobileNavItem
                            key={item.to}
                            to={item.to}
                            end={item.to === '/'}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.label}
                        </MobileNavItem>
                    ))}
                </MobileMenu>
            </Container>
        </Wrapper>
    );
}
