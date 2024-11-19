import { useSelector } from "react-redux";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer"
import usePopularMovies from "../hooks/usePopularMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import SecondaryContainer from './SecondaryContainer'
import GptSearch from "./GptSearch";
import Footer from "./Footer";
const Browse = () => {
   useNowPlayingMovies()
   usePopularMovies()
   useUpComingMovies()
   useTopRatedMovies()
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);
  return (
    <div>
      {
        showGptSearch? (
          <>
         
          <GptSearch/> 
          <Footer/>
          </>
        )
         :
         <> 
         <MainContainer/>
       <SecondaryContainer/>
      <Footer/>
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