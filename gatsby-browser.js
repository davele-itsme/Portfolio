import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Theme from "./content/themes/theme"

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    body, html {
        font-family: ${props => props.theme.fonts.main};
        height: 100%;
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.font};
    }

    a {
        color: ${props => props.theme.colors.font};
    }
`

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
)
