import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addCart, updateCartAdd} from '../../features/cart/cartSlice.js'
import {useSelector} from 'react-redux'

const AddCartButton = ({name, amount, totalPrice, price, category}) => {

  const [color,setColor]=useState('#65C18C');
  const [textColor,setTextColor]=useState('white');

 const cartState = useSelector(state => state.cartTasks)

  
  const dispatch = useDispatch()

  
  const AddItemToCart = () => {

    // customStyle.backgroundColor = "white"
    const itemExist = cartState.find(item => item.name === name)

    // console.log("itemexiste", itemExist,name)
   //pongo ? para casos de undefied no de error .En caso de que exista
   console.log("itemname", itemExist)
    if(itemExist?.name === name){
      dispatch(updateCartAdd({name, amount, totalPrice, price}))
    }else{
     
      // console.log(name, amount, totalPrice, price)
      dispatch(addCart({name, amount, totalPrice, price, category}))
     
    }
     
  
  }

 
  return (
    
    <button onClick={AddItemToCart} onMouseDown={()=>{ setColor("white");setTextColor('black'); }} onMouseUp={()=>{ setColor("#65C18C");setTextColor('white'); }}style={{background:color,color:textColor}}  className='addCartButton'> Add to cart
    </button>
  
  )
}

export default AddCartButton