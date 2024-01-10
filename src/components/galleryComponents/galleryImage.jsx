/* eslint-disable @next/next/no-img-element */
export default function GalleryImage({ image }) {
  return (
    <div className=" max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full height-100"
        src={image}
        alt="Sunset in the mountains"
      />
    </div>
  );
}
