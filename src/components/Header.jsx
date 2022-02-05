import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import NavMenu from "./NavMenu";
import NavToggler from "./NavToggler";

const StyledHeader = styled.header`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
  height: 10vh;
`;

const StyledLogo = styled.span`
  @import "../styles/typography.css";
  font-family: "Futura light", sans-serif;
  font-size: 1.5em;

  &:hover {
    cursor: pointer;
    transition: 0.2s all ease-in-out;
    color: #4a586b;
  }
`;

const StyledA = styled.a`
  margin-right: 10px;
  &:hover {
    cursor: pointer;
    transition: 0.2s all ease-in-out;
    color: #4a586b;
  }
`;

function Header({ author }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <StyledHeader>
      <StyledLogo>{author}</StyledLogo>
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
