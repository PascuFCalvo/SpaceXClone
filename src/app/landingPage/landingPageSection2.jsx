import Image from "next/image";
import launch from "../../resources/launch1.jpg";
import StarlinkMission from "./landinPageComponents/starlinkMission";

export default function LandinPageSection2() {
  return (
    <div className="bg-cover bg-center h-screen flex items-center relative">
      <Image
        src={launch}
        alt="Starlink Image"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute bottom-20 ml-20">
        <StarlinkMission
          launch={"RECENT LAUNCH"}
          mission={"STARLINK MISSION"}
          textButton={"WATCH"}
          navigate={"https://www.youtube.com/watch?v=8A2nJd9Urk8"}
        />
      </div>
    </div>
  );
}
