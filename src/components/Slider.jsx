import { useEffect, useRef, useState } from "react";
import { useCartList } from "@context/CartListContext";
import { storage, getSliderMarks } from "@src/utils";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

export default function DiscreteSlider({
  type,
  step,
  min,
  max,
  title,
  price,
  unit,
}) {
  const { nextStep } = useCartList();
  const { root, input } = useStyles();
  const [value, setValue] = useState(storage(`slider-${type}`) || 0);
  const inputRef = useRef(0);
  const inputRefSelect = useRef();

  useEffect(() => {
    storage(`slider-${type}`, value);
  }, [type, value]);

  const marks = getSliderMarks(step, max);

  const changeSliderValue = (_, newValue) => setValue(newValue);
  const sliderChangeCommitted = () => nextStep(`${title} ${value}`);

  const changeInputValue = ({ target: { value: sliderValue } }) => {
    setValue(Number(sliderValue));
    inputRef.current = Number(sliderValue);
    nextStep(`${title} ${inputRef.current}`);
  };
  const focusInput = () => inputRefSelect.current.firstElementChild.select();

  return (
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
            className={input}
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
}
