import * as React from "react";
import PropTypes from "prop-types";
import NavigationBar from "./navbar";

const Header = ({ author }) => (
  <header>
    <NavigationBar author={author}></NavigationBar>
  </header>
);

Header.propTypes = {
  author: PropTypes.string,
};

Header.defaultProps = {
  author: "David Le",
};

export default Header;
