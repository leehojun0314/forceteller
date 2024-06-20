export default function TextInputBox({
  Icon,
  addClassName,
  inputProps,
}: {
  Icon?: React.ComponentType;
  addClassName?: string;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
}) {
  return (
    <div className={Icon ? "relative" : ""}>
      <input
        {...inputProps}
        className={
          "focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none" +
          (addClassName ? addClassName : "") +
          (Icon ? " pl-8" : "")
        }
      />
      {Icon ? (
        <div className="absolute left-1 top-2">
          <Icon />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
