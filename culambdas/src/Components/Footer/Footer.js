import React from 'react';
import '../../assets/styles.css';
import './footer.css';
import { useNavigate } from 'react-router-dom';
import Crest from '../../assets/images/Crest.png';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer id="footer">
      <div className="footer-content">
        <h3>Website Navigation</h3>
        <ul>
          <li onClick={() => navigate('/')}>Home</li>
          <li onClick={() => navigate('/about')}>About</li>
          <li onClick={() => navigate('/leadership')}>Leadership</li>
          <li onClick={() => navigate('/active-house')}>Active House</li>
          <li onClick={() => navigate('/roster')}>Roster</li>
          <li onClick={() => navigate('/rush')}>Rush</li>
        </ul>
      </div>

      <div className="footer-content">
        <h3>Get In Touch</h3>
        <ul>
          <li>
            <a href="mailto:aklphie@gmail.com">
              <i className="icon-gmail"></i> aklphie@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/aklphie"
              target="_blank"
              rel="noreferrer"
            >
              <i className="icon-facebook"></i> CULFE Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/culambdas/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="icon-instagram1"></i> @culambdas
            </a>
          </li>
          <li>
            <a
              href="https://lambdaphiepsilon.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="footer-crest"
                src={Crest}
                alt="Footer Crest"
              ></img>{' '}
              National Website
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-content">
        <h3>© 2026 Cornell Lambda Phi Epsilon</h3>
        <p>Site created by Jongwan Kim &#38; Samuel Lye</p>
      </div>
    </footer>
  );
};

export default Footer;
