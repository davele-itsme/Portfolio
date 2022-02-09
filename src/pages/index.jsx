import * as React from "react";
import styled from "styled-components";
import Parallax from "parallax-js";
import { useRef, useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const StyledH1 = styled.h1`
  @import "../styles/typography.css";
  font-family: "Futura", sans-serif;
  font-weight: bold;
  font-size: 5vw;
  animation: text 3s alternate 1;
  margin-block: 0.2em;
`;

const StyledH2 = styled.h2`
  @import "../styles/typography.css";
  font-family: "Futura", sans-serif;
  font-weight: bold;
  font-size: 3vw;
`;

const StyledP = styled.p`
  @import "../styles/typography.css";
  font-family: "Futura light", sans-serif;
  font-size: 1.5vw;
  margin: 10px;
  animation: text 0.8s both;
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
      <ReactFullpage
        render={() => (
          <ReactFullpage.Wrapper>
            <div data-anchor="main" className="section">
              <div id="main-content">
                <div className="animated-logo">
                  <StyledH1>DAVID LE</StyledH1>
                  <div className="moving-area">
                    <div className="moving-line" />
                  </div>
                </div>
                <StyledP>software engineer</StyledP>
              </div>
              <a href="#about" aria-label="Scroll icon" className="scroll-icon">
                <span />
              </a>
            </div>
            <div data-anchor="about" className="section">
              <p>Section 2</p>
            </div>
            <div data-anchor="work" className="section">
              <p>Section 3</p>
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
      <div id="moon-content" ref={sceneEl}>
        <img
          src="moon-ring.png"
          alt="Moon ring"
          data-depth="0.2"
          id="moon-ring"
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
