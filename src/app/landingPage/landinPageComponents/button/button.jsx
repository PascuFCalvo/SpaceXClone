import Link from "next/link";
import "./button.css";

export default function Button({ watch, navigate }) {
  return (
    <>
      {navigate && (
        <Link href={navigate}>
          <button className="animated_button">{watch}</button>
        </Link>
      )}
    </>
  );
}
