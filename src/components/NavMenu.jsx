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
  transition: .2s all ease-in-out;
  
  user-select: none;

  &:hover {
    transition: .2s all ease-in-out;
    color: #4a586b;
  }
`;

function NavMenu() {
  const { menu } = navLinks;
  return (
    <StyledNavMenu>
      {menu.map(({ name, url }) => (
        <StyledLink to={url}>{name}</StyledLink>
      ))}
    </StyledNavMenu>
  );
}

export default NavMenu;
