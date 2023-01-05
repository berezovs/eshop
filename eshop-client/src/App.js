import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
function App() {
  const user = true;
  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />

          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />

          <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
