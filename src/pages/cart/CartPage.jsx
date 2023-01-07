import React from 'react'
import {useSelector} from 'react-redux'
import CartPageItem from '../../components/cart/CartPageItem'
import { useNavigate } from 'react-router-dom'
import CheckOut from '../../components/CheckOut/CheckOut'

const CartPage = () => {
   const cartState = useSelector(state => state.cartTasks)
   const {status, user} = useSelector(state => state.authUser)
   const navigate = useNavigate()
  console.log("cartSatte", cartState)
  const initialValue = 0;
  let totalPurchase = cartState.reduce( (acc, cur) => acc + cur.totalPrice, initialValue)
  let totalItems = cartState.reduce( (acc, cur) => acc + cur.amount, initialValue)

   const goToLogin = (e) => {
      e.preventDefault()
      navigate("/login")
   }
  return (
    <div className='cartPage_container'>
     <h1 className='cartPage_container_title'>{(status !== "authenticated")?"User": `${user.name[0].toUpperCase()}${user.name.substring(1)}´s`} Shopping Cart Info</h1>
      { cartState.map((item, index) => {
        return <CartPageItem key={index} img={item.img} name={item.name} totalPrice={item.totalPrice} amount={item.amount} 
        price={item.price} category={item.category}/>
      } )}
      <h1 className="totalItems">Total Items:{totalItems}</h1>
     <h1 className="totalPurchase">Total purchase:{totalPurchase.toFixed(2)}€</h1>
     {(status !== "authenticated")?<button className='pay_button' onClick={goToLogin} >Login Before Paying</button>:<CheckOut totalItems={totalItems} total={totalPurchase} />}
    </div>
  )
}

export default CartPage