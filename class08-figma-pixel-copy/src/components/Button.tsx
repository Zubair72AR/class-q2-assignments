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
    <button
      className={`flex justify-center items-center gap-2 px-5 py-[10px] rounded-lg shadow-md text-white bg-[#4F9CF9] ${btnClass} hover:bg-[#A7CEFC] hover:text-[#043873]`}
      onClick={onClick}
    >
      <p>{text}</p>
      <IoMdArrowForward />
    </button>
  );
}
