import React from "react";
import "../Styles/Hero.css";
import Product from "./Product";

const Hero = () => {
  const products = [
    {
      name: "Buzz Haircut",
      price: "1,500 XAF",
      image: "/ronaldo.jpg",
      description: "A sharp, stylish buzz cut for a clean look.",
    },
    {
      name: "Fade Haircut",
      price: "2,000 XAF",
      image: "/images/haircut2.jpg",
      description: "A smooth fade that blends perfectly.",
    },
    {
      name: "Classic Cut",
      price: "1,800 XAF",
      image: "/images/haircut3.jpg",
      description: "Timeless style for any occasion.",
    },
    {
      name: "Braided Style",
      price: "3,000 XAF",
      image: "/images/haircut4.jpg",
      description: "Neat, modern braids for men or women.",
    },
    {
      name: "Kids Trim",
      price: "1,200 XAF",
      image: "/images/haircut5.jpg",
      description: "Gentle haircuts designed for kids.",
    },
    {
      name: "Curly Style",
      price: "2,500 XAF",
      image: "/images/haircut6.jpg",
      description: "Enhance your curls with this clean style.",
    },
    {
      name: "Line-Up Cut",
      price: "2,000 XAF",
      image: "/images/haircut7.jpg",
      description: "Sharp edges for a clean finish.",
    },
    {
      name: "Twist Style",
      price: "2,800 XAF",
      image: "/images/haircut8.jpg",
      description: "Trendy twists for a bold statement.",
    },
    {
      name: "Beard Trim",
      price: "1,000 XAF",
      image: "/images/haircut9.jpg",
      description: "Detailed beard shaping for a sharp look.",
    },
    {
      name: "Full Groom",
      price: "3,500 XAF",
      image: "/images/haircut10.jpg",
      description: "Complete haircut and grooming package.",
    },
    {
      name: "Mohawk",
      price: "2,700 XAF",
      image: "/images/haircut11.jpg",
      description: "Bold mohawk style for confident personalities.",
    },
    {
      name: "Undercut",
      price: "2,200 XAF",
      image: "/images/haircut12.jpg",
      description: "Modern undercut with a clean side fade.",
    },
  ];

  return (
    <section className="hero">
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
