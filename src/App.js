import React, {Component} from 'react';
import './App.css';
import Nav from './Nav.js';
import Splash from './Splash.js';
import About from './About.js';
import Projects from './Projects.js';
import Contact from './Contact.js';

class App extends Component {
  constructor(props) {
  super(props);

  this.state = {}

  }
  render() {
    return (
      <div>
        <Nav></Nav>
        <Splash></Splash>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    );
  }
}

export default App;
