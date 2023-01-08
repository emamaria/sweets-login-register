import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom'

const LoggedUserLink = ({name}) => {

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault()
    localStorage.clear()
    window.location.reload()
      
    navigate("/login") 
    

  }

  //por si hay nombres compuestos largos, solo tomar el primer nombre
  let nameArr = name.split(" ")

  name = nameArr[0]
  return (
    <div className='dropdown-container'>
    <div className='dropdown'>
    <NavLink className="dropbtn" to={`/${name}`}>{`${name[0].toUpperCase()}${name.substring(1)}`} orders</NavLink>
    <div className="dropdown-content">
    <NavLink onClick={handleClick} className="dropdown-link" to="/login">Logout</NavLink>
    </div>
    </div>
    </div>
    
   
  )
}

export default LoggedUserLink