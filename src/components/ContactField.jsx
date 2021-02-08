import { TextField } from "formik-material-ui";
import Grid from "@material-ui/core/Grid";
import { Field } from "formik";

export const ContactField = ({type, label, name}) => (
  <Grid container item xs={12}>
    <Field
      component={TextField}
      type={type}
      label={label}
      name={name}
    />
  </Grid>
);
