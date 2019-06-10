import React, {Component} from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

class Splash extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <div className="App-splash">
          <h3>Luke McCrae</h3>
          <h5>Full Stack Developer</h5>
          <Button className="nav-button" onClick={() => this.props.scrollTo('about')}>Learn More</Button>
        </div>
      </div>
    )
  }

}

export default Splash;
