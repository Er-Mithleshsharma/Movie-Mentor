import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { API_OPTIONS, BG_URL, IMG_CDN_URL, logo } from '../utils/constants'
import Header from './Header'
import { Provider } from 'react-redux'
import appStore from '../utils/appStore'
import { FcVideoProjector } from "react-icons/fc";
    const MovieDetail = () => {
    const {id} = useParams()
    const [details,setDetails] = useState(null)
   
    const fetchData = async () =>{
         const data = await fetch('https://api.themoviedb.org/3/movie/'+id+'?language=en-US', API_OPTIONS) 
         const json = await data.json();
         setDetails(json)
    }

  useEffect(()=>{
  fetchData()
  })

    if(!details) return;
   
    const runtimeInMinutes = details.runtime;
const hours = Math.floor(runtimeInMinutes / 60); // Get the whole number of hours
const minutes = runtimeInMinutes % 60; // Get the remaining minutes



  return (
    <>
    {/* header */}
    <div className='flex p-4 bg-gradient-to-b from-black  absolute w-full justify-between'>
        <div>
        <Link to="/browse">    <img className='w-52' src={logo} alt="logo" /> </Link>
        </div>

    <div className=''>
       <button className='py-3 px-4 mx-2 my-1 bg-purple-800 text-white rounded-lg'> <Link to ="/browse">HomePage</Link> </button>  
    </div>
   
    </div>
    {/* header ended */}
    <div className='fixed bg-black -z-10 w-full h-full '>
      <img className='opacity-20 w-full h-full' src={IMG_CDN_URL+details.backdrop_path} alt="" />
    </div>

    <div className='flex md:p-40 pt-40 md:flex-row flex-col items-center'>
        <div className=''>
            <img className='h-56 md:h-96 rounded-md md:min-w-[300px] min-w-56' src={IMG_CDN_URL+details.poster_path} alt="" />
        </div>
        <div className='text-white md:pl-40 '>
         
          <h1 className='text-white text-4xl  md:text-7xl pb-8 font-extrabold'> {details.original_title}</h1> 
          <div className='flex pb-8 gap-4 md:flex-row flex-col'>
           <h1 className='p-2 rounded-3xl bg-violet-600'><span className='font-bold'>Runtime: </span>{hours} hours {minutes} minutes</h1>
           <h1 className='p-2 rounded-3xl bg-violet-600'><span className='font-bold'>Released on : </span> {details.release_date}</h1>
           <h1 className='p-2 rounded-3xl bg-violet-600'><span className='font-bold'>Genres:</span> {details.genres[0].name+"  ,  "+details.genres[1].name}</h1>
           
          </div>
          <h3 className='text-xl font-bold p-4 md:p-0 hidden md:block'>overview:</h3>
             <p className='text-xl hidden md:block'>{details.overview}</p>
             
        </div> 
       
    </div>
   
   <div className='text-white flex items-center gap-5 justify-center pr-4 md:absolute right-0 bottom-4'>
    <h1 className='font-bold text-2xl'>Watch Trailer :</h1>
    <Link to={"/watch/"+id}>
     <FcVideoProjector size={70} />
     </Link>
    </div>

    </>

  )
}
export default MovieDetail;
