import './home.css';
import smoke from '../../assets/images/smoke.mp4';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  let navigate = useNavigate();

  return (
    <section id="home">
      <div className="home-screen">
        <video className="hero" autoPlay loop muted>
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

      <div className="president-letter">
        <div className="col-3">
          <img src={require('../../assets/images/president.jpg').default}></img>
        </div>
        <div className="col-7 president-letter-text">
          <h2>Letter from our Chapter President</h2>
          <p>
            On behalf of the brothers, I would like to welcome you to the
            official website for the Cornell University – Alpha Kappa Chapter of
            Lambda Phi Epsilon International Fraternity, Inc. It is an honor to
            not only be a part of Lambda Phi Epsilon, but also to be serving as
            Alpha Kappa chapter’s President for 2020. Throughout my time at
            Cornell, I have seen this chapter cross a multitude of competent and
            dedicated brothers, and I am excited to witness our chapter’s bright
            future. Despite the volatile climate surrounding Greek life at many
            universities nowadays, Alpha Kappa chapter has remained strong and
            has steadily provided a comfortable, welcoming space for young men
            of Asian descent on campus to congregate and grow together. Our
            active house is uniquely diverse, yet united in our passion for our
            brotherhood — a heterogeneous, yet homogeneous mixture of ambition
            and dedication. As President, I intend to capitalize on this
            diversity and each brother’s individual strengths and further
            solidify our position on campus as Leaders Among Men. Lambda Phi
            Epsilon has shaped me into the man I am today and provided me with a
            lifelong family, and I am endlessly grateful for the opportunity to
            be a part of this eternal brotherhood.
          </p>
          <p>
            Thank you for taking the time to learn about my thoughts on Lambda
            Phi Epsilon. Please feel free to navigate around this website to
            learn even more about our brothers and what we do to display our
            sense of brotherhood. If you find yourself with any questions or
            concerns, feel free to reach out to the executive board and they
            will gladly help you.
          </p>
          <h4>
            Simon "Apex" Liu
            <br />
            Chapter President
          </h4>
        </div>
      </div>

      <div className="learn-more">
        <div className="learn-more-item" onClick={() => navigate('about')}>
          <img src={require('../../assets/images/about.jpeg').default} />
          <div className="learn-more-caption">
            <h3>ABOUT US</h3>
            <p>Our History &#38; Mission</p>
          </div>
        </div>
        <div
          className="learn-more-item"
          onClick={() => navigate('active-house')}
        >
          <img src={require('../../assets/images/active-house.jpg').default} />
          <div className="learn-more-caption">
            <h3>ACTIVE HOUSE</h3>
            <p>Meet the brothers</p>
          </div>
        </div>
        <div className="learn-more-item" onClick={() => navigate('leadership')}>
          <img src={require('../../assets/images/leadership.jpg').default} />
          <div className="learn-more-caption">
            <h3>LEADERSHIP</h3>
            <p>The executive board</p>
          </div>
        </div>
        <div className="learn-more-item" onClick={() => navigate('rush')}>
          <img src={require('../../assets/images/about.jpeg').default} />
          <div className="learn-more-caption">
            <h3>RUSH</h3>
            <p>Join Us!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
