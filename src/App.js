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

  this.homeRef = React.createRef();
  this.aboutRef = React.createRef();
  this.projectsRef = React.createRef();
  this.contactRef = React.createRef();
  this.scrollTo = this.scrollTo.bind(this);
  }

  scrollTo = (page) => {
    if(page === 'about') {
      window.scrollTo(0, this.aboutRef.current.offsetTop)
    } else if(page === 'projects') {
      window.scrollTo(0, this.projectsRef.current.offsetTop)
    } else if(page === 'contact') {
      window.scrollTo(0, this.contactRef.current.offsetTop)
    }
  }

  render() {
    return (
      <div>
        <Splash scrollTo={this.scrollTo} ref={this.homeRef}>
        </Splash>

        <div ref={this.aboutRef}>
          <About scrollTo={this.scrollTo}></About>
        </div>

        <div ref={this.projectsRef}>
          <Projects scrollTo={this.scrollTo}></Projects>
        </div>

        <div ref={this.contactRef}>
          <Contact scrollTo={this.scrollTo}></Contact>
        </div>
      </div>
    );
  }
}

export default App;
