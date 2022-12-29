import React from 'react'
import { NavLink } from 'react-router-dom'

const LoggedUserLink = ({name}) => {
  return (
    <NavLink className="user_link logged_user" to={`/${name}`}><div className='logged_user_container'>{`${name[0].toUpperCase()}${name.substring(1)}`}</div></NavLink>
  )
}

export default LoggedUserLink