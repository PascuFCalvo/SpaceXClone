import Navbar from "./headerComponents/Navbar";

export default function Footer() {
  return (
    <header className="flex flex-row w-screen justify-center mt-8 mb-8 z-10 ">
      <p className="mr-2 ml-2">SPACEX @ 2024</p>
      <a className="mr-2 ml-2 hover:text-gray-300 cursor-pointer">
        {" "}
        PRIVACY POLICY
      </a>
      <a className="mr-2 ml-2 hover:text-gray-300 cursor-pointer"> SUPLIERS</a>
    </header>
  );
}
