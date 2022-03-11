import React from 'react'
import Item from '../ItemList/Item/Item'
import './HomeItems.css'

const HomeItems = ({ randomItems }) => {
  const displayHomeItems = randomItems.map((randItem) => {
    return (
      <div className="itemPreview" key={randItem.id}>
        <Item
          id={randItem.id}
          title={randItem.title}
          price={randItem.price}
          stock={randItem.stock}
          picUrl={randItem.picUrl}
        />
      </div>
    )
  })

  const backgroundStyles = {
    backgroundImage: "url('/imgs/bg.jpg')",
    backgroundSize: 'cover',
    maxHeight: '100vh',
  }

  return (
    <div className='homeItems' style={{...backgroundStyles}}>
      <div className="homeItems-inner">
      <span className='homeItemsText'><p>RECOMMENDED ITEMS</p></span>
        <div className="homeItems-inner_display">{displayHomeItems} </div>
      </div>
    </div>
  )
}

export default HomeItems
