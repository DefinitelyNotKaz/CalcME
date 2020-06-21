import React, { Component } from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Table from "react-bootstrap/Table"

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

  format(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <h2>Treasury</h2>
            <Container>
              <Row>
                <Col className="itemCol" xs={6} sm>
                  <img alt="" className="game-icon" src="./assets/intimacy/silver.png" />
                  <input className="bubble" id="silver" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.silver} />
                </Col>
                <Col className="itemCol" xs={6} sm>
                  <img alt="" className="game-icon" src="./assets/intimacy/gold.png" />
                  <input className="bubble" id="gold" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.gold} />
                </Col>
                <Col className="itemCol" xs={6} sm>
                  <img alt="" className="game-icon" src="./assets/intimacy/jade.png" />
                  <input className="bubble" id="jade" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.jade} />
                </Col>
                <Col className="itemCol" xs={6} sm>
                  <img alt="" className="game-icon" src="./assets/intimacy/crown.png" />
                  <input className="bubble" id="crown" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.crown} />
                </Col>
              </Row>
            </Container>
          </Col>
          <Col>
            <h2>Intimacy increase</h2>
            <Table responsive>
              <tbody>
                <tr>
                  <td><b>Total</b></td>
                  <td><b>{this.format(this.state.total())}</b></td>
                </tr>
                <tr>
                  <td>Silver</td>
                  <td>{this.format(this.state.typeTotal('silver'))}</td>
                </tr>
                <tr>
                  <td>Gold</td>
                  <td>{this.format(this.state.typeTotal('gold'))}</td>
                </tr>
                <tr>
                  <td>Jade</td>
                  <td>{this.format(this.state.typeTotal('jade'))}</td>
                </tr>
                <tr>
                  <td>Crown</td>
                  <td>{this.format(this.state.typeTotal('crown'))}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Intimacy;