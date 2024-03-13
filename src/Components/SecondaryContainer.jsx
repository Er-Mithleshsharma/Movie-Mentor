import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-52 pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.popularMovies} />
          <MovieList title={"Trending"} movies={movies.topRatedMovies} />
          <MovieList title={"Popular"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upComingMovies}
          />
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;