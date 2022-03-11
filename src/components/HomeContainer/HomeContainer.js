import React, {useEffect, useState} from 'react'
import Home from '../Home/Home'
import db from '../../firebase/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'


const HomeContainer = () => {

    const [homeItems, setHomeItems] = useState([])

    useEffect(() => {
        async function asyncEffect() {
            const myItems = query(
                collection(db, 'products'), where('category', '==', 'singles'),
            )
            const querySnapshot = await getDocs(myItems)
            // eslint-disable-next-line
            setHomeItems(
              querySnapshot.docs.map((e) => {
                return { ...e.data(), id: e.id }
              }),
            )
          }
        
          asyncEffect()
        
    }, [])

    const randomItems = homeItems.sort(() => Math.random()- Math.random()).slice(0, 4)


  return (
    <div><Home randomItems={randomItems}/></div>
  )
}

export default HomeContainer