import { useProgress } from "../ProgressContext";
import { useCartList } from "./CartListContext";
import { usePrice } from "./PriceContext";

export const CartButton = ({ title }) => {
  const cartList = useCartList();
  const progress = useProgress();
  const price = usePrice();

  const clickHandler = () => {
    localStorage.clear();
    cartList.clearAll();
    progress.clear();
    price.clear();
    const checkbox = document.querySelector(
      ".form-check-input:checked[type=radio]"
    );
    if (checkbox !== null) checkbox.checked = false;
  };
  return (
    <div className="row p-4 pb-0">
      <button className="btn btn-primary" onClick={() => clickHandler()}>
        {title}
      </button>
    </div>
  );
};
