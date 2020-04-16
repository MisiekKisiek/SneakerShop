import React from "react";
import { NavLink, BrowserRouter as Router } from "react-router-dom";

const UserMenu = (props) => {
  return (
    <Router>
      <div
        className="dropdown-menu"
        aria-labelledby="dropdownMenuOffset"
        data-toggle="collapse"
        data-target=".navbar-collapse.show"
      >
        <NavLink
          to="/Profile"
          className="dropdown-item disabled"
          onClick={props.removeCart}
        >
          My profile
        </NavLink>
        <NavLink
          to="/Settings"
          className="dropdown-item disabled"
          onClick={props.removeCart}
        >
          My shopping
        </NavLink>
        <NavLink
          to="/Shopping"
          className="dropdown-item disabled"
          onClick={props.removeCart}
        >
          Settings
        </NavLink>
        <NavLink
          to="/Shopping"
          className="dropdown-item disabled"
          onClick={props.removeCart}
        >
          Log out
        </NavLink>
      </div>
    </Router>
  );
};

export default UserMenu;
