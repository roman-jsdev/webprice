import { servicesButtons, sliders } from "@src/constants";
import DiscreteSlider from "@components/Slider";
import SwitchesGroup from "@components/Switch";

export const ThirdQuizStep = () => {
  return (
    <>
      <div className="col-md-6 column-ease-in">
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
      <div className="col-md-6 column-ease-in">
        <div className="row">
          {Object.keys(servicesButtons).map((e, i) => {
            return (
              <div className="row" key={i}>
                <SwitchesGroup
                  title={e}
                  type={servicesButtons[e].type}
                  price={servicesButtons[e].price}
                  unit={servicesButtons[e].unit}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
