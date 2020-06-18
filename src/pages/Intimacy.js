import React, { Component } from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

class Intimacy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      types: ['silver', 'gold', 'jade', 'crown'],
      total: () => this.state.types.map(x => this.state.typeTotal(x)).reduce((a, b) => a + b, 0),
      typeTotal: type => {
        return this.state[type] * this.state.increase[type];
      },
      silver: 0,
      gold: 0,
      jade: 0,
      crown: 0,
      increase: {
        silver: 10,
        gold: 50,
        jade: 100,
        crown: 4000
      }
    }
  }

  handleChange(event) {
    const itemCount = (event.target.validity.valid) ? event.target.value : this.state[event.target.id];
    let newstate = this.state;
    newstate[event.target.id] = isNaN(parseInt(itemCount)) ? 0 : parseInt(itemCount);
    this.setState(newstate);
  }

  render() {
    return (
      <Container>
        <Row>
          <Col></Col>
          <Col className="itemCol">
            <Container>
              <Row>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/intimacy/silver.png" />
                  <input className="form-control" id="silver" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.silver} />
                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/intimacy/gold.png" />
                  <input className="form-control" id="gold" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.gold} />
                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/intimacy/jade.png" />
                  <input className="form-control" id="jade" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.jade} />
                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/intimacy/crown.png" />
                  <input className="form-control" id="crown" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.crown} />
                </Col>
              </Row>
            </Container>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <h1 className="centeredText">Total: {this.state.total()}</h1>
            <h3 className="centeredText">Silver: {this.state.typeTotal('silver')}</h3>
            <h3 className="centeredText">Gold: {this.state.typeTotal('gold')}</h3>
            <h3 className="centeredText">Jade: {this.state.typeTotal('jade')}</h3>
            <h3 className="centeredText">Crown: {this.state.typeTotal('crown')}</h3>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

export default Intimacy;