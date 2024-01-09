import React from "react";
import "./videoStyles.css";
import StarlinkMission from "./landinPageComponents/starlinkMission";

export default function LandinPageSection4() {
  return (
    <div className="video-wrapper w-full relative ">
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
        />
      </div>
    </div>
  );
}
