import React, { useContext } from "react";
import CartContext from "../../../store/CartContext";
import Button from "../../UI/Button";
import CartItem from "../../UI/CartItem";
import "./Modal.css";

function Modal() {
  const ctx = useContext(CartContext);

  const handleClose = () => {
    ctx.showModal();
  };

  const handleOrder = () => {
    ctx.completeOrder()
  }

  return (
    <div className="modal">
      <div className="modal-content">
        {
          ctx.cartItems.map((item, id) => {
            return <CartItem key={id} id={id} title={item.title} price={item.price} amount={item.amount} />
          })
        }
        <div className="modal-footer">
          <h2>Total Amounts</h2>
          <h2>${ctx.totalPrice.toFixed(2)}</h2>
        </div>
        <div className="modal-actions">
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleOrder}>Order</Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
