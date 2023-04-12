import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { GrFormClose } from 'react-icons/gr';
import '../css/_navbar.css';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <span>&#10100; zamfir.dev &#10101;</span>
        </div>
        <div
          className={`menu-icon ${showNavbar && 'active'}`}
          onClick={handleShowNavbar}
        >
          <BiMenu />
        </div>
        <div
          className={`close-icon ${showNavbar && 'active'}`}
          onClick={handleShowNavbar}
        >
          <GrFormClose />
        </div>

        <div className={`nav-elements ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Contacts</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
