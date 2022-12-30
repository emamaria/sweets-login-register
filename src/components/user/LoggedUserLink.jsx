import React from 'react'
import { Navigate, NavLink } from 'react-router-dom'

const LoggedUserLink = ({name}) => {

  const handleClick = (e) => {
    e.preventDefault()
    localStorage.clear()
    window.location.reload()
    Navigate("/login") 
  }
  return (
    <div className='dropdown-container'>
    <div className='dropdown'>
    <NavLink className="dropbtn" to={`/${name}`}>{`${name[0].toUpperCase()}${name.substring(1)}`} </NavLink>
    <div className="dropdown-content">
    <NavLink onClick={handleClick} className="dropdown-link">Logout</NavLink>
    </div>
    </div>
    </div>
    
   
  )
}

export default LoggedUserLink