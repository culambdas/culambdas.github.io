import './home.css';
import smoke from '../../assets/images/smoke.mp4';

const Home = () => {
  return (
    <>
      <section>
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
      </section>

      <section></section>
    </>
  );
};

export default Home;
