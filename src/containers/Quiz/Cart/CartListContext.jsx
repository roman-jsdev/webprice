import { createContext, useContext, useEffect, useRef, useState } from "react";
import { storage } from "../../../utils";
import { usePrice } from "./PriceContext";
import { priceList } from "./priceList";

const CartListContext = createContext();

export const useCartList = () => useContext(CartListContext);

export const CartListProvider = ({ children }) => {
  const [cartList, setCartList] = useState(storage('cart') || []);
  const totalItems = useRef([]);

  const price = usePrice();

  useEffect(() => {
    let counter = 0;
    totalItems.current = [...cartList];
    Object.keys(priceList).forEach((item) => {
      if (totalItems.current.indexOf(item) !== -1) {
        counter += priceList[item];
      }
      price.setNewPrice(counter);
      storage('cart', cartList)
    });
  });

  const nextStep = (newItem) =>
    setCartList((prev) => {
      const filteredArray = prev.filter((elm) =>
        elm.includes(newItem.substr(0, 5))
      );
      if (filteredArray.length) {
        if (filteredArray.indexOf(newItem) !== -1) {
          return prev.filter((e) => e !== newItem);
        }
        return prev.map((e) => {
          if (e.includes(newItem.substr(0, 5))) {
            e = newItem;
          }
          return e;
        });
      }
      return [...prev, newItem];
    });

  const prevStep = () =>
    setCartList((prev) => {
      const result = prev.splice(-1, 1);
      return result;
    });

  const clearAll = () => setCartList([]);

  return (
    <CartListContext.Provider
      value={{
        list: cartList,
        nextStep,
        clearAll,
        prevStep,
      }}
    >
      {children}
    </CartListContext.Provider>
  );
};
