import { createContext, useContext, useEffect, useRef, useState } from "react";
import { storage } from "../../../utils";
import { usePrice } from "./PriceContext";
import { calcPrice, priceList } from "./priceList";

const CartListContext = createContext();

export const useCartList = () => useContext(CartListContext);

export const CartListProvider = ({ children }) => {
  const [cartList, setCartList] = useState(storage("cart") || []);
  const totalItems = useRef([]);
  const filteredList = useRef([]);

  const price = usePrice();

  useEffect(() => {
    let counter = 0;
    totalItems.current = [...cartList];
    const arr = [];

    totalItems.current.forEach((e) => {
      const str = e.split(/[\s,]+/);
      const obj = {
        [str[0]]: str[str.length - 1],
      };
      arr.push(obj);
    });

    arr.forEach((e) => {
      Object.keys(e).forEach((i) => {
        if (!isNaN(Number(e[i]))) {
          const fromList = calcPrice(priceList, i, Number(e[i]));
          counter += fromList;
        }
      });
    });

    Object.keys(priceList).forEach((item) => {
      if (totalItems.current.indexOf(item) !== -1) {
        counter += priceList[item];
      }
      price.setNewPrice(counter);
      storage("cart", cartList);
    });

    filteredList.current = cartList.filter(
      (e) => Number(e.split(/[, ]+/).pop()) !== 0
    );
  });

  const nextStep = (newItem) =>
    setCartList((prev) => {
      const filteredArray = prev.filter((e) =>
        e.includes(newItem.substr(0, 5))
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

  const clearAll = () => setCartList([]);

  return (
    <CartListContext.Provider
      value={{
        list: cartList,
        nextStep,
        clearAll,
        currentList: filteredList.current,
      }}
    >
      {children}
    </CartListContext.Provider>
  );
};
