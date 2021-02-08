import { useProgress } from "@context/ProgressContext";
import classes from "@components/QuizContainer/QuizContainer.module.css";

export const QuizProgress = () => {
  const { progress } = useProgress();

  return (
    <div className={`row ${classes.FullWidth}`}>
      <div className="progress p-0 rounded-0">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: progress + "%" }}
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {progress + `%`}
        </div>
      </div>
    </div>
  );
};
