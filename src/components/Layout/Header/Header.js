import { useContext } from "react";
import CartContext from "../../../store/CartContext";
import Cart from "../../UI/Cart";
import "./Header.css";

function Header() {
  const ctx = useContext(CartContext);

  const handleClick = () => {
    ctx.showModal()
  }

  return (
    <div className="header">
      <h1>ReactMeals</h1>
      <div>
        <Cart onClick={handleClick} />
      </div>
    </div>
  );
}

export default Header;