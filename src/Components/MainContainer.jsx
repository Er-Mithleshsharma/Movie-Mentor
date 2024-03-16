import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackGround'
const MainContainer = () => {
  const movies = useSelector((store)=>store.movies?.nowPlayingMovies)
  if(movies == null) return;
  const mainMovie = movies[0]
  const {original_title,overview,id} = mainMovie;
  return (
    <div className='md:pt-0 pt-[30%] bg-black'>
      <VideoTitle title ={original_title} overview={overview} />
      <VideoBackground movieId = {id}/>
    </div>
  )
}

export default MainContainer