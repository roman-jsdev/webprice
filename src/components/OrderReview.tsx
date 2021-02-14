import { priceList } from "../constants";
import { calculatePriceForOrderList } from "../utils";
import { useCartList } from "../context/CartListContext";

export const OrderReview = () => {
  const { currentList } = useCartList();

  return (
    <>
      <p className="m-0 fs-4 fw-bold">Your order summary</p>
      <div className="row mt-4">
        <div className="col-md-8 col-8 fw-bold mobile-review_title">
          Service
        </div>
        <div className="col-md-3 col-4 offset-md-1 fw-bold mobile-review_price">
          Price
        </div>
      </div>
      {(currentList as (string | never)[]).map((cartListElement, index) => (
        <div className="row mt-2" key={index}>
          <div className="col-md-8 col-8 mobile-review_title">
            {cartListElement}
          </div>
          <div className="col-md-3 col-4 offset-md-1 mobile-review_price">
            {Object.keys(priceList).indexOf(cartListElement) !== -1
              ? priceList[cartListElement]
              : calculatePriceForOrderList(cartListElement)}
          </div>
        </div>
      ))}
    </>
  );
};
