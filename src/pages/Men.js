import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "../styles/Shop.css";
import ShopItems from "../components/ShopItems";
import FilterPanel from "../components/FilterPanel";

class Mans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      minPrice: "",
      maxPrice: "",
      color: "all colors",
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
    let items = this.props.data.items
      .filter((e) => e.male === "m")
      .map((e, index) => {
        return (
          <ShopItems
            key={e.id}
            item={this.props.data.items[index]}
            slide={this.slideImage}
          ></ShopItems>
        );
      });

    items = items.filter((e) => {
      return e.props.item.brand
        .concat(" ")
        .concat(e.props.item.model)
        .toLowerCase()
        .includes(this.state.name.toLowerCase());
    });

    if (this.state.minPrice !== "") {
      items = items.filter((e) => {
        return parseInt(e.props.item.price) >= parseInt(this.state.minPrice);
      });
    }

    if (this.state.maxPrice !== "") {
      items = items.filter((e) => {
        return parseInt(e.props.item.price) <= parseInt(this.state.maxPrice);
      });
    }

    if (this.state.color !== "all colors") {
      items = items.filter((e) => {
        let flag = false;
        e.props.item.colorsAndImages.forEach((e) => {
          e.colors.forEach((e) => {
            if (e === this.state.color) {
              flag = true;
            }
          });
        });
        return flag;
      });
    }

    return items;
  };

  handleFilterSubmit = (e, name, minPrice, maxPrice, color) => {
    e.preventDefault();
    this.setState({
      name: name,
      minPrice: minPrice,
      maxPrice: maxPrice,
      color: color,
    });
  };

  filterColorOptions = () => {
    const colors = [];
    this.props.data.items.forEach((e) =>
      e.colorsAndImages.forEach((e) => {
        e.colors.forEach((e) => {
          if (!colors.includes(e)) {
            colors.push(e);
          }
        });
      })
    );
    return colors.sort();
  };

  render() {
    return (
      <div className="container">
        <div className="row d-flex align-items-center mt-2 mt-md-4">
          <aside className="filter col-12">
            <FilterPanel
              handleSubmit={this.handleFilterSubmit}
              colorList={this.filterColorOptions()}
            ></FilterPanel>
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
