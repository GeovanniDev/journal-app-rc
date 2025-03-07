import { TurnedInNot } from "@mui/icons-material";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useMemo } from "react";
import PropTypes from "prop-types";

export default function SideBarItem({ id, title = "", body }) {
  const newTitle = useMemo(
    () => () => {
      return title.length > 20 ? `${title.substring(0, 20)}...` : title;
    },
    [title]
  );

  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
}
SideBarItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
};
