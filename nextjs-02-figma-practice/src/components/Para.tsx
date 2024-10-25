export default function Para({
  para,
  color = "text-white",
}: {
  para: string;
  color: string;
}) {
  return (
    <>
      <h1 className={`text-lg my-6 ${color}`}>{para}</h1>
    </>
  );
}
