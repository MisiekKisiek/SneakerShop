import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const ShopItem = (props) => {
  const { item, slide } = props;
  return (
    <div className="wrap col-12 col-12 col-sm-6 col-md-4 col-lg-3 my-3">
      <div className="card overflow-hidden col-12 p-0">
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
        <h5 className="card-title text-center pt-1">
          {item.brand} {item.model}
        </h5>
      </div>
    </div>
  );
};

export default ShopItem;
