import React from "react";
import { BrowserRouter } from "react-router-dom";
import PrimarySearchAppBar from "./Components/Navbar/Navbar";
import ProductContextProvider from "./context/ProductContext";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <ProductContextProvider>
        <PrimarySearchAppBar />
        <MainRoutes />
      </ProductContextProvider>
    </BrowserRouter>
  );
};

export default App;
