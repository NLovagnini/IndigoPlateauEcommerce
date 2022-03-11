import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Header from './components/Header/Header'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartContainer from './components/Cart/CartContainer'
import CartContextProvider from './context/cartContext'
import Checkout from './components/Cart/Checkout/Checkout'
import HomeContainer from './components/HomeContainer/HomeContainer'

// import data from './components/data';
// import db from './firebase/firebase';
// import { collection, addDoc }  from 'firebase/firestore';
// import {fileUpload} from './firebase/fileUpload'


function App() {
 
  
  // const uploadArray =  () => {
    
  //   data.forEach( async(element) => {
  //     const imgUrl = await fileUpload(element.picUrl)
      
  //     addDoc(collection(db, 'products'), {...element, picUrl: imgUrl})
      
  //   })
  // }


  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Header></Header>
          {/* {<button onClick={uploadArray}>upload</button> } */}
          <Routes>
            <Route path='' element={<HomeContainer/>}/>
            <Route path="ItemList" element={<ItemListContainer />} />
            <Route path="ItemDetail/:itemId" element={<ItemDetailContainer />}/>
            <Route path="ItemList/:categoryId" element={<ItemListContainer />}/>
            <Route path="Cart" element={<CartContainer />} />
            <Route path='Checkout' element={<Checkout/>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  )
}

export default App
