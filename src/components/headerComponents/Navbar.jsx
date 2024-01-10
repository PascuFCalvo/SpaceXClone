import Image from "next/image";
import logo from "../../resources/logo.png";
import Button from "@/components/button/button";

export default function Navbar({ label, navigate }) {
  return (
    <nav
      className=" fixed w-100 flex items-center justify-center  flex-wrap 
    p-6   "
    >
      <div className="flex items-center flex-shrink-0 text-white mr-6 ">
        <Image src={logo} alt="logo" width={200} />
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
        <div className="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 hover:border-b-2 "
          >
            FALCON 9
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 hover:border-b-2 "
          >
            FALCON HEAVY
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 hover:border-b-2 "
          >
            DRAGON
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 hover:border-b-2 "
          >
            STARSHIP
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 hover:border-b-2 "
          >
            HUMAN SPACEFLIGHT
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 hover:border-b-2 "
          >
            RIDESHARE
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 hover:border-b-2 "
          >
            STARSHIELD
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-20 hover:border-b-2 "
          >
            STARLINK
          </a>
        </div>
        <div className="fixed top-0 right-0 mr-6 mt-6">
          <Button label={label} navigate={navigate} />
        </div>
      </div>
    </nav>
  );
}
