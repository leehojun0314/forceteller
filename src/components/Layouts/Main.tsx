import React from "react";

export default function Main({
  children,
  additionalClasses = "",
}: React.PropsWithChildren<{ additionalClasses?: string }>) {
  return (
    <main
      className={"bg-background " + additionalClasses}
      style={{
        minHeight: "calc(100vh - 56px)",
      }}
    >
      {children}
    </main>
  );
}
