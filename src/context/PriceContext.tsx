import { createContext, useContext, useState } from "react";

import { IChildren, IPriceContext } from "../interfaces/defaultInterfaces";

const PriceContext = createContext({} as IPriceContext);

export const usePrice = () => useContext(PriceContext)

export const PriceProvider = ({ children }: IChildren) => {
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
