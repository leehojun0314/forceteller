import React from "react";

export default function ErrorText({ children }: React.PropsWithChildren) {
  return <div className="text-red-400">{children}</div>;
}
