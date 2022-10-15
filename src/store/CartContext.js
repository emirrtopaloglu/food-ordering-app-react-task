import { createContext } from "react";

const CartContext = createContext({
  showModal: () => {},
  isModalOpen: false,
  cartItems: [],
  addToCart: (item) => {},
  totalItem: 0,
  totalPrice: 0,
  decreaseItem: (id) => {},
  increaseItem: (id) => {},
  completeOrder: () => {}
});

export default CartContext;
