import React from 'react';
// Here we are importing a CSS file as a dependency

import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className="topnav flex">
            <Link className="active" to='/'>About Us</Link>
            <Link className="active" to='/portfolio'>Vacation Rental Management</Link>
            <Link className="active" to='/contact'>Cleaning Services</Link>
            <Link className="active" to='/resume'>Request Cleaning</Link>
          </div>
  );
}

export default Navbar;