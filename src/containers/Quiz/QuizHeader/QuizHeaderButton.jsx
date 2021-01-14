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
  
  const disableNext = () => {
    switch (currentProgress.progress) {
      case 0:
        return false;
      default:
        break;
    }
  };

  const disableBack = () => {
    switch (currentProgress.progress) {
      case 0:
        return true;
      default:
        break;
    }
  };

  return (
    <div className={`col-3 ${props.right ? "text-end" : "text-start"}`}>
      <button
        disabled={props.type === "next" ? disableNext() : disableBack()}
        className="btn btn-primary"
        onClick={() => clickHandler()}
        data-type={props.type}
      >
        {props.title}
      </button>
    </div>
  );
};
