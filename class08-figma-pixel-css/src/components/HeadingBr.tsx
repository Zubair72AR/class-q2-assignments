export default function HeadingBr({
  headText,
  headClass = "heading",
}: {
  headText: string;
  headClass: string;
}) {
  return (
    <>
      <h1 className={headClass}>{headText}</h1>
    </>
  );
}
