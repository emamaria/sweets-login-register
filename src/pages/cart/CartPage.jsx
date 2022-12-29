import React from 'react'
import {useSelector} from 'react-redux'
import CartPageItem from '../../components/cart/CartPageItem'
import { NavLink } from 'react-router-dom'

const CartPage = () => {
   const cartState = useSelector(state => state.cartTasks)
   const {status, user} = useSelector(state => state.authUser)
  console.log("cartSatte", cartState)
  const initialValue = 0;
  let totalPurchase = cartState.reduce( (acc, cur) => acc + cur.totalPrice, initialValue)
  let totalItems = cartState.reduce( (acc, cur) => acc + cur.amount, initialValue)
  return (
    <div className='cartPage_container'>
     <h1 className='cartPage_container_title'>{(status !== "authenticated")?"User": `${user.name[0].toUpperCase()}${user.name.substring(1)}`} Shopping Cart Info</h1>
      { cartState.map((item, index) => {
        return <CartPageItem key={index} name={item.name} totalPrice={item.totalPrice} amount={item.amount} 
        price={item.price} category={item.category}/>
      } )}
      <h1 className="totalItems">Total Items:{totalItems}</h1>
     <h1 className="totalPurchase">Total purchase:{totalPurchase.toFixed(2)}€</h1>
     <NavLink  to="/login"><button disabled={totalItems===0} className='pay_button'>Pay</button></NavLink>
    </div>
  )
}

export default CartPage