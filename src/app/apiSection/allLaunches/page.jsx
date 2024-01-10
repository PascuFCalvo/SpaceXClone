/* eslint-disable @next/next/no-img-element */
"use client";

import Header from "@/components/header";
import lupa from "../../../../public/lupa.svg";
import React, { useEffect, useState } from "react";

export default function AllLaunches() {
  const API_URL = "https://api.spacexdata.com/v5/launches";
  const [launches, setLaunches] = useState([]);
  const [tablaLaunches, setTablaLaunches] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setLaunches(data);
        setTablaLaunches(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const handleSearch = (e) => {
    setBusqueda(e.target.value);
    filter(e.target.value);
    console.log("Busqueda", e.target.value);
  };

  const filter = (searchTerm) => {
    var searchResults = tablaLaunches.filter((launch) => {
      if (launch.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return launch;
      }
    });
    setLaunches(searchResults);
  };

  return (
    <>
      <Header label="BACK" navigate="../" />
      <div className="relative overflow-x-auto shadow-md  mt-40">
        <form className="w-full flex justify-center">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400 dark:text-gray-400 mb-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <div>
              <input
                type="search"
                id="default-search"
                class="block p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-6"
                value={busqueda}
                placeholder="Search by mission name"
                onChange={handleSearch}
                required
              />
            </div>
          </div>
        </form>

        <table className=" w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Mission Name
              </th>
              <th scope="col" className="px-6 py-3">
                Badge
              </th>
              <th scope="col" className="px-6 py-3">
                Launch Date
              </th>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Rocket
              </th>
              <th scope="col" className="px-6 py-3">
                Success
              </th>
              <th scope="col" className="px-6 py-3">
                Failure reason
              </th>
            </tr>
          </thead>
          <tbody>
            {launches.map((launch) => (
              <tr
                key={launch.id}
                className="bg-white border-b dark:bg-black dark:border-gray-700"
              >
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {launch.name}
                </td>
                <td className="px-6 py-4">
                  <img
                    src={launch.links.patch.small}
                    alt={launch.name}
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="px-6 py-4">{launch.date_utc}</td>
                <td className="px-6 py-4">{launch.id}</td>
                <td className="px-6 py-4">{launch.rocket}</td>
                <td className="px-6 py-4">
                  {launch.success ? (
                    <p className="text-green-800">Success</p>
                  ) : (
                    <p className="text-red-800">Failure</p>
                  )}
                </td>
                <td className="px-6 py-4">
                  {launch.failures &&
                    launch.failures.length > 0 &&
                    launch.failures[0].reason}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
