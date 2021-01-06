import './home.css';
import smoke from '../../static/images/smoke.mp4';

const Home = () => {
  return (
    <section>
      <video className="hero" autoPlay loop muted>
        <source src={smoke} type="video/mp4" />
      </video>
      <span className="lfe-splash-text fade-in">&Lambda; &Phi; &Epsilon;</span>
    </section>
  );
};

export default Home;
