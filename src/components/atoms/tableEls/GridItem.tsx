import { Grid, GridProps } from "@mui/material";
import React from "react";

export default function GridItem({
  children,
  gridProps = {},
  addClasses = "",
}: React.PropsWithChildren<{
  gridProps?: GridProps;
  addClasses?: string;
}>) {
  return (
    <Grid
      item
      {...gridProps}
      className={`shadow-tableCell content-center justify-center text-center ${addClasses}`}
    >
      {children}
    </Grid>
  );
}
