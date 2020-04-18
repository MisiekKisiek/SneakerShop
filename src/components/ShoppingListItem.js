import React, { Component } from "react";

class ShoppingListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { cardItem } = this.props;
    return (
      <div className="card col-12">
        <h6 class="card-title">
          {cardItem.item.brand} {cardItem.item.model}size:{cardItem.size}
        </h6>
      </div>
    );
  }
}

export default ShoppingListItem;
