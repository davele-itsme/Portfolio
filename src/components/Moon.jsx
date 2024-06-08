import React from "react";
import PropTypes from "prop-types";
import { StyledH2 } from "./StyledFonts";

function Moon({ sceneEl }) {
  return (
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
  );
}

Moon.propTypes = {
  sceneEl: PropTypes.isRequired,
};

export default Moon;
