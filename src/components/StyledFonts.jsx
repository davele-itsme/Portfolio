import styled from "styled-components";

export const StyledH1 = styled.h1`
  @import "../styles/typography.css";
  font-family: "Futura", sans-serif;
  font-weight: bold;
  font-size: 4vw;
  animation: text 3s alternate 1;
  margin-block: 0.2em;
`;

export const StyledH2 = styled.h2`
  @import "../styles/typography.css";
  font-family: "Futura", sans-serif;
  font-weight: bold;
  font-size: 2.5vw;
`;

export const StyledP = styled.p`
  @import "../styles/typography.css";
  font-family: "Futura light", sans-serif;
  font-size: 1vw;
  animation: text 0.8s both;
`;

export const P = styled.p`
  @import "../styles/typography.css";
  font-family: "Futura light", sans-serif;
  font-size: 0.8vw;
`;

export const StyledHeader = styled.header`
  position: fixed;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
  height: 10vh;
  z-index: 1;
`;

export const StyledLogo = styled.span`
  @import "../styles/typography.css";
  font-family: "Futura light", sans-serif;
  font-size: 1.5em;

  &:hover {
    cursor: pointer;
    transition: 0.2s all ease-in-out;
    color: #4a586b;
  }
`;

export const StyledA = styled.a`
  margin-right: 10px;
  color: white;
  &:hover {
    cursor: pointer;
    transition: 0.2s all ease-in-out;
    color: #4a586b;
  }
`;
