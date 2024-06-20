type TSelectBox = React.SelectHTMLAttributes<HTMLSelectElement> & {
  options: Array<{ value: string; content: string }>;
  selectProps: React.SelectHTMLAttributes<HTMLSelectElement>;
  addClasses?: string;
};
export default function SelectBox({
  options,
  selectProps,
  addClasses = "",
}: TSelectBox) {
  return (
    <div className={"relative " + (addClasses ? addClasses : "")}>
      <select
        className="focus:shadow-outline block w-full appearance-none rounded border bg-white px-3 py-2 pr-6 leading-tight shadow hover:border-gray-500 focus:outline-none"
        {...selectProps}
      >
        {options.map((option, idx) => {
          return (
            <option key={idx} value={option.value} defaultChecked={idx === 0}>
              {option.content}
            </option>
          );
        })}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 text-gray-700">
        <svg
          className="h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
}
