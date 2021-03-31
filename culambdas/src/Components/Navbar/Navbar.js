import './navbar.css';
import { Component } from 'react';
import Crest from '../../assets/images/Crest.png';
import { Link } from 'react-router-dom';
import { VscMenu } from 'react-icons/vsc';
import { AiOutlineClose } from 'react-icons/ai';

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }
  openNav() {
    document.body.style.overflow = 'hidden'; // firefox, chrome
    document.body.scroll = 'no'; // ie only
    document.getElementById('navOverlay').style.width = '100%';
  }

  closeNav() {
    document.body.style.overflow = ''; // firefox, chrome
    document.body.scroll = 'yes'; // ie only
    document.getElementById('navOverlay').style.width = '0%';
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const viewportWidth = document.documentElement.clientWidth;
    const viewportHeight = document.documentElement.clientHeight;
    if (viewportWidth > 1008) {
      if (window.scrollY > viewportHeight) {
        document.querySelector('.nav-toggle').className = 'nav-toggle scroll';
      } else {
        document.querySelector('.nav-toggle').className = 'nav-toggle';
      }
    } else if (512 <= viewportWidth <= 1008) {
      if (window.scrollY > viewportHeight * 0.7) {
        document.querySelector('.nav-toggle').className = 'nav-toggle scroll';
      } else {
        document.querySelector('.nav-toggle').className = 'nav-toggle';
      }
    } else {
      if (window.scrollY > viewportHeight * 0.5) {
        document.querySelector('.nav-toggle').className = 'nav-toggle scroll';
      } else {
        document.querySelector('.nav-toggle').className = 'nav-toggle';
      }
    }
  };

  render() {
    return (
      <>
        <div id="navbar">
          <Link to="/">
            <img src={Crest} alt="lfecrest" />
          </Link>
          <div className="nav-toggle">
            <VscMenu onClick={this.openNav}></VscMenu>
          </div>
        </div>

        <div id="navOverlay" className="nav-menu">
          {/* <!-- Button to close the overlay navigation --> */}
          <AiOutlineClose className="closebtn" onClick={this.closeNav} />
          {/* <!-- Overlay content --> */}
          <div className="nav-menu-content">
            <a href="/">Home</a>
            <a href="#about">About</a>
            <a href="#leadership">Leadership</a>
            <a href="active-house">Active House</a>
            <a href="roster">Roster</a>
            <a href="#rush">Rush</a>
          </div>
        </div>
      </>
    );
  }
}
