import { createContext, useContext, useState } from "react";

const CartListContext = createContext();

export const useCartList = () => useContext(CartListContext);

export const CartListProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [cartListItem, setCartListItem] = useState([]);

  const addItem = (value) => {
    setCartListItem((prev) => {
      if (prev.indexOf(value) === -1) {
        return [value];
      } else {
        return [];
      }
    });
  };

  const nextStep = () => setCartList((prev) => [...prev, cartListItem]);
  const prevStep = () => setCartList((prev) => [...prev.pop()]);

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
