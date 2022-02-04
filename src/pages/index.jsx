import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const StyledH1 = styled.h1`
  @import "../styles/typography.css";
  font-family: "Futura", sans-serif;
  font-size: 5vw;
  animation: text 3s alternate 1;
`;

function IndexPage() {
  return (
    <Layout>
      <Seo title="David Le" />
      <div className="animatedlogo">
        <StyledH1>DAVID LE</StyledH1>
      </div>

      <p>Curious Software Engineering Major based in Europe</p>
      <p>
        <Link to="/about/">About</Link> <br />
        <Link to="/work/">Work</Link>
        <Link to="/contact/">Contact</Link>
      </p>
    </Layout>
  );
}

export default IndexPage;
