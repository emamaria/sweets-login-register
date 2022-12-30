import React from 'react'
import CartLink from '../cart/CartLink'
import {useLocation} from 'react-router-dom'
import UserLink from '../user/UserLink'
import { useSelector } from 'react-redux'
import LoggedUserLink from '../user/LoggedUserLink'



const Header = () => {
  
  const path = useLocation().pathname
  console.log("pathname", path)

  const {status, user} = useSelector(state => state.authUser)
  
  return (

    <header className='header'>
        <h1>Sweets and Drinks</h1>
        {(status !== "authenticated") ? <UserLink/>:<LoggedUserLink name={user.name}/>} 
        {(path !== "/" && path!== "/cart" && path!== "/login" && path !== "/register" )&&<CartLink/>}
        
        
    </header>

  )
}

export default Header