import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import ColorOption from "./ColorOption";

class FilterPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: "",
      minPrice: "",
      maxPrice: "",
      color: "all colors",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  colorOptions = () => {
    const colorList = this.props.colorList.map((e, index) => (
      <ColorOption value={e} key={index}></ColorOption>
    ));
    return colorList;
  };
  render() {
    return (
      <div className="row">
        <form className="col-md-8 mx-auto shadow-sm p-3 mb-3 rounded">
          <div className="form-row">
            <div className="form-group col-md-6 px-2">
              <label htmlFor="searchName">Name:</label>
              <input
                type="text"
                className="form-control"
                id="searchName"
                placeholder="Search name..."
                value={this.state.searchName}
                onChange={this.handleChange}
              />
            </div>
            <div className="w-100"></div>
            <div className="form-group px-2 col-md-6">
              <label htmlFor="minPrice">Min. price:</label>
              <input
                type="number"
                className="form-control"
                id="minPrice"
                placeholder="50"
                value={this.state.minPrice}
                onChange={this.handleChange}
                min="0"
              />
            </div>
            <div className="form-group px-2 col-md-6">
              <label htmlFor="maxPrice">Max. price:</label>
              <input
                type="number"
                className="form-control"
                id="maxPrice"
                placeholder="10000"
                value={this.state.maxPrice}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group px-2 col-md-6">
              <label htmlFor="color">Color:</label>
              <select
                name=""
                id="color"
                className="custom-select"
                value={this.state.color}
                onChange={this.handleChange}
              >
                <option value="All colors">all colors</option>
                {this.colorOptions()}
              </select>
            </div>
            <div className="form-group col-md-6 text-bottom d-flex align-items-end justify-content-center  mt-3 mt-md-0  px-2">
              <button
                type="submit"
                className="btn btn-secondary col-6"
                onClick={(e) => {
                  this.props.handleSubmit(
                    e,
                    this.state.searchName,
                    this.state.minPrice,
                    this.state.maxPrice,
                    this.state.color
                  );
                  this.setState({
                    searchName: "",
                    minPrice: "",
                    maxPrice: "",
                    color: "all colors",
                  });
                }}
              >
                Filter
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default FilterPanel;
