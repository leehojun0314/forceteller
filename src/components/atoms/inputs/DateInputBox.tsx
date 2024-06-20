import { formatDateString } from "@/utils/functions";
import { useCallback, useState } from "react";

export default function DateInputBox({
  inputProps = {},
  addClasses = "",
}: {
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  addClasses?: string;
}) {
  const [value, setValue] = useState("");
  const handleChange = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = evt.target;
      // 입력 값에서 숫자가 아닌 문자는 제거하고 상태 업데이트
      const formattedDate = formatDateString(value);
      setValue(formattedDate);
    },
    [],
  );
  return (
    <input
      {...inputProps}
      className={
        "focus:shadow-outline appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none " +
        (addClasses ? addClasses : "")
      }
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="YYYY.MM.DD"
      maxLength={10} // YYYY.MM.DD는 총 10자
      pattern="\d{4}\.\d{2}\.\d{2}"
    />
  );
}
