import React from 'react'
import { useState, useEffect, useContext } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'
import './ItemDetailContainer.css'

import { getDoc, doc  } from "firebase/firestore";
import db from '../../firebase/firebase'



const ItemDetailContainer = () => {

    
    const {itemId} = useParams();

    const [details, setDetail] = useState([]);
    const [qty, setQty] = useState(0);

    const {addItem} = useContext(CartContext);

    let [btnState, setBtnState] = useState(true)

    
    const onAdd = (value) => {
      setBtnState(false) 
      

      const addSuccess = addItem (
        {
          id: itemId,
          title: details.title,
          picUrl: details.picUrl,
          price: details.price,
          stock: details.stock,
        },
        value)
        if (addSuccess) {
          setQty(value)
        }
      }

      

  useEffect(() => {
    const ref = doc(db, 'products', itemId)

    getDoc(ref).then(e => {
      setDetail({...e.data(), id: e.id})
    })
   
    
    
      
  }, [itemId])
    
  const backgroundStyles = {
    backgroundImage: "url('/imgs/bg.jpg')",
    backgroundSize:'cover',
    minHeight: '100vh'
  }



    return (
        <div className='detailContainer' style={{...backgroundStyles}}>
            <ItemDetail 
              id={itemId}
              title={details.title}
              description={details.description} 
              picUrl={details.picUrl} 
              price={details.price} 
              stock={details.stock}
              btnState={btnState}
              onAdd={onAdd}
              qty={qty}
              />
        </div>
    )
    
}

export default ItemDetailContainer
