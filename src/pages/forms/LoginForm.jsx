import React from 'react'

const LoginForm = () => {
  return (
    <div className='loginForm_container'>
      <form className="loginForm" action=""  method="post">
     <h2 className='login_title'>Login</h2>
     <input className='login_input' type="text" placeholder="email" name="email" required/> 
     <input className='login_input' type="text" placeholder="password" name="password" required/>
     <button className='login_button' type="submit"><p>Login</p></button>
     <p className="registerLink">Create Account</p>
    </form>
    </div>
    
    
  )
}

export default LoginForm