import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import lang from '../utils/languageConstants';
import model from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResults } from '../utils/gptSlice';

const GptSearchBar = () => {
  const [loading, setLoading] = useState(false);
  const value = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // Function to fetch movie data from TMDB
  const searchMovieTMBD = async (movie) => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          movie
        )}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      const json = await data.json();
      return json.results;
    } catch (error) {
      console.error(`Error fetching data for movie: ${movie}`, error);
      return [];
    }
  };

  // Function to handle GPT movie recommendations and TMDB fetch
  const handleGptSearchClick = async () => {
    if (!searchText.current.value.trim()) return; // Avoid empty input
    setLoading(true);
    try {
      // Construct GPT query
      const gptQuery = `Act as a movie Recommendation system and suggest some movies for the query "${searchText.current.value}". Only give me the names of 5 movies, comma-separated like the example: Gadar, Sholay, Don, Dhamaal, Koi Mil Gaya.`;

      const result = await model.generateContent(gptQuery);
      const response = await result.response;
      const text = await response.text();
      console.log(text);

      // Extract movie names and fetch TMDB results
      const GptMovies = text.split(',').map((movie) => movie.trim());
      const tmdbResults = await Promise.all(
        GptMovies.map((movie) => searchMovieTMBD(movie))
      );

      dispatch(
        addGptMovieResults({
          movieNames: GptMovies,
          movieResults: tmdbResults,
        })
      );
    } catch (error) {
      console.error('Error during GPT or TMDB API calls:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      {loading ? (
        // Loader Animation
        <div className="flex items-center justify-center">
          <div className="loader border-t-4 border-b-4 border-red-700 rounded-full w-16 h-16 animate-spin"></div>
        </div>
      ) : (
        // Search Form
        <form
          className="bg-black w-full md:w-1/2 grid grid-cols-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            className="p-4 m-4 col-span-9"
            placeholder={lang[value].gptSearchPlaceholder}
          ></input>
          <button
            className="m-4 py-2 px-4 bg-red-700 col-span-3 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {lang[value].search}
          </button>
        </form>
      )}
    </div>
  );
};

export default GptSearchBar;
