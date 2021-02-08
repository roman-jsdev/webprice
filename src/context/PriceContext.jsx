import { createContext, useContext, useState } from "react";

const PriceContext = createContext();

export const usePrice = () => {
  return useContext(PriceContext);
};

export const PriceProvider = ({ children }) => {
  const [price, setPrice] = useState(0);
  const setNewPrice = setPrice;
  const clearPrice = () => setPrice(0);

  return (
    <PriceContext.Provider
      value={{
        current: price,
        setNewPrice,
        clearPrice,
      }}
    >
      {children}
    </PriceContext.Provider>
  );
};
