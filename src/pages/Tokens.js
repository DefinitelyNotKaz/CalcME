
import React, { Component } from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

class Tokens extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: {
        commerce: 0,
        politics: 0,
      },
      tiers: ['r1', 'r2', 'r3', 'r4', 'r5'],
      typeTotal: (type, stat) => {
        return Math.floor(this.state.tiers.map(x => this.state[type][x] * (this.state.increases[type][x] * this.state.stats[stat])).reduce((a, b) => a + b, 0))
      },
      tokenTotal: (type, tier, stat) => {
        return Math.floor(this.state[type][tier] * (this.state.stats[stat] * this.state.increases[type][tier]))
      },
      tax: {
        r1: 0,
        r2: 0,
        r3: 0,
        r4: 0,
        r5: 0
      },
      troop: {
        r1: 0,
        r2: 0,
        r3: 0,
        r4: 0,
        r5: 0
      },
      increases: {
        tax: {
          r1: 0.1,
          r2: 0.5,
          r3: 1,
          r4: 5,
          r5: 10
        },
        troop: {
          r1: 0.1,
          r2: 0.5,
          r3: 1,
          r4: 5,
          r5: 10
        }
      }
    }
  }

  handleChange(event) {
    const tier = event.target.id.match(/r\d+/)[0];
    const type = event.target.id.split(tier)[0]
    const itemCount = (event.target.validity.valid) ? event.target.value : this.state[type][tier];
    let newstate = this.state;
    newstate[type][tier] = isNaN(parseInt(itemCount)) ? 0 : parseInt(itemCount);
    this.setState(newstate);
  }

  handleStatsChange(event) {
    event.stopPropagation();
    const itemCount = (event.target.validity.valid) ? event.target.value : this.state[event.target.id];
    let newstate = this.state;
    newstate.stats[event.target.id] = isNaN(parseInt(itemCount)) ? 0 : parseInt(itemCount);
    this.setState(newstate);
    console.log(this.state)
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">Commerce</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                value={this.state.stats.commerce}
                onChange={this.handleStatsChange.bind(this)}
                pattern="[0-9]*"
                id="commerce"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">Politics</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                value={this.state.stats.politics}
                onChange={this.handleStatsChange.bind(this)}
                pattern="[0-9]*"
                id="politics"
              />
            </InputGroup>
          </Col>
          <Col>
            <Container>
              <Row>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/tokens/taxr1.png" />
                  <input className="bubble" id="taxr1" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.tax.r1} />
                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/tokens/taxr2.png" />
                  <input className="bubble" id="taxr2" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.tax.r2} />
                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/tokens/taxr3.png" />
                  <input className="bubble" id="taxr3" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.tax.r3} />
                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/tokens/taxr4.png" />
                  <input className="bubble" id="taxr4" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.tax.r4} />
                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/tokens/taxr5.png" />
                  <input className="bubble" id="taxr5" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.tax.r5} />
                </Col>
              </Row>
              <Row>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/tokens/troopr1.png" />
                  <input className="bubble" id="troopr1" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.troop.r1} />
                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/tokens/troopr2.png" />
                  <input className="bubble" id="troopr2" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.troop.r2} />
                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/tokens/troopr3.png" />
                  <input className="bubble" id="troopr3" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.troop.r3} />
                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/tokens/troopr4.png" />
                  <input className="bubble" id="troopr4" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.troop.r4} />
                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/tokens/troopr5.png" />
                  <input className="bubble" id="troopr5" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.troop.r5} />
                </Col>
              </Row>
            </Container>
          </Col>
          <Col>
            <Container>
              <Row>
                <Col>
                  <h1>Total taels: {this.state.typeTotal('tax', 'commerce')}</h1>
                  <h3>R1: {this.state.tokenTotal('tax', 'r1', 'commerce')}</h3>
                  <h3>R2: {this.state.tokenTotal('tax', 'r2', 'commerce')}</h3>
                  <h3>R3: {this.state.tokenTotal('tax', 'r3', 'commerce')}</h3>
                  <h3>R4: {this.state.tokenTotal('tax', 'r4', 'commerce')}</h3>
                  <h3>R5: {this.state.tokenTotal('tax', 'r5', 'commerce')}</h3>
                </Col>
                <Col>
                  <h1>Total troops: {this.state.typeTotal('troop', 'politics')}</h1>
                  <h3>R1: {this.state.tokenTotal('troop', 'r1', 'politics')}</h3>
                  <h3>R2: {this.state.tokenTotal('troop', 'r2', 'politics')}</h3>
                  <h3>R3: {this.state.tokenTotal('troop', 'r3', 'politics')}</h3>
                  <h3>R4: {this.state.tokenTotal('troop', 'r4', 'politics')}</h3>
                  <h3>R5: {this.state.tokenTotal('troop', 'r5', 'politics')}</h3>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Tokens;