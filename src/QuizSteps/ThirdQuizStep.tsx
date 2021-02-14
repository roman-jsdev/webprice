import { servicesButtons, sliders } from "../constants";
import SwitchesGroup from "../components/Switch";
import { SliderController } from "../containers/SliderController";

export const ThirdQuizStep = () => (
  <>
    <div className="col-md-6 column-ease-in">
      {Object.keys(sliders).map((slider, index) => (
        <div className="row mb-2" key={index}>
          <SliderController
            title={slider}
            type={sliders[slider as keyof typeof sliders].type}
            price={sliders[slider as keyof typeof sliders].price}
            unit={sliders[slider as keyof typeof sliders].unit}
            min={sliders[slider as keyof typeof sliders].min}
            max={sliders[slider as keyof typeof sliders].max}
            step={sliders[slider as keyof typeof sliders].step}
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
              type={
                servicesButtons[button as keyof typeof servicesButtons].type
              }
              price={
                servicesButtons[button as keyof typeof servicesButtons].price
              }
              unit={
                servicesButtons[button as keyof typeof servicesButtons].unit
              }
            />
          </div>
        ))}
      </div>
    </div>
  </>
);
