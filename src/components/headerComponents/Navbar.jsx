import Image from "next/image";
import logo from "../../resources/logo.png";

export default function Navbar() {
  return (
    <nav
      class="w-100 flex items-center justify-between flex-wrap bg-transparent
    p-6"
    >
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <Image src={logo} alt="logo" width={200} />
      </div>
      <div class="block lg:hidden"></div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            FALCON 9
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            FALCON HEAVY
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            DRAGON
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            STARSHIP
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            HUMAN SPACEFLIGHT
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            RIDESHARE
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            STARSHIELD
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-20"
          >
            STARLINK
          </a>
        </div>
        <div>
          <a
            href="#"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-white hover:bg-white mt-4 lg:mt-0"
          >
            SHOP
          </a>
        </div>
      </div>
    </nav>
  );
}
