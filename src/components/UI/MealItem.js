import { useContext, useRef } from "react";
import CartContext from "../../store/CartContext";
import Button from "./Button";
import "./MealItem.css";

function MealItem(props, key) {
  const ctx = useContext(CartContext);
  const amountRef = useRef();

  const handleAddItem = () => {
    const amount = amountRef.current.value;
    if (amount.trim().length === 0) {
      alert("Please enter a amount");
    } else {
      ctx.addToCart({
        id: props.item.id,
        title: props.item.title,
        price: props.item.price,
        amount: parseInt(amount)
      });
      amountRef.current.value = "";
    }
  };

  return (
    <div className="meal-item">
      <div className="meal-info">
        <h3 className="meal-title">{props.item.title}</h3>
        <p className="meal-desc">{props.item.desc}</p>
        <p className="meal-price">${props.item.price}</p>
      </div>
      <div className="meal-actions">
        <div>
          <label htmlFor="amount">
            <span>Amount</span>
            <input
              type="text"
              name="amount"
              className="meal-amount"
              ref={amountRef}
            />
          </label>
        </div>
        <div>
          <Button onClick={handleAddItem}>+ Add</Button>
        </div>
      </div>
    </div>
  );
}

export default MealItem;
