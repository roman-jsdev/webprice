import { designCards } from "@src/constants";
import { DesignTypes } from "@components/DesignTypes";

export const SecondQuizStep = () => {
  return Object.keys(designCards).map((card, index) => {
    return (
      <DesignTypes
        key={index}
        title={card}
        price={designCards[card].price}
        desc={designCards[card].desc}
        imgSrc={designCards[card].imgSrc}
      />
    );
  });
};
