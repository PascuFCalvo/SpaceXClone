/* eslint-disable @next/next/no-img-element */
"use client";

import Header from "@/components/header";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function AllLaunches() {
  const API_URL = "https://api.spacexdata.com/v5/launches";
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setLaunches(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Header label="BACK" navigate="../" />
      <div className="relative overflow-x-auto shadow-md  mt-40">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
