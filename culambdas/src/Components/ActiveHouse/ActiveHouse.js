import { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import './activehouse.css';

const ActiveHouse = () => {
  const [value, setValue] = useState(0);

  const changeTab = (event) => {
    var prevTab = document.querySelector('.tab-container .active');
    var prevId = prevTab.id;
    prevTab.classList.remove('active');
    var activeTab = document.getElementById(event.target.id);
    activeTab.classList.add('active');

    var prevDesc = document.getElementById(`${prevId}-desc`);
    prevDesc.classList.remove('active');
    var activeDesc = document.getElementById(`${event.target.id}-desc`);
    activeDesc.classList.add('active');
  };

  const openInfoModal = (event) => {
    console.log(event.target.id);
    document.getElementById('roster-modal').classList.add('active');
    document.documentElement.style.overflow = 'hidden'; // firefox, chrome
    document.body.scroll = 'no'; // ie only
  };

  const closeInfoModal = (event) => {
    document.getElementById('roster-modal').classList.remove('active');
    document.documentElement.style.overflow = 'visible'; // firefox, chrome
    document.body.scroll = 'yes'; // ie only
  };

  return (
    <section id="active-house">
      <div className="active-house-hero">
        <div className="active-house-image">
          <div className="active-house-image-text">
            <h1>Spring 2021 Active House</h1>
            {/* <p>Meet our bros</p> */}
          </div>
        </div>

        <div className="active-house-tabs-container">
          <div className="tab-container">
            <div id="sp18" className="active" onClick={changeTab}>
              Spring 2018
            </div>
            <div id="fa18" className="" onClick={changeTab}>
              Fall 2018
            </div>
            <div id="sp19" className="" onClick={changeTab}>
              Spring 2019
            </div>
            <div id="fa19" className="" onClick={changeTab}>
              Fall 2019
            </div>
            <div id="sp20" className="" onClick={changeTab}>
              Spring 2020
            </div>
          </div>
          <div className="active-class-name">
            <h1>Alpha Zeta Class</h1>
          </div>
          <div className="tab-content active">
            <ul>
              <li id="orion" onClick={openInfoModal}>
                <div className="roster-photo">
                  <img src={'/images/orion.jpeg'} />
                </div>
                <div className="roster-caption">
                  <h1>#147</h1>
                  <span>Samuel "Orion" Lye</span>
                </div>
              </li>
              <li id="orion" onClick={openInfoModal}>
                <div className="roster-photo">
                  <img src={'/images/test1.jpeg'} />
                </div>
                <div className="roster-caption">
                  <h1>#147</h1>
                  <span>Samuel "Orion" Lye</span>
                </div>
              </li>
              <li id="orion" onClick={openInfoModal}>
                <div className="roster-photo">
                  <img src={'/images/test2.jpeg'} />
                </div>
                <div className="roster-caption">
                  <h1>#147</h1>
                  <span>Samuel "Orion" Lye</span>
                </div>
              </li>
              <li id="orion" onClick={openInfoModal}>
                <div className="roster-photo">
                  <img src={'/images/test2.jpeg'} />
                </div>
                <div className="roster-caption">
                  <h1>#147</h1>
                  <span>Samuel "Orion" Lye</span>
                </div>
              </li>
              <li id="orion" onClick={openInfoModal}>
                <div className="roster-photo">
                  <img src={'/images/test2.jpeg'} />
                </div>
                <div className="roster-caption">
                  <h1>#147</h1>
                  <span>Samuel "Orion" Lye</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="roster-modal">
        <AiOutlineDown onClick={closeInfoModal} className="close-modal" />
        <div className="roster-flex-container">
          <img src={'/images/orion_hover.jpeg'} />
          <div className="roster-info">
            <div className="roster-info-name">
              <h1>#147</h1>
              <h2>Samuel "Orion" Lye</h2>
            </div>
            <p>
              Samuel is from Singapore. Before college, he served in the
              Singapore Armed Forces for 2 years. On campus, Samuel is also
              involved in Cornell Venture Capital and Cup Robotics. In his free
              time, Samuel enjoys running, gymming, ultimate frisbee, baking,
              and photography. As the most wholesome guy in the fraternity, he
              often likes to flex his 94 rice purity score. If you ever need a
              dose of wholesomeness in your life, feel free to talk to him!
            </p>
            <div className="roster-info-desc">
              <ul>
                <li>
                  <span>Big Bro: </span>Cameron "Rover" Wong
                </li>
                <li>
                  <span>Major: </span>Economics and Information Science
                </li>
                <li>
                  <span>Email: </span>sl2982@cornell.edu
                </li>
                <li>
                  <span>Birthday: </span>August 18, 1998
                </li>
                <li>
                  <span>Hometown: </span>Singapore
                </li>
                <li>
                  <span>Dream Ride: </span>Tesla Roadster
                </li>
                <li>
                  <span>Favorite Quote: </span> "The only easy day was
                  yesterday" - Navy SEALS
                </li>
                <li>
                  <span>If I had a million dollars: </span>Travel the world!!!!!
                </li>
                <li>
                  <span>Fun fact: </span>Tree, lift, queue, boot
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="roster-info-card-container">
          <div className="roster-info-card">
            <h1>Advice to Freshmen</h1>
            <p>
              R U S H L A M B D A S but also find your place in college,
              surround yourself with people that care, and never stop working
              hard
            </p>
          </div>
          <div className="roster-info-card">
            <h1>Why I Joined</h1>
            <p>
              (I wanted to spread my wholesomeness) but also I made most of my
              closest friends in the military. Likewise, joining Lambdas has
              become a home away from home for me.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ActiveHouse;
