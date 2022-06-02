import React, { useContext, useEffect } from "react";
import { cartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, getCart, deleteCartProduct } = useContext(cartContext);

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Фото</th>
            <th>Название</th>
            <th>Цена</th>
            <th>Количество</th>
            <th>Сумма продукта</th>
          </tr>
        </thead>
        <tbody>
          {cart.products
            ? cart.products.map((elem) => (
                <tr>
                  <td>
                    <img src={elem.item.img1} alt="phone" />
                  </td>
                  <td>{elem.item.title}</td>
                  <td>{elem.item.price}</td>
                  <td>1</td>
                  <td>200</td>
                  <td>
                    <button onClick={() => deleteCartProduct()}>Удалить</button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
