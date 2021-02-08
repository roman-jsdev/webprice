import { createContext, useContext, useEffect, useRef, useState } from "react";
import {
  calculateCurrentCartTotalPrice,
  storage,
  updateCurrentCartList,
  nextStepCartListFilter,
} from "@src/utils";
import { usePrice } from "@context/PriceContext";

const CartListContext = createContext();
export const useCartList = () => useContext(CartListContext);

export const CartListProvider = ({ children }) => {
  const [cartList, setCartList] = useState(storage("cart") || []);
  const currentCartList = useRef([]);
  const filteredList = useRef([]);

  const { setNewPrice } = usePrice();

  useEffect(() => {
    let counter = 0;
    currentCartList.current = [...cartList];

    [currentCartList.current, counter] = calculateCurrentCartTotalPrice(
      currentCartList.current,
      counter,
      cartList
    );

    setNewPrice(counter);
    storage("cart", cartList);

    filteredList.current = updateCurrentCartList(cartList);
  });

  const nextStep = (newItem) =>
    setCartList((prevCartList) =>
      nextStepCartListFilter(prevCartList, newItem)
    );

  const clearAll = () => setCartList([]);

  return (
    <CartListContext.Provider
      value={{
        list: cartList,
        set: setCartList,
        nextStep,
        clearAll,
        currentList: filteredList.current,
      }}
    >
      {children}
    </CartListContext.Provider>
  );
};
