import ReactPlayer from "react-player";

const VIDEO_PATH =
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
const coverUrl = "https://i.pravatar.cc/4784";

function PlayerComponent() {
  return (
    <div className=" flex w-[100%] items-center justify-center">
      <ReactPlayer
        className="videoFrame"
        url={VIDEO_PATH}
        light={coverUrl}
        playing
        controls
      />
    </div>
  );
}
export default PlayerComponent;
