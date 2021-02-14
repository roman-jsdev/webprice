import { ICSlider } from "./../interfaces/containersInterfaces";

import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";

export const DiscreteSlider = ({
  root,
  title,
  price,
  unit,
  changeSliderValue,
  sliderChangeCommitted,
  value,
  step,
  marks,
  min,
  max,
  inputRefSelect,
  changeInputValue,
  focusInput,
}: ICSlider) => (
  <div className={root} style={{ width: "100%" }}>
    <Typography id="discrete-slider" gutterBottom>
      {title} (&#36;{price}/{unit})
    </Typography>
    <Grid container spacing={5}>
      <Grid item xs={8}>
        <Slider
          color="primary"
          defaultValue={0}
          onChange={changeSliderValue}
          onChangeCommitted={sliderChangeCommitted}
          value={value}
          aria-labelledby="input-slider"
          step={step}
          marks={marks}
          min={min}
          max={max}
        />
      </Grid>
      <Grid item xs={3}>
        <Input
          value={value}
          margin="dense"
          ref={inputRefSelect}
          onChange={changeInputValue}
          onFocus={focusInput}
          inputProps={{
            step: 10,
            min: 0,
            type: "number",
            "aria-labelledby": "input-slider",
          }}
        />
      </Grid>
    </Grid>
  </div>
);
