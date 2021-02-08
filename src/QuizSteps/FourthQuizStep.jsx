import { usePrice } from "@context/PriceContext";
import { OrderForm } from "@components/OrderForm";
import { OrderReview } from "@components/OrderReview";

export const FourthQuizStep = () => {
  const { current } = usePrice();

  return (
    <>
      <div className="col-md-6 column-ease-in">
        <p className="m-0 fs-4 fw-bold">Provide your contact info</p>
        <OrderForm />
      </div>
      <div className="col-md-6 column-ease-in">
        <OrderReview />
        <hr className="mb-2" />
        <div className="row mt-0">
          <div className="col-md-3 offset-md-9 fw-bold mobile-review_total">
            Total
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-md-3 offset-md-9 mobile-review_total">
            &#36;{current}
          </div>
        </div>
      </div>
    </>
  );
};
