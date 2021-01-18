import { useEffect } from "react";
import { useCartList } from "../Cart/CartListContext";

export const QUIZ_STEP_5 = () => {
  const list = useCartList();

  useEffect(() => {
    list.set([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="row column-ease-in not-p-mob">
      <h3 className="text-center">Thank you for your order</h3>
      <p className="text-center">We contact you as soon as possible</p>
    </div>
  );
};
