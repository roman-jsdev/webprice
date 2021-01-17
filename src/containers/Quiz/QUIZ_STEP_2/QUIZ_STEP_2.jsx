import { QUIZ_STEP_2_ITEM } from "./QUIZ_STEP_2_ITEM";

const cardText = {
  "Design Simple": {
    price: 350,
    desc: "Beautiful typography, strategic use of colors and graphics, and obstruction-free aesthetics.",
    imgSrc: './design-1.png'
  },
  "Design Awesome": {
    price: 650,
    desc: "Effective and evolving design, keeping up with design trends, and best creativity.",
    imgSrc: './design-2.png'
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
        imgSrc={cardText[card].imgSrc}
      />
    );
  });
};
