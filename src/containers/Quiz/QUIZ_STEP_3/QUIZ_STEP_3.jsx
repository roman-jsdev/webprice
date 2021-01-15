import DiscreteSlider from "./Slider";
import SwitchesGroup from "./Switch";

const sliders = {
  "Pages": {
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
  "Programming": {
    type: "prog",
    price: 125,
    unit: "hour",
    min: 0,
    max: 100,
    step: 10,
  },
};

const buttons = {
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

export const QUIZ_STEP_3 = () => {
  return (
    <>
      <div className="col-md-6">
        {Object.keys(sliders).map((e, i) => {
          return (
            <div className="row mb-2" key={i}>
              <DiscreteSlider
                title={e}
                type={sliders[e].type}
                price={sliders[e].price}
                unit={sliders[e].unit}
                min={sliders[e].min}
                max={sliders[e].max}
                step={sliders[e].step}
              />
            </div>
          );
        })}
      </div>
      <div className="col-md-6">
        <div className="row">
          {Object.keys(buttons).map((e, i) => {
            return (
              <div className="row" key={i}>
                <SwitchesGroup
                  title={e}
                  type={buttons[e].type}
                  price={buttons[e].price}
                  unit={buttons[e].unit}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
