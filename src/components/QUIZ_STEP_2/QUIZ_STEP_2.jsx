import { cardText } from "../QUIZ_STEP_2/cards";
import { QUIZ_STEP_2_ITEM } from "./QUIZ_STEP_2_ITEM";

export const QUIZ_STEP_2 = () => {
  return Object.keys(cardText).map((card, index) => {
    return (
      <QUIZ_STEP_2_ITEM
        key={index}
        title={card}
        price={cardText[card].price}
        desc={cardText[card].desc}
        imgSrc={cardText[card].imgSrc}
      />
    );
  });
};
