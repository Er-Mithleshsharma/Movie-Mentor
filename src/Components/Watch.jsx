import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_OPTIONS } from '../utils/constants';

const Watch = () => {
  const {id} = useParams()
  const[videos,setVideos] = useState(null);
   
  const getTrailer = async()=>{
      const data = await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos",API_OPTIONS)
      const json = await data.json();
      setVideos(json?.results)
      
  }
  useEffect(()=>{
       getTrailer()
  },[])

  if(!videos) return;

  const trailer = videos.filter((obj)=> obj.type == "Trailer")
   if(trailer.length==0) return<>Trailer not found</>;
  const key = trailer[0].key


  return (
    <div className=''>
        <iframe
    className="w-full h-screen aspect-video"
    src={"https://www.youtube.com/embed/"+key+"?&autoplay=1"}
    title="YouTube video player"
    frameBorder="0" // Correct casing
    referrerPolicy="strict-origin-when-cross-origin" // Correct casing
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen // Correct casing
  ></iframe>
    </div>
  )
}

export default Watch