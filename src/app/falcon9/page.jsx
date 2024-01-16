import Counter from "@/components/falcon9Components/counter";

import Falcon9Section1 from "./falcon9section1/page";
import Falcon9Section2 from "./falcon9section2/page";
import Falcon9Section3 from "./falcon9section3/page";
import Falcon9Section4 from "./falcon9section4/page";
import Falcon9Section5 from "./falcon9section5/page";

export default function Falcon9() {
  return (
    <>
      <Falcon9Section1 />
      <div className="flex justify-center text-center">
        <div>
          <Counter number={287} />
          <h1>TOTAL LAUNCHES</h1>
        </div>
        <div>
          <Counter number={245} />
          <h1>TOTAL LANDINGS</h1>
        </div>
        <div>
          <Counter number={219} />
          <h1>TOTAL REFLIGHTS</h1>
        </div>
      </div>
      <Falcon9Section2 />
      <Falcon9Section3 />
      <Falcon9Section4 />
      <Falcon9Section5 />
    </>
  );
}
