export default function Para({
  paraText,
  paraClass = "text-white",
}: {
  paraText: string;
  paraClass: string;
}) {
  return (
    <>
      <h1 className={`text-lg font-normal ${paraClass}`}>{paraText}</h1>
    </>
  );
}
