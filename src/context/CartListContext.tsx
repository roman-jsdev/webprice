import { createContext, useContext, useEffect, useRef, useState } from "react";

import {
  calculateCurrentCartTotalPrice,
  storage,
  updateCurrentCartList,
  nextStepCartListFilter,
} from "../utils";
import { usePrice } from "../context/PriceContext";
import { ICartContext, IChildren } from "../interfaces/defaultInterfaces";

const CartListContext = createContext({} as ICartContext);
export const useCartList = () => useContext(CartListContext);

export const CartListProvider = ({ children }: IChildren) => {
  const [cartList, setCartList] = useState<string[]>(storage("cart") || []);
  const currentCartList = useRef<(string | never)[]>([]);
  const filteredList = useRef<(string | never)[]>([]);

  const { setNewPrice } = usePrice();

  useEffect(() => {
    let counter = 0;
    currentCartList.current = [...cartList];

    counter = calculateCurrentCartTotalPrice(currentCartList.current, counter);

    setNewPrice(counter);
    storage("cart", cartList);

    filteredList.current = updateCurrentCartList(cartList);
  });

  const nextStep = (newItem: string) =>
    setCartList((prevCartList) =>
      nextStepCartListFilter(prevCartList, newItem)
    );

  const clearCartList = () => {
    currentCartList.current = [];
    filteredList.current = [];
    setCartList([]);
  };

  return (
    <CartListContext.Provider
      value={{
        list: cartList,
        setCartList,
        nextStep,
        clearCartList,
        currentList: filteredList.current,
      }}
    >
      {children}
    </CartListContext.Provider>
  );
};
