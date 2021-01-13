import { createContext, useContext, useState } from "react";

export const InputContext = createContext();

export const useInput = () => useContext(InputContext);

export const InputProvider = ({ children }) => {
  const [input, setInput] = useState("");

  const changeInput = (value) => {
    setInput((prev) => prev + value);
  };

  const calc = () => {
    const re = /[a-zA-Z]/g;
    if (re.test(input)) {
      return;
    } else {
      try {
        // eslint-disable-next-line no-eval
        const result = eval(input);
        if (Number.isInteger(result)) {
          setInput(result);
        } else {
          const x = Math.floor(result * 10000) / 10000;
          const y = x.toFixed(5);
          if (y.includes("NaN")) {
            setInput("");
          } else {
            setInput(y);
          }
        }
      } catch (e) {
        console.log("Error in calcs", e);
        setInput("Error");
        setTimeout(() => {
          setInput("");
        }, 1000);
      }
    }
  };

  const clear = () => {
    setInput("");
  };

  const del = () => {
    if (input.length) {
      const result = input.slice(0, -1);
      setInput(result);
    } else {
      setInput("");
    }
  };

  const sqrt = () => {
    if (input.length && !isNaN(input)) {
      const result = Math.sqrt(input);
      setInput(result);
    } else {
      setInput("");
    }
  };

  return (
    <InputContext.Provider
      value={{
        value: input,
        changeInput,
        calc,
        clear,
        del,
        sqrt,
      }}
    >
      {children}
    </InputContext.Provider>
  );
};
