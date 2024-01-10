import Image from "next/image";
import starlink from "../../resources/starlink.jpg";
import Header from "@/components/header";
import StarlinkMission from "./landinPageComponents/starlinkMission";

export default function LandinPageSection1() {
  return (
    <div className="bg-cover bg-center h-screen flex items-center relative">
      <Image
        src={starlink}
        alt="Starlink Image"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 z-10">
        <Header label={"API"} navigate={"/apiSection/mainApiPage"} />
        <div className="text-white text-4xl mx-auto"></div>
      </div>
      <div className="absolute bottom-20 ml-20">
        <StarlinkMission
          launch={"UPCOMING LAUNCH"}
          mission={"STARLINK MISSION"}
          textButton={"WATCH"}
          navigate={"https://www.youtube.com/watch?v=8A2nJd9Urk8"}
        />
      </div>
    </div>
  );
}
