import React from 'react'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import './Cart.css'
import Checkout from './Checkout/Checkout'

const Cart = ({ itemsCart, cartTotal, itemRemove}) => {

  return (
    <div className="cartDisplay">
      {itemsCart.length > 0 ? (
        <>
        <div className='orderDetails'>
          <div className="cartItem-container">
            {itemsCart.map((e) => (
              <div className="cartItem" >
                <CartItem
                  key={e.item.id}
                  id={e.item.id}
                  picUrl={e.item.picUrl}
                  title={e.item.title}
                  price={e.item.price}
                  quantity={e.qty}
                  itemRemove={itemRemove}
                  
                />
              </div>
            ))}
          </div>
          <div className="cartTotal">
              <p> Total: $ {cartTotal}</p>
            </div>
            </div>
          <div className="endOrder">
            <Checkout></Checkout>
          </div>
        </>
      ) : (
        <div>
          <h3>Oops! It seems like there are no products on your cart.</h3>
          <Link to="/ItemList" style={{ textDecoration: 'none' }}>
            <button className="cartBtn">Take a look at our products!</button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Cart
