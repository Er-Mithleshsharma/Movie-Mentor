import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
<div className="w-full ">
  <iframe
    className="w-full aspect-video"
    src={
      "https://www.youtube.com/embed/" +
      trailerVideo?.key +
      "?&autoplay=1&mute=1&loop=1"
    }
    title="YouTube video player"
    frameBorder="0" // Correct casing
    referrerPolicy="strict-origin-when-cross-origin" // Correct casing
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen // Correct casing
  ></iframe>
</div>


  );
};
export default VideoBackground;