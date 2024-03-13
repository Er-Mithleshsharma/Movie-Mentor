import { useSelector } from "react-redux";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer"
const Browse = () => {
  const getNowPlayingMovies =  useNowPlayingMovies()
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