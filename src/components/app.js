import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import Tutorial from "./pages/tutorial";
import History from "./pages/history";
import Game from "./pages/play-game";
import Auth from "./pages/auth";
import Icons from "../helpers/icons";
// import { Router, Route, Switch } from "react-router";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div className="navigation-wrapper">
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/auth" component={Auth} />
              <Route path="/history" component={History} />
              <Route path="/tutorial" component={Tutorial} />
              <Route path="/play" component={Game} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
<i class="fas fa-sign-in-alt"></i>;
