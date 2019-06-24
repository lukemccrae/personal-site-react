import React, {Component} from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import {PDFObject} from 'react-pdfobject';
import Modal from 'react-modal';

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
      description: "Hi, I'm Luke. I'm passionate about helping people improve their lives through software.",
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
            <button className="nav-button" onClick={() => this.props.scrollTo('projects')}>Projects</button>
            <button className="nav-button" onClick={() => this.openModal()}>Resume</button>
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
            url="./Resume.pdf"
          />
        </Modal>
      </div>
    )
  }

}

export default About;
