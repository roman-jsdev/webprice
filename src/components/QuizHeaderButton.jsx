import { useProgress } from "@context/ProgressContext";
import classes from "@components/QuizHeader/Header.module.css";

export const QuizHeaderButton = ({ right, type, title }) => {
  const { progress, setNewProgress } = useProgress();

  const changeProgress = () =>
    right ? setNewProgress(25) : setNewProgress(-25);

  const disableNext = () => (progress === 75 || progress === 100) && true;
  const disableBack = () => (progress === 0 || progress === 100) && true;

  return (
    <div className={`col-3 ${right ? "text-end" : "text-start"}`}>
      <button
        disabled={type === "next" ? disableNext() : disableBack()}
        className={`btn ${classes.Btn}`}
        onClick={changeProgress}
        data-type={type}
      >
        {title}
      </button>
    </div>
  );
};
