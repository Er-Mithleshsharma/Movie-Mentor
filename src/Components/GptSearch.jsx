import React from 'react'
import { BG_URL, bg } from '../utils/constants'
import GptSearchBar from './GptSearchBar'
import GptmovieSuggestion from './GptMovieSuggestion'
const GptSearch = () => {
  return (
    <div>
    <div className='absolute -z-10'>
      <img src={BG_URL} alt="" />
    </div>
    <GptSearchBar/>
    <GptmovieSuggestion/>
    </div>
  )
}

export default GptSearch