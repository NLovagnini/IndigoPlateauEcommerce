
import React, { useState, useEffect } from 'react'
import Item from './Item/Item'
import ReactPaginate from 'react-paginate'
import { useLocation } from 'react-router-dom'
import './ItemList.css'

const ItemList = ({ items }) => {
  const location = useLocation()

  const [pageNumber, setPageNumber] = useState(0)

  const itemsPerPage = 6
  const pagesViewed = pageNumber * itemsPerPage

  const displayItems = items
    .slice(pagesViewed, pagesViewed + itemsPerPage)
    .map((item) => { 
      return (
          <div className="itemPreview" key={item.id}> 
            <Item
              id={item.id}
              title={item.title}
              price={item.price}
              stock={item.stock}
              picUrl={item.picUrl}
            />
          </div>
      )
    })

  useEffect(() => {
    setPageNumber(0)
  }, [location])

  const pageCount = Math.ceil(items.length / itemsPerPage)

  const changePage = ({selected}) => {
    setPageNumber(selected)
  }

  return (
    <>
      <div className="itemList-inner">
        <div className="itemList-inner_display">{displayItems}</div>
        <div className="itemList-inner_pagination">
          <ReactPaginate
            previousLabel={'<<'}
            nextLabel={'>>'}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={'paginationBtn'}
            previousLinkClassName={'prevBtn'}
            nextLinkClassName={'nextBtn'}
            disabledClassName={'paginationDisabled'}
            activeClassName={'paginationActive'}
          />
        </div>
      </div>
    </>
  )
}

export default ItemList
