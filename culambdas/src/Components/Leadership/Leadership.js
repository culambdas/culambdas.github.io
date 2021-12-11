import { Component } from 'react';
import './leadership.css';
import LeadershipModal from './LeadershipModal';

const secretary = {
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

const vpe = {
  class: 'alpha-kappa',
  number: '#168',
  nickname: 'Altair',
  major: 'Biological Sciences',
  year: '2024',
  'big-bro': 'Samuel "Orion" Lye',
  'little-bro': ['N/A'],
  email: 'khc72@cornell.edu',
  facebook: 'fb.com/kelvin.chen.320',
  birthday: 'March 20, 2000',
  hometown: 'Princeton, NJ',
  'dream-ride': 'Blacked Out BMW M4',
  'fav-quote': '"No thoughts, head empty"',
  'mil-dollars': 'Use the money to make more money',
  'fun-fact': 'I used to be allergic to every kind of melon.',
  advice: 'Everything is circumstantial',
  'why-join':
    'To build bonds beyond traditional friendships and be a part of something bigger',
  'prev-chapter': '',
  name: 'Kelvin "Altair" Chen',
  'main-img': 'Altair.jpg',
  'modal-img': 'Altair.jpg',
  bio: 'Kelvin was born in Singapore, but moved to the United States when he was only four years old. He has lived in New Jersey ever since, where he enjoyed playing golf and volunteering. Kelvin also served two years in the Singaporean army prior to college, achieving the rank of lieutenant. Outside of class, Kelvin is a volunteer firefighter and spends time training and responding to emergencies. When he’s not in class or fighting fires, he is often just chilling or eating, and he’s often free to meet up anywhere. Hit him up anytime you want to talk about the military, firefighting, or literally anything as he’s got a lot of stories to share.',
};

const president = {
  class: 'alpha-theta',
  number: '#153',
  nickname: 'Drift',
  major: 'Computer Science',
  year: '2023',
  'big-bro': 'Daniel "Bastion" Jung',
  'little-bro': ['N/A'],
  email: 'kc843@cornell.edu',
  facebook: 'fb.com/kazuyachue',
  birthday: 'Jan 4, 2001',
  hometown: 'Herndon, Virginia',
  'dream-ride': 'Space Mountain',
  'fav-quote': '"She\'s different" - Akimasa Ihara',
  'mil-dollars': 'I would buy a yacht and shoot RPGs off it.',
  'fun-fact':
    "On a good day I'm 5'9 and then 5'11 w shoes round it up to 6 foot.",
  advice: "Don't be scared to give people the benefit of the doubt.",
  'why-join': 'To push myself to my limits and become a changed person.',
  'prev-chapter': '',
  name: 'Kazuya "Drift" Chue',
  'main-img': 'Drift.jpg',
  'modal-img': 'Drift.jpg',
  bio: 'Kazuya is from Herndon, Virginia but has also lived in Tokyo and Singapore. He is a student in the College of Engineering majoring in Computer Science. On campus, Kazuya is involved in CSA E-board, GCC, SBC, and the Esports team. He enjoys going to raves and will fly to any country for one if his friends are down. He loves to buy expensive watches and is always broke because of this. Feel free to hit him up if you play Valorant, listen to EDM/Rap/J-pop, or follow the NFL, NBA or MLB!',
};

const vpi = {
  class: 'alpha-theta',
  number: '#156',
  nickname: 'Argo',
  major: 'Computer Science',
  year: '2023',
  'big-bro': 'Noah "Helmsman" Gunther',
  'little-bro': ['Vinson "Azure" Feng'],
  email: 'jk2369@cornell.edu',
  facebook: 'fb.com/jongwan2019',
  birthday: 'February 9, 2001',
  hometown: 'Seoul, South Korea',
  'dream-ride': 'The Magic School Bus',
  'fav-quote': '"Yuhhh"',
  'mil-dollars': 'Give half to parents and invest the other half.',
  'fun-fact': 'I used to be decently intelligent before college.',
  advice: 'Cherish and appreciate every moment.',
  'why-join':
    'To find a supportive and caring community that I can call my family.',
  'prev-chapter': '',
  name: 'Jongwan "Argo" Kim',
  'main-img': 'Argo.jpg',
  'modal-img': 'Argo.jpg',
  bio: "Jongwan is from Seoul, South Korea. Although he attended high school in the United States, he has lived mostly in Japan, which explains his occasional English deficiencies. He is currently a student in the College of Engineering studying Computer Science and Applied Mathematics. While he's not sleeping or studying, you can often find him playing basketball, lifting weights, eating unhealthy things or being incredibly dumb with the boys. Feel free to hit him up if you want to get sauce him in basketball.",
};

const treasurer = {
  class: 'alpha-theta',
  number: '#160',
  nickname: 'Concord',
  major: 'ORIE',
  year: '2023',
  'big-bro': 'Alston "Mochi" Wang',
  'little-bro': ['N/A'],
  email: 'rl556@cornell.edu',
  facebook: 'fb.com/richardlin112',
  birthday: 'January 12, 2001',
  hometown: 'Staten Island, NY',
  'dream-ride': 'Bugatti Chiron',
  'fav-quote':
    '“You only live once, but if you do it right, once is enough.” — Mae West',
  'mil-dollars': 'Invest in real estate so my parents can retire.',
  'fun-fact': 'I learned Russian in highschool.',
  advice:
    'Always be willing to go out to look for new things because sometimes a leap of faith is all it takes to change your life.',
  'why-join': 'For the brotherhood and people I will meet.',
  'prev-chapter': '',
  name: 'Richard "Concord" Lin',
  'main-img': 'Concord.jpg',
  'modal-img': 'Concord.jpg',
  bio: 'Richard is an ORIE from Staten Island, New York. You can always find him in the Uris Cocktail Lounge or Olin Library sleeping on any free space he can find. When he is awake he insists on staying in the library because it makes him feel productive, but you will almost never find him doing work. In his free time he likes to play volleyball, binging shows and YouTube, and watching TikTok with boys. Hit him up if you need someone down-to-earth when everyone else is busy studying!',
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
                2021 - 2022
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
                            require(`../../assets/members/${
                              e['main-img'] ? e['main-img'] : 'default.jpg'
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
