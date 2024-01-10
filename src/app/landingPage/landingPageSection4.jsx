import React from "react";
import "./videoStyles.css";
import StarlinkMission from "./landinPageComponents/starlinkMission";

export default function LandinPageSection4() {
  return (
    <div className="video-wrapper h-screen flex w-full  relative ">
      <video
        className="video"
        src={require("../../resources/video.mp4")}
        autoPlay
        muted
        loop
      />
      <div className="absolute bottom-20 ml-20">
        <StarlinkMission
          launch={"RECENT LAUNCH"}
          mission={"STARSHIP'S SECOND FLIGHT TEST"}
          textButton={"LEARN MORE"}
          navigate={"https://www.youtube.com/watch?v=8A2nJd9Urk8"}
        />
      </div>
    </div>
  );
}
