import { Image } from "@nextui-org/react";

export default function LaunchCardComponent({
  id,
  success,
  name,
  img,
  details,
  wikipedia,
}) {
  return (
    <div className="min-w-sm max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a className="w-100 mx-auto flex justify-center mt-4" href={wikipedia}>
        <Image src={img} alt="" />
      </a>
      <div className="p-5">
        <a href={wikipedia}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
            <p className="text-sm font-light">
              read full article <span className="font-bold">here</span>
            </p>
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {id}
        </p>
        <p>
          {success ? (
            <p className="bg-green-200 text-green-800 w-20 rounded-sm mb-2 p-1">
              {"Success"}
            </p>
          ) : (
            <p className="bg-red-200 text-red-800 w-16 rounded-sm mb-2 p-1">
              {"Failure"}
            </p>
          )}
        </p>
        <p className="w-full inline-flex  flex-col px-3 py-2 text-sm font-medium text-white bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-h-48 overflow-auto">
          {details ? details : "No details of this launch"}
        </p>
      </div>
    </div>
  );
}
