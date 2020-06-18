
import React, { Component } from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
 
class Tokens extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col></Col>
          <Col className="temp">
            <img src="./assets/sob.png" alt=""></img>
            <h2> Nothing to see here yet</h2>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}
 
export default Tokens;