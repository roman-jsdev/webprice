import { useProgress } from "../context/ProgressContext";

export const QuizProgress = () => {
  const { progress } = useProgress();

  return (
    <div className="row FullWidth">
      <div className="progress p-0 rounded-0">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: progress + "%" }}
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          {progress + `%`}
        </div>
      </div>
    </div>
  );
};
