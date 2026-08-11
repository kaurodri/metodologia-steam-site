import styled, { css } from 'styled-components';

export const FadeIn = styled.div`
    animation: fadeIn 0.6s ease-in-out;
    animation-delay: ${({ $delay }) => $delay || '0s'};
    animation-fill-mode: both;
`;

export const FadeInUp = styled.div`
    animation: fadeInUp 0.6s ease-in-out;
    animation-delay: ${({ $delay }) => $delay || '0s'};
    animation-fill-mode: both;
`;

export const GradientText = styled.span`
    background: ${({ theme }) => theme.gradients.primary};
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
`;

const buttonBase = css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
        transform: scale(1.05);
    }
`;

export const ButtonPrimary = styled.button`
    ${buttonBase}
    background: ${({ theme }) => theme.colors.purple};
    color: white;

    &:hover {
        background: ${({ theme }) => theme.colors.purpleDark};
    }
`;

export const ButtonSecondary = styled.button`
    ${buttonBase}
    background: ${({ theme }) => theme.colors.pink};
    color: white;

    &:hover {
        background: ${({ theme }) => theme.colors.pinkDark};
    }
`;

export const ButtonAccent = styled.button`
    ${buttonBase}
    background: ${({ theme }) => theme.colors.cyan};
    color: ${({ theme }) => theme.colors.gray.x900};

    &:hover {
        background: ${({ theme }) => theme.colors.cyanDark};
    }
`;

export const ButtonWhite = styled.button`
    ${buttonBase}
    background: white;
    color: ${({ theme }) => theme.colors.purple};

    &:hover {
        background: ${({ theme }) => theme.colors.gray.x100};
        transform: scale(1.05);
    }
`;

export const ButtonOutlineWhite = styled.button`
    ${buttonBase}
    background: transparent;
    color: white;
    border: 2px solid white;

    &:hover {
        background: white;
        color: ${({ theme }) => theme.colors.purple};
    }
`;

export const CardElevated = styled.div`
    background: white;
    border-radius: 0.75rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07), 0 10px 15px -3px rgba(0, 0, 0, 0.05);
    padding: 2rem;
    transition: box-shadow 0.3s ease, transform 0.3s ease;

    &:hover {
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
    }
`;

export const HeroSection = styled.section`
    position: relative;
    min-height: ${({ $tall }) => ($tall ? '100vh' : 'auto')};
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: ${({ theme }) => theme.gradients.primary};
    padding: ${({ $tall }) => ($tall ? '0' : '4rem 0')};
`;

export const Section = styled.section`
    padding: 5rem 0;
    background: ${({ $bg }) => $bg || 'white'};
`;

export const SectionTitle = styled.h2`
    font-size: 2.5rem;
    text-align: ${({ $center }) => ($center ? 'center' : 'left')};
    margin-bottom: ${({ $mb }) => $mb || '1rem'};

    @media (min-width: 768px) {
        font-size: 3rem;
    }
`;

export const Badge = styled.span`
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 600;
    background: ${({ $bg }) => $bg || '#F3F4F6'};
    color: ${({ $color }) => $color || '#374151'};
`;

export const IconBox = styled.div`
    display: inline-block;
    padding: 1rem;
    border-radius: 0.5rem;
    background: ${({ $bg }) => $bg || '#F3F4F6'};
    margin-bottom: 1rem;
`;
