import { cardText } from "./cards";
import { QUIZ_STEP_1_ITEM } from "./QUIZ_STEP_1_ITEM";

export const QUIZ_STEP_1 = () => {
  return (
    <>
      {Object.keys(cardText).map((item, id) => {
        return (
          <QUIZ_STEP_1_ITEM
            key={id}
            title={item}
            desc={cardText[item].desc}
            id={id}
            price={cardText[item].price}
            imgSrc={cardText[item].imgSrc}
          />
        );
      })}
    </>
  );
};
