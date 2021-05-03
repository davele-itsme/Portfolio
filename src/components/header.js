import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import NavigationBar from "./navbar"

const Header = ({ author }) => (
  <header>
    <NavigationBar author={author}></NavigationBar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
