import React from 'react'
import { NavLink } from 'react-router-dom'

const LoggedUserLink = ({name}) => {
  return (
    <NavLink className="user_link logged_user" to={`/${name}`}>
    <div className='dropdown'>
    <button className="dropbtn">{`${name[0].toUpperCase()}${name.substring(1)}`}</button>
    <div className="dropdown-content">
    <NavLink className="dropdown-link" to="/">Logout</NavLink>
    </div>
    </div>
    </NavLink>
  )
}

export default LoggedUserLink