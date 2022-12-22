import React, { useState } from 'react'
import { sweetData } from '../../data/sweets'
import Sweet from './sweet'

const Sweets = () => {

const [inputValue, setInputValue] = useState("");


 function handleChange(event){

   setInputValue(event.target.value)

}



 


  return (
    <div className='sweets_screen'>
    <input type="text" placeholder="write the sweet name" value={inputValue} onChange={handleChange}/>
    <div className='sweets__container'>
      {  sweetData.filter(data => data.name.toLowerCase().includes(inputValue.toLowerCase())).map( (data, index) => {
          return <Sweet key={index}  name={data.name} price={data.price} quantity={data.size}  category={data.category}/>
        })
      }
      
     </div>
    </div>
  )
}

export default Sweets