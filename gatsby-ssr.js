import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import Theme from "./content/themes/theme";

// eslint-disable-next-line
export const wrapRootElement = ({ element }) => (
  // eslint-disable-next-line
  <ThemeProvider theme={Theme}>{element}</ThemeProvider>
);
