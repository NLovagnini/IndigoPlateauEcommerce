import React, {useContext} from 'react'
import {CartContext} from '../../context/cartContext'
import Cart from './Cart'


const CartContainer = () => {

    const {itemsCart, cartTotal, itemRemove} = useContext(CartContext)
    

    const backgroundStyles = {
        backgroundImage: "url('/imgs/bg.jpg')",
        backgroundSize:'cover',
        minHeight: '100vh',
        paddingBlock: '2rem'
      }
      

    return (
        <div style={{...backgroundStyles}} className='cartContainer'>
            <div>
            <Cart
                itemsCart={itemsCart}
                cartTotal={cartTotal}
                itemRemove={itemRemove}
            />
            </div>
        </div>
    )
}

export default CartContainer
