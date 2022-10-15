import { useContext } from 'react'
import CartContext from '../../store/CartContext'
import './Cart.css'

function Cart(props) {
  const ctx = useContext(CartContext)
  return (
    <button className="cart" onClick={props.onClick}>
        Your Cart <span>{ctx.totalItem}</span>
    </button>
  )
}

export default Cart