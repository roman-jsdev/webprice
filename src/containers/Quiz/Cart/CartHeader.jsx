import { usePrice } from "./PriceContext";

export const CartHeader = () => {
  const price = usePrice();
  return (
    <div className="row text-center align-items-center bg-warning p-4">
      <p className="m-0 fs-4 fw-bold">{price.current + " $"}</p>
    </div>
  );
};
