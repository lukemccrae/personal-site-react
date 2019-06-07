import React, {Component} from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


class Nav extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render(props) {
    return (
      <div className="nav">
        <Navbar>
          <NavDropdown className="nav-button" title="More" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <button onClick={() => this.props.scrollTo('about')}>About</button>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <button onClick={() => this.props.scrollTo('projects')}>Projects</button>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <button onClick={() => this.props.scrollTo('contact')}>Contact</button>
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar>
      </div>
    )
  }

}

export default Nav;
