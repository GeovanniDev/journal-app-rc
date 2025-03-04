import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

import { PurpleTheme } from "./PurpleTheme";
import PropTypes from 'prop-types'

export default function AppTheme({ children }) {
  return (
    <ThemeProvider theme={ PurpleTheme }>
        <CssBaseline />
        { children }
    </ThemeProvider>
  )
}

AppTheme.propTypes = {
    children: PropTypes.any.isRequired
}
