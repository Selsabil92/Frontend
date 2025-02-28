import React from 'react';
import './Navbar.css';  // Import du fichier CSS

function Navbar() {
  return (
    <nav className="navbar">
      <img src="/assets/Pentest.png" alt="Pentest Logo" className="logo" />
      <h2>PenTest App</h2>
    </nav>
  );
}

export default Navbar;
