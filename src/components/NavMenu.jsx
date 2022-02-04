import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { navLinks } from "../../config";

const StyledNavMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  background-color: #020b16;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: #FFFFFF;
  text-decoration: none;
  font-size: clamp(3rem, 4vw, 6vw);
  font-family: Impact; Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  animation: text 1.6s alternate 1;

  user-select: none;

  &:hover {
    transition: .3s all ease-in-out;
    color: #4a586b;
  }
`;

function NavMenu() {
  return (
    <StyledNavMenu>
      {navLinks.map(({ name, url }) => (
        <StyledLink to={url}>{name}</StyledLink>
      ))}
    </StyledNavMenu>
  );
}

export default NavMenu;
