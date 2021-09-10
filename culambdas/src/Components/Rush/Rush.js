import '../Home/home.css';
import './rush.css';
import smoke from '../../assets/images/smoke.mp4';
// import fa21rushcover from '../../assets/images/fa21rushcover.png';
import fa21front from '../../assets/images/rush/front.png';
import fa21back from '../../assets/images/rush/back.png';

const Rush = () => {
  return (
    <section>
      <video className="hero" autoPlay loop muted>
        <source src={smoke} type="video/mp4" />
      </video>
      <div className="flip-container fade-in">
        <div className="flipper">
          <div className="front">
            <img src={fa21front} alt="rush-cover" width="100%" />
          </div>
          <div className="back">
            <img src={fa21back} alt="rush-schedule" width="100%" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rush;
