import React from "react";
import "./App.css";
import Header from "./Components/Header.js";
import About from "./Components/About";
import Shop from "./Components/Shop";
import Menu from "./Components/Menu";
import Clients from "./Components/Clients";
import Price from "./Components/Price";

function App() {
  return (
    <div>
      <Header/>
      <About />
      <Shop />
      <Menu />
      <Clients />
      <Price />
    </div>
  );
}

export default App;
