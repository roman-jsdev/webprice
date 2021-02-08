import { websiteTypeCards } from "@src/constants";
import { WebsiteTypes } from "@components/WebsiteTypes/WebsiteTypes";

export const FirstQuizStep = () => {
  return (
    <>
      {Object.keys(websiteTypeCards).map((item, id) => {
        return (
          <WebsiteTypes
            key={id}
            title={item}
            desc={websiteTypeCards[item].desc}
            id={id}
            price={websiteTypeCards[item].price}
            imgSrc={websiteTypeCards[item].imgSrc}
          />
        );
      })}
    </>
  );
};
