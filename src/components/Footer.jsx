import styled from 'styled-components';
import { Mail, Phone } from 'lucide-react';
import Container from './Container.style.jsx';
import { GradientText } from './UI.style.jsx';

const Wrapper = styled.footer`
    background: ${({ theme }) => theme.colors.gray.x900};
    color: white;
    padding: 3rem 0;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 2rem;

    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const Title = styled.h3`
    font-size: 1.25rem;
    margin-bottom: 1rem;
`;

const Subtitle = styled.h4`
    font-size: 1.1rem;
    margin-bottom: 1rem;
`;

const Text = styled.p`
    color: ${({ theme }) => theme.colors.gray.x300};
    font-size: 0.9rem;
`;

const LinkList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const FooterLink = styled.a`
    color: ${({ theme }) => theme.colors.gray.x300};
    font-size: 0.9rem;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
        color: ${({ theme }) => theme.colors.pink};
    }
`;

const ContactRow = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
`;

const Divider = styled.div`
    border-top: 1px solid ${({ theme }) => theme.colors.gray.x700};
    padding-top: 2rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.gray.x500};
    font-size: 0.9rem;

    p + p {
        margin-top: 0.5rem;
    }
`;

export default function Footer() {
    return (
        <Wrapper>
            <Container>
                <Grid>
                    <div>
                        <Title><GradientText>Metodologia STEAM</GradientText></Title>
                        <Text>
                            Projeto de iniciação científica dedicado a incentivar meninas a
                            ingressarem nas áreas STEAM através de oficinas práticas de
                            robótica e circuitos elétricos.
                        </Text>
                    </div>

                    <div>
                        <Subtitle>Links Rápidos</Subtitle>
                        <LinkList>
                            <li><FooterLink href="/">Início</FooterLink></li>
                            <li><FooterLink href="/materiais">Material Didático</FooterLink></li>
                            <li><FooterLink href="/formacao">Formação</FooterLink></li>
                            <li><FooterLink href="/contato">Contato</FooterLink></li>
                        </LinkList>
                    </div>

                    <div>
                        <Subtitle>Contato</Subtitle>
                        <ContactRow>
                            <Mail size={18} color="#FF6B9D" />
                            <FooterLink href="mailto:contato@steammetodologia.com">
                                contato@steammetodologia.com
                            </FooterLink>
                        </ContactRow>
                        <ContactRow>
                            <Phone size={18} color="#00D9FF" />
                            <FooterLink href="tel:+5511999999999">
                                +55 (11) 99999-9999
                            </FooterLink>
                        </ContactRow>
                    </div>
                </Grid>

                <Divider>
                    <p>© 2026 Metodologia STEAM. Todos os direitos reservados.</p>
                    <p>Projeto de Iniciação Científica | Incentivando meninas em STEAM</p>
                </Divider>
            </Container>
        </Wrapper>
    );
}
