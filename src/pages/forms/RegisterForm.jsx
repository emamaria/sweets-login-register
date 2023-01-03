import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';
import { UserAuthAsync } from '../../thunks/userAuth';

const RegisterForm = () => {
  const [color,setColor]=useState('#65C18C');
  const [textColor,setTextColor]=useState('white');


  const {userRegister} = UserAuthAsync()

  const {status, user} = useSelector(state => state.authUser)

  console.log(userRegister)

  
  
  const [form, setForm] = useState({name: "", email: "", password: ""});

  const {name, email, password} = form;

  const handleChange = (e) => {
    
   setForm({...form, [e.target.name]: e.target.value })
   console.log(form)
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)

    userRegister(name, email, password)
  }

  return (
    (status !== "authenticated")?( <div className='form_container'>
    <form className="form" onSubmit={handleSubmit}>
   <h2 className='form_title'>Register</h2>
   <input className='form_input' type="text" placeholder="name" name="name" value={name} onChange={handleChange} required/> 
   <input className='form_input' type="email" placeholder="email" name="email" value={email}  onChange={handleChange} required/> 
   <input className='form_input' type="password" placeholder="password" name="password" value={password}  onChange={handleChange} required/>
   <button className='form_button' type="submit" onMouseDown={()=>{ setColor("white");setTextColor('black'); }}  onMouseUp={()=>{ setColor("#65C18C");setTextColor('white'); }} style={{background:color,color:textColor}} ><p>Register</p></button>
   <NavLink className="form_navlink" to="/login"><p className="registerLink">Back to login</p></NavLink>
  </form>
  </div>):<Navigate to={`/${user.name}`}/>
   
  )
}

export default RegisterForm