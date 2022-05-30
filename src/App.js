import React from "react";
import { BrowserRouter } from "react-router-dom";
import PrimarySearchAppBar from "./Components/Navbar/Navbar";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <PrimarySearchAppBar />
      <MainRoutes />
    </BrowserRouter>
  );
};

export default App;
