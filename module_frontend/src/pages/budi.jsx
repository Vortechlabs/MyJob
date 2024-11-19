import React from 'react'
import wl from '../assets/images/wl.png'

function Register() {
  return (
    <div className='flex shadow-2xl rounded-2xl'>

      <div >
        <img src={wl} alt="hero-login-image" className='max-h-[32rem] rounded-l-2xl'/>
      </div>

      <div className='p-8 flex content-center items-center'>
      <div>
      <div>
        <h1 className='text-center text-4xl'>Register</h1>
        <p className='text-center'>Enter your email and password to sign in</p>
      </div>

      <div className='mt-10'>

      <div className='p-2'>
        <label className='text-sm'>Username</label> <br/>
        <input type="text" name='username' placeholder='yourname@domain.com' className='ring-1 p-4 text-sm font-light rounded-xl w-full ring-black'/>
      </div>

      <div className='p-2'>
        <label className='text-sm'>Password</label> <br/>
        <input type="password" name='password' placeholder='********' className='ring-1 p-4 text-sm font-light rounded-xl w-full ring-black '/>
      </div>

      <div className='p-2 '>
        <button className='w-full bg-indigo-600 hover:ring-4 hover:ring-indigo-400 text-white'>Login</button>
      </div>
      </div>
      </div>

      </div>

    </div>
  )
}

export default Register