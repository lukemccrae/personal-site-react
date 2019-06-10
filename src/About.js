import React, {Component} from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

class About extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <div className="App-about">
          <div>
            <Button className="nav-button" onClick={() => this.props.scrollTo('projects')}>Projects</Button>
            <Button className="nav-button" onClick={() => this.props.openModal}>Resume</Button>
          </div>
        </div>
      </div>
    )
  }

}

export default About;
