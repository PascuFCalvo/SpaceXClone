import Image from "next/image";
import launch from "../../resources/launch1.jpg";

export default function LandinPageSection2() {
  return (
   <div className="bg-cover bg-center h-screen flex items-center relative">
   <Image
     src={launch}
     alt="Starlink Image"
     layout="fill"
     objectFit="cover"
   />
   </div>
  );
}
