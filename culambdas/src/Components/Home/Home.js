import './home.css';
import smoke from '../../assets/images/smoke.mp4';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <section id="home">
      <div>
        <video className="smoke" autoPlay loop muted>
          <source src={smoke} type="video/mp4" />
        </video>
        <div className="splash-text fade-in">
          <span className="lfe-splash-text">&Lambda; &Phi; &Epsilon;</span>
          <br />
          <span className="cornell-university-splash-text">
            Cornell University | Alpha Kappa Chapter
          </span>
          <br />
          <span className="est-splash-text">EST. 11.14.1999</span>
        </div>
      </div>

      <div className="flex-container" style={{ marginTop: 80, display: 'inline-flex' }}>
        <div className="col-5">
          <img
            src={require('../../assets/images/president.jpg').default}
            alt="President"
            style={{ width: '400px', display: 'block', margin: 'auto'}}

          />
        </div>
        <div className="col-6 justify-text">
          <h2>Letter from our Chapter President</h2>
          <p>
            Welcome to the official website for the Cornell University: Alpha Kappa Chapter of Lambda Phi Epsilon International Fraternity, Inc. 
            It is an honor to serve as Alpha Kappa chapter’s President for 2023. 
            Throughout my time at Cornell, I have seen this chapter cross a multitude of passionate, dedicated, and talented brothers, 
            and I am excited to witness and contribute to our chapter’s bright future. The Alpha Kappa chapter has remained a strong beacon of leadership, philanthropy, 
            and cultural awareness on campus and has continued to provide a welcoming environment for young men of Asian descent to bond and grow together. 
            Our active house is uniquely diverse, yet united in our passion for our brotherhood. 
            As President, I intend to capitalize on this diversity and utilize each brother’s individual strengths to further solidify our position on 
            campus as Leaders Among Men. Lambda Phi Epsilon has shaped me into the man I am today and provided me with a lifelong family, 
            and I am endlessly grateful for the opportunity to be a part of this eternal brotherhood.
          </p>
          <p>
            Thank you for taking the time to learn about my thoughts on Lambda Phi Epsilon. 
            Please feel free to navigate through this website to learn more about our brothers, 
            activities, and core values to get further insight into our brotherhood. 
            If you find yourself with any questions or concerns, please feel comfortable to 
            reach out to any of the executive board, active brothers, or alumni.
          </p>
          <h4>
            Ryan "Point Blank" Wong
            <br />
            Chapter President
          </h4>
        </div>
      </div>

      <div className="home-grid">
        <div className="home-grid-item" onClick={() => navigate('about')}>
          <img
            src={require('../../assets/images/about.jpg').default}
            alt="About"
          />

          <div className="home-grid-caption">
            <h3>ABOUT US</h3>
            <p>Our History &#38; Mission</p>
          </div>
        </div>
        <div
          className="home-grid-item"
          onClick={() => navigate('active-house')}
        >
          <img
            src={require('../../assets/images/active-house.jpg').default}
            alt="Active House"
          />

          <div className="home-grid-caption">
            <h3>ACTIVE HOUSE</h3>
            <p>Meet the brothers</p>
          </div>
        </div>
        <div className="home-grid-item" onClick={() => navigate('leadership')}>
          <img
            src={require('../../assets/images/leadership.jpg').default}
            alt="Leadership"
          />

          <div className="home-grid-caption">
            <h3>LEADERSHIP</h3>
            <p>The executive board</p>
          </div>
        </div>
        <div className="home-grid-item" onClick={() => navigate('rush')}>
          <img
            src={require('../../assets/images/rush.jpeg').default}
            alt="Rush"
          />

          <div className="home-grid-caption">
            <h3>RUSH</h3>
            <p>Learn more</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
