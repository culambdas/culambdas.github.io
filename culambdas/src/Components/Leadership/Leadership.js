import { Component } from 'react';
import './leadership.css';
import '../../assets/styles.css';

const secretary = {
  number: '#156',
  nickname: 'Argo',
  name: 'Jongwan "Argo" Kim',
  'main-img': 'Argo.png',
};

const vpe = {
  number: '#157',
  nickname: 'Vision',
  name: 'Kevin "Vision" Park',
  'main-img': 'Vision.png',
};

const president = {
  number: '#149',
  nickname: 'Apex',
  name: 'Simon "Apex" Liu',
  'main-img': 'Apex.png',
};

const vpi = {
  number: '#150',
  nickname: 'Enigma',
  name: 'Naotaka "Enigma" Kinoshita',
  'main-img': 'Enigma.png',
};

const treasurer = {
  number: '#148',
  nickname: 'Stratos',
  name: 'Matt "Stratos" Zhao',
  'main-img': 'Stratos.png',
};

export default class Leadership extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eboard_list: [
        [secretary, 3, 'Secretary'],
        [vpe, 4, 'Vice President External'],
        [president, 4, 'President'],
        [vpi, 5, 'Vice President Internal'],
        [treasurer, 3, 'Treasurer'],
      ], // keep this order. the second part in each element is the 0-indexed index of bro in his class
    };
  }

  render() {
    return (
      <section id="leadership">
        <div className="hero">
          <div className="hero-image leadership-hero">
            <div className="hero-text">
              <h1>
                2020 - 2021
                <br />
                Executive Board
              </h1>
            </div>
          </div>

          <div className="leadership-container">
            <div className="leadership-content">
              <ul>
                {this.state.eboard_list.map((e, idx) => {
                  return (
                    <div>
                      <li id={idx} key={idx}>
                        <div className="leadership-photo">
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
                        <div className="leadership-caption">
                          <h1>{e[0].number}</h1>
                          <span>{e[0].name}</span>
                        </div>
                      </li>
                      <div class="leadership-position">
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
