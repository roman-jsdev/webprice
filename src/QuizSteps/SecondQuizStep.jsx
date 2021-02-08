import { designCards } from "@src/constants";
import { DesignTypes } from "@components/DesignTypes";

export const SecondQuizStep = () =>
  Object.keys(designCards).map((card, index) => (
    <DesignTypes
      key={index}
      title={card}
      price={designCards[card].price}
      description={designCards[card].description}
      imgSource={designCards[card].imgSource}
    />
  ));
