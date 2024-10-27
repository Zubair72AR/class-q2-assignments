export default function TableSetup({
  classNa,
  name,
  no,
  code,
  value,
  color,
  bg = "bg-white",
  secondaryColor = "text-gray-400",
}: {
  classNa: string;
  name: string;
  no: string;
  code: string;
  value: string;
  color: string;
  bg?: string;
  secondaryColor?: string;
}) {
  return (
    <div
      className={`${classNa} setup text${color} ${bg} border-2 border${color}`}
    >
      <h3 className={`text-xs font-medium`}>{name}</h3>
      <h4 className={`text-sm font-medium ${secondaryColor}`}>{no}</h4>
      <h2 className={`text-2xl leading-5 font-bold`}>{code}</h2>
      <p className={`text-xs leading-6 font-medium ${secondaryColor}`}>
        {value}
      </p>
    </div>
  );
}
