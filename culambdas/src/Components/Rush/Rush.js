import './rush.css';
import nebula from '../../assets/images/nebula.mp4';
import fa21front from '../../assets/images/rush/front.png';
import fa21back from '../../assets/images/rush/back.png';

const Rush = () => {
  return (
    <section>
      <div className="rush-hero">
        <video className="nebula" autoPlay loop muted>
          <source src={nebula} type="video/mp4" />
        </video>

        <div className="flip-container">
          <div className="flipper">
            <div className="front">
              <img src={fa21front} alt="rush-cover" />
            </div>
            <div className="back">
              <img src={fa21back} alt="rush-schedule" />
            </div>
          </div>
        </div>
      </div>

      <div className="rush-container">
        <h1>Rush FAQ</h1>
        <div className="rush-faq">
          <h3>1. What is rush?</h3>
          <p>
            Rush is a one-week period time when we, the brothers of Lambda Phi
            Epsilon, host various events where interested students (rushees) can
            come out to meet brothers. Likewise, rush also gives us a chance to
            meet you and learn more about you. There is no obligation during
            rush and everything is free. Learn what brotherhood, pride,
            leadership, unity, and family mean to us. Everyone is invited to
            attend our events!
          </p>
          ​<h3>2. What is a Bid?</h3>
          <p>
            A bid is an invitation to enter the new member education process and
            continue on the path of becoming a brother. Bids are given at the
            end of rush to rushees who the brothers feel would be a good fit to
            our fraternity. You are not obligated to accept a bid if given one;
            rush is completely non-committal.
          </p>
          ​<h3>3. Should I Attend All Events?</h3>
          <p>
            If you are serious about joining Lambda Phi Epsilon, you are
            definitely encouraged to attend all rush events from beginning to
            end. The events are set for you to learn about the chapter that you
            will potentially belong to. The brothers will be there to answer any
            questions that you may have about the fraternity or the chapter. It
            is an opportunity for both you and the brothers to get to know each
            other better. Just be yourself!
          </p>
          ​
          <h3>
            4. Am I required to follow through with process if I attend rush?
          </h3>
          <p>
            No. Rush is simply an opportunity for you to introduce yourself and
            meet the brothers. So have fun, enjoy yourself, and allow us to show
            you what our brotherhood is all about.
          </p>
          ​<h3>5. Do I have to pay?</h3>
          <p>
            No. All rush events are free. All costs are funded by Lambda Phi
            Epsilon and rides are provided to all events as well.
          </p>
          ​<h3>6. Do I have to be Asian to join?</h3>
          <p>
            No. It is true that a majority of our members are of Asian descent.
            However, there are many brothers in all different chapters of Lambda
            Phi Epsilon who are not Asian. Lambda Phi Epsilon stresses that it
            is an Asian-interest fraternity, which means that anyone who is
            interested in our goals, both Asian and non-Asian, are encouraged to
            join.
          </p>
          ​<h3>7. Will joining a fraternity impact my grades?</h3>
          <p>
            The brothers are students first and foremost. Many are in rigorous
            academic programs and many are highly involved and hold leadership
            positions in cultural organizations, musical groups, and intramural
            sports on campus. Older brothers will be able to help and offer you
            invaluable advice in getting through school and finding internships.
            Fully utilizing these unique resources that Lambdas have to offer
            will definitely benefit your education at Cornell.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Rush;
