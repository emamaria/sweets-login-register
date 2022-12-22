import React from 'react'
import { NavLink } from 'react-router-dom'


const UserLink = () => {

   

  return (
    <NavLink className="user_link" to="/login"><div className='user_icon_container'><img  className="user_icon" src="/assets/user/user_icon.jpg" alt="cart_icon"/></div></NavLink>
  )
}

export default UserLink