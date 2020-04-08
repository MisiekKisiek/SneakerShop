import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import $ from "jquery";
import "../styles/Shop.css";

class Mans extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.data.items[0].colorsAndImages[0].img);
    return (
      <div className="container">
        <div className="row">
          <aside className="filter col-12">aa</aside>
          <main className="items col-12 d-flex flex-row flex-wrap">
            <div className="wrap col-12 col-md-3 my-3">
              <div className="card overflow-hidden col-12 p-0">
                <img
                  className="card-img-top"
                  src={require(`../shopItems/${this.props.data.items[0].colorsAndImages[0].img}`)}
                  alt=""
                />
                <h5 className="card-title text-center pt-1">
                  {this.props.data.items[0].brand}{" "}
                  {this.props.data.items[0].model}
                </h5>
              </div>
            </div>
            <div className="wrap col-12 col-md-3 my-3">
              <div className="card overflow-hidden col-12 p-0">
                <img
                  className="card-img-top"
                  src={require(`../shopItems/${this.props.data.items[0].colorsAndImages[0].img}`)}
                  alt=""
                />
                <h5 className="card-title text-center pt-1">
                  {this.props.data.items[0].brand}{" "}
                  {this.props.data.items[0].model}
                </h5>
              </div>
            </div>
            <div className="wrap col-12 col-md-3 my-3">
              <div className="card overflow-hidden col-12 p-0">
                <img
                  className="card-img-top"
                  src={require(`../shopItems/${this.props.data.items[0].colorsAndImages[0].img}`)}
                  alt=""
                />
                <h5 className="card-title text-center pt-1">
                  {this.props.data.items[0].brand}{" "}
                  {this.props.data.items[0].model}
                </h5>
              </div>
            </div>
            <div className="wrap col-12 col-md-3 my-3">
              <div className="card overflow-hidden col-12 p-0">
                <img
                  className="card-img-top"
                  src={require(`../shopItems/${this.props.data.items[0].colorsAndImages[0].img}`)}
                  alt=""
                />
                <h5 className="card-title text-center pt-1">
                  {this.props.data.items[0].brand}{" "}
                  {this.props.data.items[0].model}
                </h5>
              </div>
            </div>
            <div className="wrap col-12 col-md-3 my-3">
              <div className="card overflow-hidden col-12 p-0">
                <img
                  className="card-img-top"
                  src={require(`../shopItems/${this.props.data.items[0].colorsAndImages[0].img}`)}
                  alt=""
                />
                <h5 className="card-title text-center pt-1">
                  {this.props.data.items[0].brand}{" "}
                  {this.props.data.items[0].model}
                </h5>
              </div>
            </div>
            <div className="wrap col-12 col-md-3 my-3">
              <div className="card overflow-hidden col-12 p-0">
                <img
                  className="card-img-top"
                  src={require(`../shopItems/${this.props.data.items[0].colorsAndImages[0].img}`)}
                  alt=""
                />
                <h5 className="card-title text-center pt-1">
                  {this.props.data.items[0].brand}{" "}
                  {this.props.data.items[0].model}
                </h5>
              </div>
            </div>
            <div className="wrap col-12 col-md-3 my-3">
              <div className="card overflow-hidden col-12 p-0">
                <img
                  className="card-img-top"
                  src={require(`../shopItems/${this.props.data.items[0].colorsAndImages[0].img}`)}
                  alt=""
                />
                <h5 className="card-title text-center pt-1">
                  {this.props.data.items[0].brand}{" "}
                  {this.props.data.items[0].model}
                </h5>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Mans;
