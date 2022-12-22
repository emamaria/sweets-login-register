import React from 'react'

const RegisterForm = () => {
  return (
    <div className='form_container'>
    <form className="form" action=""  method="post">
   <h2 className='form_title'>Register</h2>
   <input className='form_input' type="text" placeholder="name" name="name" required/> 
   <input className='form_input' type="text" placeholder="email" name="email" required/> 
   <input className='form_input' type="text" placeholder="password" name="password" required/>
   <button className='form_button' type="submit"><p>Register</p></button>
  </form>
  </div>
  )
}

export default RegisterForm