import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "../styles/MainPage.css";

class MainPage extends Component {
  state = {};
  render() {
    return (
      <div className="mainPage container d-flex align-items-center">
        <div className="row mx-0">
          <div className="col-md-8 mx-auto shadow-sm py-3 px-0 p-md-3 rounded">
            <div className="part1 col-12 px-0 d-flex flex-wrap no-gutters mx-auto align-items-end justify-content-center mb-4">
              <span
                className="no-gutters pb-0 pb-lg-1 font-weight-bold text-center mr-3"
                style={{
                  fontSize: "20px",
                  lineHeight: "20px",
                }}
              >
                We are
              </span>
              <span
                className="no-gutters font-weight-bold font-italic align-bottom"
                style={{
                  color: "#A10455",
                  fontSize: "54px",
                  lineHeight: "54px",
                }}
              >
                Sneakero
              </span>
            </div>
            <div className="part2 d-flex flex-wrap flex-nowrap-md align-items-center justify-content-center mb-4">
              <span className="prefix col-12 col-md-auto text-center text-md-start">
                We are dealing
              </span>
              <span className="letterWrap col-12 col-md-auto p-0 pr-md-3 my-1 text-center text-md-start mx-auto mx-md-0">
                <span className="letters letters1">
                  <span className="letter1">S</span>
                  <span className="letter1">H</span>
                  <span className="letter1">O</span>
                  <span className="letter1">E</span>
                  <span className="letter1">S</span>
                </span>
                <span className="letters letters2">
                  <span className="letter1">S</span>
                  <span className="letter1">T</span>
                  <span className="letter1">Y</span>
                  <span className="letter1">L</span>
                  <span className="letter1">E</span>
                </span>
                <span className="letters letters3">
                  <span className="letter1">S</span>
                  <span className="letter1">M</span>
                  <span className="letter1">I</span>
                  <span className="letter1">L</span>
                  <span className="letter1">E</span>
                </span>
              </span>
              <span className="text-center">
                with <strong>Passion, Patience and Love...</strong>
              </span>
            </div>
            <div className="part3">
              <div
                className="carousel slide col-12 col-md-8 mx-auto"
                data-ride="carousel"
              >
                <div className="carousel-inner rounded border">
                  <div className="carousel-item active">
                    <img
                      src={require("../img/mainPageImg1.jpg")}
                      alt="sneaker image1"
                      className="d-block w-100"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={require("../img/mainPageImg2.jpg")}
                      alt="sneaker image2"
                      className="d-block w-100"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={require("../img/mainPageImg3.jpg")}
                      alt="sneaker image3"
                      className="d-block w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
