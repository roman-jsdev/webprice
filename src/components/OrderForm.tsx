import { useCartList } from "../context/CartListContext";
import { useProgress } from "../context/ProgressContext";
import { usePrice } from "../context/PriceContext";
import { ContactField } from "../components/ContactField";
import { fieldsData } from "../constants";
import { useDB } from "../hooks/useDB";
import { validateOrderForm, getOrderFormInitialValues } from "../utils";

import { Formik, Form, Field } from "formik";
import { Button } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import Grid from "@material-ui/core/Grid";

export const OrderForm = () => {
  const { currentList } = useCartList();
  const progress = useProgress();
  const { current } = usePrice();
  const [putOrderToDB] = useDB("put");

  return (
    <Formik
      initialValues={getOrderFormInitialValues(currentList, current)}
      validate={validateOrderForm}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        putOrderToDB(values, `orders/order-${Date.now().toString()}`);
        setSubmitting(false);
        progress.setNewProgress(25);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Grid container spacing={1}>
            {fieldsData.map((field) => (
              <ContactField
                key={field[2]}
                type={field[0]}
                label={field[1]}
                name={field[2]}
              />
            ))}
            <Field component={TextField} type="text" name="cart" hidden />
            <Grid container item xs={12} style={{ marginTop: 20 }}>
              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting ? isSubmitting : !currentList.length}
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
