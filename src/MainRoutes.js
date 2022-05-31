import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./Components/Admin/AddProduct/AddProduct";
import Login from "./Components/Auth/Login";
import Home from "./Components/Home/Home";
import ProductsList from "./Components/Products/ProductsList";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/list" element={<ProductsList />} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  );
};

export default MainRoutes;
