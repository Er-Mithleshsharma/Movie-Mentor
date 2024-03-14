import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { bg, logo } from '../utils/constants';


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const user = useSelector((store)=>store.user)
  const handlesignout =()=>{

    signOut(auth).then(() => {
    }).catch((error) => {
      // An error happened.
    });
  }

  useEffect(()=>{
   const unsubscribe =   onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName} = user;
        // ...
        dispatch(addUser({uid:uid , email:email , displayName:displayName}))
        navigate('/browse');
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
      }
    });
    return ()=> unsubscribe();
  },[])
  

  return (
    <div className=' absolute  bg-gradient-to-b from-black w-full flex justify-between z-50 px-8'>
         <img className='w-52  py-2 ' src={logo} alt="logo" />
  
    {user && <div className='flex items-center bg-gradient-to-b from black'>
            <img className='h-12 w-12' src={bg} alt="" />
             <button className='font-bold text-white px-2' onClick={handlesignout}>SignOut</button>
    </div> }
    
     </div>
  )
}

export default Header