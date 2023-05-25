import React, { useEffect, useState } from 'react'
import Drink from '../../components/drinks/Drink'
import axios from 'axios';

const Drinks = () => {

  const [data, setData] = useState([]);

  let url = `${process.env.REACT_APP_API}/drink`

   useEffect(() => {
      axios.get(url).then((res) => {
        console.log(res.data)
        setData(res.data)
      }).catch(err => console.log(err))
  }, [url]);

  console.log("midata", data)
 
  return (
    <div className='drinks_screen'>
     {!data && <p class="loading">Loading...</p>}
    <div className='sweets__container'>
      {  data.map( (data) => {
          return <Drink key={data._id}  description={data.description} img={data.img}  name={data.name} price={data.price} category={data.category}/>
        })
      }
      
     </div>
    
    </div>
  )
}

export default Drinks