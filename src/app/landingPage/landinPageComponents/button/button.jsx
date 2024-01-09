import "./button.css";

export default function Button({ watch }) {
  return (
    <>
      <button class="animated_button">{watch}</button>
    </>
  );
}
