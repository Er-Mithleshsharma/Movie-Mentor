import { FaPlay } from "react-icons/fa";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[14%] px:6 md:px-24 absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-2xl md:text-6xl font-bold py-3 md:py-0 mx-8 md:mx-0  ">{title}</h1>
      <p className="py-6 text-lg w-2/4 hidden md:inline-block ">{overview}</p>
      <div className="flex mx-8 md:mx-0">
        <button className=" bg-white text-black md:p-4 px-4 py-2 md:px-12 text-xl  rounded-lg hover:bg-opacity-80 flex items-center gap-2">
        <FaPlay /> Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg hidden md:inline-block">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;