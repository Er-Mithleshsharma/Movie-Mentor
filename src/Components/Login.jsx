import React, { useState } from 'react'
import Header from './Header'
const Login = () => {
  const [isSignInFrom,setIsSignInForm] = useState(true);
  const toggleSignInForm =()=>{
       setIsSignInForm(!isSignInFrom);
  }
  return (
    <div>
      <Header/>
      <div className=' absolute bg-black'>
     <img className='opacity-50' src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
     alt="bg-img"
      />
      </div> 
      <form action="" className='p-12 px-16 absolute w-3/12 bg-black my-36 mx-auto right-8 left-0  text-white bg-opacity-80 '>
        <h1 className='font-bold text-3xl py-4'>{isSignInFrom?"Sign In":"Sign Up"} </h1>
        {!isSignInFrom &&
        <input type="text" placeholder='Name' className=' p-3 my-4 w-full bg-gray-700 rounded-sm' />
        }
        <input type="text" placeholder='Email ' className=' p-3 my-4 w-full bg-gray-700 rounded-sm' />
        <input type="password" placeholder='Password' className=' p-3 my-4 w-full bg-gray-700 rounded-sm ' />
        <button className='p-4 my-6 bg-red-700 w-full rounded-sm'>{isSignInFrom?"Sign In":"Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
        {isSignInFrom?"New to Netflix? Sign up Now":"Already Registred? Sign In Now."}
         </p>
      </form>

    </div>
  )
}

export default Login