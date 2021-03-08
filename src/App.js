import React, { Component, setState } from "react";
import data from "./data.json";
import BoilingVerdict from "./Components/BoilingVerdict";
import "./App.css";
import Products from "./Components/Products.js";
import Filter from "./Components/Filter";
import Cart from "./Components/Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  constructor(props) {
    super();
    // this.handleChange = this.handleChange.bind(this);
    this.state = {
      products: data.products,
      cartItems: [],
      size: "",
      color: "",
      sort: "",
      show: true,
    };
  }

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({ cartItems });
  };

  sortProducts = (e) => {
    const sort = e.target.value;
    console.log(e.target.value);
    this.setState((state) => ({
      sort: sort,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price < b.price
              ? 1
              : -1
            : sort === "highest"
            ? a.price > b.price
              ? 1
              : -1
            : a._id > b._id
            ? 1
            : -1
        ),
    }));
  };

  filterProducts = (e) => {
    console.log(e.target.value);
    if (e.target.value === "") {
      this.setState({ size: e.target.value, product: data.products });
    } else {
      this.setState({
        size: e.target.value,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(e.target.value) >= 0
        ),
      });
    }
  };

  filterColorProducts = (e) => {
    console.log(e.target.value);
    if (e.target.value === "") {
      this.setState({ color: e.target.value, product: data.products });
    } else {
      this.setState({
        color: e.target.value,
        products: data.products.filter(
          (product) => product.color.indexOf(e.target.value) >= 0
        ),
      });
    }
  };

  // handleChange(e) {
  //   this.setState({temperature: e.target.value});
  // }

  render() {
    // const temperature = this.state.temperature;
    return (
      <div className="grid-container">
        <header>
          <div className="main-header">
            <a href="/">React Shop</a>
            <div className="sum_produk">
              <div className="cart_count">
                <span className="icon">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </span>
                <h4>
                  <Cart cartItems={this.state.cartItems} />
                </h4>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter
                count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                color={this.state.color}
                filterColorProducts={this.filterColorProducts}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              ></Filter>
              <Products
                products={this.state.products}
                addToCart={this.addToCart}
              ></Products>
            </div>
            <div className="sidebar"></div>
          </div>
        </main>
        <footer>All right reserved</footer>
      </div>
    );
  }
}

export default App;
