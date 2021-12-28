import React from "react";
import Burger from "@animated-burgers/burger-slip";
import "@animated-burgers/burger-slip/dist/styles.css";
import PropTypes from "prop-types";
import "../styles/layout.css";

function NavToggler({ isOpen, onClick }) {
  return <Burger isOpen={isOpen} onClick={onClick} className="burger" />;
}

NavToggler.propTypes = {
  isOpen: PropTypes.bool,
  // eslint-disable-next-line
  onClick(props, propName) {
    const fn = props[propName];
    if (
      !fn.prototype ||
      (typeof fn.prototype.constructor !== "function" &&
        fn.prototype.constructor.length !== 2)
    ) {
      return new Error(`${propName}must be a function with 2 args`);
    }
  },
};

NavToggler.defaultProps = {
  isOpen: false,
};

export default NavToggler;
