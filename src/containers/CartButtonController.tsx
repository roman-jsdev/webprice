import { useProgress } from "../context/ProgressContext";
import { useCartList } from "../context/CartListContext";
import { usePrice } from "../context/PriceContext";
import { ICartButtonProps } from "../interfaces/componentsInterfaces";
import { CartButton } from "../components/CartButton";

export const CartButtonController = ({ title, type }: ICartButtonProps) => {
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
    ) as HTMLInputElement;
    if (checkbox) checkbox.checked = false;
  };

  const onCartButtonClick = () => {
    type === "checkout" ? setCurrentProgress(75) : clearCart();
    if (progress === 100) clearCart();
  };

  return (
    <CartButton
      type={type}
      onCartButtonClick={onCartButtonClick}
      title={title}
      progress={progress}
    />
  );
};
