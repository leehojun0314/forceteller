export default function BigButton({
  value,
  additionalClasses,
  handleClick,
}: {
  value: string;
  additionalClasses?: string;
  handleClick?: () => void;
}) {
  return (
    <button
      className={"w-full rounded-md " + additionalClasses}
      onClick={handleClick}
    >
      {value}
    </button>
  );
}
