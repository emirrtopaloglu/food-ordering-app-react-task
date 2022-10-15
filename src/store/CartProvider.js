import { useEffect, useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalItem, setTotalItem] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0.0);

  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const addToCart = (item) => {
    const itemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (itemIndex >= 0) {
      cartItems[itemIndex].amount += item.amount;
    } else {
      setCartItems((prevState) => {
        return [...prevState, item];
      });
    }
    setTotalItem(totalItem + item.amount);
    setTotalPrice(totalPrice + item.price * item.amount);
  };

  const decreaseItem = (id) => {
    cartItems[id].amount--;
    setTotalPrice(totalPrice - cartItems[id].price);
    setTotalItem(totalItem - 1);

    if (cartItems[id].amount == 0) {
      cartItems.splice(id, 1);
    }
  };

  const increaseItem = (id) => {
    cartItems[id].amount++;
    setTotalPrice(totalPrice + cartItems[id].price);
    setTotalItem(totalItem + 1);
  };

  const completeOrder = () => {
    setCartItems([]);
    setTotalItem(0);
    setTotalPrice(0.0);
    setIsModalOpen(false);
    alert("Order Completed");
  }

  return (
    <CartContext.Provider
      value={{
        showModal: showModal,
        isModalOpen: isModalOpen,
        cartItems: cartItems,
        addToCart: addToCart,
        totalItem: totalItem,
        totalPrice: totalPrice,
        decreaseItem: decreaseItem,
        increaseItem: increaseItem,
        completeOrder: completeOrder
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
