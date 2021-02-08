import { priceList } from "../constants";
import { calculatePrice } from "../utils";
import { useCartList } from "../context/CartListContext";

export const OrderReview = () => {
  const list = useCartList();
  const arr = [];

  const calculateFinalPrice = (e) => {
    const resultArr = [];
    const str = e.split(/[\s,]+/);
    const obj = {
      [str[0]]: str[str.length - 1],
    };
    arr.push(obj);

    arr.forEach((el) => {
      Object.keys(el).forEach((i) => {
        if (!isNaN(Number(el[i]))) {
          const fromList = calculatePrice(priceList, i, Number(el[i]));
          resultArr.push(fromList);
        }
      });
    });
    return resultArr.pop();
  };

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
      {list.currentList.map((e, i) => {
        return (
          <div className="row mt-2" key={i}>
            <div className="col-md-8 col-8 mobile-review_title">{e}</div>
            <div className="col-md-3 col-4 offset-md-1 mobile-review_price">
              {Object.keys(priceList).indexOf(e) !== -1
                ? priceList[e]
                : calculateFinalPrice(e)}
            </div>
          </div>
        );
      })}
    </>
  );
};
