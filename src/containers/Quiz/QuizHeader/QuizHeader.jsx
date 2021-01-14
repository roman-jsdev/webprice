import { QuizHeaderButton } from "./QuizHeaderButton";
import { QuizHeaderTitle } from "./QuizHeaderTitle";

export const QuizHeader = () => {
  return (
    <div className="row align-items-center bg-warning p-4">
      <QuizHeaderButton title="BACK" type='back' />
      <QuizHeaderTitle title="Website Type" />
      <QuizHeaderButton title="NEXT" right  type='next'/>
    </div>
  );
};
