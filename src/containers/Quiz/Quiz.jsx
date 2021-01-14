import { Cart } from "./Cart/Cart";
import { CartBody } from "./Cart/CartBody";
import { CartButton } from "./Cart/CartButton";
import { CartHeader } from "./Cart/CartHeader";
import { PriceProvider } from "./Cart/PriceContext";
import { QuizContainer } from "./QuizContainer";
import { QuizContentWrapper } from "./QuizContent/QuizContentWrapper";
import { QuizHeader } from "./QuizHeader/QuizHeader";
import { QuizProgress } from "./QuizProgress";
import { QUIZ_STEP_1 } from "./QUIZ_STEP_1/QUIZ_STEP_1";
import { useProgress } from "./ProgressContext";
import { CartListProvider } from "./Cart/CartListContext";
import { QUIZ_STEP_2 } from "./QUIZ_STEP_2/QUIZ_STEP_2";

export const Quiz = () => {
  const progress = useProgress();

  const renderContent = () => {
    switch (progress.progress) {
      case 0:
        return <QUIZ_STEP_1 />;
      case 25:
        return <QUIZ_STEP_2 />;
      default:
        return <QUIZ_STEP_1 />;
    }
  };

  return (
    <PriceProvider>
    <CartListProvider>
        <QuizContainer>
          <QuizHeader />
          <QuizProgress />
          <QuizContentWrapper>{renderContent()}</QuizContentWrapper>
        </QuizContainer>
        <Cart>
          <CartHeader />
          <CartBody />
          <CartButton title="CLEAR CART" />
        </Cart>
    </CartListProvider>
    </PriceProvider>
  );
};
