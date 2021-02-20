import { useEffect, useRef, useState } from "react";

import { useCartList } from "../context/CartListContext";
import { storage, getSliderMarks } from "../utils";
import { ISliderProps } from "../interfaces/componentsInterfaces";
import { DiscreteSlider } from "../components/Slider";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

export const SliderController = ({
  type,
  step,
  min,
  max,
  title,
  price,
  unit,
}: ISliderProps) => {
  const { nextStep } = useCartList();
  const { root } = useStyles();
  const [value, setValue] = useState<number | number[]>(
    Number(storage(`slider-${type}`)) || 0
  );
  const inputRef = useRef(0);
  const inputRefSelect = useRef<HTMLInputElement>(null!);

  useEffect(() => storage(`slider-${type}`, value), [type, value]);

  const marks = getSliderMarks(step, max);

  const changeSliderValue = (event: any, newValue: number | number[]) =>
    setValue(newValue);
  const sliderChangeCommitted = () => nextStep(`${title} ${value}`);

  const changeInputValue = ({
    target: { value: sliderValue },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(sliderValue));
    inputRef.current = Number(sliderValue);
    nextStep(`${title} ${inputRef.current}`);
  };
  const focusInput = () => {
    const inputChild = inputRefSelect.current
      .firstElementChild as HTMLInputElement;
    if (inputChild) {
      inputChild.select();
    }
  };

  return (
    <DiscreteSlider
      root={root}
      title={title}
      price={price}
      unit={unit}
      changeSliderValue={changeSliderValue}
      sliderChangeCommitted={sliderChangeCommitted}
      value={value}
      step={step}
      marks={marks}
      min={min}
      max={max}
      inputRefSelect={inputRefSelect}
      changeInputValue={changeInputValue}
      focusInput={focusInput}
    />
  );
};
