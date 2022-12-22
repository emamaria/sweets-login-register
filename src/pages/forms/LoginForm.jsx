import React from 'react'
import { NavLink } from 'react-router-dom';
const LoginForm = () => {
  return (
    <div className='form_container'>
      <form className="form" action=""  method="post">
     <h2 className='form_title'>Login</h2>
     <input className='form_input' type="text" placeholder="email" name="email" required/> 
     <input className='form_input' type="text" placeholder="password" name="password" required/>
     <button className='form_button' type="submit"><p>Login</p></button>
     <NavLink className="form_navlink" to="/register"><p className="registerLink">Create Account</p>  </NavLink>
    </form>
    </div>
    
    
  )
}

export default LoginForm