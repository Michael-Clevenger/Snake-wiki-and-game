import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const NavigationComponent = () => {
  return (
    <div className="test">
      <div className="page-nav-links">
        <div className="nav-link-wrapper">
          <NavLink exact to="/" activeClassName="nav-link-active">
            HOME
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink exact to="/history" activeClassName="nav-link-active">
            HISTORY
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink exact to="/tutorial" activeClassName="nav-link-active">
            TUTORIAL
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink exact to="/play" activeClassName="nav-link-active">
            PLAY
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default withRouter(NavigationComponent);
