import { Component } from 'react';
import { allClasses } from '../constants';
import activeJson from '../../actives.json';
import './members.css';
import MemberModal from '../MemberModal/MemberModal';

export default class ActiveHouse extends Component {
  constructor(props) {
    super(props);

    this.changeTab = this.changeTab.bind(this);
    this.openInfoModal = this.openInfoModal.bind(this);
    this.closeInfoModal = this.closeInfoModal.bind(this);
    this.setActive = this.setActive.bind(this);

    this.state = {
      activeClass: 'alpha-kappa',
      activeBro: '',
    };
  }

  changeTab(event) {
    this.setState({ activeClass: event.target.id, activeBro: '' }, () => {
      var prevTab = document.querySelector('.tab-container .active');
      prevTab.classList.remove('active');
      var activeTab = document.getElementById(event.target.id);
      activeTab.classList.add('active');
    });
  }

  openInfoModal(event) {
    if (event.target.id) {
      this.setState({ activeBro: event.target.id }, () => {
        document.getElementById('roster-modal').classList.add('active');
        document.body.style.overflow = 'hidden';
        document.body.scroll = 'no'; // ie only
      });
    }
  }

  closeInfoModal(event) {
    document.getElementById('roster-modal').classList.remove('active');
    document.body.style.overflow = 'visible';
    document.body.scroll = 'yes'; // ie only
  }

  setActive(activeClass, activeBro) {
    this.setState({
      activeClass,
      activeBro,
    });
  }

  render() {
    return (
      <section id="active-house">
        <div className="hero">
          <div className="hero-image active-house-hero">
            <div className="hero-text">
              <h1>
                Fall 2022 <br /> Active House
              </h1>
            </div>
          </div>
        </div>

        <div className="members-tabs-container">
          <div className="tab-container">
            {Object.entries(activeJson).map(([k, v], i) => {
              return (
                <div
                  key={k}
                  id={k}
                  className={this.state.activeClass === k ? 'active' : ''}
                  style={{ wordSpacing: '100vw' }} // Forces word break
                  onClick={this.changeTab}
                >
                  {allClasses[k]}
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="class-image"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(
                  ${
                    require(`../../assets/classes/${this.state.activeClass}.jpg`)
                      .default
                  }
                )`,
          }}
        >
          <div className="active-class-name">
            <h1>
              {allClasses[this.state.activeClass]}
              {this.state.activeClass === 'annex' ? '' : ' Class'}
            </h1>
          </div>
        </div>

        <div className="tab-content active">
          <ul>
            {activeJson[this.state.activeClass].map((e, idx) => {
              return (
                <li
                  id={e.nickname}
                  key={e.nickname}
                  onClick={this.openInfoModal}
                >
                  <div className="roster-photo">
                    <img
                      alt={e.nickname}
                      src={
                        require(`../../assets/members/${
                          e['main-img'] ? e['main-img'] : 'default.jpg'
                        }`).default
                      }
                    />
                  </div>
                  <div className="roster-caption">
                    <h1>{e.number}</h1>
                    <span>{e.name}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <MemberModal
          closeInfoModal={this.closeInfoModal}
          members={activeJson}
          activeClass={this.state.activeClass}
          activeBro={this.state.activeBro}
          setActive={this.setActive}
          enableNavigation={false}
        />
      </section>
    );
  }
}
