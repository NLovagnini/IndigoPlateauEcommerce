import React from 'react'
import './ItemCount.css'
import {useState} from 'react'
import CountInput from './CountInput'
import { Link } from 'react-router-dom'

const ItemCount = ({stock, btnState, onAdd}) => {


  const [amount, setAmount] = useState(1)
  

  const decreaseValue = (e) =>{
    (e).preventDefault();
    setAmount(amount-1); 
    if ((amount-1) < 1 ){
      setAmount(1)}
  }

  const increaseValue = (e) =>{
    (e).preventDefault();
    setAmount(amount+1);
    if ((amount+1) > stock ){
      setAmount(stock)}
  }
  
  
  

  return (
    <>
      <div className='itemCount'>
      <form className="shopAmount">
        <span className='qtyText'>Quantity:  </span>
        <button className="countMinus" onClick={ (e) => {decreaseValue(e) }}>-</button>

        <CountInput initial={amount} setInitial={setAmount} stock={stock}/> 

        <button className="countAdd" onClick={ (e) => {increaseValue(e) } }>+</button>
        
      </form>

      <p className='stockText'>{stock} - In Stock</p>
      </div>
      {btnState?
      stock > 0?
      <button className='addToCartbtn' onClick={ () =>{ onAdd(amount)}}> ADD TO CART </button>
      :<button className='addToCartbtn' onClick={ () =>{ onAdd(amount)}} style={{opacity: 0.5}} disabled={true}> ADD TO CART </button>
      :<Link to={'/Cart'} style={{textDecoration: 'none'}}> <button className='goToCartbtn' > GO TO CART </button></Link>
      }

    </>
  )
}

export default ItemCount
