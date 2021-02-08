import { useProgress } from "@context/ProgressContext";
import { getQuizHeaderTitle } from "@src/utils";

export const QuizHeaderTitle = () => {
  const { progress } = useProgress();

  return (
    <div className="col-6">
      <p
        className="text-center fs-3 m-0"
        style={{ color: "white", userSelect: "none" }}
      >
        {getQuizHeaderTitle(progress)}
      </p>
    </div>
  );
};
