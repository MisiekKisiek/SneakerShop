import React, { Component } from "react";
import { NavLink, Route, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import $ from "jquery";
import logoRose from "../img/logo100rose.png";
import "../styles/MainPage.css";

class MainPage extends Component {
  state = {};
  render() {
    return (
      <div className="mainPage row mx-0 my-5">
        <div className="col-md-8 mx-auto shadow-sm p-3 rounded">
          <div className="part1 col-12 px-0 d-flex flex-wrap no-gutters mx-auto align-items-end justify-content-center mb-5">
            <span className="no-gutters pb-0 pb-lg-1 font-weight-bold text-align-center mr-3 mb-3 mb-sm-0">
              We are
            </span>

            <img
              className="col-12 col-sm-10 no-gutters"
              src={require("../img/logo100rose.png")}
              alt=""
            />
          </div>
          <div className="part2 d-flex flex-nowrap align-items-center">
            <span className="prefix mr-3">We are dealing</span>
            <span className="letters letters1 d-flex flex-row">
              <span className="letter1 text-primary">S</span>
              <span className="letter1 text-danger">T</span>
              <span className="letter1 text-success">Y</span>
              <span className="letter1 text-warning">L</span>
              <span className="letter1 text-info">E</span>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
