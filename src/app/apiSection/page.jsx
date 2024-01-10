"use client";

import LaunchCardComponent from "@/components/apiSectionComponents/LaunchCardComponent";
import Header from "@/components/header";
import { useEffect, useState } from "react";

export default function MyComponent() {
  const API_URL = "https://api.spacexdata.com/v5/launches";

  const [launches, setLaunches] = useState([]);
  const [last12launches, setLast12Launches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setLaunches(data);
        setLast12Launches(data.slice(0, 12));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("last 12", last12launches);
  }, [launches]);

  return (
    <>
      <div>
        <Header />
      </div>
      <LaunchCardComponent />
    </>
  );
}
