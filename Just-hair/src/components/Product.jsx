import React from "react";
import "../Styles/Product.css";

const Product = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-img" />
      <h4 className="product-title">{product.name}</h4>
      <p className="product-brand">Forever Beauty</p>
      <p className="product-desc">{product.description}</p>
      <div className="product-footer">
        <span className="price">{product.price}</span>
      </div>
    </div>
  );
};

export default Product;
