import { Google } from "@mui/icons-material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  Link,
  Typography,
} from "@mui/material";
import { AuthLayout } from "@/auth/layout/AuthLayout";
import { useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { setError } from "@/auth/slices/ui.js";
import { postLogin } from "@/auth/thunks.js";

let initLogin = {
  email: "",
  password: "",
};

const validate = (values) => {
  let errors = {};
  return errors;
};

export const LoginPage = () => {
  const [formValues, setValues] = useState(initLogin);
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: formValues,
    enableReinitialize: true,
    validate,

    onSubmit: (values) => {
      const auth = {
        email: values.email,
        password: values.password,
      };

      if (!values.email & !values.password) {
        dispatch(setError({ error: "Please enter your credentials" }));
        return;
      }

      if (!values.email) {
        initLogin = auth;
        dispatch(setError({ error: "Please enter your email" }));
        return;
      }

      if (!values.password) {
        initLogin = auth;
        dispatch(setError({ error: "Password cannot be empty" }));
        return;
      }

      dispatch(postLogin(auth.email, auth.password));
      navigate("/journal");
    },
  });

  return (
    <AuthLayout title="Login">
      <Grid container>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <form onSubmit={formik.handleSubmit}>
            <FormControl>
              <InputLabel>Correo</InputLabel>
              <Input
                label="Correo"
                value={formik.values.email}
                onChange={formik.handleChange("email")}
              ></Input>
            </FormControl>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <FormControl>
                <InputLabel>Password</InputLabel>
                <Input
                  label="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                ></Input>
              </FormControl>
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth type="submit">
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth>
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="end">
              <Link component={RouterLink} color="inherit" to="/auth/register">
                Crear una cuenta
              </Link>
            </Grid>
            <p>{error}</p>
          </form>
        </Grid>
      </Grid>
    </AuthLayout>
  );
};
