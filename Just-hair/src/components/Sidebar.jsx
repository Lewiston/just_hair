import React from "react";
import "../Styles/Product.css";

import { Star } from "lucide-react";

const Product = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-img" />
      <h4 className="product-title">{product.name}</h4>
      <p className="product-brand">Forever Beauty</p>
      <p className="product-desc">{product.description}</p>
      <div className="product-footer">
        <Star size={16} fill="#f5b301" color="#f5b301" />
        <span className="price">{product.price}</span>
      </div>
    </div>
  );
};

export default Product;
