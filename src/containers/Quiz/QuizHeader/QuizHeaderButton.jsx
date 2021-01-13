import { useCartList } from "../Cart/CartListContext";
import { useProgress } from "../ProgressContext";

export const QuizHeaderButton = (props) => {
  const currentProgress = useProgress();
  const cartList = useCartList();

  const clickHandler = () => {
    if (props.right) {
      currentProgress.setNewProgress(25);
      cartList.nextStep();
      cartList.clear();
    } else {
      currentProgress.setNewProgress(-25);
      cartList.prevStep();
    }
  };

  return (
    <div className={`col-3 ${props.right ? "text-end" : "text-start"}`}>
      <button className="btn btn-primary" onClick={() => clickHandler()}>
        {props.title}
      </button>
    </div>
  );
};
