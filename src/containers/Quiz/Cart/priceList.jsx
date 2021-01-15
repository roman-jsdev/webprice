export const calcPrice = (list, item, amount) => {
  let counter = 0;
  Object.keys(list).forEach((e) => {
    if (e === item) {
      counter = list[item] * amount;
    }
  });
  return counter;
};

export const priceList = {
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
