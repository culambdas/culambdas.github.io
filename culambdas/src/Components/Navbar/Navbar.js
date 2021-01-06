import './navbar.css';
import Crest from '../../static/images/Crest.png';
import { VscMenu } from 'react-icons/vsc';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
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
        <a href="/">
          <img src={Crest} alt="lfecrest" />
        </a>
        <div className="nav-toggle">
          <VscMenu
            onClick={openNav}
            style={{ color: 'white', cursor: 'pointer' }}
          ></VscMenu>
        </div>
      </div>

      <div id="navOverlay" className="nav-menu">
        {/* <!-- Button to close the overlay navigation --> */}
        <AiOutlineClose className="closebtn" onClick={closeNav} />
        {/* <!-- Overlay content --> */}
        <div className="nav-menu-content">
          <a href="#about">About</a>
          <a href="active-house">Active House</a>
          <a href="#experience">Roster</a>
          <a href="#projects">Rush</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
