import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies?.map((movie) => <Link to = {'/moviedetail/'+movie.id} key={movie.id} >
            <MovieCard posterPath={movie.poster_path} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default MovieList;