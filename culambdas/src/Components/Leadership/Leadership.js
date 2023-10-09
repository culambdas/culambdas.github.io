import { Component } from 'react';
import './leadership.css';
import LeadershipModal from './LeadershipModal';

const secretary = {
  "class": "alpha-mu",
  "number": "#174",
  "nickname": "Chiron",
  "major": "Urban Planning",
  "year": "2025",
  "big-bro": "David \"Helios\" Cheng",
  "little-bro": ["N/A"],
  "email": "tjm285@cornell.edu",
  "facebook": "https://www.facebook.com/tahj.mcpherson",
  "birthday": "November 2, 2002",
  "hometown": "Chicago, IL",
  "dream-ride": "2020 Bentley Flying Spur",
  "fav-quote": "\"Don't hate me cause I'm pretty.\" -Lamar",
  "mil-dollars": "I'd put some aside to still live comfortably and then invest all the rest of it.",
  "fun-fact": "I’ve been to five out of seven continents (haven’t been to Australia and Antarctica yet).",
  "advice": "Don’t stress yourself out so much in the beginning of college.",
  "why-join": "To join a community filled with some dope brothers.",
  "prev-chapter": "",
  "name": "Tahj \"Chiron\" McPherson",
  "main-img": "Chiron.jpg",
  "modal-img": "Chiron.jpg",
  "bio": ""
};

const vpe = {
  "class": "alpha-kappa",
  "number": "#166",
  "nickname": "Havoc",
  "major": "ILR",
  "year": "2024",
  "big-bro": "Rishabh \"Paladin\" Sarup",
  "little-bro": ["John \"Wukong\" Zheng", "Carl \"Ronin\" Huang"],
  "email": "ght34@cornell.edu",
  "facebook": "https://www.facebook.com/hudson.tan.54",
  "birthday": "January 21, 2002",
  "hometown": "La Habra, CA",
  "dream-ride": "2002 Toyota Corolla",
  "fav-quote": "\"Wall-E\" -Wall-E",
  "mil-dollars": "Pay off the house, Invest, Travel",
  "fun-fact": "My first name is Graham",
  "advice": "RUSH LAMBDAS and friends are super super important more than anything.",
  "why-join": "Everyone is accepting and encouraging of being unique and different from one another.",
  "prev-chapter": "",
  "name": "Hudson \"Havoc\" Tan",
  "main-img": "Havoc.jpg",
  "modal-img": "Havoc.jpg",
  "bio": "Hudson was born in Long Beach, CA. He grew up an extremely shy kid until sometime in highschool where pretty much all he did was school or basketball. He joined Lambdas to be a part of a supportive, close knit community and to also have the best possible social experiences during my college years. His hobbies include playing basketball, playing guitar, thrifting, and being a foodie. So, if you are ever in SoCal and in need of a list of food recommendations, he got you."
};

const president = {
  "class": "alpha-iota",
  "number": "#165",
  "nickname": "Point Blank",
  "major": "Computer Science",
  "year": "2024",
  "big-bro": "Simon \"Apex\" Liu",
  "little-bro": ["N/A"],
  "email": "rtw74@cornell.edu",
  "facebook": "fb.com/rtw02",
  "birthday": "February 23, 2002",
  "hometown": "San Francisco, CA",
  "dream-ride": "Porsche 911",
  "fav-quote": "\"Don't ask yourself what the world needs. Ask yourself what makes you come alive, and go do that, because what the world needs is people who have come alive.\" -Howard Thurman",
  "mil-dollars": "Would give 800k to my dad to invest and travel the world with the rest.",
  "fun-fact": "I do graduation/portrait photography.",
  "advice": "Don't be afraid to step outside your comfort zone because college is a time to grow.",
  "why-join": "Someone had to be the scapegoat of the class.",
  "prev-chapter": "",
  "name": "Ryan \"Point Blank\" Wong",
  "main-img": "Point-Blank.jpg",
  "modal-img": "Point-Blank.jpg",
  "bio": ""
};

const vpi = {
  class: 'alpha-iota',
  number: '#164',
  nickname: 'Ricasso',
  major: 'Biological Sciences',
  year: '2024',
  'big-bro': 'Matt "Stratos" Zhao',
  'little-bro': ['N/A'],
  email: 'ec626@cornell.edu',
  facebook: 'fb.com/eddie.chi.9066',
  birthday: 'August 12, 2002',
  hometown: 'Clarksville, Maryland',
  'dream-ride': 'Honda CRV',
  'fav-quote':
    '"Experience doesn’t always mean you have all the right answers" - my swim coach or something',
  'mil-dollars': 'Give back to my parents, invest, and travel.',
  'fun-fact':
    'Before I tried hockey, I figure skated. I quit because I thought I would get cooties :(',
  advice:
    'Try stepping out of your comfort zone! You only get to experience college once so make the most of it :)',
  'why-join':
    'To meet new people and step out of my comfort zone. To form lifelong connections and create memorable experiences that I knew I wouldn’t regret.',
  'prev-chapter': '',
  name: 'Eddie "Ricasso" Chi',
  'main-img': 'Ricasso.jpg',
  'modal-img': 'Ricasso.jpg',
  bio: '',
};

const treasurer = {
  "class": "alpha-kappa",
  "number": "#167",
  "nickname": "Azure",
  "major": "Applied Economics and Management",
  "year": "2024",
  "big-bro": "Jongwan \"Argo\" Kim",
  "little-bro": ["N/A"],
  "email": "vf73@cornell.edu",
  "facebook": "https://www.facebook.com/vinsonnnnnnnnn/",
  "birthday": "August 23, 2002",
  "hometown": "Brooklyn, NY",
  "dream-ride": "Ferrari 488",
  "fav-quote": "\"what?\"",
  "mil-dollars": "Give it all to my parents.",
  "fun-fact": "I forget things as soon as I learn it.",
  "advice": "Do what you feel.",
  "why-join": "To grow out of my past self.",
  "prev-chapter": "",
  "name": "Vinson \"Azure\" Feng",
  "main-img": "Azure.jpg",
  "modal-img": "Azure.jpg",
  "bio": "Vinson was born in Brooklyn, New York, where he spent most of his life prior to coming to Ithaca. Whenever he isn’t spending time with friends and family, you can expect that he’s either sleeping, listening to music, or wasting money on non-dining hall food. His hobbies include fashion, swimming, working out, and trying to learn how to cook."
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
                2022 - 2023
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
