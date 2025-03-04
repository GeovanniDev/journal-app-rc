// React modules
import { Link as RouterLink } from "react-router-dom";

// Layouts Components
import AuthLayOut from "../layout/AuthLayOut";

// Material UI Components
import { Alert, Button, Link, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useForm } from "../../hooks";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailAndPassword } from "../../store/auth/thunks";

const init = {
  displayName: "",
  email: "",
  password: "",
};

const formValidations = {
  displayName: [(value) => value.length > 1 , "Full name is required"],
  email: [(value) => value.includes('@') , "Email is invalid"],
  password: [(value) => value.length >= 6 , "Password must be at least 6 characters"],
};

export default function RegisterPage() {

  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector(state => state.auth);
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  const isCheckingAuthenticating = useMemo(() => status === 'checking', [status]);

  const { 
    formState, onInputChange, displayName, email, password, 
    isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm(init, formValidations);


  const onSubmit = (e) => {
    e.preventDefault();
    setFormIsSubmitted(true);
    dispatch(startCreatingUserWithEmailAndPassword(formState));
    // console.log(formState);
  };


  return (
    <AuthLayOut title="Create new account">
        <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
        <Grid container>
          <Grid marginTop={2} size={{ xs: 12 }}>
            <TextField
              label="Full Name"
              type="text"
              placeholder="John Doe"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={ !!displayNameValid && formIsSubmitted }
              helperText={ displayNameValid }
            />
          </Grid>
          <Grid marginTop={2} size={{ xs: 12 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@mail.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={ !!emailValid && formIsSubmitted }
              helperText={ emailValid }
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
              error={ !!passwordValid && formIsSubmitted }
              helperText={ passwordValid }
            />
          </Grid>
          <Grid container size={{ xs: 12 }} spacing={2} sx={{ mb: 2, mt: 2 }}>
          <Grid size={{ xs: 12}}>
              <Alert severity="error" sx={{ display: errorMessage ? 'block' : 'none' }}>
                { errorMessage }
              </Alert>
            </Grid>
            <Grid size={{ xs: 12}}>
              <Button 
                type="submit"
                variant="contained"
                disabled={ !isFormValid || isCheckingAuthenticating }
                fullWidth>
                Create account
              </Button>
            </Grid>
          </Grid>
          <Grid container size={{ xs: 12 }} spacing={2}>
            <Grid display="flex" justifyContent="end" size={{ xs: 12 }}>
              <Typography sx={{ mr: 1 }} >Already have an account?</Typography>
              <Link component={RouterLink} color="inherit" to="/auth/login">
                Login
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayOut>
  )
}
