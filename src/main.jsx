import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Materiais, Formacao, Contato, NotFound } from './pages';
import { theme } from './Theme.jsx';
import App from './App.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "materiais",
        element: <Materiais />,
      },
      {
        path: "formacao",
        element: <Formacao />,
      },
      {
        path: "contato",
        element: <Contato />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
