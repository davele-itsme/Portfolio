import * as React from "react";
import PropTypes from "prop-types";
import NavigationBar from "./navbar";

function Header({ author }) {
  return (
    <header>
      <NavigationBar author={author} />
    </header>
  );
}

Header.propTypes = {
  author: PropTypes.string,
};

Header.defaultProps = {
  author: "David Le",
};

export default Header;
