import { usePrice } from "@context/PriceContext";

export const CartHeader = () => {
  const { current } = usePrice();
  return (
    <div
      className="row text-center align-items-center bg-warning p-4 main-color"
      style={{ color: "white" }}
    >
      <p className="m-0 fs-3 fw-bold">Cart</p>
      <hr style={{ marginBottom: 0, margin: 5 }} />
      <p className="m-0 fs-4 fw-bold">{current || 0} &#36;</p>
    </div>
  );
};
