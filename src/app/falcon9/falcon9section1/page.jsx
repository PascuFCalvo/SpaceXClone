"use client";

import Image from "next/image";
import falcon9 from "../../../resources/falcon9.jpg";
import Header from "@/components/header";
import { useEffect, useState } from "react";

export default function Falcon9Section1() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fakeAsyncLoad = () => {
      setTimeout(() => {
        setIsLoaded(true);
      }, 0);
    };

    fakeAsyncLoad();
  }, []);
  return (
    <>
      <div className="bg-cover bg-center h-screen flex items-center justify-center relative">
        <div
          className={`flex-column justify-center z-10 transform ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          } transition-transform duration-1000`}
        >
          <h1
            className="text-7xl font-bold mb-8
        "
          >
            FALCON 9
          </h1>
          <p
            className="flex justify-center z-10 text-sm font-light
        "
          >
            FIRST ORBITAL CLASS ROCKET CAPABLE OF REFLIGHT
          </p>
        </div>
        <Image
          src={falcon9}
          alt="Starlink Image"
          layout="fill"
          objectFit="cover"
          className={`transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="absolute inset-0 z-10">
          <Header label={"API"} navigate={"/apiSection/mainApiPage"} />
          <div className="text-white text-4xl mx-auto"></div>
        </div>
      </div>
    </>
  );
}
