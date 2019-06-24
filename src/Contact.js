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
    e.preventDefault()

    e.preventDefault();
    fetch(`https://email-sender-45678.herokuapp.com/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      })
    })
    .then(res => res.json())
    .then(json => {
      console.log(json);
      if(json.success) {
        this.setState({
          name: '',
          email: '',
          message: 'Thanks for reaching out! Have a great day :)'
        })
      } else {
        this.setState({
          name: '',
          emai: '',
          message: `Well this is embarrasing, something is broken :( Shoot me an email at lukemccrae@gmail.com and I will get back to you!`
        })
      }
    });

  }

  render() {
    return (
      <div className="App">
        <div className="App-contact">
          <Container>
            <h3>Contact me</h3>
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

                  <button className="nav-button" variant="primary" type="submit">
                    Submit
                  </button>
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
