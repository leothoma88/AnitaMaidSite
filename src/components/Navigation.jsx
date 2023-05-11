import React from 'react';
// Here we are importing a CSS file as a dependency

import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className="topnav flex bg-blue-700">
            <Link className="active" to='/AnitaMaidSite'>About Us</Link>
            <Link className="active" to='/contact'>Cleaning Services</Link>
            <Link className="active" to='/portfolio'>Vacation Rental Management</Link>
            <Link className="active" to='/request'>Request Cleaning</Link>
          </div>
  );
}

export default Navbar;