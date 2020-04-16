import React, { Component } from "react";

class ShoppingListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { item } = this.props;
    return (
      <div className="card col-12">
        <h6 class="card-title">
          {item.item.brand} {item.item.model}size:{item.size}
        </h6>
      </div>
    );
  }
}

export default ShoppingListItem;
