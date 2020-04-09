import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import $ from "jquery";

const ShopItem = (props) => {
  const { item, slide } = props;
  return (
    <div className="wrap col-12 col-md-3 my-3" data-item={item}>
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
            class="carousel-control-prev"
            href={`#carousel${item.id}`}
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href={`#carousel${item.id}`}
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
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
