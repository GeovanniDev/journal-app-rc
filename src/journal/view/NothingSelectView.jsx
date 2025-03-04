import { StarBorder } from "@mui/icons-material";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function NothingSelectView() {
  return (
    <Grid
    container
    spacing={ 0 }
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{ 
        minHeight: "100vh", 
        backgroundColor: "primary.main", 
        padding: 4,
        borderRadius: 4
    }}
  >
    <Grid xs={ 12 }>
        <StarBorder
            sx={{
                fontSize: 100,
                color: 'white' 
            }}
        ></StarBorder>
    </Grid>
    <Grid xs={ 12 }>
        <Typography color="white" variant="h5">Select or create a new new</Typography>
    </Grid>

  </Grid>
  )
}
