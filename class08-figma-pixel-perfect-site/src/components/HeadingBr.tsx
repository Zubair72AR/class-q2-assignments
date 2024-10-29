export default function HeadingBr({
  headText,
  headClass = "text-red-500",
}: {
  headText: string;
  headClass: string;
}) {
  return (
    <>
      <h1 className={`font-bold text-[64px] leading-tight ${headClass}`}>
        {headText}
      </h1>
    </>
  );
}
