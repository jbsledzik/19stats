import { ICountry } from "./api";

export interface IProviderProps {
  children: JSX.Element | JSX.Element[];
}

export interface IState {
  countries: ICountry[];
}

export interface IAction {
  type: string;
  payload: object;
}

export interface IContextProps {
  state: IState;
  dispatch: (action: IAction) => void;
}
