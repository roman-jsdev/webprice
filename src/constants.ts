import { IDefaultObject } from "./interfaces/defaultInterfaces";

export const priceList: IDefaultObject = {
  "Website Single Page": 1200,
  "Website CMS": 2500,
  "Website E-Commerce": 3500,
  "Design Simple": 350,
  "Design Awesome": 650,
  Pages: 40,
  Copywriting: 10,
  Revisions: 80,
  Programming: 125,
  Hosting: 19,
  "Company Logo": 500,
  "Domain Registration": 25,
  "Automatic Translation": 100,
  "Basic Contact Form": 10,
  "Image Portfolio": 400,
  "Live Chat": 200,
  "Secure HTTPS": 175,
  "Social Media Feed": 250,
};

export const servicesButtons = {
  Hosting: {
    type: "hosting",
    price: 19,
    unit: "month",
  },
  "Company Logo": {
    type: "logo",
    price: 300,
    unit: "once",
  },
  "Domain Registration": {
    type: "domain",
    price: 25,
    unit: "year",
  },
  "Automatic Translation": {
    type: "translate",
    price: 100,
    unit: "once",
  },
  "Basic Contact Form": {
    type: "form",
    price: 10,
    unit: "once",
  },
  "Image Portfolio": {
    type: "portfolio",
    price: 400,
    unit: "once",
  },
  "Live Chat": {
    type: "chat",
    price: 200,
    unit: "once",
  },
  "Secure HTTPS": {
    type: "https",
    price: 175,
    unit: "year",
  },
  "Social Media Feed": {
    type: "social",
    price: 250,
    unit: "once",
  },
};

export const sliders = {
  Pages: {
    type: "pages",
    price: 40,
    unit: "page",
    min: 0,
    max: 20,
    step: 2,
  },
  "Copywriting pages": {
    type: "copywrite",
    price: 10,
    unit: "page",
    min: 0,
    max: 20,
    step: 2,
  },
  Revisions: {
    type: "desrev",
    price: 80,
    unit: "rev",
    min: 0,
    max: 10,
    step: 1,
  },
  Programming: {
    type: "prog",
    price: 125,
    unit: "hour",
    min: 0,
    max: 100,
    step: 10,
  },
};

export const fieldsData = [
  ["text", "Client Name*", "name"],
  ["text", "Company Name*", "company"],
  ["url", "Company URL", "url"],
  ["text", "Company Full Address*", "address"],
  ["email", "Email*", "email"],
  ["phone", "Business Phone*", "phone"],
];

export const designCards = {
  "Design Simple": {
    price: 350,
    description:
      "Beautiful typography, strategic use of colors and graphics, and obstruction-free aesthetics.",
    imgSource: `${process.env.PUBLIC_URL}/design-1.png`,
  },
  "Design Awesome": {
    price: 650,
    description:
      "Effective and evolving design, keeping up with design trends, and best creativity.",
    imgSource: `${process.env.PUBLIC_URL}/design-2.png`,
  },
};

export const websiteTypeCards = {
  "Website Single Page": {
    price: 1200,
    description: [
      "Excellent for paid ad campaigns (Google Ads, Facebook)",
      "Great for small product launches",
      "Often used for lead generation campaigns",
    ],
    imgSource: `${process.env.PUBLIC_URL}/type-1.jpg`,
  },
  "Website CMS": {
    price: 2500,
    description: [
      "Go-to Platform for Service Businesses",
      "Over 100million Site Owners Use Wordpress",
      "Excellent for Content Publishing & SEO Work",
    ],
    imgSource: `${process.env.PUBLIC_URL}/type-2.jpg`,
  },
  "Website E-Commerce": {
    price: 3500,
    description: [
      "Excellent for Content Publishing & SEO Work",
      "Secure Payment Platforms",
      "Refined Product Management Systems",
    ],
    imgSource: `${process.env.PUBLIC_URL}/type-3.jpg`,
  },
};

export const selectedDesignStyle = {
  boxShadow: "rgb(119 119 119) 0px 0px 5px 5px",
};

export const quizHeaderTitles = [
  "Website Type",
  "Choose Design",
  "Choose Services",
  "Checkout",
  "",
];

export const loginFormFields = [
  { name: "email", type: "email", label: "Email" },
  { name: "password", type: "password", label: "Password" },
];
