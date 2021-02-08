import { validateLoginForm } from "@src/utils";
import { loginFormFields } from "@src/constants";

import { Formik, Form, Field } from "formik";
import { Button } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import Grid from "@material-ui/core/Grid";

export const LoginForm = ({ setAuthData, submit, setSubmit }) => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validate={validateLoginForm}
      onSubmit={({ email, password }) => {
        setAuthData({
          email,
          password,
          returnSecureToken: true,
        });
        setSubmit(true);
      }}
    >
      {({ submitForm }) => (
        <Form>
          <Grid
            container
            spacing={1}
            className="d-flex justify-content-center align-items-center text-center"
          >
            {loginFormFields.map(({ name, type, label }, index) => (
              <Grid
                container
                item
                xs={12}
                className="d-flex justify-content-center"
                key={index}
              >
                <Field
                  component={TextField}
                  name={name}
                  type={type}
                  label={label}
                  autoComplete="on"
                  disabled={submit}
                  style={{ width: "100%" }}
                />
              </Grid>
            ))}
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
                disabled={submit}
                onClick={submitForm}
                style={{ width: "100%" }}
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
