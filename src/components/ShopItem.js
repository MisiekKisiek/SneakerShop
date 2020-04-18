import React, { Component } from "react";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "../styles/ShopItem.css";

class ShopItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: "",
      color: "",
    };
  }

  showMiniImages = (e) => {
    const id = e.id;
    const items = e.colorsAndImages.map((e, index) => (
      <li
        key={`mini${index}`}
        className={`img${
          index + id
        } btn list-group-item col-3 m-1 p-0 border-0 rounded overflow-hidden mh-100`}
      >
        <img
          src={require(`../shopItems/${e.img}`)}
          alt="MiniImage"
          className="w-100"
        />
      </li>
    ));
    return items;
  };

  removeSize = (idElement) => {
    document
      .querySelectorAll(`.size${idElement}`)
      .forEach((e) => e.classList.remove("active"));
  };

  changeActiveSize = (index, idElement, e) => {
    this.removeSize(idElement);
    document.querySelector(`.size${index + idElement}`).classList.add("active");
    this.setState({
      size: e,
    });
  };

  showSizes = (e) => {
    const idElement = e.id;
    const items = e.size.map((e, index) => (
      <li
        key={`size${index}`}
        className={`size ${`size${
          index + idElement
        }`} size${idElement} list-group-item btn m-0 p-0 col-2 text-center border rounded`}
        onClick={() => this.changeActiveSize(index, idElement, e)}
      >
        {e}
      </li>
    ));
    return items;
  };

  slideImage = (e) => {
    const id = e.id;
    const items = e.colorsAndImages.map((e, index) => {
      return (
        <div
          key={index}
          className={
            index === 0
              ? `img${index + id} img${id} carousel-item active`
              : `carousel-item`
          }
        >
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

  render() {
    const { item, addCartItem } = this.props;
    return (
      <div className="wrap col-12 col-12 col-sm-6 col-md-4 col-lg-3 my-3">
        <div className="card col-12 p-0 position-relative">
          <div className="card-header p-1 m-0 bg-white">
            <h6 className="card-title text-start m-0">
              <span className="font-weight-bold">{item.brand}</span>{" "}
              {item.model}
              <div className="w-100"></div>
              <span className="font-weight-bold">{`${item.price} PLN`}</span>
            </h6>
          </div>
          <div
            id={`carousel${item.id}`}
            className="carousel slide card-img-top"
            data-ride="carousel"
            data-interval="false"
            data-pause="hover"
          >
            <div className="carousel-inner">{this.slideImage(item)}</div>
            <a
              className="carousel-control-prev"
              href={`#carousel${item.id}`}
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href={`#carousel${item.id}`}
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          <div className="card-body p-2">
            <ul className="sizes list-group list-group-horizontal justify-content-center col-11 mx-2  p-0 flex-wrap">
              {this.showSizes(item)}
            </ul>
            <ul className="images list-group list-group-horizontal justify-content-center col-9 my-1 w-100 m-0 p-0 mx-auto">
              {this.showMiniImages(item)}
            </ul>
            <button
              type="button"
              className="btn btn-info text-white col-6 mx-auto my-1 px-1 d-block"
              style={{ fontSize: "0.8rem" }}
              data-toggle="popover"
              title="Popover title"
              data-content="And here's some amazing content. It's very engaging. Right?"
              onClick={() => {
                if (this.state.size !== "" || this.state.color !== "") {
                  addCartItem(item, this.state.size);
                  this.removeSize(item.id);
                  this.setState({
                    size: "",
                    color: "",
                  });
                }
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ShopItem;
