import Button from "../button/button";

export default function StarlinkMission({
  launch,
  mission,
  textButton,
  navigate,
}) {
  return (
    <div className="mx-auto sm:ml-8 md:ml-12 lg:ml-16 xl:ml-20">
      <p className="text-2xl font-normal mt-2">{launch}</p>
      <h1 className="text-5xl font-extrabold mt-2">{mission}</h1>
      <Button label={textButton} navigate={navigate} />
    </div>
  );
}
