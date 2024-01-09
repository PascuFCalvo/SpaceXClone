import Image from "next/image";
import launch2 from "../../resources/launch2.jpg";

export default function LandinPageSection3() {
  return (
    <div className="bg-cover bg-center h-screen flex items-center relative">
      <Image
        src={launch2}
        alt="Starlink Image"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}
