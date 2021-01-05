import './navbar.css';
import { useState } from 'react';
import { FcMenu } from 'react-icons/fc';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [opened, toggleOpen] = useState(false);

  const openNav = () => {
    document.documentElement.style.overflow = 'hidden'; // firefox, chrome
    document.body.scroll = 'no'; // ie only
    document.getElementById('navOverlay').style.width = '100%';
  };

  const closeNav = () => {
    document.documentElement.style.overflow = 'auto'; // firefox, chrome
    document.body.scroll = 'yes'; // ie only
    document.getElementById('navOverlay').style.width = '0%';
  };

  return (
    <>
      <div id="navbar">
        <div className="nav-toggle">
          <FcMenu onClick={openNav} style={{ cursor: 'pointer' }}></FcMenu>
        </div>
      </div>

      <div id="navOverlay" className="nav-menu">
        {/* <!-- Button to close the overlay navigation --> */}
        <AiOutlineClose className="closebtn" onClick={closeNav} />
        {/* <!-- Overlay content --> */}
        <div className="nav-menu-content">
          <a href="#about">About</a>
          <a href="#skills">Active House</a>
          <a href="#experience">Roster</a>
          <a href="#projects">Rush</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
