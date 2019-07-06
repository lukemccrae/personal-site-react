import React, {Component} from 'react';
import './App.css';
import Particles from 'react-particles-js';
import styled from 'styled-components';


const Button = styled.button`
  border-color: #FFFFFF;
  color: #FFFFFF;
  &:hover {
    background-color: #FFFFFF;
    color: #212529;
    border-color: #FFFFFF;
  }
`

class Splash extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <div className="App-splash">
          <div id="particles">
            <Particles></Particles>
          </div>
          <div className="name">
            <h1>Luke McCrae</h1>
            <h4>Full Stack Developer</h4>
            <Button className="nav-button" onClick={() => this.props.scrollTo('about')}>Learn More</Button>
          </div>
        </div>
      </div>
    )
  }

}

export default Splash;
