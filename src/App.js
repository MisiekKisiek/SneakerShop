import React, { Component } from "react";
import {
  NavLink,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import $ from "jquery";
import "./App.css";
import MainPage from "./pages/MainPage";
import News from "./pages/News";
import Mans from "./pages/Mans";
import data from "./shopItems/itemsList.json";

class App extends Component {
  state = {
    data: data,
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container-fluid p-0">
            <div className="row-fluid">
              <nav className="navbar navbar-expand-md navbar-light mx-auto shadow-sm">
                <span
                  className="navbar-brand font-weight-bold font-italic"
                  href="#"
                >
                  Sneakero
                </span>
                <button
                  className="navbar-toggler border-0 px-1"
                  type="button"
                  data-target="#collapseContent"
                  data-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="collapseContent"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse mt-2 mt-md-0  border-bottom border-0"
                  id="collapseContent"
                >
                  <ul className="navbar-nav justify-content-center mx-auto position-relative">
                    <li
                      className="nav-item"
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      <NavLink className="nav-link" to="/MainPage">
                        Main Page
                      </NavLink>
                    </li>
                    <li
                      className="nav-item mx-md-3"
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      <NavLink className="nav-link" to="/News">
                        News
                      </NavLink>
                    </li>
                    <li className="nav-item dropdown mx-md-3">
                      <a
                        href="#"
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Shop
                      </a>
                      <div
                        className="dropdown-menu"
                        data-toggle="collapse"
                        data-target=".navbar-collapse.show"
                      >
                        <NavLink to="/Mans" className="dropdown-item">
                          Mens
                        </NavLink>
                        <NavLink to="f" className="dropdown-item">
                          Women
                        </NavLink>
                        <NavLink to="g" className="dropdown-item">
                          Kids
                        </NavLink>
                      </div>
                    </li>
                    <li
                      className="nav-item mx-md-3"
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      <NavLink className="nav-link" to="/d">
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>

          <div className="pages container px-4 px-md-0 d-flex align-items-center">
            <Route exact path="/MainPage">
              <MainPage></MainPage>
            </Route>
            <Route exact path="/SneakerShop">
              <Redirect to="/MainPage" />
            </Route>
            <Route exact path="/News">
              <News></News>
            </Route>
            <Route exact path="/Mans">
              <Mans data={this.state.data}></Mans>
            </Route>
            <Route exact path="/Women">
              <MainPage></MainPage>
            </Route>
            <Route exact path="/Kids">
              <MainPage></MainPage>
            </Route>
            <Route exact path="/Contact">
              <MainPage></MainPage>
            </Route>
          </div>

          <div className="container-fluid">
            <div className="row">
              <footer className="col-11 text-center border-top text-truncate font-weight-bold mx-auto ">
                Sneakero 2020,{" "}
                <span className="font-weight-normal">
                  Powered by MisiekKisiek
                </span>
              </footer>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
