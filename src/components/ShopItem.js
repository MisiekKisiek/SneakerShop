import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "../styles/ShopItem.css";

class ShopItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  showMiniImages = (e) => {
    const items = e.colorsAndImages.map((e, index) => (
      <li
        key={`mini${index}`}
        className="list-group-item col-3 m-1 p-0 border-0 rounded overflow-hidden mh-100"
      >
        <img
          src={require(`../shopItems/${e.img}`)}
          alt="shoeMiniImage"
          className="w-100"
        />
      </li>
    ));
    return items;
  };

  showSizes = (e) => {
    const items = e.size.map((e, index) => (
      <li
        key={`size${index}`}
        className="list-group-item m-0 p-0 col-2 text-center border rounded"
      >
        {e}
      </li>
    ));
    return items;
  };
  render() {
    const { item, slide } = this.props;
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
            <div className="carousel-inner">{slide(item.colorsAndImages)}</div>
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
              <li className="list-group-item m-0 p-0 col-2 text-center border rounded">
                37
              </li>
              <li className="list-group-item m-0 p-0 col-2 text-center border rounded">
                38
              </li>
            </ul>
            <ul className="images list-group list-group-horizontal justify-content-center col-9 my-1 w-100 m-0 p-0 mx-auto">
              {this.showMiniImages(item)}
            </ul>
            <a
              href="#"
              className="btn btn-info col-6 mx-auto my-1 d-block"
              style={{ fontSize: "0.7rem" }}
            >
              Add to card
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ShopItem;
