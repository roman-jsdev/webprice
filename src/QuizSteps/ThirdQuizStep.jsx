import { servicesButtons, sliders } from "@src/constants";
import DiscreteSlider from "@components/Slider";
import SwitchesGroup from "@components/Switch";

export const ThirdQuizStep = () => (
  <>
    <div className="col-md-6 column-ease-in">
      {Object.keys(sliders).map((slider, index) => (
        <div className="row mb-2" key={index}>
          <DiscreteSlider
            title={slider}
            type={sliders[slider].type}
            price={sliders[slider].price}
            unit={sliders[slider].unit}
            min={sliders[slider].min}
            max={sliders[slider].max}
            step={sliders[slider].step}
          />
        </div>
      ))}
    </div>
    <div className="col-md-6 column-ease-in">
      <div className="row">
        {Object.keys(servicesButtons).map((button, index) => (
          <div className="row" key={index}>
            <SwitchesGroup
              title={button}
              type={servicesButtons[button].type}
              price={servicesButtons[button].price}
              unit={servicesButtons[button].unit}
            />
          </div>
        ))}
      </div>
    </div>
  </>
);
