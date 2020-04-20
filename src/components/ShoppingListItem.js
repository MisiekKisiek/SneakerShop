import React, { Component } from "react";

class ShoppingListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 1,
    };
  }

  changeAmount = (e) => {
    if (e.target.dataset.name === "add") {
      this.setState((prevState) => ({
        amount: prevState.amount + 1,
      }));
      this.props.changeTotalPrice(e, this.props.cardItem.item.price);
    } else if (
      e.target.dataset.name === "subtract" &&
      parseInt(this.state.amount) > 0
    ) {
      this.setState((prevState) => ({
        amount: prevState.amount - 1,
      }));
      this.props.changeTotalPrice(e, this.props.cardItem.item.price);
    }
  };

  sizeOptions = (e) => {
    const options = e.map((e, index) => (
      <option key={`optionSize${index}`} value={e}>
        {e}
      </option>
    ));
    return options;
  };

  colorOptions = (e) => {
    const options = e.map((e, index) => {
      return (
        <option
          key={`optionColor${index}`}
          value={e.colors.join("-")}
          data-name={e.img}
          // data-id={}
        >
          {e.colors.join("-")}
        </option>
      );
    });
    return options;
  };

  changeColorImage = (cardItem, id) => {
    document.querySelector(
      `.imgCartItem${id}`
    ).src = require(`../shopItems/${cardItem.color.img}`);
  };

  render() {
    const {
      cardItem,
      id,
      changeSizeCartItem,
      changeColorCartItem,
      changeAmountCartItem,
      amount,
    } = this.props;
    return (
      <div className="card col-12 no-gutters col-xl-10 mx-auto mt-1">
        <h5 className="card-title m-1 clearfix">
          <strong>{cardItem.item.brand}</strong> {cardItem.item.model}{" "}
          <div className="w-100"></div>
          <span className="" style={{ fontSize: "18px" }}>
            {cardItem.item.price} PLN
          </span>
        </h5>
        <div className="d-flex flex-row">
          <img
            className={`imgCartItem${id} card-item-top col-4 m-1 border rounded p-0`}
            src={require(`../shopItems/${cardItem.color.img}`)}
            alt=""
          />

          <div className="card-body flex-column m-1 p-0 ">
            <div className="sizes mb-1">
              <strong>size:</strong>
              <select
                className="form-control-sm ml-2 p-0"
                value={cardItem.size}
                onChange={changeSizeCartItem}
                data-id={id}
              >
                {this.sizeOptions(cardItem.item.size)}
              </select>
            </div>
            <div className="colors my-md-2">
              <strong>colors:</strong>
              <select
                className="form-control-sm ml-2 p-0"
                data-id={id}
                value={cardItem.color.colors.join("-")}
                onChange={(e) => {
                  changeColorCartItem(e);
                }}
              >
                {this.colorOptions(cardItem.item.colorsAndImages)}
              </select>
            </div>
            <div className="amount my-md-2">
              <strong>amount:</strong>{" "}
              <button
                data-name="add"
                className="btn btn-info p-0"
                data-id={id}
                style={{
                  width: "22px",
                  height: "22px",
                  lineHeight: "22px",
                  border: "none",
                }}
                onClick={(event) => {
                  this.changeAmount(event);
                  changeAmountCartItem(event, this.state.amount);
                }}
              >
                +
              </button>{" "}
              {amount}{" "}
              <button
                data-name="subtract"
                className="btn btn-info p-0"
                data-id={id}
                style={{
                  width: "22px",
                  height: "22px",
                  lineHeight: "22px",
                  border: "none",
                }}
                onClick={(event) => {
                  this.changeAmount(event);
                  changeAmountCartItem(event, this.state.amount);
                }}
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingListItem;
