import Image from "next/image";
import launch2 from "../../resources/launch2.jpg";
import StarlinkMission from "../../components/landinPageComponents/starlinkMission";

export default function LandinPageSection3() {
  return (
    <div className="bg-cover bg-center h-screen flex items-center relative">
      <Image
        src={launch2}
        alt="Starlink Image"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute bottom-20 ml-20">
        <StarlinkMission
          launch={"RECENT LAUNCH"}
          mission={"OVZON 3 MISSION"}
          textButton={"REWATCH"}
          navigate={"https://www.youtube.com/watch?v=8A2nJd9Urk8"}
        />
      </div>
    </div>
  );
}
