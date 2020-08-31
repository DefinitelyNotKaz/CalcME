import React, { Component } from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Table from "react-bootstrap/Table"

class Intimacy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      types: ['bag', 'box', 'chest'],
      total: () => this.state.types.map(x => this.state.typeTotal(x)).reduce((a, b) => a + b, 0),
      typeTotal: type => {
        return this.state[type] * this.state.increase[type];
      },
      bag: 0,
      box: 0,
      chest: 0,
      increase: {
        bag: 1000,
        box: 10000,
        chest: 50000
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
                  <img alt="" className="game-icon" src="./assets/savvy/bag.png" />
                  <input className="bubble" id="bag" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.bag} />
                </Col>
                <Col className="itemCol" xs={6} sm>
                  <img alt="" className="game-icon" src="./assets/savvy/box.png" />
                  <input className="bubble" id="box" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.box} />
                </Col>
                <Col className="itemCol" xs={6} sm>
                  <img alt="" className="game-icon" src="./assets/savvy/chest.png" />
                  <input className="bubble" id="chest" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.chest} />
                </Col>
              </Row>
            </Container>
          </Col>
          <Col>
            <h2>Savvy increase</h2>
            <Table responsive>
              <tbody>
                <tr>
                  <td><b>Total</b></td>
                  <td><b>{this.format(this.state.total())}</b></td>
                </tr>
                <tr>
                  <td>Bag</td>
                  <td>{this.format(this.state.typeTotal('bag'))}</td>
                </tr>
                <tr>
                  <td>Box</td>
                  <td>{this.format(this.state.typeTotal('box'))}</td>
                </tr>
                <tr>
                  <td>Chest</td>
                  <td>{this.format(this.state.typeTotal('chest'))}</td>
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