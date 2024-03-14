import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { bg, logo } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import {SUPPORTED_LANGUAGES} from "../utils/constants"
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const user = useSelector((store)=>store.user)
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)
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
  
  const handleGptSearch = () =>{
    dispatch(toggleGptSearchView());
  }
    const handleLanguageChange = (e) =>{
          dispatch(changeLanguage(e.target.value)) 
    }
  return (
    <div className=' absolute  bg-gradient-to-b from-black w-full flex justify-between z-50 px-8'>
         <img className='w-52  py-2 ' src={logo} alt="logo" />
  
    {user && <div className='flex items-center bg-gradient-to-b from black'>
             { showGptSearch && <select className='p-2 bg-gray-500 text-white m-2' onChange={handleLanguageChange}>
                    {SUPPORTED_LANGUAGES.map((lang)=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option> )}  
             </select>}
            <button className='py-3 px-4 mx-2 bg-purple-800 text-white rounded-lg' onClick={handleGptSearch}>
              {showGptSearch?"Homepage":"GPT SEARCH"}
            </button>
            <img className='h-12 w-12' src={bg} alt="" />
             <button className='font-bold text-white px-2' onClick={handlesignout}>SignOut</button>
    </div> }
    
     </div>
  )
}

export default Header