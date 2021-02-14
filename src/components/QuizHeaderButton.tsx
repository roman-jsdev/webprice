import { useProgress } from "../context/ProgressContext";
import { IHeaderButtonsProps } from "../interfaces/componentsInterfaces";

export const QuizHeaderButton = ({
  right,
  type,
  title,
}: IHeaderButtonsProps) => {
  const { progress, setNewProgress } = useProgress();

  const changeProgress = () =>
    right ? setNewProgress(25) : setNewProgress(-25);

  const disableNext = () => (progress === 75 || progress === 100) && true;
  const disableBack = () => (progress === 0 || progress === 100) && true;

  return (
    <div className={`col-3 ${right ? "text-end" : "text-start"}`}>
      <button
        disabled={type === "next" ? disableNext() : disableBack()}
        className="btn Btn"
        onClick={changeProgress}
        data-type={type}
      >
        {title}
      </button>
    </div>
  );
};
