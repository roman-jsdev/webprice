// import { useRef, useState } from "react";
import { QUIZ_STEP_1_ITEM } from "./QUIZ_STEP_1_ITEM";

const cardText = {
  "Website Single Page": {
    price: 1200,
    desc: [
      "Excellent for paid ad campaigns (Google Ads, Facebook)",
      "Great for small product launches",
      "Often used for lead generation campaigns",
    ],
  },
  "Website CMS": {
    price: 2500,
    desc: [
      "Go-to Platform for Service Businesses",
      "Over 100million Site Owners Use Wordpress",
      "Excellent for Content Publishing & SEO Work",
    ],
  },
  "Website E-Commerce": {
    price: 3500,
    desc: [
      "Excellent for Content Publishing & SEO Work",
      "Secure Payment Platforms",
      "Refined Product Management Systems",
    ],
  },
};

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
          />
        );
      })}
    </>
  );
};
