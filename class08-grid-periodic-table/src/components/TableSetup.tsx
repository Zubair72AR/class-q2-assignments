export default function TableSetup({
  classNa,
  name,
  no,
  code,
  value,
  color,
  bg,
  secondaryColor = "text-gray-500",
}: {
  classNa?: string;
  name?: string;
  no?: string;
  code?: string;
  value?: string;
  color?: string;
  bg?: string;
  secondaryColor?: string;
}) {
  return (
    <div
      className={`flex flex-col justify-center gap-[3px] items-center ${color} bg-white text-center border-2 rounded-[3px] pt-[2px] shadow-sm ${classNa} ${bg} overflow-hidden hover:text-white`}
    >
      <h3 className={`text-[.6rem] leading-[.7rem] font-medium`}>{name}</h3>
      <h4
        className={`text-[.6rem] leading-[.8rem] font-medium ${secondaryColor} hover:text-white`}
      >
        {no}
      </h4>
      <h2 className={`text-[1.1rem] leading-[.9rem] font-bold`}>{code}</h2>
      <p
        className={`text-[.6rem] leading-[.9rem] font-medium ${secondaryColor} hover:text-white`}
      >
        {value}
      </p>
    </div>
  );
}
