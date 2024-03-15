import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import {auth} from '../utils/firebase'
import  {createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { BG_URL } from '../utils/constants';
const Login = () => {  
  const email= useRef(null)
  const password= useRef(null)
  const[errorMessage,SetErrorMessage]=useState(null)
  const [isSignInFrom,setIsSignInForm] = useState(true);
  const toggleSignInForm =()=>{
       setIsSignInForm(!isSignInFrom);
  }
  const handleButtonClick=()=>{
    const message = checkValidData(email.current.value,password.current.value)
    SetErrorMessage(message);
   if(message) return;
   if(!isSignInFrom)
   {
    //sign up logic 
createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    SetErrorMessage(errorMessage +" "+ errorCode);
  });
   }
   else 
   {
    // signin
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    SetErrorMessage(errorMessage)
  });
   }

  }

  return (
    <div>
      <Header/>
      <div className=' absolute bg-black'>
     <img className='opacity-50' src={BG_URL} 
     alt="bg-img"
      />
      </div> 
      <form onSubmit={(e)=>e.preventDefault()} className='p-12 px-16 absolute w-3/12 bg-black my-36 mx-auto right-8 left-0  text-white bg-opacity-80 '>
        <h1 className='font-bold text-3xl py-4'>{isSignInFrom?"Sign In":"Sign Up"} </h1>
        {!isSignInFrom &&
        <input type="text" placeholder='Name' className=' p-3 my-4 w-full bg-gray-700 rounded-sm' />
        }
        <input ref={email} type="text" placeholder='Email ' className=' p-3 my-4 w-full bg-gray-700 rounded-sm' />
        <input ref={password} type="password" placeholder='Password' className=' p-3 my-4 w-full bg-gray-700 rounded-sm ' />
        <p className='text-red-500 font-semibold text-lg py-2'>{errorMessage}</p>
        <button onClick={handleButtonClick} className='p-4 my-6 bg-red-700 w-full rounded-sm'>{isSignInFrom?"Sign In":"Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
        {isSignInFrom?"New to Netflix? Sign up Now":"Already Registred? Sign In Now."}
         </p>
      </form>

    </div>
  )
}

export default Login