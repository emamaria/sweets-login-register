import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const RegisterForm = () => {

  
  const [form, setForm] = useState({name: "", email: "", password: ""});

  const {name, email, password} = form;

  const handleChange = (e) => {
    
   setForm({...form, [e.target.name]: e.target.value })
   console.log(form)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <div className='form_container'>
    <form className="form" onSubmit={handleSubmit}>
   <h2 className='form_title'>Register</h2>
   <input className='form_input' type="text" placeholder="name" name="name" value={name} onChange={handleChange} required/> 
   <input className='form_input' type="email" placeholder="email" name="email" value={email}  onChange={handleChange} required/> 
   <input className='form_input' type="password" placeholder="password" name="password" value={password}  onChange={handleChange} required/>
   <button className='form_button' type="submit"><p>Register</p></button>
   <NavLink className="form_navlink" to="/login"><p className="registerLink">Back to login</p></NavLink>
  </form>
  </div>
  )
}

export default RegisterForm