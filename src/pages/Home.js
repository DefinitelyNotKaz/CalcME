import React, { Component } from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col></Col>
          <Col className="temp">
            <img src="./assets/hi.png" alt=""></img>
            <center><h2>Not sure what to add here yet :3</h2></center>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}
export default Home;