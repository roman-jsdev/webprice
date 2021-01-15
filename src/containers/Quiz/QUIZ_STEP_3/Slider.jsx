import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { useCartList } from "../Cart/CartListContext";
import { storage } from "../../../utils";
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSlider(props) {
  const cartList = useCartList();
  const classes = useStyles();
  const [value, setValue] = React.useState(storage(`slider-${props.type}`) || 0);
  const result = useRef();
  const inputRef = useRef(0)

  const array = Array(11)
    .fill(props.step)
    .map((e, i) => (e *= i))
    .slice(0, 10)
    .concat([props.max]);

  const marks = [
    {
      value: array[0],
      label: array[0],
    },
    {
      value: array[1],
      label: array[1],
    },
    {
      value: array[2],
      label: array[2],
    },
    {
      value: array[3],
      label: array[3],
    },
    {
      value: array[4],
      label: array[4],
    },
    {
      value: array[5],
      label: array[5],
    },
    {
      value: array[6],
      label: array[6],
    },
    {
      value: array[7],
      label: array[7],
    },
    {
      value: array[8],
      label: array[8],
    },
    {
      value: array[9],
      label: array[9],
    },
    {
      value: array[10],
      label: array[10],
    },
  ];

  useEffect(() => {
    result.current = value;
    storage(`slider-${props.type}`, result.current);
  });

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeCommitted = () => {
    cartList.nextStep(`${props.title} ${result.current}`);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
    inputRef.current = event.target.value === "" ? "" : Number(event.target.value)
    cartList.nextStep(`${props.title} ${inputRef.current}`);
  };

  return (
    <div className={classes.root} style={{width: '100%'}}>
      <Typography id="discrete-slider" gutterBottom>
        {props.title} (${props.price}/{props.unit})
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={8}>
          <Slider
            defaultValue={0}
            onChange={handleSliderChange}
            onChangeCommitted={() => handleChangeCommitted()}
            value={typeof value === "number" ? value : 0}
            getAriaValueText={valuetext}
            aria-labelledby="input-slider"
            step={props.step}
            marks={marks}
            min={props.min}
            max={props.max}
          />
        </Grid>
        <Grid item xs={3}>
          <Input
            className={classes.input}
            value={typeof value === "number" ? value : 0}
            margin="dense"
            onChange={handleInputChange}
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
