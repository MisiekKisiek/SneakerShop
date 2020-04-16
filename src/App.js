import React, { Component } from "react";
import {
  NavLink,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./App.css";
import MainPage from "./pages/MainPage";
import News from "./pages/News";
import Shop from "./pages/Shop";
import UserMenu from "./components/UserMenu";
import data from "./shopItems/itemsList.json";
import ShoppingListItem from "./components/ShoppingListItem";

class App extends Component {
  state = {
    data: data,
    cardItems: [],
  };

  addCartItem = (item, size) => {
    const newTab = [{ item: item, size: size }];
    this.setState((prevState) => ({
      cardItems: prevState.cardItems.concat(newTab),
    }));
    console.log(newTab);
  };

  showCart = () => {
    const item = document.querySelector(".App .cart");
    item.classList.toggle("active");
  };

  removeCart = () => {
    const item = document.querySelector(".App .cart");
    item.classList.remove("active");
    console.log("aaa");
  };

  createCartItem = () => {
    const items = this.state.cardItems.map((e) => (
      <ShoppingListItem item={e}></ShoppingListItem>
    ));
    return items;
  };

  orderCartItems = () => {
    this.setState({
      cardItems: [],
    });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container-fluid p-0">
            <div className="row-fluid">
              <nav className="navbar fixed-top navbar-expand-md navbar-light mx-auto shadow-sm">
                <span
                  className="navbar-brand font-weight-bold font-italic"
                  style={{ color: "#A10455" }}
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
                      onClick={this.removeCart}
                    >
                      <NavLink className="nav-link" to="/MainPage">
                        Main Page
                      </NavLink>
                    </li>
                    <li
                      className="nav-item mx-md-3"
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                      onClick={this.removeCart}
                    >
                      <NavLink className="nav-link" to="/News">
                        News
                      </NavLink>
                    </li>
                    <li className="nav-item dropdown mx-md-3">
                      <a
                        href="aaa"
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
                        <NavLink
                          to="/Men"
                          className="dropdown-item"
                          onClick={this.removeCart}
                        >
                          Men
                        </NavLink>
                        <NavLink
                          to="/Women"
                          className="dropdown-item"
                          onClick={this.removeCart}
                        >
                          Women
                        </NavLink>
                        <NavLink
                          to="/Kids"
                          className="dropdown-item"
                          onClick={this.removeCart}
                        >
                          Kids
                        </NavLink>
                      </div>
                    </li>
                    <li
                      className="nav-item mx-md-3"
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                      onClick={this.removeCart}
                    >
                      <NavLink className="nav-link" to="/Contact">
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                  <div className="cartBtn nav-item dropleft d-none d-md-flex px-0 mr-3 text-secondary justify-content-stretch">
                    <a
                      to="/Cart"
                      className="btn nav-link text-secondary px-0"
                      onClick={this.showCart}
                    >
                      <i className="fas fa-shopping-cart"></i>
                    </a>
                  </div>
                  <div
                    className="cartBtn nav-item dropdown d-flex d-md-none px-0 text-secondary"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                  >
                    <a
                      to="/Cart"
                      className="btn nav-link text-secondary px-0"
                      onClick={this.showCart}
                    >
                      My cart
                    </a>
                  </div>
                  <div className="nav-item dropleft d-none d-md-flex pr-2 justify-content-stretch">
                    <a
                      className="btn nav-link text-secondary px-0"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="far fa-user-circle "></i>
                    </a>
                    <UserMenu removeCart={this.removeCart}></UserMenu>
                  </div>
                  <div className="nav-item dropdown d-flex d-md-none px-0">
                    <a
                      className="btn nav-link text-secondary px-0"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      User
                    </a>
                    <UserMenu removeCart={this.removeCart}></UserMenu>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="cart col-10 col-md-4 col-xl-3 position-fixed h-100 shadow-sm">
            <button
              type="button"
              className="close mt-2"
              aria-label="Close"
              onClick={this.removeCart}
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="shoppingList col-12 mt-4">
              {this.createCartItem()}
            </div>
            <button className="btn btn-info" onClick={this.orderCartItems}>
              Order!
            </button>
          </div>
          <div className="pages px-4 px-md-0 d-flex align-items-stretch">
            <Route exact path="/MainPage">
              <MainPage></MainPage>
            </Route>
            <Route exact path="/SneakerShop">
              <Redirect to="/MainPage" />
            </Route>
            <Route exact path="/News">
              <News></News>
            </Route>
            <Route exact path="/Men">
              <Shop
                data={this.state.data}
                addCartItem={this.addCartItem}
              ></Shop>
            </Route>
            <Route exact path="/Women">
              <Shop
                data={this.state.data}
                addCartItem={this.addCartItem}
              ></Shop>
            </Route>
            <Route exact path="/Kids">
              <Shop
                data={this.state.data}
                addCartItem={this.addCartItem}
              ></Shop>
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
