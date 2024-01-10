import Button from "@/components/button/button";
import Header from "../../../components/header";

export default function MainApiPage() {
  return (
    <>
      <Header label={"BACK"} navigate={"../"} />
      <section className=" flex flex-col justify-center items-center  pt-20 pl-40 pr-40 w-full">
        <p className="max-w-5xl">
          Welcome to the SpaceX API 🚀 Explore the wonders of SpaceX with our
          powerful API! 🌌 Whether you&apos;re a space enthusiast, developer, or
          researcher, our API offers a gateway to a wealth of information about
          SpaceX missions, rockets, launches, and more. Dive into the vast
          universe of space exploration and access real-time and historical data
          with ease.
        </p>
        <div className="buttons flex">
          <div className="ml-4">
            <Button label={"LAST LAUNCHES"} navigate={"12launches"} />
          </div>

          <div className="ml-4">
            <Button label={"ALL LAUNCHES"} navigate={"allLaunches"} />
          </div>

          <div className="ml-4">
            <Button label={"GALLERY"} navigate={"gallery"} />
          </div>
        </div>
      </section>
    </>
  );
}
