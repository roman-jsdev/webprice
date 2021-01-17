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
import { QUIZ_STEP_3 } from "./QUIZ_STEP_3/QUIZ_STEP_3";
import { QUIZ_STEP_4 } from "./QUIZ_STEP_4/QUIZ_STEP_4";
import { QUIZ_STEP_5 } from "./QUIZ_STEP_5/QUIZ_STEP_5";

export const Quiz = () => {
  const progress = useProgress();

  const renderContent = () => {
    switch (progress.progress) {
      case 0:
        return <QUIZ_STEP_1 />;
      case 25:
        return <QUIZ_STEP_2 />;
      case 50:
        return <QUIZ_STEP_3 />;
      case 75:
        return <QUIZ_STEP_4 />;
      case 100:
        return <QUIZ_STEP_5 />;
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
          {progress.progress === 100 ? (
            <CartButton title="Checkout" type="checkout" />
          ) : (
            <>
              <CartButton title="Checkout" type="checkout" />
              <CartButton title="Clear Cart" type="clear" />
            </>
          )}
        </Cart>
      </CartListProvider>
    </PriceProvider>
  );
};
