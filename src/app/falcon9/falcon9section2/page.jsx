import Image from "next/image";
import falcon9 from "../../../resources/falcon9components.png";

export default function Falcon9Section2() {
  return (
    <>
      <div className=" flex justify-around items-center h-screen bg-gradient-to-b from-black to-gray-700 text-small mt-20">
        <p className="w-2/6">
          Falcon 9 is a reusable, two-stage rocket designed and manufactured by
          SpaceX for the reliable and safe transport of people and payloads into
          Earth orbit and beyond. Falcon 9 is the world’s first orbital class
          reusable rocket. Reusability allows SpaceX to refly the most expensive
          parts of the rocket, which in turn drives down the cost of space
          access.
        </p>
        <Image src={falcon9} alt="falcon9" width={180} className="opacity-50" />
      </div>
      <div className="h-10 bg-gradient-to-b from-gray-700 to-black "></div>
    </>
  );
}
