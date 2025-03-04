import { CircularProgress } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function BlockCheck() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        backgroundColor: 'primary.main',
        padding: 4
      }}
    >
       <Grid>
        <CircularProgress color="warning" size={60}  />
      </Grid>
    </Grid>
  );
}
