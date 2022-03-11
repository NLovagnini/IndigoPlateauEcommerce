import React, {useEffect} from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import Tilt from 'react-parallax-tilt'

const ItemDetail = ({
  title,
  description,
  picUrl,
  price,
  stock,
  btnState,
  onAdd,
}) => {


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <div className="itemDetail">
      <div className="itemDetail-inner">
        <div className="itemDetail-inner_top">
          <div className="itemDetail-inner_img">
            <Tilt scale={1.1} transitionSpeed={2000}>
            <img src={picUrl} className="detailImg" alt=""></img>
            </Tilt>
          </div>
          <div className="itemDetail-inner_buyInfo">
            <h2>{title}</h2>
            <h3 className='priceTag'>${price}</h3>
            <ItemCount
              stock={stock}
              title={title}
              onAdd={onAdd}
              btnState={btnState}
            />
          </div>
        </div>
        <div className="itemDetail-inner_bottom">
          <div className="itemDetail-inner_description">
            <span className='itemDetail-inner_descriptionTag'><strong>Description</strong></span>
            <p className='itemDetail-inner_descriptionText'>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
