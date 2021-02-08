import { websiteTypeCards } from "@src/constants";
import { WebsiteTypes } from "@components/WebsiteTypes/WebsiteTypes";

export const FirstQuizStep = () => (
  <>
    {Object.keys(websiteTypeCards).map((card, index) => (
      <WebsiteTypes
        key={index}
        title={card}
        description={websiteTypeCards[card].description}
        id={card}
        price={websiteTypeCards[card].price}
        imgSource={websiteTypeCards[card].imgSource}
      />
    ))}
  </>
);
