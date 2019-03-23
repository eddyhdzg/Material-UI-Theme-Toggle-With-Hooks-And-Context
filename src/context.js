import { createContext } from "react";

export const defaultContext = {
  color: "blue",
  type: "light",
  unit: 8,
  options: {
    color: ["blue", "orange", "red"],
    type: ["light", "dark"],
    unit: [6, 8, 12, 14, 16]
  },
  handleConfigVarChange: () => {}
};

export const { Provider, Consumer } = createContext(defaultContext);
