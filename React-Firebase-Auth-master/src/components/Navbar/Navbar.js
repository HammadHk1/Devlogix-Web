import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <h1>My App</h1>
      </div>
      <ul className="navbar__links">
        <li className="navbar__link">Home</li>
        <li className="navbar__link">About</li>
        <li className="navbar__link">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
