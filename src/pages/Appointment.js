
import React, { Component } from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      have: {
        total: () => this.calculateTotal('have'),
        baron: {
          beads: 0,
          robe: 0,
          ring: 0
        },
        viscount: {
          beads: 0,
          robe: 0,
          ring: 0
        },
        count: {
          beads: 0,
          robe: 0,
          ring: 0
        },
        marquess: {
          beads: 0,
          robe: 0,
          ring: 0
        },
        duke: {
          beads: 0,
          robe: 0,
          ring: 0
        },
        grandduke: {
          beads: 0,
          robe: 0,
          ring: 0
        },
        ironcap: {
          beads: 0,
          robe: 0,
          ring: 0
        }
      },
      want: {
        total: () => this.calculateTotal('want'),
        baron: {
          beads: 0,
          robe: 0,
          ring: 0
        },
        viscount: {
          beads: 0,
          robe: 0,
          ring: 0
        },
        count: {
          beads: 0,
          robe: 0,
          ring: 0
        },
        marquess: {
          beads: 0,
          robe: 0,
          ring: 0
        },
        duke: {
          beads: 0,
          robe: 0,
          ring: 0
        },
        grandduke: {
          beads: 0,
          robe: 0,
          ring: 0
        },
        ironcap: {
          beads: 1,
          robe: 0,
          ring: 0
        }
      },
      need: {
        beads: () => this.state.want.total().beads - this.state.have.total().beads,
        robe: () => this.state.want.total().robe - this.state.have.total().robe,
        ring: () => this.state.want.total().ring - this.state.have.total().ring
      },
      required: {
        order: ['ironcap', 'grandduke', 'duke', 'marquess', 'count', 'viscount'],
        ironcap: 5,
        grandduke: 5,
        duke: 4,
        marquess: 3,
        count: 3,
        viscount: 3
      },
      calculateTotals: () => ['want', 'have'].forEach(x => this.state[x].total())
    }
  }

  handleChange(event) {
    const pieces = event.target.id.split('_');
    const itemCount = (event.target.validity.valid) ? event.target.value : this.state[pieces[0]][pieces[1]][pieces[2]];
    let newstate = this.state;
    newstate[pieces[0]][pieces[1]][pieces[2]] = isNaN(parseInt(itemCount)) ? 0 : parseInt(itemCount);
    this.setState(newstate);
  }

  calculateNeededForItem(type, ammount) {
    let index = this.state.required.order.indexOf(type);
    for(let i = index; i !== this.state.required.order.length; i++) {
      ammount *= this.state.required[this.state.required.order[i]]
    }
    return ammount;
  }

  calculateTotal(category) {
    let needed = { beads: 0, ring: 0, robe: 0};
    this.state.required.order.forEach(type => {
      ['ring', 'beads', 'robe'].forEach(item => {
        if(this.state[category][type][item] > 0) {
          needed[item] += this.calculateNeededForItem(type, this.state[category][type][item]);
        }
      });
    });
    return needed;
  }


  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Container>
              <Row>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/baron_beads.png"></img>
                  <input className="bubble" id="have_baron_beads" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.have.baron.beads} />
                </Col>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/baron_ring.png"></img>
                  <input className="bubble" id="have_baron_ring" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.have.baron.ring} />
                </Col>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/baron_robe.png"></img>
                  <input className="bubble" id="have_baron_robe" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.have.baron.robe} />
                </Col>
              </Row>
              <Row>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/viscount_beads.png"></img>
                  <input className="bubble" id="have_viscount_beads" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.have.viscount.beads} />
                </Col>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/viscount_ring.png"></img>
                  <input className="bubble" id="have_viscount_ring" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.have.viscount.ring} />
                </Col>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/viscount_robe.png"></img>
                  <input className="bubble" id="have_viscount_robe" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.have.viscount.robe} />
                </Col>
              </Row>
              <Row>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/count_beads.png"></img>
                  <input className="bubble" id="have_count_beads" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.have.count.beads} />
                </Col>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/count_ring.png"></img>
                  <input className="bubble" id="have_count_ring" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.have.count.ring} />
                </Col>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/count_robe.png"></img>
                  <input className="bubble" id="have_count_robe" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.have.count.robe} />
                </Col>
              </Row>
              <Row>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/marquess_beads.png"></img>
                  <input className="bubble" id="have_marquess_beads" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.have.marquess.beads} />
                </Col>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/marquess_ring.png"></img>
                  <input className="bubble" id="have_marquess_ring" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.have.marquess.ring} />
                </Col>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/marquess_robe.png"></img>
                  <input className="bubble" id="have_marquess_robe" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.have.marquess.robe} />
                </Col>
              </Row>
              <Row>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/duke_beads.png"></img>
                  <input className="bubble" id="have_duke_beads" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.have.duke.beads} />
                </Col>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/duke_ring.png"></img>
                  <input className="bubble" id="have_duke_ring" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.have.duke.ring} />
                </Col>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/duke_robe.png"></img>
                  <input className="bubble" id="have_duke_robe" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.have.duke.robe} />
                </Col>
              </Row>
              <Row>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/grandduke_beads.png"></img>
                  <input className="bubble" id="have_grandduke_beads" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.have.grandduke.beads} />
                </Col>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/grandduke_ring.png"></img>
                  <input className="bubble" id="have_grandduke_ring" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.have.grandduke.ring} />
                </Col>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/grandduke_robe.png"></img>
                  <input className="bubble" id="have_grandduke_robe" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.have.grandduke.robe} />
                </Col>
              </Row>
              <Row>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/ironcap_beads.png"></img>
                  <input className="bubble" id="have_ironcap_beads" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.have.ironcap.beads} />
                </Col>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/ironcap_ring.png"></img>
                  <input className="bubble" id="have_ironcap_ring" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.have.ironcap.ring} />
                </Col>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/ironcap_robe.png"></img>
                  <input className="bubble" id="have_ironcap_robe" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.have.ironcap.robe} />
                </Col>
              </Row>
            </Container>
          </Col>
          <Col>
            <Container>
              <Row>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/baron_beads.png"></img>
                  <input className="bubble" id="want_baron_beads" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.want.baron.beads} />
                </Col>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/baron_ring.png"></img>
                  <input className="bubble" id="want_baron_ring" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.want.baron.ring} />
                </Col>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/baron_robe.png"></img>
                  <input className="bubble" id="want_baron_robe" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.want.baron.robe} />
                </Col>
              </Row>
              <Row>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/viscount_beads.png"></img>
                  <input className="bubble" id="want_viscount_beads" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.want.viscount.beads} />
                </Col>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/viscount_ring.png"></img>
                  <input className="bubble" id="want_viscount_ring" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.want.viscount.ring} />
                </Col>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/viscount_robe.png"></img>
                  <input className="bubble" id="want_viscount_robe" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.want.viscount.robe} />
                </Col>
              </Row>
              <Row>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/count_beads.png"></img>
                  <input className="bubble" id="want_count_beads" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.want.count.beads} />
                </Col>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/count_ring.png"></img>
                  <input className="bubble" id="want_count_ring" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.want.count.ring} />
                </Col>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/count_robe.png"></img>
                  <input className="bubble" id="want_count_robe" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.want.count.robe} />
                </Col>
              </Row>
              <Row>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/marquess_beads.png"></img>
                  <input className="bubble" id="want_marquess_beads" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.want.marquess.beads} />
                </Col>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/marquess_ring.png"></img>
                  <input className="bubble" id="want_marquess_ring" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.want.marquess.ring} />
                </Col>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/marquess_robe.png"></img>
                  <input className="bubble" id="want_marquess_robe" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.want.marquess.robe} />
                </Col>
              </Row>
              <Row>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/duke_beads.png"></img>
                  <input className="bubble" id="want_duke_beads" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.want.duke.beads} />
                </Col>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/duke_ring.png"></img>
                  <input className="bubble" id="want_duke_ring" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.want.duke.ring} />
                </Col>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/duke_robe.png"></img>
                  <input className="bubble" id="want_duke_robe" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.want.duke.robe} />
                </Col>
              </Row>
              <Row>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/grandduke_beads.png"></img>
                  <input className="bubble" id="want_grandduke_beads" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.want.grandduke.beads} />
                </Col>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/grandduke_ring.png"></img>
                  <input className="bubble" id="want_grandduke_ring" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.want.grandduke.ring} />
                </Col>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/grandduke_robe.png"></img>
                  <input className="bubble" id="want_grandduke_robe" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.want.grandduke.robe} />
                </Col>
              </Row>
              <Row>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/ironcap_beads.png"></img>
                  <input className="bubble" id="want_ironcap_beads" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.want.ironcap.beads} />
                </Col>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/ironcap_ring.png"></img>
                  <input className="bubble" id="want_ironcap_ring" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.want.ironcap.ring} />
                </Col>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/ironcap_robe.png"></img>
                  <input className="bubble" id="want_ironcap_robe" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.want.ironcap.robe} />
                </Col>
              </Row>
            </Container>
          </Col>
          <Col>
            <Container>
              <Row>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/baron_beads.png"></img>
                  <input className="bubble" id="need_baron_beads" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.need.beads()} readOnly={true} />
                </Col>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/baron_ring.png"></img>
                  <input className="bubble" id="need_baron_ring" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.need.ring()} readOnly={true} />
                </Col>
                <Col className="itemCol">
                  <img alt="" src="./assets/appointment/baron_robe.png"></img>
                  <input className="bubble" id="need_baron_robe" type="text" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.need.robe()} readOnly={true} />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Appointment;