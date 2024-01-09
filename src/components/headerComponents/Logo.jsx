import logo from "../../resources/logo.png";
import Image from "next/image";

export default function Logo({ width }) {
  return <Image src={logo} alt="logo" width={width} />;
}
