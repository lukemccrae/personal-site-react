import React, {Component} from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import {FaLinkedin} from 'react-icons/fa';
import {FaMedium} from 'react-icons/fa';
import {FaEnvelope} from 'react-icons/fa';
import {GoMarkGithub} from 'react-icons/go';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';


const Icon = styled.a`

`

const Button = styled.button`
  border-color: #FFFFFF;
  color: #FFFFFF;
  &:hover {
    background-color: #FFFFFF;
    color: #212529;
    border-color: #FFFFFF;
  }
`

class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      message: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);

    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      name: '',
      email: '',
      message: 'Thanks for reaching out, have a great day :)'
    })
    
    fetch(`https://6kqoehq7fj.execute-api.us-west-2.amazonaws.com/default/emailSender`, {
      method: 'POST',
      headers : {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        
    },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      })
    })
    .then(res => res.json())
    .then(json => {
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-contact">
          <Container>
            <h1>Contact</h1>
            <h3>Want to work together?</h3>
            <Row className="contact-form">
              <Col sm={3}></Col>
              <Col sm={6}>
                <Form onSubmit={e => this.handleSubmit(e)}>
                  <Form.Group id="name">
                    <Form.Control value={this.state.name} onChange={this.onNameChange} ref="name" type="text" placeholder="Name"/>
                  </Form.Group>

                  <Form.Group>
                    <Form.Control value={this.state.email} onChange={this.onEmailChange} ref="email" id="emaiil" type="email" placeholder="Email"/>
                  </Form.Group>
                  <Form.Group>
                    <Form.Control value={this.state.message} onChange={this.onMessageChange} ref="message" id="message" type="text" placeholder="Message" as="textarea" rows="7"/>
                  </Form.Group>

                  <Button className="nav-button" variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Col>
              <Col sm={2}></Col>
            </Row>
            <Row>
              <Col className="icon-row">
                <Icon className="icon-link" href={"https://www.linkedin.com/in/lukemccrae/"}><FaLinkedin></FaLinkedin></Icon>
                <Icon className="icon-link" href={"https://github.com/lukemccrae"}><GoMarkGithub></GoMarkGithub></Icon>
                <Icon className="icon-link" href={"https://medium.com/@lukemccrae"}><FaMedium></FaMedium></Icon>
                <Icon className="icon-link" href={"mailto:luke.mccrae@gmail.com"}><FaEnvelope></FaEnvelope></Icon>
              </Col>
            </Row>
          </Container>
          <p className="copyright">Luke McCrae ©2019</p>
        </div>
      </div>
    )
  }

}

export default Contact;
