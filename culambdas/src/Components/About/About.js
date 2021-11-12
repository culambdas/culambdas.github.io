import './about.css';

const About = () => {
  return (
    <section id="exec-board">
      <div className="about-hero">
        <div className="about-image">
          <div className="about-image-text">
            <h1>About</h1>
          </div>
        </div>
      </div>

      <div className="president-letter">
        <div className="col-3">
          <img src={require('../../assets/images/president.jpg').default}></img>
        </div>
        <div className="col-7 president-letter-text">
          <h3>Letter from our Chapter President</h3>
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
          <h5>
            Simon "Apex" Liu
            <br />
            Chapter President
          </h5>
        </div>
      </div>
    </section>
  );
};

export default About;
