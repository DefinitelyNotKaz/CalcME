
import React, { Component } from "react";
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

class Power extends Component {
  constructor(props) {
    super(props);
    this.state = {
      types: ["random", "commerce", "agriculture", "politics", "military"],
      total: () => this.state.types.map(x => this.state.typeTotal(x)).reduce((a, b) => a + b, 0),
      typeTotal: type => {
        type = this.state[type];
        let keys = Object.keys(type)
        let totals = keys.map(x => type[x] === '' ? 0 : type[x] * x)
        return totals.reduce((a, b) => {
          return a + b;
        }, 0);
      },
      random: {
        100: 0,
        400: 0,
        1000: 0,
        5000: 0,
        10000: 0
      },
      agriculture: {
        100: 0,
        400: 0,
        1000: 0,
        5000: 0,
        10000: 0
      },
      commerce: {
        100: 0,
        400: 0,
        1000: 0,
        5000: 0,
        10000: 0
      },
      politics: {
        100: 0,
        400: 0,
        1000: 0,
        5000: 0,
        10000: 0
      },
      military: {
        100: 0,
        400: 0,
        1000: 0,
        5000: 0,
        10000: 0
      }
    }
  }

  handleChange(event) {
    const ammount = event.target.id.match(/\d+/g)[0];
    const type = event.target.id.match(/[a-zA-Z]+/g)[0];
    const itemCount = (event.target.validity.valid) ? event.target.value : this.state[type][ammount];
    let newstate = this.state;
    newstate[type][ammount] = isNaN(parseInt(itemCount)) ? 0 : parseInt(itemCount);
    this.setState(newstate);
  }


  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Container>
              <Row>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/random100.png" />
                  <input className="bubble" id="random100" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.random[100]} />
                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/random400.png" />
                  <input className="bubble" id="random400" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.random[400]} />
                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/random1000.png" />
                  <input className="bubble" id="random1000" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.random[1000]} />
                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/random5000.png" />
                  <input className="bubble" id="random5000" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.random[5000]} />
                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/random10000.png" />
                  <input className="bubble" id="random10000" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.random[10000]} />
                </Col>
              </Row>
              <Row>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/commerce100.png" />
                  <input className="bubble" id="commerce100" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.commerce[100]} />
                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/commerce400.png" />
                  <input className="bubble" id="commerce400" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.commerce[400]} />
                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/commerce1000.png" />
                  <input className="bubble" id="commerce1000" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.commerce[1000]} />
                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/commerce5000.png" />
                  <input className="bubble" id="commerce5000" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.commerce[5000]} />
                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/commerce10000.png" />
                  <input className="bubble" id="commerce10000" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.commerce[10000]} />
                </Col>
              </Row>
              <Row>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/agriculture100.png" />
                  <input className="bubble" id="agriculture100" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.agriculture[100]} />

                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/agriculture400.png" />
                  <input className="bubble" id="agriculture400" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.agriculture[400]} />

                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/agriculture1000.png" />
                  <input className="bubble" id="agriculture1000" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.agriculture[1000]} />

                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/agriculture5000.png" />
                  <input className="bubble" id="agriculture5000" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.agriculture[5000]} />

                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/agriculture10000.png" />
                  <input className="bubble" id="agriculture10000" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.agriculture[10000]} />

                </Col>
              </Row>
              <Row>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/politics100.png" />
                  <input className="bubble" id="politics100" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.politics[100]} />
                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/politics400.png" />
                  <input className="bubble" id="politics400" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.politics[400]} />
                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/politics1000.png" />
                  <input className="bubble" id="politics1000" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.politics[1000]} />
                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/politics5000.png" />
                  <input className="bubble" id="politics5000" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.politics[5000]} />
                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/politics10000.png" />
                  <input className="bubble" id="politics10000" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.politics[10000]} />
                </Col>
              </Row>
              <Row>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/military100.png" />
                  <input className="bubble" id="military100" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.military[100]} />
                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/military400.png" />
                  <input className="bubble" id="military400" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.military[400]} />
                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/military1000.png" />
                  <input className="bubble" id="military1000" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.military[1000]} />
                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/military5000.png" />
                  <input className="bubble" id="military5000" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.military[5000]} />
                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/military10000.png" />
                  <input className="bubble" id="military10000" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.military[10000]} />
                </Col>
              </Row>
            </Container>
          </Col>
          <Col>
            <h1>Total: {this.state.total()}</h1>
            <h3>Agriculture: {this.state.typeTotal('agriculture')}</h3>
            <h3>Commerce: {this.state.typeTotal('commerce')}</h3>
            <h3>Politics: {this.state.typeTotal('politics')}</h3>
            <h3>Military: {this.state.typeTotal('military')}</h3>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Power;