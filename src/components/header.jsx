import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import NavMenu from "./NavMenu";
import NavToggler from "./NavToggler";

const StyledHeader = styled.header`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
`;

const StyledLogo = styled.span`
  @import "../styles/typography.css";
  font-family: "Futura", sans-serif;
  font-size: 1.5em;

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

      <NavToggler onClick={() => setIsNavOpen(!isNavOpen)} isOpen={isNavOpen} />
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
