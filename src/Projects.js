import React, {Component} from 'react';
import './App.css';
import ProjectModal from './ProjectModal.js';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import Modal from 'react-modal';

const projects = [
  {
    name: 'Beer Crawl',
    img: './beercrawl.jpg',
    description: "An app to help you explore your urban environment. After getting your location, a beer crawl is dynamically generated along with a link to the directions in your maps application.",
    technologies: 'JavaScript, Bootstrap 3, Google Maps API',
    url: 'https://mapmybeercrawl.firebaseapp.com/',
    github: 'https://github.com/lukemccrae/beercrawl',
    id: 1
  },
  {
    name: 'Group Timer',
    img: './grouptimer.jpg',
    description: 'Conquer your todo list with the help of sequential timers.',
    technologies: 'React, node.js, Express, MongoDB, Heroku, Firebase',
    url: 'https://group-timer.firebaseapp.com',
    github: 'https://github.com/lukemccrae/routine-timer',
    id: 2
  },
  {
    name: 'Simple Todo',
    img: './simpletodo.jpg',
    description: 'Stay orgainzed with this simple todo list.',
    technologies: 'React, node.js, Express, MongoDB, Heroku, Firebase',
    url: 'https://simple-todo-d5482.firebaseapp.com/',
    github: 'https://github.com/lukemccrae/todo-boilerplate',
    id: 3
  }
]

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    position: 'absolute'
  }
};


class Projects extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modslIsOpen: false,
      selectedProject: {}
    }
    this.openProject = this.openProject.bind(this);
    this.openModal = this.openModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.disableScroll = this.disableScroll.bind(this);
  }

    openProject(p) {
      this.setState({
        selectedProject: p
      })
      this.openModal()
    }

    openModal = () => {
      this.setState({ modalIsOpen: true });
    };

    onCloseModal = () => {
      this.setState({ modalIsOpen: false });
  };

  disableScroll = () => { document.body.style.overflow = 'hidden' }



  render() {
    const Projects = styled.img`
    border-width: 2px;
    border-style: solid;
    border-radius: 5px;
    border-color: grey;
    min-height: 65px;
    align-items: center;
    justify-content: center;
    margin: 10px;
    position: relative;
    text-align: center;
    height: 180px;
    width: 170px;
    cursor: pointer;
    `

    return (
      <div className="App">
        <div className="App-projects">
          <Container>
            <Row>
                {projects.map(p => {
                  return (
                    <Col key={p.id} className="project">
                      <h3>{p.name}</h3>
                      <Projects className="project-img" onClick={() => this.openProject(p)} src={p.img}></Projects>
                    </Col>
                  )
                })}
            </Row>
          </Container>
          <Button className="nav-button" onClick={() => this.props.scrollTo('contact')}>Contact</Button>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          style={customStyles}
          shouldCloseOnOverlayClick={true}
          onRequestClose={this.onCloseModal}
        >
        <ProjectModal onCloseModal={this.onCloseModal} project={this.state.selectedProject}></ProjectModal>
      </Modal>
      </div>
    )
  }

}

export default Projects;
