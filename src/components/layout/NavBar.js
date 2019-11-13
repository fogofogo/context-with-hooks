import React from "react";
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


const NavBar = ({title}) => {

  return (
    <nav className="navbar bg-primary">
      <h1> {title}</h1>
      <ul>
        <li><Link to='/' >home</Link></li>
        <li><Link to='/about' >about</Link></li>
      </ul>
    </nav>
  );
}

NavBar.defaultProps = {
  title: "github"
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired
};

export default NavBar;
