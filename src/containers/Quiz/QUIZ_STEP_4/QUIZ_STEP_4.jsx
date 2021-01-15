import { usePrice } from "../Cart/PriceContext";
import { OrderForm } from "./OrderForm";
import { OrderReview } from "./OrderReview";

export const QUIZ_STEP_4 = () => {
  const price = usePrice();

  return (
    <>
      <div className="col-md-6">
        <p className="m-0 fs-4 fw-bold">Provide your contact info</p>
        <OrderForm />
      </div>
      <div className="col-md-6">
        <OrderReview />
        <hr className="mb-2" />
        <div className="row mt-0">
          <div className="col-md-3 offset-md-9 fw-bold">Total</div>
        </div>
        <div className="row mt-1">
          <div className="col-md-3 offset-md-9">${price.current}</div>
        </div>
      </div>
    </>
  );
};
