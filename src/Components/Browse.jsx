import { useSelector } from "react-redux";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer"
import usePopularMovies from "../hooks/usePopularMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
const Browse = () => {
   useNowPlayingMovies()
   usePopularMovies()
   useUpComingMovies()
   useTopRatedMovies()
  
  return (
    <div>
      <MainContainer/>
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