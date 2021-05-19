import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavigationComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="nav-wrapper">
        <div className="middle-nav">
          <div className="nav-link-wrapper">
            <NavLink exact to="/" activeClassName="nav-link-active">
              HOME
            </NavLink>
          </div>

          <div className="nav-link-wrapper">
            <NavLink to="/history" activeClassName="nav-link-active">
              HISTORY
            </NavLink>
          </div>

          <div className="nav-link-wrapper">
            <NavLink to="/tutorial" activeClassName="nav-link-active">
              TUTORIAL
            </NavLink>
          </div>

          <div className="nav-link-wrapper">
            <NavLink to="/play-game" activeClassName="nav-link-active">
              PLAY
            </NavLink>
          </div>

          {false ? <button>Add PLAY</button> : null}
        </div>
      </div>
    );
  }
}
