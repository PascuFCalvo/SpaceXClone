"use client";

import GalleryImage from "@/components/galleryComponents/galleryImage";
import Header from "@/components/header";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Gallery() {
  const API_URL = "https://api.spacexdata.com/v5/launches";

  const [launches, setLaunches] = useState([]);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setLaunches(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(launches);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [launches]);

  useEffect(() => {
    const newGallery = [];
    launches.map((launch) => {
      if (launch.links.flickr.original.length > 0) {
        newGallery.push(launch.links.flickr.original[0]);
      }
      setGallery(newGallery);
    });
  }, [launches]);

  return (
    <>
      <Header label={"BACK"} navigate={"../"} />
      {gallery && (
        <div className="w-full flex items-center justify-center">
          <section className="max-w-6xl  grid-flow grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 pt-20">
            {gallery.map((image) => (
              <div key={image} className="display-grid">
                <GalleryImage image={image} />
              </div>
            ))}
          </section>
        </div>
      )}
    </>
  );
}
