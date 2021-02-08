import { TextField } from "formik-material-ui";
import Grid from "@material-ui/core/Grid";
import { Field } from "formik";

export const ContactField = (props) => {
  return (
    <Grid container item xs={12}>
      <Field
        component={TextField}
        type={props.type}
        label={props.label}
        name={props.name}
      />
    </Grid>
  );
};
