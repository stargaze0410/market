import React, { useContext, useEffect } from "react";
import { productContext } from "../../context/ProductContext";

const ProductsList = () => {
  const { getProducts, products } = useContext(productContext);

  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);
  return <div></div>;
};

export default ProductsList;
