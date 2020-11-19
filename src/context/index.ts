import { createContext } from "react";

import { IContextProps } from "types/context";

const AppContext = createContext({} as IContextProps);

export default AppContext;
