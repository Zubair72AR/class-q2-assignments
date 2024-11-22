export default function Para({
  paraText,
  paraClass = "paragraph",
}: {
  paraText: string;
  paraClass: string;
}) {
  return (
    <>
      <h1 className={`${paraClass}`}>{paraText}</h1>
    </>
  );
}
