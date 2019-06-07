import React, {Component} from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import NavDropdown from 'react-bootstrap/NavDropdown';


class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <Navbar>
          <NavDropdown className="nav-button" title="More" id="basic-nav-dropdown">
            <NavDropdown.Item>About</NavDropdown.Item>
            <NavDropdown.Item>Projects</NavDropdown.Item>
            <NavDropdown.Item>Contact</NavDropdown.Item>
          </NavDropdown>
        </Navbar>
      </div>
    )
  }

}

export default Nav;
