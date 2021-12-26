import { Link } from "gatsby";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { navLinks } from "../../config";
import PropTypes from "prop-types";

const NavigationBar = ({ author }) => {
  const { menu } = navLinks;
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="/">{author}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" as="ul">
          {menu.map(({ name, url }, key) => {
            return (
              <Nav.Item as="li" key={key}>
                <Link to={url} className="nav-link" activeClassName="active">
                  {name}
                </Link>
              </Nav.Item>
            );
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

NavigationBar.propTypes = {
  author: PropTypes.string,
};

NavigationBar.defaultProps = {
  author: "David Le",
};

export default NavigationBar;
