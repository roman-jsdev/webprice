import { Cart } from "./Cart";
import { CartBody } from "../components/CartBody";
import { CartHeader } from "../components/CartHeader";
import { PriceProvider } from "../context/PriceContext";
import { QuizContentWrapper } from "../components/QuizContentWrapper";
import { CartButtonController } from "../containers/CartButtonController";
import { QuizContainer } from "./QuizContainer";
import { QuizHeader } from "./QuizHeader";
import { QuizProgress } from "../components/QuizProgress";
import { useProgress } from "../context/ProgressContext";
import { CartListProvider } from "../context/CartListContext";
import { FirstQuizStep } from "../QuizSteps/FirstQuizStep";
import { SecondQuizStep } from "../QuizSteps/SecondQuizStep";
import { ThirdQuizStep } from "../QuizSteps/ThirdQuizStep";
import { FourthQuizStep } from "../QuizSteps/FourthQuizStep";
import { FifthQuizStep } from "../QuizSteps/FifthQuizStep";

export const Quiz = () => {
  const { progress } = useProgress();

  const getContent = () => {
    switch (progress) {
      case 0:
        return <FirstQuizStep />;
      case 25:
        return <SecondQuizStep />;
      case 50:
        return <ThirdQuizStep />;
      case 75:
        return <FourthQuizStep />;
      case 100:
        return <FifthQuizStep />;
      default:
        return <FirstQuizStep />;
    }
  };

  return (
    <PriceProvider>
      <CartListProvider>
        <QuizContainer>
          <QuizHeader />
          <QuizProgress />
          <QuizContentWrapper>{getContent()}</QuizContentWrapper>
        </QuizContainer>
        <Cart>
          <CartHeader />
          <CartBody />
          {progress === 100 ? (
            <CartButtonController title="Checkout" type="checkout" />
          ) : (
            <>
              <CartButtonController title="Checkout" type="checkout" />
              <CartButtonController title="Clear Cart" type="clear" />
            </>
          )}
        </Cart>
      </CartListProvider>
    </PriceProvider>
  );
};
