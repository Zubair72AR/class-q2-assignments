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
      className={`flex flex-col items-center ${color}  text-center border-2rounded-[3px] p-[2px] pt-2 shadow-sm capitalize overflow-hidden ${classNa}`}
    >
      <h2 className={`text-[.8rem] leading-4 font-medium underline pb-2`}>
        {code}
      </h2>
      <h3 className={`text-[.6rem] leading-[.8rem] font-medium`}>{name}</h3>
    </div>
  );
}
