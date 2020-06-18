
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
    newstate[type][ammount] = parseInt(itemCount);
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
                  <input className="form-control" id="random100" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state['random100']} />
                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/random400.png" />
                  <input className="form-control" id="random400" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state['random400']} />
                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/random1000.png" />
                  <input className="form-control" id="random1000" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state['random1000']} />
                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/random5000.png" />
                  <input className="form-control" id="random5000" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state['random5000']} />
                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/random10000.png" />
                  <input className="form-control" id="random10000" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state['random10000']} />
                </Col>
              </Row>
              <Row>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/commerce100.png" />
                  <input className="form-control" id="commerce100" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state['commerce100']} />
                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/commerce400.png" />
                  <input className="form-control" id="commerce400" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state['commerce400']} />
                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/commerce1000.png" />
                  <input className="form-control" id="commerce1000" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state['commerce1000']} />
                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/commerce5000.png" />
                  <input className="form-control" id="commerce5000" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state['commerce5000']} />
                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/commerce10000.png" />
                  <input className="form-control" id="commerce10000" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state['commerce10000']} />
                </Col>
              </Row>
              <Row>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/agriculture100.png" />
                  <input className="form-control" id="agriculture100" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state['agriculture100']} />

                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/agriculture400.png" />
                  <input className="form-control" id="agriculture400" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state['agriculture400']} />

                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/agriculture1000.png" />
                  <input className="form-control" id="agriculture1000" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state['agriculture1000']} />

                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/agriculture5000.png" />
                  <input className="form-control" id="agriculture5000" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state['agriculture5000']} />

                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/agriculture10000.png" />
                  <input className="form-control" id="agriculture10000" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state['agriculture10000']} />

                </Col>
              </Row>
              <Row>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/politics100.png" />
                  <input className="form-control" id="politics100" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state['politics100']} />
                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/politics400.png" />
                  <input className="form-control" id="politics400" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state['politics400']} />
                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/politics1000.png" />
                  <input className="form-control" id="politics1000" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state['politics1000']} />
                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/politics5000.png" />
                  <input className="form-control" id="politics5000" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state['politics5000']} />
                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/politics10000.png" />
                  <input className="form-control" id="politics10000" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state['politics10000']} />
                </Col>
              </Row>
              <Row>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/military100.png" />
                  <input className="form-control" id="military100" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state['military100']} />
                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/military400.png" />
                  <input className="form-control" id="military400" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state['military400']} />
                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/military1000.png" />
                  <input className="form-control" id="military1000" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state['military1000']} />
                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/military5000.png" />
                  <input className="form-control" id="military5000" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state['military5000']} />
                </Col>
                <Col className="itemCol">
                  <img alt="" className="game-icon" src="./assets/power/military10000.png" />
                  <input className="form-control" id="military10000" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state['military10000']} />
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