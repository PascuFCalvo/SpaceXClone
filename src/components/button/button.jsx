import Link from "next/link";
import "./button.css";

export default function Button({ label, navigate }) {
  return (
    <>
      {
      navigate && (
        <Link href={navigate}>
          <button className="animated_button">{label}</button>
        </Link>
      )}
    </>
  );
}
