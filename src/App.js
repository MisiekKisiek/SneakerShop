import React, { Component } from "react";
import { NavLink, Route, BrowserRouter as Router } from "react-router-dom";
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
    total: "0",
  };

  addCartItem = (item, size, color) => {
    const newTab = [{ item: item, size: size, color: color, amount: 1 }];
    this.setState((prevState) => ({
      cardItems: prevState.cardItems.concat(newTab),
      total: parseFloat(prevState.total) + parseFloat(item.price),
    }));
  };

  showCart = () => {
    const item = document.querySelector(".App .cart");
    item.classList.toggle("active");
  };

  removeCart = () => {
    const item = document.querySelector(".App .cart");
    item.classList.remove("active");
  };

  createCartItem = () => {
    const items = this.state.cardItems.map((e, index) => (
      <ShoppingListItem
        key={index}
        id={index}
        cardItem={e}
        changeTotalPrice={this.changeTotalPrice}
        changeSizeCartItem={this.changeSizeCartItem}
        changeColorCartItem={this.changeColorCartItem}
        changeAmountCartItem={this.changeAmountCartItem}
        amount={e.amount}
      ></ShoppingListItem>
    ));
    return items;
  };

  orderCartItems = () => {
    this.setState({
      cardItems: [],
      total: 0,
    });
  };

  changeSizeCartItem = (event) => {
    let item = JSON.parse(JSON.stringify(this.state.cardItems));
    item[event.target.dataset.id].size = event.target.value;
    this.setState({
      cardItems: item,
    });
  };

  changeAmountCartItem = (event, amount) => {
    let item = JSON.parse(JSON.stringify(this.state.cardItems));
    console.log(event.target.dataset.name);
    console.log(typeof event.target.dataset.name);
    if (event.target.dataset.name === "add") {
      item[event.target.dataset.id].amount =
        parseInt(item[event.target.dataset.id].amount) + 1;
    }
    if (
      event.target.dataset.name === "subtract" &&
      item[event.target.dataset.id].amount > 0
    ) {
      item[event.target.dataset.id].amount =
        parseInt(item[event.target.dataset.id].amount) - 1;
    }
    this.setState({
      cardItems: item,
    });
  };

  changeColorCartItem = (event) => {
    let item = JSON.parse(JSON.stringify(this.state.cardItems));
    item[event.target.dataset.id].color.colors = event.target.value.split("-");
    event.target.childNodes.forEach((e) => {
      if (e.value === event.target.value) {
        item[event.target.dataset.id].color.img = e.dataset.name;
      }
    });
    this.setState({
      cardItems: item,
    });
  };

  changeTotalPrice = (e, price) => {
    if (e.target.dataset.name === "add") {
      this.setState((prevState) => ({
        total: parseFloat(prevState.total) + parseFloat(price),
      }));
    } else if (e.target.dataset.name === "subtract") {
      this.setState((prevState) => ({
        total: parseFloat(prevState.total) - parseFloat(price),
      }));
    }
  };

  popoverWhenBuy = () => {};

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
                      className="btn nav-link text-secondary px-0 position-relative d-block"
                      onClick={this.showCart}
                    >
                      <i className="fas fa-shopping-cart"></i>
                      <div
                        className="position-absolute p-0 m-0 bg-danger border rounded text-center"
                        style={{
                          bottom: "0%",
                          left: "0%",
                          width: "16px",
                          height: "16px",
                          fontSize: "11px",
                          color: "white",
                        }}
                      >
                        {this.state.cardItems.length}
                      </div>
                    </a>
                  </div>
                  <div
                    className="cartBtn nav-item dropdown d-flex d-md-none px-0 text-secondary"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                  >
                    <a
                      to="/Cart"
                      className="btn nav-link text-secondary px-0 position-relative d-block w-100 text-left"
                      onClick={this.showCart}
                    >
                      My cart
                      <div
                        className="position-absolute p-0 m-0 bg-danger border rounded text-center"
                        style={{
                          bottom: "0%",
                          left: "-1%",
                          width: "16px",
                          height: "16px",
                          fontSize: "11px",
                          color: "white",
                          opacity: "0.5",
                        }}
                      >
                        {this.state.cardItems.length}
                      </div>
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
                      className="btn nav-link text-secondary px-0 dropdown-toggle d-block w-100 text-left"
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
          <div className="cart col-10 col-md-5 col-xl-4 position-fixed h-100 shadow-sm">
            <button
              type="button"
              className="close mt-2"
              aria-label="Close"
              onClick={this.removeCart}
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <h2 className=" mt-5 mb-3 ">My cart:</h2>
            <div className="w-100 my-3 clearfix">
              <strong className="d-block-md" style={{ fontSize: "24px" }}>
                Total: {parseFloat(this.state.total).toFixed(2)} PLN
              </strong>
              <div className="w-100 d-md-none"></div>
              <button
                className="btn btn-info m-0 mp-3 float-none float-md-right"
                onClick={this.orderCartItems}
              >
                Order!
              </button>
            </div>
            <div className="shoppingList col-12 no-gutters px-0">
              {this.createCartItem()}
            </div>
          </div>
          <div className="pages px-4 px-md-0 d-flex align-items-stretch">
            <Route exact path="/MainPage">
              <MainPage></MainPage>
            </Route>
            <Route exact path="/SneakerShop">
              <MainPage></MainPage>
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
