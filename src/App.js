import React from 'react';
import Main from './Components/Main.js'
import Skills from './Components/Skills.js'
import Projects from './Components/Projects.js'
import MyInformation from './Util/util.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css';


function App() {
  return (
    <Container fluid className="App">
      <Row  xs={1} sm={3} md={3} lg={3} xl={3}>
        <Col className="component-cols">
          <Main myInfo={MyInformation} contact={MyInformation.contact}/>
        </Col>
        <Col className="component-cols">
          <Projects projects={MyInformation.projects}/>
        </Col>
        <Col className="component-cols">
          <Skills skills={MyInformation.skills}/>
        </Col>
      </Row>
    </Container> 
  );
}

export default App;
