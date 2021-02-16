import React, {Component} from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import {PDFObject} from 'react-pdfobject';
import Modal from 'react-modal';
import styled from 'styled-components';

const Button = styled.button`
  border-color: #212529;
  color: #212529;
  &:hover {
    background-color: #212529;
    color: #FFFFFF;
    border-color: #212529;
  }
`



const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '100%',
    position: 'absolute'
  }
};


class About extends Component {
  constructor(props) {
    super(props)

    this.state = {
      description: "Hi. I'm Luke, a software developer in Denver, CO. I love putting things together and diving into complex problems. I strive to reinvent myself every day.",
      modalIsOpen: false

    }
    this.openModal = this.openModal.bind(this);
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  onCloseModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className="App">
        <div className="App-about">
          <Container>
            <Row className="about-container">
              <Col sm={4}>
                <Image className="profile-image" src="./profile.jpg" roundedCircle />
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
            <Button className="nav-button" onClick={() => this.openModal()}>Resume</Button>
          </div>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          style={customStyles}
          shouldCloseOnOverlayClick={true}
          onRequestClose={this.onCloseModal}
          ariaHideApp={false}
          >
          <PDFObject
            url="./LukeMcCraeDev2020.pdf"
          />
        </Modal>
      </div>
    )
  }

}

export default About;
