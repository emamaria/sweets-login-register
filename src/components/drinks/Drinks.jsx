import React from 'react'
import { drinkData } from '../../data/drinks'
import Drink from './Drink'

const Drinks = () => {
 
  return (
    <div className='drinks_screen'>
    <div className='sweets__container'>
      {  drinkData.map( (data, index) => {
          return <Drink key={index}  name={data.name} price={data.price} quantity={data.size} category={data.category}/>
        })
      }
      
     </div>
    </div>
  )
}

export default Drinks