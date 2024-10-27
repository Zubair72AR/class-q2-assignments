export default function TableNumSetup({
  classNa,
  code,
  name,
  color,
  bg = "bg-white",
}: {
  classNa?: string;
  code?: string;
  name?: string;
  color?: string;
  bg?: string;
}) {
  return (
    <div
      className={`${classNa} flex flex-col items-center ${color} ${bg} text-center border-[1px] rounded-[3px] p-[2px] pt-2 shadow-md capitalize`}
    >
      <h2 className={`text-[.8rem] leading-5 font-medium underline pb-2`}>
        {code}
      </h2>
      <h3 className={`text-[.6rem] leading-[.8rem] h-[1.4rem] font-medium`}>
        {name}
      </h3>
    </div>
  );
}
