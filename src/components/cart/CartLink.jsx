import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const CartLink = () => {
  const cartState = useSelector(state => state.cartTasks)
  let TotalItems = cartState.reduce( (acc, cur) => acc + cur.amount, 0)
  return (
    <div className='cart_link'>
    <NavLink className="cart__navlink" to="/cart">  <img src="/assets/cart/cart_icon.png" alt="cart_icon"/>{TotalItems}</NavLink>
   </div>
  )
}

export default CartLink