import { priceList } from "./constants";

export function storage(key, data = null) {
  if (!data) return JSON.parse(sessionStorage.getItem(key));
  return sessionStorage.setItem(key, JSON.stringify(data));
}

export const stringsToObjectsArrayMap = (initialArray) =>
  initialArray.map((stringItem) => {
    const str = stringItem.split(/[\s,]+/);
    return {
      [str[0]]: str[str.length - 1],
    };
  });

export const calculatePrice = (priceList, currentCartItem, amount) => {
  let counter = 0;
  Object.keys(priceList).forEach((priceListElement) => {
    if (priceListElement === currentCartItem) {
      counter = priceList[currentCartItem] * amount;
    }
  });
  return counter;
};

export const calculatePriceForNumerableItems = (currentCartList, counter) => {
  currentCartList.forEach((cartItemObject) => {
    Object.keys(cartItemObject).forEach((cartItem) => {
      if (!isNaN(Number(cartItemObject[cartItem]))) {
        const currentPrice = calculatePrice(
          priceList,
          cartItem,
          Number(cartItemObject[cartItem])
        );
        counter += currentPrice;
      }
    });
  });
  return counter;
};

export const calculatePriceForDefaultItems = (currentCartList, counter) => {
  Object.keys(priceList).forEach((priceListItem) => {
    if (currentCartList.indexOf(priceListItem) !== -1) {
      counter += priceList[priceListItem];
    }
  });
  return counter;
};

export const calculateCurrentCartTotalPrice = (currentCartList, counter) => {
  const currentCartObjectsList = stringsToObjectsArrayMap(currentCartList);
  counter = calculatePriceForNumerableItems(currentCartObjectsList, counter);
  counter = calculatePriceForDefaultItems(currentCartList, counter);
  return [currentCartList, counter];
};

export const updateCurrentCartList = (stateCartList) =>
  stateCartList.filter(
    (cartListItem) => Number(cartListItem.split(/[, ]+/).pop()) !== 0
  );

export const nextStepCartListFilter = (prevCartList, newCartListElement) => {
  const filteredPrevCartList = prevCartList.filter((prevCartListElement) =>
    prevCartListElement.includes(newCartListElement.substr(0, 5))
  );
  if (filteredPrevCartList.length) {
    if (filteredPrevCartList.indexOf(newCartListElement) !== -1) {
      return prevCartList.filter(
        (prevCartListElement) => prevCartListElement !== newCartListElement
      );
    }
    return prevCartList.map((prevCartListElement) => {
      if (prevCartListElement.includes(newCartListElement.substr(0, 5))) {
        prevCartListElement = newCartListElement;
      }
      return prevCartListElement;
    });
  }
  return [...prevCartList, newCartListElement];
};
