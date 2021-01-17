import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { useState } from "react";
import { storage } from "../../../utils";
import { useCartList } from "../Cart/CartListContext";

export default function SwitchesGroup(props) {
  const [state, setState] = useState(!!storage(`button-${props.title}`));
  const cartList = useCartList();

  const handleChange = (event) => {
    setState(!state);
    storage(`button-${props.title}`) === true
      ? sessionStorage.removeItem(`button-${props.title}`)
      : storage(`button-${props.title}`, true);
    cartList.nextStep(props.title);
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            checked={state}
            onChange={handleChange}
            name={props.type}
            color="primary"
          />
        }
        label={props.title + ` ($${props.price}/${props.unit})`}
      />
    </FormGroup>
  );
}
