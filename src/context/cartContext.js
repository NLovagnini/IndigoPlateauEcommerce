import React, { createContext, useState } from 'react'
export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
  const [itemsCart, setItemsCart] = useState([])
  const [itemsQtyInCart, setItemsQtyInCart] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  //Identifica Item en lista de Cart
  const isInCart = (itemId) => {
    const findId = (item) => {
      return item.item.id === itemId
    }
    const itemNumber = itemsCart.findIndex(findId)
    return itemNumber
  }

  //Añade un Item a la lista de Cart, luego suma la cantidad. Para finalizar recalcula el monto total del itemsCart dado que se añadio un nuevo objeto al array
  const addItem = (item, qty) => {
    const itemNumber = isInCart(item.id)
    let addSuccess = true
    if (itemNumber === -1) {
      itemsCart.push({ item: item, qty: qty })
      setItemsQtyInCart(itemsQtyInCart + qty)
      setCartTotal(getTotalAmount().toFixed(2))
    } else {
      const cartQty = itemsCart[itemNumber].qty
      if (cartQty + qty <= item.stock) {
        itemsCart[itemNumber] = { item: item, qty: qty + cartQty }
        setItemsQtyInCart(itemsQtyInCart + qty)
        setCartTotal(getTotalAmount().toFixed(2))
      } else {
        addSuccess = false
      }
    }
    return addSuccess
  }

  //Identifica Item en la lista, identifica la cantidad de dicho Item dentro de la lista y luego lo quita del array.
  //Para finalizar recalcula el monto total dado que el array cambio
  const itemRemove = (itemId) => {
    const itemNumber = isInCart(itemId)
    if (itemNumber !== -1) {
      const qty = itemsCart[itemNumber].qty
      setItemsQtyInCart(itemsQtyInCart - qty)
      itemsCart.splice(itemNumber, 1)
    }
    setCartTotal(getTotalAmount().toFixed(2))
  }

  //Valor total del carrito multiplicando cada Item en la lista por la cantidad agregada
  const getTotalAmount = () => {

    let amount = itemsCart.reduce((prevValue, currentVal) => prevValue + (currentVal.item.price)*currentVal.qty, 0)
    
    return amount
  }


  
  return (
    <CartContext.Provider
      value={{
        itemsCart,
        setItemsCart,
        itemsQtyInCart,
        setItemsQtyInCart,
        cartTotal,
        itemRemove,
        addItem,
        isInCart,
      
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
