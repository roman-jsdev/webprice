import { useProgress } from "@context/ProgressContext";
import { useCartList } from "@context/CartListContext";
import { usePrice } from "@context/PriceContext";
import {Checkout, Clear} from "@components/Cart/Cart.module.css";

export const CartButton = ({ title, type }) => {
  const { clearCartList } = useCartList();
  const { progress, setCurrentProgress, clearProgress } = useProgress();
  const { clearPrice } = usePrice();

  const clearCart = () => {
    clearCartList();
    clearProgress();
    clearPrice();
    sessionStorage.clear();
    const checkbox = document.querySelector(
      ".form-check-input:checked[type=radio]"
    );
    if (checkbox) checkbox.checked = false;
  };

  const onCartButtonClick = () => {
    type === "checkout" ? setCurrentProgress(75) : clearCart();
    if (progress === 100) clearCart();
  };

  return (
    <div className="row p-3 pb-0">
      <button
        className={`btn ${
          type === "checkout" ? Checkout : Clear
        }`}
        onClick={onCartButtonClick}
      >
        {progress === 100 ? "Make New Order" : title}
      </button>
    </div>
  );
};
