import '../Home/home.css';
import smoke from '../../assets/images/smoke.mp4';

const About = () => {
  return (
    <>
      <section>
        <video className="hero" autoPlay loop muted>
          <source src={smoke} type="video/mp4" />
        </video>
        <div className="splash-text fade-in">
          <span className="lfe-splash-text">About</span>
          <br />
          <span className="cornell-university-splash-text">
            
          </span>
          <br />
          <span className="est-splash-text">Coming Soon...</span>
        </div>
      </section>

      <section></section>
    </>
  );
};

export default About;
