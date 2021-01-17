import { useProgress } from "../ProgressContext";
import classes from "./Header.module.css";

export const QuizHeaderButton = (props) => {
  const currentProgress = useProgress();

  const clickHandler = () => {
    props.right
      ? currentProgress.setNewProgress(25)
      : currentProgress.setNewProgress(-25);
  };
  
  const disableNext = () => {
    switch (currentProgress.progress) {
      case 0:
        return false;
      case 75:
        return true;
      case 100:
        return true;
      default:
        break;
    }
  };

  const disableBack = () => {
    switch (currentProgress.progress) {
      case 0:
        return true;
      case 100:
        return true;
      default:
        break;
    }
  };

  return (
    <div className={`col-3 ${props.right ? "text-end" : "text-start"}`}>
      <button
        disabled={props.type === "next" ? disableNext() : disableBack()}
        className={`btn ${classes.Btn}`}
        onClick={() => clickHandler()}
        data-type={props.type}
      >
        {props.title}
      </button>
    </div>
  );
};
