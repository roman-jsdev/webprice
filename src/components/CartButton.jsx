import { useProgress } from "../context/ProgressContext";
import { useCartList } from "../context/CartListContext";
import { usePrice } from "../context/PriceContext";
import classes from "@components/Cart/Cart.module.css";

export const CartButton = ({ title, type }) => {
  const cartList = useCartList();
  const progress = useProgress();
  const price = usePrice();

  const clearAll = () => {
    sessionStorage.clear();
    cartList.clearAll();
    progress.clear();
    price.clear();
    const checkbox = document.querySelector(
      ".form-check-input:checked[type=radio]"
    );
    if (checkbox) checkbox.checked = false;
  };

  const handleButtonClick = () => {
    type === "checkout" ? progress.setCurrentProgress(75) : clearAll();
    if (progress.progress === 100) clearAll();
  };

  return (
    <div className="row p-3 pb-0">
      <button
        className={`btn ${
          type === "checkout" ? classes.Checkout : classes.Clear
        }`}
        onClick={handleButtonClick}
      >
        {progress.progress === 100 ? "Make New Order" : title}
      </button>
    </div>
  );
};
