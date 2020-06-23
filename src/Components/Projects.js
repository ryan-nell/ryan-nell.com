import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

class Projects extends Component {
    render() {

        const { projects } = this.props

        return(
            <Container className="projects-container">
                <h1 className="component-title">projects</h1>
                    <Row className="project-section">
                        {
                            projects.map(project => (
                                <Row className="project-div" key={project.id}>
                                    <Col className="project-details">
                                        <h3 className="project-name">{project.name}</h3>
                                        {/* <p className="project-about">{project.about}</p> */}
                                        <a className="project-button" href={project.link} target="_blank" rel="noopener noreferrer">View on Github</a>
                                    </Col>
                                    <Col className="project-image-container">    
                                        <Image className="project-image" src={project.img} alt={project.alt} fluid/>
                                    </Col>
                                </Row>
                            ))
                        }
                    </Row>      
            </Container>
        )
    }
}

export default Projects