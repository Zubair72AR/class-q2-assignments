import { FaArrowRightLong } from "react-icons/fa6";

export default function Button({
  text,
  color = "bg-red-500",
  mTop = "mt-0",
  mBottom = "mb-0",
  onClick,
}: {
  text: string;
  color?: string;
  mTop?: string;
  mBottom?: string;
  onClick: () => void;
}) {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-4 py-2 rounded-sm shadow-md text-white font-medium ${color} ${mTop} ${mBottom}`}
      onClick={onClick}
    >
      {text}
      <FaArrowRightLong />
    </button>
  );
}
