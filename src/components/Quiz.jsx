import { Cart } from "@components/Cart/Cart";
import { CartBody } from "@components/CartBody";
import { CartButton } from "@components/CartButton";
import { CartHeader } from "@components/CartHeader";
import { PriceProvider } from "@context/PriceContext";
import { QuizContentWrapper } from "@components/QuizContentWrapper";
import { QuizContainer } from "@components/QuizContainer/QuizContainer";
import { QuizHeader } from "@components/QuizHeader/QuizHeader";
import { QuizProgress } from "@components/QuizProgress";
import { useProgress } from "@context/ProgressContext";
import { CartListProvider } from "@context/CartListContext";
import { FirstQuizStep } from "@steps/FirstQuizStep";
import { SecondQuizStep } from "@steps/SecondQuizStep";
import { ThirdQuizStep } from "@steps/ThirdQuizStep";
import { FourthQuizStep } from "@steps/FourthQuizStep";
import { FifthQuizStep } from "@steps/FifthQuizStep";

export const Quiz = () => {
  const progress = useProgress();

  const renderContent = () => {
    switch (progress.progress) {
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
