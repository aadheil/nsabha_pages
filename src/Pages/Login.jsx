import React from 'react'
import './login.css'
function Login() {
  return (
    <div className='container'>
        <div className='logincontainer'>

        <div className='imagecontainer'>
        </div>

        <div className='textcontainer'>
            <div className='heading'><h1>Login</h1></div>
            <div className='lableusername '>
                <label htmlFor="username">Username</label>
            </div>
            <div className='inputforusername'><input type="text" placeholder='Enter your username' id='username' className='username'/>
            </div>
            

            <div className='lablepassword '>
                <label htmlFor="password">Password</label>
            </div>
            <div className='inputforpassword'><input type="password" placeholder='Enter your password' id='password' className='password'/>
            </div>

            <div className='loginbuttondiv'>
                <button className='loginbutton'>Login</button>
            </div>

            <div className='forgotpassdiv'>
                <a className=''>Forgot Password ?</a>
            </div>

        </div>


        </div>
        
    </div>
  )
}

export default Login