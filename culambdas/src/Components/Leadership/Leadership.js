import { Component } from 'react';
import './leadership.css';
import LeadershipModal from './LeadershipModal';

const secretary = {
  "class": "alpha-tau",
  "number": "#203",
  "nickname": "Nova",
  "major": "Chemical Engineering",
  "year": "2028",
  "big-bro": "Aron \"Vanguard\" Kim",
  "little-bro": ["N/A"],
  "email": "cbl64@cornell.edu",
  "facebook": "",
  "birthday": "July 24, 2006",
  "hometown": "Flushing, New York",
  "dream-ride": "",
  "fav-quote": "\"Whether you think you can or think you can’t, you’re right\" -",
  "mil-dollars": "I’d pile it up and lay down on it",
  "fun-fact": "I'm a twin",
  "advice": "",
  "why-join": "",
  "prev-chapter": "",
  "name": "Connor \"Nova\" Lucente",
  "main-img": "Nova.jpg",
  "modal-img": "Nova.jpg",
  "bio": ""
};

const vpe = {
  "class": "alpha-sigma",
  "number": "#202",
  "nickname": "Anubis",
  "major": "Biomedical Engineering",
  "year": "2028",
  "big-bro": "Seth \"Amaru\" Park",
  "little-bro": ["N/A"],
  "email": "",
  "facebook": "",
  "birthday": "April 10, 2006",
  "hometown": "Flushing, NY",
  "dream-ride": "",
  "fav-quote": "\"Don’t let nothin stop you cause we ain’t stopping\" -DJ Khaled",
  "mil-dollars": "I would be a millionaire",
  "fun-fact": "I like watermelon",
  "advice": "",
  "why-join": "",
  "prev-chapter": "",
  "name": "Kevin \"Anubis\" Lin",
  "main-img": "Anubis.jpg",
  "modal-img": "Anubis.jpg",
  "bio": ""
};

const president = {
  "class": "alpha-rho",
  "number": "#191",
  "nickname": "Phoenix",
  "major": "Economics",
  "year": "2027",
  "big-bro": "John \"Wukong\" Zheng",
  "little-bro": ["N/A"],
  "email": "jl3497@cornell.edu",
  "facebook": "https://www.facebook.com/jesse.lin.1125",
  "birthday": "November 25, 2004",
  "hometown": "Staten Island, New York",
  "dream-ride": "Audi A8",
  "fav-quote": "\"I have not failed. I've just found 10,000 ways that won't work.\" -Thomas Edison",
  "mil-dollars": "I would open a little café and see where that takes me.",
  "fun-fact": "My last name used to be Roberts.",
  "advice": "",
  "why-join": "",
  "prev-chapter": "",
  "name": "Jesse \"Phoenix\" Lin",
  "main-img": "Phoenix.jpg",
  "modal-img": "Phoenix.jpg",
  "bio": ""
};

const vpi = {
  "class": "alpha-sigma",
  "number": "#197",
  "nickname": "Nautilus",
  "major": "Electrical and Computer Engineering",
  "year": "2028",
  "big-bro": " Jaden \"Mariner\" Oh",
  "little-bro": ["N/A"],
  "email": "yy2323@cornell.edu",
  "facebook": "",
  "birthday": "January 10, 2006",
  "hometown": "London, UK",
  "dream-ride": "",
  "fav-quote": "\"Shut up Nahi\" -Alpha Kappa Chapter",
  "mil-dollars": "Buy a bitcoin",
  "fun-fact": "I have double-jointed elbows",
  "advice": "",
  "why-join": "",
  "prev-chapter": "",
  "name": "Ethan \"Nautilus\" Yan",
  "main-img": "Nautilus.jpg",
  "modal-img": "Nautilus.jpg",
  "bio": ""
};

const treasurer = {
  "class": "alpha-sigma",
  "number": "#199",
  "nickname": "Paradox",
  "major": "Computer Science",
  "year": "2028",
  "big-bro": "Derek \"Gambit\" Zhang",
  "little-bro": ["N/A"],
  "email": "ljq3@cornell.edu",
  "facebook": "",
  "birthday": "August 3, 2006",
  "hometown": "Boston, MA",
  "dream-ride": "",
  "fav-quote": "\"Knowledge is chasing you, but you are faster\" -?",
  "mil-dollars": "Give half to my mom and invest the rest",
  "fun-fact": "I have a cat",
  "advice": "",
  "why-join": "",
  "prev-chapter": "",
  "name": "Leo \"Paradox\" Qian",
  "main-img": "Paradox.jpg",
  "modal-img": "Paradox.jpg",
  "bio": ""
};

export default class Leadership extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eboard_list: [
        'Secretary',
        'Vice President External',
        'President',
        'Vice President Internal',
        'Treasurer',
      ], // keep this order. the second part in each element is the 0-indexed index of bro in his class
      eboard_members: [secretary, vpe, president, vpi, treasurer],
      activeBro: '',
    };

    this.openInfoModal = this.openInfoModal.bind(this);
    this.closeInfoModal = this.closeInfoModal.bind(this);
  }

  openInfoModal(event) {
    if (event.target.id) {
      console.log(event.target.id);
      this.setState({ activeBro: event.target.id }, () => {
        document.getElementById('roster-modal').classList.add('active');
        document.body.style.overflow = 'hidden';
        document.body.scroll = 'no'; // ie only
        console.log('here');
      });
    }
  }

  closeInfoModal(event) {
    document.getElementById('roster-modal').classList.remove('active');
    document.body.style.overflow = 'visible';
    document.body.scroll = 'yes'; // ie only
  }

  render() {
    return (
      <section id="leadership">
        <div className="hero">
          <div className="hero-image leadership-hero">
            <div className="hero-text">
              <h1>
                2025 - 2026
                <br />
                Executive Board
              </h1>
            </div>
          </div>
        </div>

        <div className="leadership-container">
          <div className="leadership-content">
            <ul>
              {this.state.eboard_members.map((e, idx) => {
                return (
                  <div key={idx}>
                    <li id={e.nickname} onClick={this.openInfoModal}>
                      <div className="leadership-photo">
                        <img
                          alt={e.nickname}
                          src={
                            require(`../../assets/members/${e['main-img'] ? e['main-img'] : 'default.jpg'
                              }`).default
                          }
                        />
                      </div>
                      <div className="leadership-caption">
                        <h1>{e.number}</h1>
                        <span>{e.name}</span>
                      </div>
                    </li>
                    <div className="leadership-position">
                      <h1>{this.state.eboard_list[idx]}</h1>
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>

        <LeadershipModal
          closeInfoModal={this.closeInfoModal}
          members={this.state.eboard_members}
          activeBro={this.state.activeBro}
          enableNavigation={false}
        />
      </section>
    );
  }
}
