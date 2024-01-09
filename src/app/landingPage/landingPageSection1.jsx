import Image from "next/image";
import starlink from "../../resources/starlink.jpg";

export default function LandinPageSection1() {
  return <Image src={starlink} alt="starlink" className="w-full" />;
}
