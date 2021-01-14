import { createContext, useContext, useEffect, useRef, useState } from "react";
import { usePrice } from "./PriceContext";
import { priceList } from "./priceList";

const CartListContext = createContext();

export const useCartList = () => useContext(CartListContext);

export const CartListProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [cartListItem, setCartListItem] = useState([]);
  const totalItems = useRef([]);

  const price = usePrice();

  const addItem = (value) => {
    setCartListItem((prev) => {
      if (prev.indexOf(value) === -1) {
        return [value];
      } else {
        return [];
      }
    });
  };

  useEffect(() => {
    let counter = 0;
    totalItems.current = [...cartListItem, ...cartList];
    Object.keys(priceList).forEach((item) => {
      if (totalItems.current.indexOf(item) !== -1) {
        counter += priceList[item];
      }
      price.setNewPrice(counter);
    });
  });

  const nextStep = () =>
    setCartList((prev) => {
      return [].concat.apply([], [...prev, cartListItem]);
    });

  const prevStep = () =>
    setCartList((prev) => {
      const result = prev.splice(-1, 1);
      setCartListItem([]);
      return result;
    });

  const clear = () => setCartListItem([]);
  const clearAll = () => setCartList([]);

  return (
    <CartListContext.Provider
      value={{
        list: cartList,
        item: cartListItem,
        addItem,
        nextStep,
        clear,
        clearAll,
        prevStep,
      }}
    >
      {children}
    </CartListContext.Provider>
  );
};
