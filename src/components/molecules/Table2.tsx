import { Grid, Paper } from "@mui/material";

export default function Table2() {
  return (
    <div>
      <h3 className="mt-4 text-xl font-bold">대운</h3>
      <Grid
        container
        direction={"row"}
        gap={1}
        flexWrap={"nowrap"}
        overflow={"scroll"}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
          return (
            <Grid container item direction={"column"} width={50} gap={1}>
              <Grid item className="w-10 text-center">
                정재
              </Grid>
              <Grid item className="w-10">
                <Paper
                  className="h-12 w-12 bg-blue-200 text-center text-2xl"
                  style={{ lineHeight: "48px" }}
                >
                  을
                </Paper>
              </Grid>
              <Grid item>
                <Paper
                  className="h-12 w-12 bg-red-200 text-center text-2xl"
                  style={{ lineHeight: "48px" }}
                >
                  축
                </Paper>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
