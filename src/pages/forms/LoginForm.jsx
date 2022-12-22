import React from 'react'

const LoginForm = () => {
  return (
    <div className='form_container'>
      <form className="form" action=""  method="post">
     <h2 className='form_title'>Login</h2>
     <input className='form_input' type="text" placeholder="email" name="email" required/> 
     <input className='form_input' type="text" placeholder="password" name="password" required/>
     <button className='form_button' type="submit"><p>Login</p></button>
     <p className="registerLink">Create Account</p>
    </form>
    </div>
    
    
  )
}

export default LoginForm