import React, { Component } from "react";

import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./pages/Home";
import Power from "./pages/Power";
import Intimacy from "./pages/Intimacy";
import Harem from "./pages/Harem";
import Tokens from "./pages/Tokens";
import Appointment from "./pages/Appointment";

class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <h1>CalcME</h1>
            <ul className="header">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/power">Power Increase</NavLink></li>
              <li><NavLink to="/intimacy">Intimacy Increase</NavLink></li>
              <li><NavLink to="/harem">Harem Exp</NavLink></li>
              <li><NavLink to="/tokens">Tokens</NavLink></li>
              <li><NavLink to="/appointment">Appointment Items</NavLink></li>
            </ul>
            <div className="content">
            <Route exact path="/" component={Home}/>
              <Route path="/power" component={Power}/>
              <Route path="/intimacy" component={Intimacy}/>
              <Route path="/harem" component={Harem}/>
              <Route path="/tokens" component={Tokens}/>
              <Route path="/appointment" component={Appointment}/>
            </div>
          </div>
        </HashRouter>
      );
    }
  }

export default Main;