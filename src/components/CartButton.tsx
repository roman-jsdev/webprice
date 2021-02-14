import { ICCartButtonProps } from "../interfaces/containersInterfaces";

export const CartButton = ({
  type,
  onCartButtonClick,
  progress,
  title,
}: ICCartButtonProps) => (
  <div className="row p-3 pb-0">
    <button
      className={`btn ${type === "checkout" ? "Checkout" : "Clear"}`}
      onClick={onCartButtonClick}
    >
      {progress === 100 ? "Make New Order" : title}
    </button>
  </div>
);
