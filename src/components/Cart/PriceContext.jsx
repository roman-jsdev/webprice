import { createContext, useContext, useState } from "react";

const PriceContext = createContext();

export const usePrice = () => {
  return useContext(PriceContext);
};

export const PriceProvider = ({ children }) => {
  const [price, setPrice] = useState(0);

  const setNewPrice = (newPrice) => {
    setPrice(newPrice);
  };

  const clear = () => setPrice();

  return (
    <PriceContext.Provider
      value={{
        current: price,
        setNewPrice,
        clear,
      }}
    >
      {children}
    </PriceContext.Provider>
  );
};
