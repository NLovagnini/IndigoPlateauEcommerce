import React from 'react'
import './CartItem.css'

const CartItem = ({id, picUrl, title, price, quantity, itemRemove}) => {
    return (
        <div className='itemDisplay'>
            <img className='cartImg' src={picUrl} alt=''></img>
            <span> {title}</span>
            <div>
            <span>  x {quantity} </span>
            </div>
            <div>
            <span style={{fontWeight:'bold'}}> $ {(quantity * price).toFixed(2)}</span>
            <img className='removeImg' src='/remove.png' alt='' onClick={() => itemRemove(id)}/>
            </div>
        </div>
    )
}

export default CartItem
