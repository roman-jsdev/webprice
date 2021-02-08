import { QuizHeaderButton } from "@components/QuizHeaderButton";
import { QuizHeaderTitle } from "@components/QuizHeaderTitle";
import { FullWidth } from "@components/QuizContainer/QuizContainer.module.css";

export const QuizHeader = () => (
  <div
    className={`row align-items-center bg-warning p-4 main-color ${FullWidth}`}
  >
    <QuizHeaderButton title="BACK" type="back" />
    <QuizHeaderTitle title="Website Type" />
    <QuizHeaderButton title="NEXT" right type="next" />
  </div>
);
