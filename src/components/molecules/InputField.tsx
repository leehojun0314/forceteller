import React, { useId } from "react";

export default function InputField({
  title,
  SubTitle,
  children,
  additionalClasses = "",
}: React.PropsWithChildren<{
  title: string;
  additionalClasses?: string;
  SubTitle?: React.ReactNode;
}>) {
  const id = useId();
  return (
    <div className={additionalClasses}>
      <div
        className={
          "flex flex-row" + (SubTitle ? " mb-2 items-end justify-between" : "")
        }
      >
        <label htmlFor={id}>{title}</label>
        {SubTitle ? SubTitle : ""}
      </div>
      {children}
    </div>
  );
}
