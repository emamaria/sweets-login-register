import React, { useEffect, useState } from 'react'
import Sweet from '../../components/sweets/sweet'
import axios from 'axios'

const Sweets = () => {

  const [data, setData] = useState([]);

  let url = `${process.env.REACT_APP_API}/sweet`

   useEffect(() => {
      axios.get(url).then((res) => {
        console.log(res.data)
        setData(res.data)
      }).catch(err => console.log(err)) 
  }, [url]);

  console.log("midata", data)

const [inputValue, setInputValue] = useState("");


 function handleChange(event){

   setInputValue(event.target.value)

}

return (
    <div className='sweets_screen'>
    <input type="text" placeholder="write the sweet name" value={inputValue} onChange={handleChange}/>
    {!data && <p class="loading">Loading...</p>}
    <div className='sweets__container'>
      {  data.filter(data => data.name.toLowerCase().includes(inputValue.toLowerCase())).map( (data) => {
          return <Sweet key={data._id} img={data.img} description={data.description} name={data.name} price={data.price} quantity={data.size}  category={data.category}/>
        })
      }
      
     </div>
    </div>
  )
}

export default Sweets