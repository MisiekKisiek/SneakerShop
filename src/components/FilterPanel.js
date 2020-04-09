import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import $ from "jquery";

const FilterPanel = (props) => {
  return (
    <div className="row">
      <form className="col-md-8 mx-auto shadow-sm p-3 mb-5 rounded">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="SearchName">Name:</label>
            <input
              type="text"
              className="form-control"
              id="SearchName"
              placeholder="Search name..."
            />
          </div>
          <div className="w-100"></div>
          <div className="form-group px-2 col-md-6">
            <label htmlFor="MinPrice">Min. price:</label>
            <input
              type="number"
              className="form-control"
              id="MinPrice"
              placeholder="50"
              min="50"
            />
          </div>
          <div className="form-group px-2 col">
            <label htmlFor="MaxPrice">Max. price:</label>
            <input
              type="number"
              className="form-control"
              id="MaxPrice"
              placeholder="1000"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default FilterPanel;
