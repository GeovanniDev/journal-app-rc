import { SaveOutlined } from "@mui/icons-material";
import { Button, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { ImageGallery } from "../components";

export default function ViewNote() {
  return (
    <Grid
      container
      direction="row"
      xs={{
        mb: 1,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Grid size={10}>
        <Typography fontSize={39} fontWeight={"light"}>
          January 28, 2025
        </Typography>
      </Grid>
      <Grid size={2} sx={{ textAlign: "right" }}>
        <Button
          color="primary"
          sx={{
            padding: 2,
          }}
        >
          <SaveOutlined
            sx={{
              fontSize: 30,
              mr: 1,
            }}
          ></SaveOutlined>
          Save
        </Button>
      </Grid>
      <Grid size={12} sx={{ mt: 2 }}>
            <TextField
              type="text"
              variant="filled"
              fullWidth
              placeholder="Enter the title"
              label="Title"
              sx={{
                border: "none",
                mb: 1,
              }}
            ></TextField>
            <TextField
              type="text"
              variant="filled"
              multiline
              fullWidth
              placeholder="What's on your mind?"
              minRows={10}
            ></TextField>
          </Grid>
          <Grid size={12} sx={{ mt: 2 }}>
            <ImageGallery></ImageGallery>
          </Grid>
    </Grid>
  );
}
