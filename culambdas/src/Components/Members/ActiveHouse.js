import { Component } from 'react';
import { activeClasses } from '../constants';
import memberJson from '../../members.json';
import './members.css';
import MemberModal from '../MemberModal/MemberModal';

export default class ActiveHouse extends Component {
  constructor(props) {
    super(props);

    this.changeTab = this.changeTab.bind(this);
    this.openInfoModal = this.openInfoModal.bind(this);
    this.closeInfoModal = this.closeInfoModal.bind(this);

    this.state = {
      activeClass: 'alpha-theta',
      activeBro: 0,
    };
  }

  changeTab(event) {
    this.setState({ activeClass: event.target.id }, () => {
      var prevTab = document.querySelector('.tab-container .active');
      prevTab.classList.remove('active');
      var activeTab = document.getElementById(event.target.id);
      activeTab.classList.add('active');
    });

    // var prevDesc = document.getElementById(`${prevId}-desc`);
    // prevDesc.classList.remove('active');
    // var activeDesc = document.getElementById(`${event.target.id}-desc`);
    // activeDesc.classList.add('active');
  }

  openInfoModal(event) {
    if (!isNaN(parseInt(event.target.id))) {
      this.setState({ activeBro: parseInt(event.target.id) }, () => {
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

  render() {
    return (
      <section id="active-house">
        <div className="members-hero">
          <div className="active-house-image">
            <div className="members-image-text">
              <h1>Spring 2021 Active House</h1>
            </div>
          </div>

          <div className="members-tabs-container">
            <div className="tab-container">
              {Object.entries(activeClasses).map(([k, v], i) => {
                return (
                  <div
                    key={k}
                    id={k}
                    className={i === 0 ? 'active' : ''}
                    onClick={this.changeTab}
                  >
                    {v}
                  </div>
                );
              })}
            </div>

            <div className="active-class-name">
              <h1>{`${activeClasses[this.state.activeClass]} Class`}</h1>
            </div>
            <div className="tab-content active">
              <ul>
                {memberJson[this.state.activeClass].map((e, idx) => {
                  return (
                    <li id={idx} key={idx} onClick={this.openInfoModal}>
                      <div className="roster-photo">
                        <img
                          alt={e.nickname}
                          src={
                            require(`../../assets/members/${e['main-img']}`)
                              .default
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
          </div>
        </div>

        <MemberModal
          closeInfoModal={this.closeInfoModal}
          members={memberJson}
          activeClass={this.state.activeClass}
          activeBro={this.state.activeBro}
        />
      </section>
    );
  }
}
