import * as React from "react";
import Parallax from "parallax-js";
import { useRef, useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { ReactTyped } from "react-typed";
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
                <StyledP>
                  <ReactTyped
                    strings={[
                      "/ Product-minded Software Engineer",
                      "/ FinTech domain expert",
                      "/ Advocate for continuous learning",
                      "/ Dreamer",
                    ]}
                    typeSpeed={40}
                    backSpeed={25}
                    loop
                  />
                </StyledP>
                <img src="profile.png" alt="Profile" id="profile" />
              </div>
            </div>
            <div data-anchor="about" className="section">
              <div className="content">
                <StyledH2>My story,</StyledH2>
                <P>
                  Currently, I work at Mews, where I grew up from Junior
                  Engineer into Senior Backend Engineer within 2,5 years. Here I
                  focus on crafting thoughtful and inclusive payment experiences
                  that adhere to web standards for over 5 000 businesses and 2
                  000 000 guests all around the world.
                  <br />
                  <br />
                  Before now, I was intern Backend Engineer at Kamstrup, where I
                  worked on a suite of data analytics tools and services
                  tailored towards customers in Europe.
                  <br />
                  <br />
                  My current goal is to broaden and deepen my technical
                  expertise, by becoming full-stack engineer, that would enable
                  me to work on projects with much broader perspective and by
                  becoming a staff engineer, engaging on complex problems and
                  having broader impact.
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
