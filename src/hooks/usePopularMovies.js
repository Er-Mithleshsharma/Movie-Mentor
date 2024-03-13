import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux"
import {addPopularMovies} from '../utils/moviesSlice'

const usePopularMovies = () => {

const dispatch = useDispatch();

const setpopularMovies = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
    const json = await data.json();
   dispatch(addPopularMovies(json.results));

}

    useEffect(()=>{
     setpopularMovies()
    },[])
}
export default usePopularMovies;