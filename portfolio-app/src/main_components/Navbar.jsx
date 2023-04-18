import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { GrFormClose } from 'react-icons/gr';
import '../css/_navbar.css';

function Navbar({ scroll }) {
  const [showNavbar, setShowNavbar] = useState(false);
  const [selected, setSelected] = useState(false);

  const handleSelectedTab = (tabName) => {
    setSelected(tabName);
  };

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div
          className="logo"
          onClick={() => {
            scroll('homeId');
          }}
        >
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
              <a
                className={`${selected === 'home' ? 'tabClicked' : ''}`}
                href="#home"
                onClick={() => {
                  scroll('homeId');
                  handleShowNavbar();
                  handleSelectedTab('home');
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className={`${selected === 'about' ? 'tabClicked' : ''}`}
                href="#about"
                onClick={() => {
                  scroll('aboutId');
                  handleShowNavbar();
                  handleSelectedTab('about');
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                clicked={selected}
                className={`${selected === 'projects' ? 'tabClicked' : ''}`}
                href="#projects"
                onClick={() => {
                  scroll('projectsId');
                  handleShowNavbar();
                  handleSelectedTab('projects');
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className={`${selected === 'contacts' ? 'tabClicked' : ''}`}
                href="#contacts"
                onClick={() => {
                  scroll('contactsId');
                  handleShowNavbar();
                  handleSelectedTab('contacts');
                }}
              >
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
