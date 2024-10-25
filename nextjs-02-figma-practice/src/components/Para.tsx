export default function Para({
  para,
  color = "text-white",
}: {
  para: string;
  color: string;
}) {
  return (
    <>
      <h1 className={`font-bold text-5xl ${color}`}>{para}</h1>
    </>
  );
}
