import { IAuthData } from "./defaultInterfaces";

export interface IHeaderButtonsProps {
  right?: boolean;
  type: string;
  title: string;
}

export interface IWebsiteTypeProps {
  title: string;
  id: string;
  price: number;
  description: string[];
  imgSource: string;
}

export interface ICartButtonProps {
  title: string;
  type: string;
}

export interface IDesignTypeProps {
  title: string;
  price: number;
  description: string;
  imgSource: string;
}

export interface ILoginFormProps {
  setAuthData: (authData: IAuthData) => void;
  submit: boolean;
  setSubmit: (submit: boolean) => void;
}

export interface INavLink {
  exact: boolean;
  title: string;
  to: string;
}

export interface IOrdersGridProps {
  isLoading: boolean;
  response: (object | never)[];
  orderId: string[];
  deleteOrder: (orderId: string) => void;
}

export interface ISliderProps {
  type: string;
  step: number;
  min: number;
  max: number;
  title: string;
  price: number;
  unit: string;
}

export interface ISwitchProps {
  title: string;
  type: string;
  price: number;
  unit: string;
}

export interface IContactField {
  type: string;
  label: string;
  name: string;
}
