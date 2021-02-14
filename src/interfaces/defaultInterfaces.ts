export interface IDefaultObject {
  [key: string]: any;
}

export interface IValidateForm {
  email: string;
  address: string;
  name: string;
  company: string;
  phone: string;
}

export interface IErrorsForm {
  email?: string;
  address?: string;
  name?: string;
  company?: string;
  phone?: string;
  password?: string;
}

export interface IValidateLoginForm {
  email: string;
  password: string;
}

export interface IChildren {
  children: React.ReactNode;
}

export interface IAuthState {
  token: string | null;
}

export interface IAuthAction {
  type: string;
  payload: string | null;
}

export interface IContextProps {
  state: IAuthState;
  dispatch: (action: IAuthAction) => void;
}

export interface IAuthData {
  email: string;
  password: string;
  returnSecureToken: boolean;
}

export interface IPriceContext {
  current: number;
  setNewPrice: (price: number) => void;
  clearPrice: () => void;
}

export interface ICartContext {
  list: string[] | never[];
  setCartList: (cartList: string[] | never[]) => void;
  nextStep: (newItem: string) => void;
  clearCartList: () => void;
  currentList: string[] | never[];
}

export interface IProgressContext {
  progress: number;
  setNewProgress: (newProgress: number) => void;
  clearProgress: () => void;
  setCurrentProgress: (currentProgress: number) => void;
}
