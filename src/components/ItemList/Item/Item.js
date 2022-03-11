import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, title, price, picUrl}) => {

 
  return (
    <div>
      <Link to={`/ItemDetail/${id}`} className='itemLink'>
        <img className="itemListPic" src={picUrl} alt={title}></img>
        <span> <p className='itemTitle'>{title}</p> </span>
        <span><strong>$ {price}</strong></span>
      </Link>
      
    </div>
  )
}

export default Item
