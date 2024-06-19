import React from "react";

export default function Main({
  children,
  additionalClasses = "",
}: React.PropsWithChildren<{ additionalClasses?: string }>) {
  return (
    <main
      className={additionalClasses}
      style={{
        height: "calc(100vh - 56px)",
      }}
    >
      {children}
    </main>
  );
}
