import React, {Component} from 'react';
import './App.css';
import ProjectModal from './ProjectModal.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import Modal from 'react-modal';

const Button = styled.button`
  border-color: #FFFFFF;
  color: #FFFFFF;
  &:hover {
    background-color: #FFFFFF;
    color: #212529;
    border-color: #FFFFFF;
  }
`

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
    description: "A tool to streamline routines and increase productivity. Create, edit, and deploy groups of timers.",
    technologies: 'React, node.js, Express, MongoDB, Heroku, Firebase',
    url: 'https://group-timer.firebaseapp.com',
    github: 'https://github.com/lukemccrae/routine-timer',
    id: 2
  },
  // {
  //   name: 'Simple Todo',
  //   img: './simpletodo.jpg',
  //   description: 'Stay orgainzed with this simple todo list.',
  //   technologies: 'React, node.js, Express, MongoDB, Heroku, Firebase',
  //   url: 'https://simple-todo-d5482.firebaseapp.com/',
  //   github: 'https://github.com/lukemccrae/todo-boilerplate',
  //   id: 3
  // },
  {
    name: 'Personal Site',
    img: './portfolio.jpg',
    description: 'My personal fullstack portfolio. Created using React and Bootstrap, with AWS Lambda for the contact form.',
    technologies: 'React, Bootstrap, Firebase, AWS Lambda',
    url: 'https://lukemccrae-97878.firebaseapp.com',
    github: 'https://github.com/lukemccrae/todo-boilerplate',
    id: 4
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
    width: '90%',
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
    border-width: 3px;
    border-style: solid;
    border-color: grey;
    min-height: 65px;
    align-items: center;
    justify-content: center;
    margin: 10px;
    position: relative;
    text-align: center;
    height: 7em;
    width: 7em;
    cursor: pointer;
    `

    const ProjectName = styled.div`
    font-size: 1em;
    `

    const Heading = styled.div`
    font-size: 2em;
    `

    const Description = styled.div`
    font-size: 1.2em;
    margin-bottom: 1.5em;
    `

    return (
      <div className="App">
        <div className="App-projects">
          <Container>
            <Heading>Portfolio</Heading>
            <Description>Select a project to learn more</Description>
            <Row>
                {projects.map(p => {
                  return (
                    <Col key={p.id} className="project">
                      <ProjectName>{p.name}</ProjectName>
                      <Projects className="project-img" onClick={() => this.openProject(p)} src={p.img}></Projects>
                    </Col>
                  )
                })}
            </Row>
              <Button className="nav-button" onClick={() => this.props.scrollTo('contact')}>Contact</Button>
          </Container>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          style={customStyles}
          shouldCloseOnOverlayClick={true}
          onRequestClose={this.onCloseModal}
          ariaHideApp={false}
        >
        <ProjectModal onCloseModal={this.onCloseModal} project={this.state.selectedProject}></ProjectModal>
      </Modal>
      </div>
    )
  }

}

export default Projects;
