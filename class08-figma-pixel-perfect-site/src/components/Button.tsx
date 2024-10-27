import { IoMdArrowForward } from "react-icons/io";

export default function Button({
  text,
  color = "bg-red-500",
  mTop = "mt-0",
  mBottom = "mb-0",
  yesNo = "true",
  onClick,
}: {
  text: string;
  color?: string;
  mTop?: string;
  mBottom?: string;
  yesNo?: string;
  onClick: () => void;
}) {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-4 py-[6px] rounded-[6px] shadow-md text-white ${color} ${mTop} ${mBottom}`}
      onClick={onClick}
    >
      {text}
      {yesNo === "true" ? <IoMdArrowForward /> : ""}
    </button>
  );
}
