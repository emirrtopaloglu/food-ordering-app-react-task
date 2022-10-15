import React, { useContext } from "react";
import CartContext from "../../store/CartContext";
import Button from "./Button";
import './CartItem.css'

function CartItem(props, key) {
  const ctx = useContext(CartContext)

  const handleDecrease = () => {
    ctx.decreaseItem(props.id)
  }

  const handleIncrease = () => {
    ctx.increaseItem(props.id)
  }

  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <h2 className="cart-item-title">{props.title}</h2>
        <div className="cart-item-price-amount">
          <span className="cart-item-price">${props.price}</span>
          <span className="cart-item-amount">x{props.amount}</span>
        </div>
      </div>
      <div className="cart-item-actions">
        <Button onClick={handleDecrease}>-</Button>
        <Button onClick={handleIncrease}>+</Button>
      </div>
    </div>
  );
}

export default CartItem;
