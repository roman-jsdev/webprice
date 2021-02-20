import { designCards } from "../constants";
import { DesignTypes } from "../components/DesignTypes";

export const SecondQuizStep = () => (
  <>
    {Object.keys(designCards).map((card) => (
      <DesignTypes
        key={card}
        title={card}
        price={designCards[card as keyof typeof designCards].price}
        description={designCards[card as keyof typeof designCards].description}
        imgSource={designCards[card as keyof typeof designCards].imgSource}
      />
    ))}
  </>
);
