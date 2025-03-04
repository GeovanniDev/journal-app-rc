// React modules
import { Link as RouterLink } from "react-router-dom";

// Layout Components
import AuthLayOut from "../layout/AuthLayOut";

// Material UI Components
import { Alert, Button, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import Grid from "@mui/material/Grid2";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import {
  startGoogleSingIn,
  startSingInByEmailAndPassword,
} from "../../store/auth";
import { useMemo } from "react";

export default function LoginPage() {
  const { status, errorMessage } = useSelector((state) => state.auth);
  const isAuthenticating = useMemo(() => status === "checking", [status]);
  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(startSingInByEmailAndPassword({email, password}));
  };

  const onHandleGoogleSingIn = () => {
    dispatch(startGoogleSingIn());
  };

  return (
    <AuthLayOut title="Login">
      <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
        <Grid container>
          <Grid marginTop={2} size={{ xs: 12 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@mail.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid marginTop={2} size={{ xs: 12 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>
          <Grid container size={{ xs: 12 }} spacing={2} sx={{ mb: 2, mt: 2 }}>
            <Grid size={{ xs: 12 }}>
              <Alert
                severity="error"
                sx={{ display: errorMessage ? "block" : "none" }}
              >
                {errorMessage}
              </Alert>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Button
                disabled={isAuthenticating}
                type="submit"
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Button
                disabled={isAuthenticating}
                variant="contained"
                fullWidth
                onClick={onHandleGoogleSingIn}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container size={{ xs: 12 }} spacing={2}>
            <Grid display="flex" justifyContent="end" size={{ xs: 12 }}>
              <Link component={RouterLink} color="inherit" to="/auth/register">
                Create an account
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayOut>
  );
}
