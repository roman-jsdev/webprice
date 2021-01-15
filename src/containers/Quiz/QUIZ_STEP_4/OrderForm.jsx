import { Formik, Form, Field } from "formik";
import { Button } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import Grid from "@material-ui/core/Grid";
import { useCartList } from "../Cart/CartListContext";
import { useProgress } from "../ProgressContext";

export const OrderForm = () => {
  const cart = useCartList();
  const progress = useProgress();

  return (
    <Formik
      initialValues={{
        email: "",
        address: "",
        name: "",
        company: "",
        url: "",
        phone: "",
        cart: cart.currentList,
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
        if (!values.address) {
          errors.address = "Required";
        }
        if (!values.name) {
          errors.name = "Required";
        }
        if (!values.company) {
          errors.company = "Required";
        }
        if (!values.phone) {
          errors.phone = "Required";
        } else if (
          !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(
            values.phone
          )
        ) {
          errors.phone = "Invalid phone";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
          progress.setNewProgress(25);
        }, 1500);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Grid container spacing={1}>
            <Grid container item xs={12}>
              <Field
                component={TextField}
                type="text"
                label="Client Name*"
                name="name"
              />
            </Grid>
            <Grid container item xs={12}>
              <Field
                component={TextField}
                type="text"
                label="Company Name*"
                name="company"
              />
            </Grid>
            <Grid container item xs={12}>
              <Field
                component={TextField}
                type="url"
                label="Company URL"
                name="url"
              />
            </Grid>
            <Grid container item xs={12}>
              <Field
                component={TextField}
                type="text"
                label="Company Full Address*"
                name="address"
              />
            </Grid>
            <Grid container item xs={12}>
              <Field
                component={TextField}
                name="email"
                type="email"
                label="Email*"
              />
            </Grid>
            <Grid container item xs={12}>
              <Field
                component={TextField}
                type="number"
                label="Business Phone*"
                name="phone"
              />
            </Grid>
            <Field component={TextField} type="text" name="cart" hidden />
            <Grid container item xs={12} style={{ marginTop: 20 }}>
              <Button
                variant="contained"
                color="primary"
                disabled={
                  isSubmitting ? isSubmitting : !cart.currentList.length
                }
                onClick={submitForm}
              >
                Generate The Agreement
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};
