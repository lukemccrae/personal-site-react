import React, {Component} from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';


class Projects extends Component {
  constructor(props) {
    super(props)

    this.state = {
      projects: [
        {
          name: 'Beer Crawl',
          img: 'https://picsum.photos/id/281/270/117',
          description: "An app to help you explore your urban environment. After getting your location, a dynamically generated beer crawl is generated along with a link to the directions in your maps application.",
          id: 1
        },
        {
          name: 'Group Timer',
          img: 'https://picsum.photos/id/281/270/117',
          description: 'Conquer your todo list with the help of sequential timers.',
          id: 2
        },
        {
          name: 'Simple Todo',
          img: 'https://picsum.photos/id/281/270/117',
          description: 'Stay orgainzed with this simple todo list.',
          id: 3
        }
      ]
    }
  }



  render() {
    const Projects = styled.div`
    border-width: 2px;
    border-style: solid;
    border-radius: 5px;
    border-color: grey;
    min-height: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    `

    return (
      <div className="App">
        <div className="App-projects">
          <Container>
            <Row className="project">
                {this.state.projects.map(p => {
                  return (
                    <Col key={p.id}>
                      <Projects>
                        <h3>{p.name}</h3>
                      </Projects>
                    </Col>
                  )
                })}
            </Row>
          </Container>
          <Button className="nav-button" onClick={() => this.props.scrollTo('contact')}>Contact</Button>
        </div>
      </div>
    )
  }

}

export default Projects;
