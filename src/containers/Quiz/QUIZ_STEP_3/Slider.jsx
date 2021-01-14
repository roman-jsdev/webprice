import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { useCartList } from "../Cart/CartListContext";
import { storage } from "../../../utils";

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
  const [value, setValue] = React.useState(storage(`slider-${props.type}`));
  const result = useRef();

  const array = Array(11)
    .fill(props.step)
    .map((e, i) => (e *= i))
    .slice(1, 11)
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

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    result.current = value;
    storage(`slider-${props.type}`, result.current);
  });

  const handleChangeCommitted = () => {
    cartList.nextStep(`${props.title} ${result.current}`);
  };

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        {props.title} (${props.price}/{props.unit})
      </Typography>
      <Slider
        defaultValue={0}
        onChange={handleSliderChange}
        onChangeCommitted={() => handleChangeCommitted()}
        value={typeof value === "number" ? value : 0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        step={props.step}
        marks={marks}
        min={props.min}
        max={props.max}
      />
    </div>
  );
}
