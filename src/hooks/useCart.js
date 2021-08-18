import AppContext from '../context'
import React from 'react'

//Hook useCart (кастомный) для получаения  cartItems, setCartItems, totalPrice (чтобы не считать totalPrice в каждом компоненте )
export const useCart = () => {
  const { cartItems, setCartItems } = React.useContext(AppContext)
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0)

  return { cartItems, setCartItems, totalPrice }
}
