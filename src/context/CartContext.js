import React, { createContext, useReducer } from "react";

export const cartContext = createContext();

const INIT_STATE = {
  cart: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
  }
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addProductToCart = (productItem) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
      };
    }

    let newProduct = {
      item: productItem,
    };

    let filterCart = cart.products.filter((elem) => {
      return elem.item.id === productItem.id;
    });

    if (filterCart.length > 0) {
      cart.products = cart.products.filter((elem) => {
        return elem.item.id !== productItem.id;
      });
    } else {
      cart.product.push(newProduct);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <cartContext.Provider value={{ addProductToCart }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
