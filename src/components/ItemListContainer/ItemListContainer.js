import React from 'react'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where} from 'firebase/firestore'
import { useQueryParams } from '../../hooks/useQueryParams'
import db from '../../firebase/firebase'

import './ItemListContainer.css'

const ItemListContainer = () => {
  const { categoryId } = useParams()

  const queryParams = useQueryParams().toLowerCase()
  const querySearch = [queryParams]


  const [items, setItems] = useState([])

  useEffect(() => {
    async function asyncEffect() {
      const myItems = categoryId
        ? queryParams !== 'no-undef' || ''
          ? query(
              collection(db, 'products'), where('tags', 'array-contains-any', querySearch), 
            )
          : query(
              collection(db, 'products'), where('category', '==', categoryId),
            )
        : collection(db, 'products')

      const querySnapshot = await getDocs(myItems)
      // eslint-disable-next-line
      setItems(
        querySnapshot.docs.map((e) => {
          return { ...e.data(), id: e.id }
        }),
      )
    }

    asyncEffect()
  }, [queryParams]) // eslint-disable-line

  const backgroundStyles = {
    backgroundImage: "url('/imgs/bg.jpg')",
    backgroundSize: 'cover',
    minHeight: '100vh',
  }

  return items.length === 0 ? (
    <div className="itemList" style={{ ...backgroundStyles }}>
      <span className="noFound">
        <p className="noFound_Text">No results found.</p>
      </span>
    </div>
  ) : (
    <div className="itemList" style={{ ...backgroundStyles }}>
      <ItemList items={items} key={'ItemList'}></ItemList>
    </div>
  )
}

export default ItemListContainer
