import { QUIZ_STEP_2_ITEM } from "./QUIZ_STEP_2_ITEM";

const cardText = {
  "Simple Design": {
    price: 350,
    desc: "Bolder weight text (relative to the parent element)",
  },
  "Awesome Design": {
    price: 650,
    desc: "Change a selection to our monospace font stack with",
  },
};

export const QUIZ_STEP_2 = () => {
  return Object.keys(cardText).map((card, index) => {
    return (
      <QUIZ_STEP_2_ITEM
        key={index}
        title={card}
        price={cardText[card].price}
        desc={cardText[card].desc}
      />
    );
  });
};
