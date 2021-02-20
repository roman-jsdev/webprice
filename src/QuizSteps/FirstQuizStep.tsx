import { websiteTypeCards } from "../constants";
import { WebsiteTypes } from "../components/WebsiteTypes";

export const FirstQuizStep = () => (
  <>
    {Object.keys(websiteTypeCards).map((card) => (
      <WebsiteTypes
        key={card}
        title={card}
        description={
          websiteTypeCards[card as keyof typeof websiteTypeCards].description
        }
        id={card}
        price={websiteTypeCards[card as keyof typeof websiteTypeCards].price}
        imgSource={
          websiteTypeCards[card as keyof typeof websiteTypeCards].imgSource
        }
      />
    ))}
  </>
);
