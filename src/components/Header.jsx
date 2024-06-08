import React, { useState } from "react";
import PropTypes from "prop-types";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import NavMenu from "./NavMenu";
import NavToggler from "./NavToggler";
import { StyledA, StyledHeader, StyledLogo } from "./StyledFonts";

function Header({ author }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <StyledHeader>
      <div>
        <StyledLogo>
          <img height="30px" src="favicon.png" alt="Logo" />
        </StyledLogo>
        <StyledLogo>{author}</StyledLogo>
      </div>

      {isNavOpen ? (
        <NavMenu setIsNavOpen={() => setIsNavOpen(!isNavOpen)} />
      ) : null}

      <div className="row-div">
        <StyledA
          href="https://github.com/davele-itsme"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <AiFillGithub fontSize="2em" />
        </StyledA>

        <StyledA
          href="https://www.linkedin.com/in/dave-le/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
        >
          <AiFillLinkedin fontSize="2em" />
        </StyledA>

        <StyledA
          href="mailto: ledaodavid@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Mail"
        >
          <AiFillMail fontSize="2em" />
        </StyledA>

        <NavToggler
          onClick={() => setIsNavOpen(!isNavOpen)}
          isOpen={isNavOpen}
        />
      </div>
    </StyledHeader>
  );
}

Header.propTypes = {
  author: PropTypes.string,
};

Header.defaultProps = {
  author: "David Le",
};

export default Header;
