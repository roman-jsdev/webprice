import { useProgress } from "./ProgressContext";

export const QuizProgress = ({ progress }) => {
  const currentProgress = useProgress();

  return (
    <div className="row">
      <div className="progress p-0 rounded-0">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: currentProgress.progress + "%" }}
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {currentProgress.progress + `%`}
        </div>
      </div>
    </div>
  );
};
