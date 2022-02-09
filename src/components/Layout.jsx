import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Header from "./Header";
import "../styles/layout.css";

const StyledMain = styled.main`
  width: 100%;
  height: 100%;
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
      <StyledMain>{children}</StyledMain>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
