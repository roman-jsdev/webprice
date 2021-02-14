import { QuizHeaderButton } from "./QuizHeaderButton";
import { QuizHeaderTitle } from "./QuizHeaderTitle";

export const QuizHeader = () => (
  <div className="row align-items-center bg-warning p-4 main-color FullWidth">
    <QuizHeaderButton title="BACK" type="back" />
    <QuizHeaderTitle />
    <QuizHeaderButton title="NEXT" right type="next" />
  </div>
);
