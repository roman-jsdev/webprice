import { Button } from "./Button";
import { Input } from "./Input";
import { InputProvider } from "./InputContext";

const buttons = {
  7: null,
  8: null,
  9: null,
  "/": <i className="fas fa-divide"></i>,
  4: null,
  5: null,
  6: null,
  "*": <i className="fas fa-times"></i>,
  1: null,
  2: null,
  3: null,
  "-": <i className="fas fa-minus"></i>,
  0: null,
  ".": null,
  "+": <i className="fas fa-plus"></i>,
  "=": <i className="fas fa-equals"></i>,
  clear: null,
  del: null,
  "(": null,
  ")": null,
  sqrt: <i className="fas fa-square-root"></i>,
  "3,14159": <i className="fas fa-pi"></i>,
  2.71828: "exp",
  "": <i className="fab fa-react"></i>,
};

export const Calculator = () => {
  const gridStyles = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridColumnGap: "10px",
    gridRowGap: "15px",
  };
  return (
    <InputProvider>
      <div className="row">
        <div
          className="col-12 col-md-12 col-lg-8 offset-lg-2 col-xl-4 offset-xl-4 offset-0 bg-dark"
          style={{ borderRadius: 15, padding: "50px" }}
        >
          <div
            className="row bg-light p-4 mb-3"
            style={{ height: 100, overflowX: "scroll", overflowY: "hidden" }}
          >
            <Input />
          </div>
          <div className="row">
            <div className="grid p-0" style={gridStyles}>
              {Object.keys(buttons).map((button, index) => {
                return (
                  <Button key={index} value={button}>
                    {buttons[button] ? buttons[button] : button}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </InputProvider>
  );
};
