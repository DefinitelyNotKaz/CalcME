import React, { Component } from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


class Harem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      types: ["etiquette", "talent", "charm", "scheme"],
      total: () => this.state.types.map(x => this.state.typeTotal(x)).reduce((a, b) => a + b, 0),
      typeTotal: type => {
        type = this.state[type];
        let keys = Object.keys(type)
        let totals = keys.map(x => type[x] === '' ? 0 : type[x] * x)
        return totals.reduce((a, b) => {
          return a + b;
        }, 0);
      },
      etiquette: {
        100: 0,
        200: 0
      },
      talent: {
        100: 0,
        200: 0
      },
      charm: {
        100: 0,
        200: 0
      },
      scheme: {
        100: 0,
        200: 0
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
                <Col>
                  <img src='./assets/harem/etiquette100.png' alt=""></img>
                  <input className="bubble" id="etiquette100" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.etiquette[100]} />
                </Col>
                <Col>
                  <img src='./assets/harem/etiquette200.png' alt=""></img>
                  <input className="bubble" id="etiquette200" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.etiquette[200]} />
                </Col>
                <Col>
                  <img src='./assets/harem/talent100.png' alt=""></img>
                  <input className="bubble" id="talent100" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.talent[100]} />
                </Col>
                <Col>
                  <img src='./assets/harem/talent200.png' alt=""></img>
                  <input className="bubble" id="talent200" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.talent[200]} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <img src='./assets/harem/charm100.png' alt=""></img>
                  <input className="bubble" id="charm100" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.charm[100]} />
                </Col>
                <Col>
                  <img src='./assets/harem/charm200.png' alt=""></img>
                  <input className="bubble" id="charm200" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.charm[200]} />
                </Col>
                <Col>
                  <img src='./assets/harem/scheme100.png' alt=""></img>
                  <input className="bubble" id="scheme100" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.scheme[100]} />
                </Col>
                <Col>
                  <img src='./assets/harem/scheme200.png' alt=""></img>
                  <input className="bubble" id="scheme200" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.scheme[200]} />
                </Col>
              </Row>
            </Container>
          </Col>
          <Col>
            <h1>Total: {this.state.total()}</h1>
            <h3>Etiquette: {this.state.typeTotal('etiquette')}</h3>
            <h3>Talent: {this.state.typeTotal('talent')}</h3>
            <h3>Charm: {this.state.typeTotal('charm')}</h3>
            <h3>Scheme: {this.state.typeTotal('scheme')}</h3>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Harem;