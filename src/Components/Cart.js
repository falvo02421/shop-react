import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        {cartItems.length === 0 ? (
          <div className="cart cart-header">
            <span>0</span>
          </div>
        ) : (
          <div className="cart cart-header">
            <span>{cartItems.length}</span>
          </div>
        )}
      </div>
    );
  }
}
