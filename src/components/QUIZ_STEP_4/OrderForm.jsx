import { Formik, Form, Field } from "formik";
import { Button } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import Grid from "@material-ui/core/Grid";
import { useCartList } from "../Cart/CartListContext";
import { useProgress } from "../ProgressContext";
import axios from "axios";
import { usePrice } from "../Cart/PriceContext";
import { fieldsData } from "./fieldsData";
import { ContactField } from "./ContactField";

export const OrderForm = () => {
  const cart = useCartList();
  const progress = useProgress();
  const price = usePrice();

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
        _total_price_: "$" + price.current,
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
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        const id = Date.now().toString();
        try {
          await axios.put(
            `https://webprice-app-default-rtdb.firebaseio.com/orders/order-${id}.json?auth=${process.env.REACT_APP_AXLOG}`,
            JSON.stringify(values, null, 2)
          );
          progress.setNewProgress(25);
        } catch (e) {
          alert("Some Problems With Data Fetching");
          console.log(e);
        }
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Grid container spacing={1}>
            {fieldsData.map((e, i) => {
              return (
                <ContactField key={i} type={e[0]} label={e[1]} name={e[2]} />
              );
            })}
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
