import React, {Component} from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

class About extends Component {
  constructor(props) {
    super(props)

    this.state = {
      description: 'text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised i'
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-about">
          <Container>
            <Row className="about-container">
              <Col sm={4}>
                <Image src="./profile.jpg" roundedCircle />
              </Col>
              <Col sm={8}>
                <div className="about-me-description">
                  {this.state.description}
                </div>
              </Col>
            </Row>
          </Container>

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
