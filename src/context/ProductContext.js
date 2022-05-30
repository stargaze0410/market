import axios from "axios";
import React, { createContext, useReducer } from "react";

export const productContext = createContext();

const API = "http://localhost:8000/products";

const INIT_STATE = {
  products: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addProduct = async (newProduct) => {
    await axios.post(API, newProduct);
  };

  const getProducts = async () => {
    let { data } = await axios.get(API);
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };

  return (
    <productContext.Provider
      value={{ products: state.products, addProduct, getProducts }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
