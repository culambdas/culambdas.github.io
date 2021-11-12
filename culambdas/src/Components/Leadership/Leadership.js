import { Component } from 'react';
import '../Members/members.css';

export default class Leadership extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eboard_list: [],
    };
  }

  componentDidMount() {
    const secretary = {
      class: 'alpha-theta',
      number: '#156',
      nickname: 'Argo',
      major: 'Computer Science',
      year: '2023',
      'big-bro': 'Noah "Helmsman" Gunther',
      'little-bro': 'N/A',
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
      'main-img': 'Argo.png',
      'modal-img': 'Argo.png',
      bio: "Jongwan is from Seoul, South Korea. Although he attended high school in the United States, he has lived mostly in Japan, which explains his occasional English deficiencies. He is currently a student in the College of Engineering studying Computer Science and Applied Mathematics. While he's not sleeping or studying, you can often find him playing basketball, lifting weights, eating unhealthy things or being incredibly dumb with the boys. Feel free to hit him up if you want to get sauce him in basketball.",
    };

    const vpe = {
      class: 'alpha-theta',
      number: '#157',
      nickname: 'Vision',
      major: 'Computer Science',
      year: '2023',
      'big-bro': 'Jonathan "Atom" Wang',
      'little-bro': 'N/A',
      email: 'kp462@cornell.edu',
      facebook: 'fb.com/k12park',
      birthday: 'December 12, 2000',
      hometown: 'Salt Lake City, Utah',
      'dream-ride': "Alden's face",
      'fav-quote': '"Every kiss begins with K"',
      'mil-dollars':
        "I'd pay off my college tuition and give the rest to my parents.",
      'fun-fact': 'I played basketball overseas in Europe.',
      advice:
        'Make meaningful relationships as they are the most important part of your growth as an individual in and outside of college.',
      'why-join': 'So I could put "ΛΦΕ" in my Instagram bio.',
      'prev-chapter': '',
      name: 'Kevin "Vision" Park',
      'main-img': 'Vision.png',
      'modal-img': 'Vision.png',
      bio: 'Kevin is from Salt Lake City, UT. Kevin enjoys spending his time watching tiktok, working out, and watching Kdramas. Although he is Korean, he is trying to find somebody to help teach him speak the language, so if you are that person hit him up! Be warned, despite being the smartest bro in the house, hanging out with him too long could lower your IQ. So if you enjoy any of these things, please hit him up as he is a simp. P.S. He likes being called Oppa.',
    };

    const president = {
      class: 'alpha-zeta',
      number: '#149',
      nickname: 'Apex',
      major: 'Computer Science',
      year: '2022',
      'big-bro': 'Darren "Axiom" Chow',
      'little-bro': 'Ryan "Point Blank" Wong',
      email: 'sl2888@cornell.edu',
      facebook: 'fb.com/sliu.3110',
      birthday: 'March 11, 2000',
      hometown: 'Vancouver, Canada',
      'dream-ride': 'Yoshi',
      'fav-quote':
        '"You have to think anyway, so why not think big? - Donald J. Trump',
      'mil-dollars': 'Court-side seats at the NBA finals',
      'fun-fact': 'I know the names of every country in the world',
      advice:
        "Put time into the people you really care about. Don't get caught into thinking you have to be friends with someone just because it is convenient.",
      'why-join':
        'I wanted a family that would always push each other to their fullest abilities. Also the boyssssss',
      'prev-chapter': '',
      name: 'Simon "Apex" Liu',
      'main-img': 'Apex.png',
      'modal-img': 'Apex.png',
      bio: "Simon is from Vancouver, Canada. He is a student in the College of Arts and Sciences, studying Economics and French. When he's not desperately trying to stay awake by chugging coconut milk caramel macchiatos, you can find him pretending to speak French or confusing people by describing the temperature in celsius. In his free time, Simon is often spotted violating gym law by doing curls in the squat rack. Hit him up if you see can yourself doing any of these things.",
    };

    const vpi = {
      class: 'alpha-zeta',
      number: '#150',
      nickname: 'Enigma',
      major: 'Information Science',
      year: '2022',
      'big-bro': 'Nathan "Rhetoric" Bala',
      'little-bro': 'Jason "Evo" Tung',
      email: 'nk453@cornell.edu',
      facebook: 'fb.com/naotaka.kinoshita.3',
      birthday: 'December 23, 2000',
      hometown: 'New York City, NY',
      'dream-ride': '1972 Nissan Skyline 2000GT-R',
      'fav-quote':
        '"Why waste time use lot word when few word do trick?" - Kevin Malone',
      'mil-dollars': "I'd buy some cars",
      'fun-fact': "I'm a giant",
      advice: 'Enjoy your time in college while it lasts or something',
      'why-join':
        'For the sense of brotherhood and to develop lasting relationships socially and professionally',
      'prev-chapter': '',
      name: 'Naotaka "Enigma" Kinoshita',
      'main-img': 'Enigma.png',
      'modal-img': 'Enigma.png',
      bio: "Despite his name, Naotaka was born and raised in NYC. He's a big fan of cars and fashion, so hit him up if you want to talk about either of those, especially Japanese cars or Japanese fashion. In the future, he hopes to put his hobby of cars to use by actually getting a license and being able to drive. In his free time, he likes to sit around and watch YouTube and play CS:GO.",
    };

    const treasurer = {
      class: 'alpha-zeta',
      number: '#148',
      nickname: 'Stratos',
      major: 'Economics, Statistics',
      year: '2022',
      'big-bro': 'Andrew "Flare" Xiao',
      'little-bro': 'Eddie "Ricasso" Chi',
      email: 'mz286@cornell.edu',
      facebook: 'fb.com/matt.zhao.7',
      birthday: 'December 30, 1999',
      hometown: 'Potomac, Maryland',
      'dream-ride': 'Lapras',
      'fav-quote':
        '"Stop worrying so much and start having fun!" - My high school English teacher',
      'mil-dollars':
        'Buy my dog a lot of treats. Buy a lot of bubble tea. Become the greatest Pokémon trainer of all time.',
      'fun-fact': 'I have a Tibetan Mastiff that weighs almost as much as me.',
      advice:
        "Make sure you study but don't let it get in the way of new experiences.",
      'why-join': 'To find people I can be dumb with.',
      'prev-chapter': '',
      name: 'Matt "Stratos" Zhao',
      'main-img': 'Stratos.png',
      'modal-img': 'Stratos.png',
      bio: "Matt is from Potomac, Maryland and is currently a student in the Dyson school studying Finance and Marketing. Outside the classroom, he's usually at practice for the Cornell Club Volleyball team or wasting time not doing homework. Besides that, you can probably find him at Kung Fu Tea or messing around with his friends. If you have any really bad jokes, want to hear his awful singing, or just want to procrastinate, let him know!",
    };

    this.setState({
      eboard_list: [
        [secretary, 3, 'Secretary'],
        [vpe, 4, 'Vice President External'],
        [president, 4, 'President'],
        [vpi, 5, 'Vice President Internal'],
        [treasurer, 3, 'Treasurer'],
      ],
    }); // keep this order. the second part in each element is the 0-indexed index of bro in his class
  }

  render() {
    return (
      <section id="leadership">
        <div className="members-hero">
          <div className="leadership-image">
            <div className="members-image-text">
              <h1>2020 - 2021</h1>
              <h1>Executive Board</h1>
            </div>
          </div>

          <div className="members-tabs-container">
            <div className="tab-content active">
              <ul>
                {this.state.eboard_list.map((e, idx) => {
                  return (
                    <div>
                      <li id={idx} key={idx} className="exec-item">
                        <div className="exec-photo">
                          <img
                            alt={e[0].nickname}
                            src={
                              require(`../../assets/members/${
                                e[0]['main-img']
                                  ? e[0]['main-img']
                                  : 'default.png'
                              }`).default
                            }
                          />
                        </div>
                        <div className="roster-caption">
                          <h1>{e[0].number}</h1>
                          <span>{e[0].name}</span>
                        </div>
                      </li>
                      <div class="center-text">
                        <h1>{e[2]}</h1>
                      </div>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
