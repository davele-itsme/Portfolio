import * as React from "react";
import Parallax from "parallax-js";
import { useRef, useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { P, StyledH1, StyledH2, StyledP } from "../components/StyledFonts";
import Moon from "../components/Moon";

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
              <div className="content">
                <div className="animated-logo">
                  <StyledH1>DAVID LE</StyledH1>
                  <div className="moving-area">
                    <div className="moving-line" />
                  </div>
                </div>
                <StyledP>/ Product-minded Software Engineer</StyledP>
                <img src="profile.png" alt="Profile" id="profile" />
              </div>
            </div>
            <div data-anchor="about" className="section">
              <div className="content">
                <StyledH2>About me</StyledH2>
                <P>
                  A product-minded engineer, advocate for continuous learning
                  and dreamer. Have several years of experience in FinTech
                  working with Stripe and Adyen. I love exploring new
                  technologies and working with them. I seek out ways to
                  contribute to meaningful projects with talented people, and I
                  derive a lot of pride and satisfaction solving challenging
                  problems.
                </P>
              </div>
            </div>
            <div data-anchor="work" className="section">
              <div className="content">
                <StyledH2>Projects & Skills</StyledH2>
              </div>
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
      <div id="slider-scroll-down">
        SCROLL DOWN
        <span id="bounce-line" />
      </div>
      <Moon sceneEl={sceneEl} />
    </Layout>
  );
}

export default IndexPage;
