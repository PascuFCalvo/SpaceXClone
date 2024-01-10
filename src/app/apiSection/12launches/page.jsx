"use client";

import LaunchCardComponent from "@/components/apiSectionComponents/LaunchCardComponent";
import Header from "@/components/header";
import { useEffect, useState } from "react";

export default function Launches() {
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
    console.log(last12launches);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [launches]);

  return (
    <>
      <div>
      <Header label={"BACK"} navigate={"../"} />
      </div>
      <section className=" flex justify-center w-30 pt-20 pl-10 pr-10">
        <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
          {last12launches.map((launch) => (
            <LaunchCardComponent
              key={launch?.id}
              id={launch?.id}
              success={launch?.success}
              name={launch?.name}
              details={launch?.details}
              img={launch?.links?.patch?.small}
              wikipedia={launch?.links?.wikipedia}
              article={launch?.links?.presskit}
            />
          ))}
        </div>
      </section>
    </>
  );
}
