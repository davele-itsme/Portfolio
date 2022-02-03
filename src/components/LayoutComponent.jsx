import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Header from "./HeaderComponent";
import "../styles/layout.css";

const StyledMain = styled.main`
  width: 100%;
  height: 100vh;
`;

function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  return (
    <>
      <Header author={data.site.siteMetadata?.author} />
      <Container>
        <StyledMain>{children}</StyledMain>
      </Container>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
