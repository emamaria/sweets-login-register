import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';
import { UserAuthAsync } from '../../thunks/userAuth';
//mostrar login si no esta autenticado
const LoginForm = () => {

  const {userLogin} = UserAuthAsync()
  const {status, user} = useSelector(state => state.authUser)
   
  const [form, setForm] = useState({name: "", email: "", password: ""});

  const {email, password} = form;

  const handleChange = (e) => {
    
   setForm({...form, [e.target.name]: e.target.value })
   console.log(form)
  }

  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
    userLogin(email, password)
  }

  return (
   (status !== "authenticated")? ( <div className='form_container'>
   <form className="form" onSubmit={handleSubmit}>
  <h2 className='form_title'>Login</h2>
  <input className='form_input' type="email" placeholder="email" name="email" value={email}  onChange={handleChange} required/> 
  <input className='form_input' type="password" placeholder="password" name="password" value={password}  onChange={handleChange} required/>
  <button className='form_button' type="submit"><p>Login</p></button>
  <NavLink className="form_navlink" to="/register"><p className="registerLink">Create Account</p>  </NavLink>
 </form>
 </div>): <Navigate to={`/${user.name}`}/>
  )
}

export default LoginForm