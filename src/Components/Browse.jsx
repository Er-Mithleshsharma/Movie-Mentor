import { useSelector } from "react-redux";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer"
import usePopularMovies from "../hooks/usePopularMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import SecondaryContainer from './SecondaryContainer'
import GptSearch from "./GptSearch";
const Browse = () => {
   useNowPlayingMovies()
   usePopularMovies()
   useUpComingMovies()
   useTopRatedMovies()
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);
  return (
    <div>
      {
        showGptSearch? 
        <GptSearch/> :
         <> 
         <MainContainer/>
       <SecondaryContainer/>
         </>
      }
     
     
               {/*
               maincontainer
                -video bg 
                - video title
               secondarycontainer
                  movie list *n
                  card *n
               
                */}
    </div>
  );
};
export default Browse;