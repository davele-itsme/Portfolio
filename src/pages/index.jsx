import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Parallax from "parallax-js";
import { useRef, useEffect } from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const StyledContent = styled.div`
  height: 100%;
  width: 100%;
`;

const StyledH1 = styled.h1`
  @import "../styles/typography.css";
  font-family: "Futura", sans-serif;
  font-weight: bold;
  font-size: 5vw;
  animation: text 3s alternate 1;
`;

const StyledH2 = styled.h2`
  @import "../styles/typography.css";
  font-family: "Futura", sans-serif;
  font-weight: bold;
  font-size: 3vw;
`;

const StyledH4 = styled.h4`
  @import "../styles/typography.css";
  font-family: "Futura light", sans-serif;
  margin-top: 20px;
  font-size: 2vw;
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
      <StyledContent>
        <div id="maincontent">
          <div className="animatedlogo">
            <StyledH1>DAVID LE</StyledH1>
          </div>
          <StyledH4>software engineer</StyledH4>
          <p>
            <Link to="/about/">About</Link> <br />
            <Link to="/work/">Work</Link> <br />
            <Link to="/contact/">Contact</Link>
          </p>
        </div>
      </StyledContent>
      <div id="mooncontent" ref={sceneEl}>
        <img
          src="moon-ring.png"
          alt="Moon ring"
          data-depth="0.2"
          id="moonring"
        />
        <img src="stars.png" alt="Stars" data-depth="0.1" id="stars" />
        <img src="moon.png" alt="Moon" data-depth="0.2" id="moon" />
        <img src="clouds.png" alt="Clouds" data-depth="0.3" id="clouds" />
        <StyledH2 data-depth="0.05" id="portfolio">
          PORTFOLIO
        </StyledH2>
      </div>
    </Layout>
  );
}

export default IndexPage;
