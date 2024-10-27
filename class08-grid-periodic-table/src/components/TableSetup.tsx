export default function TableSetup({
  classNa,
  name,
  no,
  code,
  value,
  color,
  bg,
  secondaryColor = "text-gray-400",
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
      className={`flex flex-col justify-center items-center ${color} bg-white text-center border-2 rounded-[3px] pt-[2px] shadow-sm ${classNa} ${bg} overflow-hidden hover:text-white`}
    >
      <h3 className={`text-[.55rem] leading-[.7rem] h-[1.4rem] font-medium`}>
        {name}
      </h3>
      <h4
        className={`text-[.6rem] leading-[.8rem] font-medium ${secondaryColor} hover:text-white`}
      >
        {no}
      </h4>
      <h2 className={`text-[1rem] leading-[.9rem] font-bold`}>{code}</h2>
      <p
        className={`text-[.55rem] leading-[.9rem] font-medium ${secondaryColor} hover:text-white`}
      >
        {value}
      </p>
    </div>
  );
}