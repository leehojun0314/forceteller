export default function SubmitButton({
  value,
  disabled = false,
  handleClick,
  additionalClasses = "",
}: {
  value: string;
  disabled?: boolean;
  handleClick?: () => void;
  additionalClasses?: string;
}) {
  return (
    <input
      type="submit"
      className={
        additionalClasses +
        " bottom-4 mx-auto w-full cursor-pointer rounded-2xl py-4 text-center text-lg font-bold" +
        (disabled
          ? " bg-disabled text-disabledText"
          : " bg-primary cursor-pointer")
      }
      style={{ boxShadow: disabled ? "" : "1px 1px 20px 2px" }}
      value={value}
      onClick={handleClick}
    />
  );
}
