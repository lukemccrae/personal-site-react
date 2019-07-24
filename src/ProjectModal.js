import React from 'react';
import styled from 'styled-components';
import {FiGlobe} from 'react-icons/fi';
import {GoMarkGithub} from 'react-icons/go';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Close = styled.button `
  border: none;
`

const Icon = styled.a`

`


const ProjectModal = props => {
  return (
    <div>
      <Container className="container">
        <Row className="project-name-row">
          <h3>{props.project.name}</h3>
          <Close className="close-project icon-link" onClick={props.onCloseModal}><span>X</span></Close>
        </Row>
        <p>Created using: {props.project.technologies}</p>
        <div>{props.project.description}</div>
        <div className="icon-row">
          <Row>
            <Icon className="icon-link" href={props.project.url}><FiGlobe></FiGlobe></Icon>
            <Icon className="icon-link" href={props.project.github}><GoMarkGithub></GoMarkGithub></Icon>
          </Row>
        </div>
      </Container>

    </div>
  )
}

export default ProjectModal;
