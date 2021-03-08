import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <div className="filter-pro">
          <div className="filter-res">{this.props.count} Produk</div>
          <div className="filter-sort">
            Berdasarkan &nbsp;
            <select value={this.props.sort} onChange={this.props.sortProducts}>
              <option>Produk Baru</option>
              <option value="lowest">Harga Tertinggi</option>
              <option value="highest">Harga Terendah</option>
            </select>
          </div>
        </div>
        <div className="filter-cat">
          Product Category
          <div className="filter-size">
            Size
            <select
              value={this.props.size}
              onChange={this.props.filterProducts}
            >
              <option value="">ALL</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </div>
          <div className="filter-color">
            Color
            <select
              value={this.props.color}
              onChange={this.props.filterColorProducts}
            >
              <option value="">ALL</option>
              <option value="White">White</option>
              <option value="Black">Black</option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Yellow">Yellow</option>
              <option value="Green">Green</option>
              <option value="Navy">Navy</option>
              <option value="Pink">Pink</option>
              <option value="Cream">Cream</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}
