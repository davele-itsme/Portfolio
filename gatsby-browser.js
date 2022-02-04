import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Theme from "./content/themes/theme";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    body, html {
        font-family: ${(props) => props.theme.fonts.main};
        height: 100%;
        color: ${(props) => props.theme.colors.font};
    }

    a {
        color: ${(props) => props.theme.colors.font};
    }
`;

// eslint-disable-next-line
export const wrapRootElement = ({ element }) => (
  // eslint-disable-next-line
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
);
