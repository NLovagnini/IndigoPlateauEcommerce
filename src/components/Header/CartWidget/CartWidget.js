import React, { useContext } from 'react'
import Cart from './cart.png'
import './CartWidget.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/cartContext'

const CartWidget = () => {
  const { itemsCart } = useContext(CartContext)

  return (
    <div className="widgetContainer">
      <div className="cartWidget ">
        <Link to={`/Cart`} className='cartLink'>
          <img src={Cart} alt="Shopping Cart" className='widgetImg'></img>
          <span className="cartAmount">{itemsCart.length}</span>
        </Link>
      </div>
    </div>
  )
}

export default CartWidget
