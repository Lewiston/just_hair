import React from "react";
import "../Styles/Product.css";

import Product from "./Sidebar";

const Hero = () => {
  const products = Array(12).fill({
    name: "Buzz Haircut",
    price: "1,500 XAF",
    image: "/ronaldo.jpeg", // i will replace with original image later
    description:
      "Praesent ac quam pulvinar scelerisque venenatis. Cras accumsan tortor faucibus placerat vitae.",
  });

  return (
    <section className="product">
      <h3 className="hero-title">Market Place</h3>
      <div className="product-grid">
        {products.map((item, index) => (
          <Product key={index} product={item} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
