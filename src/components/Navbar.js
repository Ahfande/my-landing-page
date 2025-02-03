import React from 'react';
import useActiveNavigation from '../hooks/useActiveNavigation';

function Navbar() {
  const activeSection = useActiveNavigation();

  return (
    <nav className="Navbar">
      <h3 className="Logo">Ahfande</h3>
      <div className="ListNav">
        <a 
          href="#home" 
          className={activeSection === 'home' ? 'active' : ''}
        >
          Home
        </a>
        <a 
          href="#about" 
          className={activeSection === 'about' ? 'active' : ''}
        >
          About
        </a>
        <a 
          href="#skills" 
          className={activeSection === 'skills' ? 'active' : ''}
        >
          Skills
        </a>
        <a 
          href="#project" 
          className={activeSection === 'project' ? 'active' : ''}
        >
          Project
        </a>
        <a 
          href="#contact" 
          className={activeSection === 'contact' ? 'active' : ''}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;