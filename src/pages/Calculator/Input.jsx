import { useInput } from "./InputContext";

export const Input = () => {
  const input = useInput();
  return <p className="m-0 fs-2 fw-bold text-end">{input.value}</p>;
};
