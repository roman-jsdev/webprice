import { useState } from "react";

import { storage, toggleStorage } from "../utils";
import { useCartList } from "../context/CartListContext";
import { ISwitchProps } from "../interfaces/componentsInterfaces";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export default function SwitchesGroup({
  title,
  type,
  price,
  unit,
}: ISwitchProps) {
  const [state, setState] = useState(!!storage(`button-${title}`));
  const { nextStep } = useCartList();

  const toggleSwitch = () => {
    setState(!state);
    toggleStorage(`button-${title}`, true);
    nextStep(title);
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            checked={state}
            onChange={toggleSwitch}
            name={type}
            color="primary"
          />
        }
        label={`${title} ($${price}/${unit})`}
      />
    </FormGroup>
  );
}
