import React from "react";
import { BrowserRouter } from "react-router-dom";
import PrimarySearchAppBar from "./Components/Navbar/Navbar";
import AuthContextProvider from "./context/AuthContext";
import ProductContextProvider from "./context/ProductContext";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ProductContextProvider>
          <PrimarySearchAppBar />
          <MainRoutes />
        </ProductContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default App;
