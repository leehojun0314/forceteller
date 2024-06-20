import React, { useId } from "react";

export default function RadioInputBox({
  radio1Content,
  radio1Props,
  radio2Content,
  radio2Props,
}: {
  radio1Content: string;
  radio1Props: React.InputHTMLAttributes<HTMLInputElement>;
  radio2Content: string;
  radio2Props: React.InputHTMLAttributes<HTMLInputElement>;
}) {
  const radio1Id = useId();
  const radio2Id = useId();
  return (
    <div className="flex flex-row items-center justify-center gap-0">
      <input type="radio" className="hidden" id={radio1Id} {...radio1Props} />
      <label
        className={
          "border-grey-300 relative z-0 box-border w-1/2 items-center justify-center rounded-md rounded-r-none border border-r-0 bg-white p-3 text-center hover:cursor-pointer"
        }
        htmlFor={radio1Id}
      >
        <span>{radio1Content}</span>
      </label>
      <input type="radio" className="hidden" id={radio2Id} {...radio2Props} />
      <label
        className={
          "border-grey-300 relative z-0 box-border w-1/2 items-center justify-center rounded-md rounded-l-none border border-l-0 bg-white p-3 text-center hover:cursor-pointer"
        }
        htmlFor={radio2Id}
      >
        <span>{radio2Content}</span>
      </label>
    </div>
  );
}
