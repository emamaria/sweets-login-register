
import React, { useState } from 'react'
import AddCartButton from '../cart/AddCartButton';


const Sweet = ({ price, description, name, category, img}) => {


let unitPrice = price

const [count, setCount] = useState({price: unitPrice, amount: 1, totalPrice(){ return (this.price*this.amount)}, name , category});

  const restAmount = () => {

    if(count.amount > 1){
      setCount({...count, amount: count.amount - 1})
    }
   
  }

  const addAmount = () => { 
    setCount({...count, amount: count.amount + 1})
   
  }
  return (
    <div className='sweet_container'>
        <img src={img} alt={name}/>
        <h3>{name[0].toUpperCase() + name.substring(1)}</h3>
        <div className="sweet_total_container">
        <p className='sweet_price'>{count.totalPrice().toFixed(2)}€</p>
        <div className="sweet_amount" >
        <button className="addCart_counter_button" onClick={restAmount}>-</button>
        <p>{count.amount}</p>
         <button className="addCart_counter_button" onClick={addAmount}>+</button>
         </div>
        <AddCartButton  name={count.name} img={img} price={count.price} amount={count.amount} totalPrice={count.totalPrice()} category={count.category}/>
        </div>
        
    </div>
  )
}

export default Sweet