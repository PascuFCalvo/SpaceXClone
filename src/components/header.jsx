"use client";
import { useEffect, useState } from "react";

import Navbar from "./headerComponents/Navbar";
import NavbarBurguer from "./headerComponents/NavbarBurguer";

export default function Header() {
  // Ancho de pantalla

  const [ancho, setAncho] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setAncho(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="flex flex-row w-screen justify-center mt-8 mb-8">
      {ancho ? <Navbar /> : <NavbarBurguer />}
    </header>
  );
}
