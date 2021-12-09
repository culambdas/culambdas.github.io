import { Component } from 'react';
import './leadership.css';

const secretary = {
  number: '#164',
  nickname: 'Ricasso',
  name: 'Eddie "Ricasso" Chi',
  'main-img': 'Ricasso.jpg',
};

const vpe = {
  number: '#168',
  nickname: 'Altair',
  name: 'Kelvin "Altair" Chen',
  'main-img': 'Altair.jpg',
};

const president = {
  number: '#153',
  nickname: 'Drift',
  name: 'Kazuya "Drift" Chue',
  'main-img': 'Drift.jpg',
};

const vpi = {
  number: '#156',
  nickname: 'Argo',
  name: 'Jongwan "Argo" Kim',
  'main-img': 'Argo.jpg',
};

const treasurer = {
  number: '#160',
  nickname: 'Concord',
  name: 'Richard "Concord" Lin',
  'main-img': 'Concord.jpg',
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
                                : 'default.jpg'
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
      </section>
    );
  }
}
