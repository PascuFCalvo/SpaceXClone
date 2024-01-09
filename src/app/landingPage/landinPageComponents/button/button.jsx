import "./button.css";

export default function Button({ watch }) {
  return (
    <>
      <button className="animated_button">{watch}</button>
    </>
  );
}
