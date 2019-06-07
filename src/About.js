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
          <Button onClick={() => this.props.scrollTo('projects')}>Learn More</Button>
        </div>
      </div>
    )
  }

}

export default About;
