import React, {Component} from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
          <h3>Contact me</h3>
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

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>

        </div>
      </div>
    )
  }

}

export default Contact;
