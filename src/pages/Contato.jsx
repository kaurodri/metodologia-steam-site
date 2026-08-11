import { useState } from 'react';
import styled from 'styled-components';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Container from '../components/Container.style.jsx';
import {
    HeroSection,
    Section,
    SectionTitle,
    GradientText,
    CardElevated,
    FadeInUp,
    FadeIn,
    IconBox,
    ButtonPrimary,
} from '../components/UI.style.jsx';

const faqs = [
    {
        question: 'Como posso acessar os materiais?',
        answer: 'Todos os materiais estão disponíveis na página de Material Didático. Você pode fazer download direto dos PDFs e recursos.',
    },
    {
        question: 'Qual é o custo da formação?',
        answer: 'Entre em contato conosco para informações sobre valores e possibilidades de bolsas ou descontos.',
    },
    {
        question: 'Posso usar os materiais em minha escola?',
        answer: 'Sim! Nossos materiais são desenvolvidos para serem usados em escolas, ONGs e centros de educação.',
    },
    {
        question: 'Como posso colaborar com o projeto?',
        answer: 'Adoramos parcerias! Envie uma mensagem através do formulário com sua proposta de colaboração.',
    },
];

const HeroBlock = styled.div`
    color: white;
    padding: 4rem 0;
`;

const HeroTitle = styled.h1`
    font-size: 3rem;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
        font-size: 3.75rem;
    }
`;

const HeroSubtitle = styled.p`
    font-size: 1.25rem;
    color: #f3f4f6;
    max-width: 42rem;
`;

const ContactGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;

    @media (min-width: 1024px) {
        grid-template-columns: 1fr 2fr;
    }
`;

const InfoColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const InfoTitle = styled.h3`
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.gray.x900};
    margin-bottom: 0.5rem;
`;

const InfoText = styled.p`
    color: ${({ theme }) => theme.colors.gray.x600};
    margin-bottom: 1rem;
`;

const InfoLink = styled.a`
    font-weight: 600;
    text-decoration: none;
    color: ${({ $color }) => $color};

    &:hover {
        opacity: 0.8;
    }
`;

const FormCard = styled(CardElevated)`
    padding: 2.5rem;
`;

const FormTitle = styled.h2`
    font-size: 1.75rem;
    color: ${({ theme }) => theme.colors.gray.x900};
    margin-bottom: 1.5rem;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

const Field = styled.div`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    font-size: 0.875rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray.x900};
    margin-bottom: 0.5rem;
`;

const inputStyles = `
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid #D1D5DB;
    font-size: 1rem;
    transition: box-shadow 0.2s ease, border-color 0.2s ease;
    font-family: inherit;

    &:focus {
        outline: none;
        border-color: #6B46C1;
        box-shadow: 0 0 0 3px rgba(107, 70, 193, 0.2);
    }
`;

const Input = styled.input`${inputStyles}`;
const Select = styled.select`${inputStyles}`;
const Textarea = styled.textarea`
    ${inputStyles}
    resize: none;
`;

const SubmitButton = styled(ButtonPrimary)`
    width: 100%;
    padding: 0.9rem;
    font-size: 1.125rem;
`;

const SuccessBox = styled.div`
    background: #f0fdf4;
    border: 2px solid #bbf7d0;
    border-radius: 0.5rem;
    padding: 2rem;
    text-align: center;
`;

const SuccessIcon = styled.div`
    color: #16a34a;
    font-size: 3rem;
    margin-bottom: 1rem;
`;

const SuccessTitle = styled.h3`
    font-size: 1.5rem;
    color: #15803d;
    margin-bottom: 0.5rem;
`;

const SuccessText = styled.p`
    color: #16a34a;
`;

const FaqGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 56rem;
    margin: 0 auto;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
`;

const FaqTitle = styled.h3`
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.gray.x900};
    margin-bottom: 0.75rem;
`;

const CtaSection = styled(Section)`
    background: ${({ theme }) => theme.gradients.primary};
    text-align: center;
    color: white;
`;

const initialForm = { name: '', email: '', phone: '', subject: '', message: '' };

export default function Contato() {
    const [formData, setFormData] = useState(initialForm);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData(initialForm);
        }, 3000);
    };

    return (
        <>
            <HeroSection>
                <Container>
                    <HeroBlock>
                        <HeroTitle>Entre em Contato</HeroTitle>
                        <HeroSubtitle>
                            Tem dúvidas? Quer colaborar? Estamos aqui para ouvir você!
                        </HeroSubtitle>
                    </HeroBlock>
                </Container>
            </HeroSection>

            <Section>
                <Container>
                    <ContactGrid>
                        <InfoColumn>
                            <FadeInUp>
                                <CardElevated>
                                    <IconBox $bg="#ede9fe">
                                        <Mail color="#6B46C1" size={32} />
                                    </IconBox>
                                    <InfoTitle>Email</InfoTitle>
                                    <InfoText>Envie-nos um email e responderemos em breve.</InfoText>
                                    <InfoLink href="mailto:contato@steammetodologia.com" $color="#6B46C1">
                                        contato@steammetodologia.com
                                    </InfoLink>
                                </CardElevated>
                            </FadeInUp>

                            <FadeInUp $delay="0.1s">
                                <CardElevated>
                                    <IconBox $bg="#fce7f3">
                                        <Phone color="#FF6B9D" size={32} />
                                    </IconBox>
                                    <InfoTitle>Telefone</InfoTitle>
                                    <InfoText>Ligue para nós durante o horário comercial.</InfoText>
                                    <InfoLink href="tel:+5511999999999" $color="#FF6B9D">
                                        +55 (11) 99999-9999
                                    </InfoLink>
                                </CardElevated>
                            </FadeInUp>

                            <FadeInUp $delay="0.2s">
                                <CardElevated>
                                    <IconBox $bg="#cffafe">
                                        <MapPin color="#00b8d9" size={32} />
                                    </IconBox>
                                    <InfoTitle>Localização</InfoTitle>
                                    <InfoText style={{ marginBottom: 0 }}>
                                        Rua da Inovação, 123<br />
                                        São Paulo, SP 01310-100<br />
                                        Brasil
                                    </InfoText>
                                </CardElevated>
                            </FadeInUp>
                        </InfoColumn>

                        <FadeIn>
                            <FormCard>
                                <FormTitle>Envie uma Mensagem</FormTitle>

                                {submitted ? (
                                    <SuccessBox>
                                        <SuccessIcon>✓</SuccessIcon>
                                        <SuccessTitle>Mensagem Enviada!</SuccessTitle>
                                        <SuccessText>
                                            Obrigado por entrar em contato. Responderemos em breve!
                                        </SuccessText>
                                    </SuccessBox>
                                ) : (
                                    <Form onSubmit={handleSubmit}>
                                        <Field>
                                            <Label htmlFor="name">Nome Completo</Label>
                                            <Input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="Seu nome"
                                            />
                                        </Field>

                                        <Field>
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="seu@email.com"
                                            />
                                        </Field>

                                        <Field>
                                            <Label htmlFor="phone">Telefone (Opcional)</Label>
                                            <Input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="(11) 99999-9999"
                                            />
                                        </Field>

                                        <Field>
                                            <Label htmlFor="subject">Assunto</Label>
                                            <Select
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Selecione um assunto</option>
                                                <option value="duvida">Dúvida sobre Materiais</option>
                                                <option value="formacao">Informações sobre Formação</option>
                                                <option value="colaboracao">Proposta de Colaboração</option>
                                                <option value="outro">Outro</option>
                                            </Select>
                                        </Field>

                                        <Field>
                                            <Label htmlFor="message">Mensagem</Label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={6}
                                                placeholder="Sua mensagem aqui..."
                                            />
                                        </Field>

                                        <SubmitButton type="submit">
                                            <Send size={20} />
                                            Enviar Mensagem
                                        </SubmitButton>
                                    </Form>
                                )}
                            </FormCard>
                        </FadeIn>
                    </ContactGrid>
                </Container>
            </Section>

            <Section $bg="#F9FAFB">
                <Container>
                    <SectionTitle $center $mb="3rem"><GradientText>Perguntas Frequentes</GradientText></SectionTitle>

                    <FaqGrid>
                        {faqs.map((faq, index) => (
                            <FadeInUp key={faq.question} $delay={`${index * 0.1}s`}>
                                <CardElevated>
                                    <FaqTitle>{faq.question}</FaqTitle>
                                    <p style={{ color: '#4B5563' }}>{faq.answer}</p>
                                </CardElevated>
                            </FadeInUp>
                        ))}
                    </FaqGrid>
                </Container>
            </Section>

            <CtaSection>
                <Container>
                    <SectionTitle $center $mb="1.5rem" style={{ color: 'white' }}>
                        Vamos Transformar a Educação Juntos!
                    </SectionTitle>
                    <p style={{ fontSize: '1.25rem', maxWidth: '42rem', margin: '0 auto', color: '#f3f4f6' }}>
                        Sua mensagem é importante para nós. Responderemos em breve.
                    </p>
                </Container>
            </CtaSection>
        </>
    );
}
