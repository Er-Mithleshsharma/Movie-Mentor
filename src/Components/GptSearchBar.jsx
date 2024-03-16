import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai'
import { API_OPTIONS } from '../utils/constants'
import { addGptMovieResults } from '../utils/gptSlice'

const GptSearchBar = () => {
  
  const value = useSelector((store)=>store.config.lang)
  const searchText =useRef(null)
  const dispatch = useDispatch();

  const searchMovieTMBD = async(movie) =>{
    const data =await  fetch('https://api.themoviedb.org/3/search/movie?query=' + movie +'&include_adult=false&language=en-US&page=1', API_OPTIONS)
    const json = await data.json()
    return json.results;  
  }

    const handleGptSearchClick = async()=>{
          // making call to openai 
          const gptQuery = "Act as a movie Recomendation system and suggest some movies for the  query "+ searchText.current.value +"only give me name of 5 movies , comma separated like the example given ahead. Example Result : Gadar , sholay , don , dhammal , koi mil gaya "
          const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
          });
          const GptMovies = gptResults.choices?.[0]?.message?.content.split(",");
                
          //
         const promiceArray =  GptMovies.map((movie)=>searchMovieTMBD(movie))
         const tmdbResults = await Promise.all(promiceArray)
         dispatch(addGptMovieResults({movieNames:GptMovies , movieResults:tmdbResults}))

    }
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className=' bg-black w-1/2 grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} type='text' 
            className='p-4 m-4 col-span-9' placeholder={lang[value].gptSearchPlaceholder}></input>
            <button className='py-2 px-4 bg-red-700 col-span-3 text-white rounded-lg' onClick={handleGptSearchClick}>{lang[value].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar