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
        " bottom-4 mx-auto w-full cursor-pointer rounded-md py-4 text-center text-lg font-bold text-white" +
        (disabled
          ? " bg-disabled text-disabledText"
          : " bg-primary cursor-pointer text-white")
      }
      // style={{ boxShadow: disabled ? "" : "1px 1px 20px 2px" }}
      value={value}
      onClick={handleClick}
    />
  );
}
