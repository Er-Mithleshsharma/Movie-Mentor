import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
  const value = useSelector((store)=>store.config.lang)
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className=' bg-black w-1/2 grid grid-cols-12'>
            <input type='text' 
            className='p-4 m-4 col-span-9' placeholder={lang[value].gptSearchPlaceholder}></input>
            <button className='py-2 px-4 bg-red-700 col-span-3 text-white rounded-lg'>{lang[value].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar