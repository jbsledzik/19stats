import { IAction, IState } from "../types/context";
import { ICountry } from "../types/api";

const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case "SET_COUNTRIES":
      return {
        countries: action.payload as ICountry[],
      };
    default:
      throw new Error();
  }
};

export default reducer;
