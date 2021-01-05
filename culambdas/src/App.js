import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

const Hero = styled.section`
  width : 100vw;
  height : 100vh;

  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items : center;

  background-image: url('/pics/smoke.mp4');
  background-size : cover;
  background-position : center center;
  background-repeat : no-repeat;
  background-attachment : fixed;
`;

const HeroInner = styled.h1`
  color: white;
  font-family: "Times New Roman", Times, serif;
  font-size: 10em;
`;
class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <Hero>
        <HeroInner className="fade-in">
          &Lambda; &Phi; &Epsilon;
        </HeroInner>
        
        
      </Hero>
    );
  }
}

export default App;
