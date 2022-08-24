import React from "react";
import Navbar from "./Navbar"
const Header = () => {
  return (
  <div className="banner">
    <Navbar/>
    <div className="banner__content">
      <div className="container">
      <div className="banner__text">        
      <h3>Pizza Delivery</h3>
        <h1>KHATE RAHO PIZZERIA</h1>
        <p>
        Having that crispy and melty pizza in the comfort of your own home with the ones you love, we say.
        </p>
        <div className="banner__btn">
        <button className="btn btn-smart">DELIVERY NOW</button>
        </div>
      </div>
      </div>
  </div>
  </div>
  );
};

export default Header;