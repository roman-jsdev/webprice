import { useInput } from "./InputContext";

export const Button = (props) => {
  const input = useInput();

  const clickHandler = (value) => {
    input.changeInput(value);
    if (value === "=") {
      input.calc();
    } else if (value === "clear") {
      input.clear();
    } else if (value === "del") {
      input.del();
    } else if (value === "sqrt") {
      input.sqrt();
    }
  };

  return (
    <div
      className="btn btn-light fs-4 fw-bold"
      value={props.value}
      onClick={() => clickHandler(props.value)}
    >
      {props.children}
    </div>
  );
};
