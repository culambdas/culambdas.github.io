import { Component } from 'react';
import { allClasses } from '../constants';
import './members.css';
import MemberModal from '../MemberModal/MemberModal';

export default class Roster extends Component {
  constructor(props) {
    super(props);

    this.changeTab = this.changeTab.bind(this);
    this.openInfoModal = this.openInfoModal.bind(this);
    this.closeInfoModal = this.closeInfoModal.bind(this);

    this.state = {
      activeClass: 'alpha-iota',
      activeBro: '',
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.heading !== this.props.heading) {
      this.setState({
        activeClass: 'alpha-iota',
        activeBro: '',
      });
    }
  }

  changeTab(event) {
    // console.log(event.target);
    this.setState({ activeClass: event.target.id, activeBro: '' }, () => {
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

  render() {
    console.log(Object.entries(this.props.jsonData));
    return (
      <section id="roster">
        <div className="members-hero">
          <div className="roster-image">
            <div className="members-image-text">
              <h1>{this.props.heading}</h1>
              {this.props.subHeading ? <h1>{this.props.subHeading}</h1> : null}
            </div>
          </div>

          <div className="members-tabs-container">
            <div className="tab-container">
              {Object.entries(this.props.jsonData).map(([k, v], i) => {
                return (
                  <div
                    key={k}
                    id={k}
                    className={i === 0 ? 'active' : ''}
                    onClick={this.changeTab}
                  >
                    {allClasses[k]}
                  </div>
                );
              })}
            </div>

            <div className="active-class-name">
              <h1>
                {allClasses[this.state.activeClass]}
                {this.state.activeClass === 'annex' ? '' : ' Class'}
              </h1>
            </div>
            <div className="tab-content active">
              <ul>
                {this.props.jsonData[this.state.activeClass].map((e, idx) => {
                  return (
                    <li
                      id={e.number}
                      key={e.number}
                      onClick={this.openInfoModal}
                    >
                      <div className="roster-photo">
                        <img
                          alt={e.nickname}
                          src={
                            require(`../../assets/members/${
                              e['main-img'] ? e['main-img'] : 'default.png'
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
          </div>
        </div>

        <MemberModal
          closeInfoModal={this.closeInfoModal}
          members={this.props.jsonData}
          activeClass={this.state.activeClass}
          activeBro={this.state.activeBro}
        />
      </section>
    );
  }
}
