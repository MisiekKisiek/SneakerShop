import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import $ from "jquery";

const FilterPanel = (props) => {
  return (
    <div className="row">
      <form className="col-md-8 mx-auto shadow-sm p-3 mb-3 rounded">
        <div className="form-row">
          <div className="form-group col-md-6 px-2">
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
          <div className="form-group px-2 col-md-6">
            <label htmlFor="MaxPrice">Max. price:</label>
            <input
              type="number"
              className="form-control"
              id="MaxPrice"
              placeholder="1000"
            />
          </div>
          <div className="form-group px-2 col-md-6">
            <label htmlFor="Color">Color:</label>
            <select name="" id="Color" className="custom-select">
              <option value="all" className="selected">
                Choose color...
              </option>
              <option value="">white</option>
              <option value="">black</option>
              <option value="">purple</option>
            </select>
          </div>
          <div className="form-group col-md-6 text-bottom d-flex align-items-end justify-content-center  mt-3 mt-md-0  px-2">
            <button
              type="submit"
              className="btn btn-secondary col-6"
              onClick={props.handleSubmit}
            >
              Filter
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FilterPanel;
