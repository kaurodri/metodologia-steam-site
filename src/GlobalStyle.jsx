import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: white;
        color: ${({ theme }) => theme.colors.text};

        display: block;
        font-family: ${({ theme }) => theme.fonts.body};
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: ${({ theme }) => theme.fonts.heading};
        font-weight: 700;
    }

    a {
        color: inherit;
    }

    button {
        font-family: inherit;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
