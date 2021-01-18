import { buttons } from "./buttons";
import DiscreteSlider from "./Slider";
import { sliders } from "./sliders";
import SwitchesGroup from "./Switch";

export const QUIZ_STEP_3 = () => {
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
