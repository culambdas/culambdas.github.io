import React, { Component } from 'react';
import './App.css';
import smoke from './static/images/smoke.mp4';
import Navbar from './Components/Navbar/Navbar';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Navbar />
        <section>
          <video className="hero" autoPlay loop muted>
            <source src={smoke} type="video/mp4" />
          </video>
          <span className="lfe-splash-text fade-in">
            &Lambda; &Phi; &Epsilon;
          </span>
        </section>
      </>
    );
  }
}

export default App;
