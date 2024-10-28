import { IoMdArrowForward } from "react-icons/io";

export default function Button({
  text,
  btnClass,
  yesNo = "true",
  onClick,
}: {
  text: string;
  btnClass: string;
  yesNo?: string;
  onClick?: () => void;
}) {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-4 py-[6px] rounded-[6px] shadow-md text-white ${btnClass}`}
      onClick={onClick}
    >
      {text}
      {yesNo === "true" ? <IoMdArrowForward /> : ""}
    </button>
  );
}
