import { useCartList } from "../Cart/CartListContext";
import { calcPrice, priceList } from "../Cart/priceList";

export const OrderReview = () => {
  const list = useCartList();
  const arr = [];

  const calculatePrice = (e) => {
    const resultArr = [];
    const str = e.split(/[\s,]+/);
    const obj = {
      [str[0]]: str[str.length - 1],
    };
    arr.push(obj);

    arr.forEach((el) => {
      Object.keys(el).forEach((i) => {
        if (!isNaN(Number(el[i]))) {
          const fromList = calcPrice(priceList, i, Number(el[i]));
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
        <div className="col-md-8 fw-bold">Service</div>
        <div className="col-md-3 offset-md-1 fw-bold">Price</div>
      </div>
      {list.currentList.map((e, i) => {
        return (
          <div className="row mt-2" key={i}>
            <div className="col-md-8">{e}</div>
            <div className="col-md-3 offset-md-1">
              {Object.keys(priceList).indexOf(e) !== -1
                ? priceList[e]
                : calculatePrice(e)}
            </div>
          </div>
        );
      })}
    </>
  );
};
