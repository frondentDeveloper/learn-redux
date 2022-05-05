 import React from "react";
import {Routes, Route} from "react-router-dom"
import ProductDetails from "./container/productDetails";
import ProductListing from "./container/productListing"
import Header from "./container/Header";
function App() {
  return (
      <>
          <Header/>
          <Routes>
            <Route path="/" exact={true} element={<ProductListing/>}/>
            <Route path="/product/:productId" exact={true} element={<ProductDetails/>}/>
          </Routes>
      </>
  );
}

export default App;
