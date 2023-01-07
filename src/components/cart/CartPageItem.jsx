import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { restFromTotal, addToTotal, deleteProduct} from '../../features/cart/cartSlice'

const CartPageItem = ({price, totalPrice, name, amount, category, img}) => {

  const [color,setColor]=useState('#65C18C');
  const [textColor,setTextColor]=useState('black');

   
    const dispatch = useDispatch()

    const restAmountTotal = () => {
        dispatch(restFromTotal({price, totalPrice, name, amount}))
    }

    const addAmountTotal = () => {
        dispatch(addToTotal({price, totalPrice, name, amount}))
    }

    const deleteFromCart = () => {
      dispatch(deleteProduct({name}))
    }
  return (
    <div className="cartItem_container">
       <div className='img_container'>
       {name && <img src={img} alt={name}/>}
       </div>
        <div className="cartDetail_container">
            <h1>{name[0].toUpperCase() + name.substring(1)}</h1>
            <h1>Price: {price.toFixed(2)}€</h1>
            <h1>Total: {totalPrice?.toFixed(2)}€</h1>
            <div  className='buttons_container'>
            <div className="counter_container">
            <button className="addCart_counter_button" onClick={restAmountTotal}>-</button>
            <p>{amount}</p>
            <button className="addCart_counter_button" onClick={addAmountTotal}>+</button>
            </div>
            <button className='deleteButton addCart_counter_button' onClick={deleteFromCart} onMouseDown={()=>{ setColor("white");setTextColor('white'); }} onMouseUp={()=>{ setColor("#65C18C");setTextColor('black'); }}style={{background:color,color:textColor}}  >Delete</button>
            </div>
           
        </div>
    </div>
  )
}

export default CartPageItem