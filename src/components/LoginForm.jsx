import { Formik, Form, Field } from "formik";
import { Button } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { useStore } from "../store/store";
import { authSuccess, autoLogout } from "../store/actions";
import { useEffect, useRef, useState } from "react";

export const LoginForm = () => {
  const [submit, setSubmit] = useState(0);
  const globalState = useStore();
  const { dispatch } = globalState;
  const authDataRef = useRef();

  useEffect(() => {
    let mounted = true;

    const tryLogin = async () => {
      if (mounted && submit) {
        try {
          const response = await axios.post(
            `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_AXAU}`,
            authDataRef.current
          );

          const data = response.data;
          const expirationDate = new Date(
            new Date().getTime() + data.expiresIn * 1000
          );

          localStorage.setItem("token", data.idToken);
          localStorage.setItem("userId", data.localId);
          localStorage.setItem("expirationDate", expirationDate);

          dispatch(authSuccess(data.idToken));
          dispatch(autoLogout(data.expiresIn));
        } catch (e) {
          alert("Incorrect Login Data");
          console.log(e);
        }
      }
    };

    tryLogin();

    return () => (mounted = false);
  }, [submit]);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        if (!values.password) {
          errors.password = "Required";
        }
        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        authDataRef.current = {
          email: values.email,
          password: values.password,
          returnSecureToken: true,
        };
        setSubmit((prev) => prev + 1);
        setSubmitting(true);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Grid
            container
            spacing={1}
            className="d-flex justify-content-center align-items-center text-center"
          >
            <Grid
              container
              item
              xs={12}
              className="d-flex justify-content-center"
            >
              <Field
                component={TextField}
                name="email"
                type="email"
                label="Email"
                autoComplete="on"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid
              container
              item
              xs={12}
              className="d-flex justify-content-center"
            >
              <Field
                component={TextField}
                type="password"
                label="Password"
                name="password"
                autoComplete="on"
                style={{width: '100%'}}
              />
            </Grid>
            <Grid
              container
              item
              xs={12}
              style={{ marginTop: 20 }}
              className="d-flex justify-content-center"
            >
              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
                style={{width: '100%'}}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};
