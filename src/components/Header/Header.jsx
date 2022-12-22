import React from 'react'
import CartLink from '../cart/CartLink'
import {useLocation} from 'react-router-dom'



const Header = () => {
  
  const path = useLocation().pathname
  console.log("pathname", path)

  return (

    <header className='header'>
        <h1>Sweets and Drinks</h1>
        {(path!== "/" && path!== "/cart")&&<CartLink/>}
        
    </header>

  )
}

export default Header