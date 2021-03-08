import React, { Component } from "react";
import formatCurrentDollar from "../util";

export default class Products extends Component {
  render() {
    return (
      <div>
        <ul className="products">
          {this.props.products.map((product) =>
            this.props.products.length > 0 ? (
              <li className="card-product" key={product._id}>
                <div className="product">
                  <a href={"#" + product._id}>
                    <img src={product.image} alt={product.title}></img>
                    <h4>{product.title}</h4>
                  </a>
                  <div className="footer-card">
                    <div className="price">
                      {formatCurrentDollar(product.price)}
                    </div>
                    <button
                      onClick={() => this.props.addToCart(product)}
                      className="button primary"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </li>
            ) : (
              null(<div>empty</div>)
            )
          )}
        </ul>
      </div>
    );
  }
}
