export default function SubmitButton({
  value,
  disabled = false,
  handleClick,
}: {
  value: string;
  disabled?: boolean;
  handleClick?: () => void;
}) {
  return (
    <input
      type="submit"
      className={
        "bottom-4 mx-auto w-full cursor-pointer rounded-2xl py-4 text-center text-lg font-bold " +
        (disabled
          ? "bg-disabled text-disabledText"
          : "bg-primary cursor-pointer")
      }
      style={{ boxShadow: "1px 1px 20px 2px" }}
      value={value}
      onClick={handleClick}
    />
  );
}
