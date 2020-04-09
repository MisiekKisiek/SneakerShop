import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import $ from "jquery";
import "../styles/Shop.css";
import ShopItems from "../components/ShopItems";
import FilterPanel from "../components/FilterPanel";

class Mans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: {
        name: "",
        minPrice: 0,
        maxPrice: "",
        color: "",
      },
    };
  }

  slideImage = (images) => {
    const items = images.map((e, index) => {
      return (
        <div className={index === 0 ? "carousel-item active" : "carousel-item"}>
          <img
            src={require(`../shopItems/${e.img}`)}
            className="d-block w-100"
            alt="sneaker"
          />
        </div>
      );
    });
    return items;
  };

  renderItems = () => {
    const items = this.props.data.items.map((e, index) => {
      return (
        <ShopItems
          item={this.props.data.items[index]}
          slide={this.slideImage}
        ></ShopItems>
      );
    });
    return items;
  };

  handleFilterSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <div className="row d-flex align-items-center mt-2 mt-md-4">
          <aside className="filter col-12">
            <FilterPanel handleSubmit={this.handleFilterSubmit}></FilterPanel>
          </aside>
          <main className="items col-12 d-flex flex-row flex-wrap">
            {this.renderItems()}
          </main>
        </div>
      </div>
    );
  }
}

export default Mans;