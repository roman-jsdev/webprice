import { Fragment } from "react";

import { priceList, quizHeaderTitles } from "./constants";
import {
  IErrorsForm,
  IDefaultObject,
  IValidateForm,
  IValidateLoginForm,
} from "./interfaces/defaultInterfaces";

export const storage = (key: string, data: any = null) => {
  if (!data) return JSON.parse(sessionStorage.getItem(key)!);
  sessionStorage.setItem(key, JSON.stringify(data));
};

export const stringsToObjectsArrayMap = (initialArray: string[]) =>
  initialArray.map((stringItem) => {
    const str = stringItem.split(/[\s,]+/);
    return {
      [str[0]]: str[str.length - 1],
    };
  });

export const calculatePrice = (
  priceList: IDefaultObject,
  currentCartItem: string,
  amount: number
) => {
  let counter = 0;
  Object.keys(priceList).forEach((priceListElement) => {
    if (priceListElement === currentCartItem) {
      counter = priceList[priceListElement] * amount;
    }
  });
  return counter;
};

export const calculatePriceForNumerableItems = (
  currentCartList: IDefaultObject[],
  counter: number
) => {
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

export const calculatePriceForOrderList = (orderElement: string) => {
  let counter = 0;
  return calculatePriceForNumerableItems(
    stringsToObjectsArrayMap([orderElement]),
    counter
  );
};

export const calculatePriceForDefaultItems = (
  currentCartList: string[],
  counter: number
) => {
  Object.keys(priceList).forEach((priceListItem) => {
    if (currentCartList.indexOf(priceListItem) !== -1) {
      counter += priceList[priceListItem];
    }
  });
  return counter;
};

export const calculateCurrentCartTotalPrice = (
  currentCartList: string[],
  counter: number
) => {
  const currentCartObjectsList = stringsToObjectsArrayMap(currentCartList);
  counter = calculatePriceForNumerableItems(currentCartObjectsList, counter);
  counter = calculatePriceForDefaultItems(currentCartList, counter);
  return counter;
};

export const updateCurrentCartList = (stateCartList: string[]) =>
  stateCartList.filter(
    (cartListItem) => Number(cartListItem.split(/[, ]+/).pop()) !== 0
  );

export const nextStepCartListFilter = (
  prevCartList: string[],
  newCartListElement: string
) => {
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

export const toggleStorage = (key: string, value: any) =>
  storage(key) === value ? sessionStorage.removeItem(key) : storage(key, value);

export const getQuizHeaderTitle = (progress: number) => {
  switch (progress) {
    case 0:
      return quizHeaderTitles[0];
    case 25:
      return quizHeaderTitles[1];
    case 50:
      return quizHeaderTitles[2];
    case 75:
      return quizHeaderTitles[3];
    case 100:
      return quizHeaderTitles[4];
    default:
      break;
  }
};

export const getSliderMarks = (step: number, max: number) =>
  Array(11)
    .fill(step)
    .map((e, i) => (e *= i))
    .slice(0, 10)
    .concat([max])
    .map((e) => ({
      value: e,
      label: e,
    }));

export const validateOrderForm = ({
  email,
  address,
  name,
  company,
  phone,
}: IValidateForm) => {
  const errors: IErrorsForm = {};
  if (!email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = "Invalid email address";
  }
  if (!address) {
    errors.address = "Required";
  }
  if (!name) {
    errors.name = "Required";
  }
  if (!company) {
    errors.company = "Required";
  }
  if (!phone) {
    errors.phone = "Required";
  } else if (
    !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(phone)
  ) {
    errors.phone = "Invalid phone";
  }
  return errors;
};

export const validateLoginForm = ({ email, password }: IValidateLoginForm) => {
  const errors: IErrorsForm = {};
  if (!email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = "Invalid email address";
  }
  if (!password) {
    errors.password = "Required";
  }
  return errors;
};

export const getOrderFormInitialValues = (
  cart: string[],
  totalPrice: number
) => ({
  email: "",
  address: "",
  name: "",
  company: "",
  url: "",
  phone: "",
  cart,
  _total_price_: `$${totalPrice}`,
});

export const getOrderId = (orderData: IDefaultObject) =>
  Object.keys(orderData).map((order) => order.split("-").pop()) as string[];

export const getOrderBody = (orderData: IDefaultObject) =>
  Object.keys(orderData).map((order) => orderData[order]);

export const splitArrayToNewLine = (array: string[]) =>
  array.map((arrayElement, index) => (
    <Fragment key={index}>
      {arrayElement}
      <br />
    </Fragment>
  ));
