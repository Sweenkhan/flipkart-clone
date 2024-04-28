import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/home/Home.js";
import Header from "./component/header/Header.js"
import Cart from "./component/cart/Cart.js";
import Products from "./component/product/Products.js";
import SingleProduct from "./component/singleProduct/SingleProduct.js";

export const globalVariable = createContext({});

function App() {
  const [data, setData] = useState(""); 
  return (
    <>
      <div className="App">
        <globalVariable.Provider value={{ data, setData}}>
          <BrowserRouter>
          <Header />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/cart" element={<Cart />}> </Route>
              <Route path="/products" element={<Products />}> </Route>
              <Route path="/singleProduct" element={<SingleProduct />}> </Route>
            </Routes>
          </BrowserRouter>
        </globalVariable.Provider>
      </div>
    </>
  );
}

export default App;
