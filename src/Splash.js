import React, {Component} from 'react';
import './App.css';

class Splash extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <div className="App-splash">
          Splash
          <span className="navbar-toggler-icon"></span>
        </div>
      </div>
    )
  }

}

export default Splash;
