import { IoMdArrowForward } from "react-icons/io";

export default function Button({
  text,
  btnClass,
  onClick,
}: {
  text: string;
  btnClass: string;
  onClick?: () => void;
}) {
  return (
    <button className={`button ${btnClass}`} onClick={onClick}>
      <p>{text}</p>
      <IoMdArrowForward />
    </button>
  );
}
