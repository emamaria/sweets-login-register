import React from 'react'
import { NavLink } from 'react-router-dom'

const LoggedUserLink = ({name}) => {
  return (
    <div className='dropdown-container'>
    <div className='dropdown'>
    <NavLink className="dropbtn" to={`/${name}`}>{`${name[0].toUpperCase()}${name.substring(1)}`} </NavLink>
    <div className="dropdown-content">
    <NavLink className="dropdown-link" to="/">Logout</NavLink>
    </div>
    </div>
    </div>
    
   
  )
}

export default LoggedUserLink