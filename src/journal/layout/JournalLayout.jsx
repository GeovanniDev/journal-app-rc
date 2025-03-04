// Material-UI
import { Box } from "@mui/material";

// PropTypes
import PropTypes from "prop-types";

// Components
import { NavBar, SideBar } from "../components";

const drawerWidth = 240;

function JournalLayout({ children }) {
  return (
    <Box sx={{ display: "flex" }} className="animate__animated animate__fadeIn animate__faster">
      <NavBar drawerWidth={drawerWidth} />
      <SideBar drawerWidth={drawerWidth} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          paddingTop: 10, // Top padding
          paddingRight: 5, // Right padding
          paddingBottom: 10, // Bottom padding
          paddingLeft: 5, // Left padding
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

JournalLayout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default JournalLayout;
