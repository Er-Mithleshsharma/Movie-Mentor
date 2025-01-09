import React from 'react'
import { BG_URL, bg } from '../utils/constants'
import GptSearchBar from './GptSearchBar'
import GptmovieSuggestion from './GptMovieSuggestion'
const GptSearch = () => {
  return (
    <div className='h-screen'>
    <div className='fixed -z-10 '>
      <img className='h-screen md:h-full object-cover' src={BG_URL} alt="" />
    </div>
    <div className=''>
    
    <GptSearchBar/>
    <GptmovieSuggestion/>
    </div>
    </div>
  )
}

export default GptSearch