import React, {Component} from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

class Projects extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <div className="App-projects">
          Projects
          <Button onClick={() => this.props.scrollTo('contact')}>Contact</Button>
        </div>
      </div>
    )
  }

}

export default Projects;
