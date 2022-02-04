import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Parallax from "parallax-js";
import { useRef, useEffect } from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const StyledH1 = styled.h1`
  @import "../styles/typography.css";
  font-family: "Futura", sans-serif;
  font-size: 5vw;
  animation: text 3s alternate 1;
`;

function IndexPage() {
  const sceneEl = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
    });

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);

  return (
    <Layout>
      <Seo title="David Le" />
      <div className="animatedlogo">
        <StyledH1>DAVID LE</StyledH1>
      </div>
      <div ref={sceneEl}>
        <div data-depth="0.2">My first Layer!</div>
        <div data-depth="0.6">My second Layer!</div>
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
