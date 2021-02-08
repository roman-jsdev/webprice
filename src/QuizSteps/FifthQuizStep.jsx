import { useEffect } from "react";
import { useCartList } from "@context/CartListContext";

export const FifthQuizStep = () => {
  const list = useCartList();

  useEffect(() => {
    list.set([]);
  }, []);

  return (
    <div className="row column-ease-in not-p-mob">
      <h3 className="text-center">Thank you for your order</h3>
      <p className="text-center">We contact you as soon as possible</p>
    </div>
  );
};
