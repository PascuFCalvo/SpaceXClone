import StarlinkMission from "@/components/landinPageComponents/starlinkMission";
import Image from "next/image";
import merlin from "../../../resources/merlin.png";

export default function Falcon9Section4() {
  return (
    <>
      <div className="video-wrapper h-screen flex w-full relative">
        <iframe
          className="video w-screen mt-0"
          src="https://www.youtube.com/embed/Z4TXCZG_NEY"
          allowFullScreen
          autoplay="true"
          loop="true"
          controls="false"
        />
        <div className="absolute bottom-20 ml-20">
          <StarlinkMission
            launch={"VIDEO"}
            mission={"FALCON 9 LAUNCH"}
            textButton={"WATCH"}
            navigate={"https://www.youtube.com/watch?v=8A2nJd9Urk8"}
          />
        </div>
      </div>
      <Image src={merlin} alt="overview" layout="responsive" />
    </>
  );
}
