import { FaPlay } from "react-icons/fa";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[18%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-2/4">{overview}</p>
      <div className="flex">
        <button className=" bg-white text-black p-4 px-12 text-xl  rounded-lg hover:bg-opacity-80 flex items-center gap-2">
        <FaPlay /> Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;