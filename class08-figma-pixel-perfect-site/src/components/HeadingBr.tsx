export default function HeadingBr({
  heading1,
  heading2,
  color = "text-red-500",
}: {
  heading1: string;
  heading2: string;
  color: string;
}) {
  return (
    <>
      <h1 className={`font-bold text-5xl ${color}`}>
        {heading1}
        <br />
        {heading2}
      </h1>
    </>
  );
}
