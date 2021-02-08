import { useState } from "react";
import { storage, toggleStorage } from "@src/utils";
import { useCartList } from "@context/CartListContext";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export default function SwitchesGroup({ title, type, price, unit }) {
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
