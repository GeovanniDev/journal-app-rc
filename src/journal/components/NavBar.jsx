// Material UI Components
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

// Material UI Icons
import { LoginOutlined, Menu } from "@mui/icons-material";

// PropTypes
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { startLogOutSession } from "../../store/auth/thunks";

export default function NavBar({ drawerWidth = 240 }) {
  const dispatch = useDispatch();
  const onHandleLogout = () => {
    dispatch(startLogOutSession());
  };

  return (
    <AppBar position="fixed"
            sx={{
                width: { sm: `calc(100% - ${ drawerWidth }px)` },
                ml: { sm: `${ drawerWidth }px` }
            }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <IconButton 
          color="inherit"
          onClick={onHandleLogout}>
          <LoginOutlined />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

NavBar.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
};
