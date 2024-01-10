import Navbar from "./headerComponents/Navbar";

export default function Header({ label, navigate }) {
  return (
    <header className="flex flex-row w-screen justify-center mt-8 mb-8 z-10">
      <Navbar label={label} navigate={navigate} />
    </header>
  );
}
