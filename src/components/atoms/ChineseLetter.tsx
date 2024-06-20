import { Paper } from "@mui/material";
import React from "react";

export default function ChineseLetter({
  children,
  bgColor = "white",
  addClasses = "",
  padding = "",
}: React.PropsWithChildren<{
  bgColor?: string;
  addClasses?: string;
  padding?: string;
}>) {
  return (
    <div className={`flex items-center justify-center ${padding}`}>
      <Paper className={`${bgColor} content-center text-center ${addClasses}`}>
        {children}
      </Paper>
    </div>
  );
}
