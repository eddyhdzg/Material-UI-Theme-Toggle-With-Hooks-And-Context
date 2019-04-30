import { createContext } from "react";

export const defaultContext = {
  color: "blue",
  type: "light",
  unit: 8,
  fontSize: 14,
  options: {
    color: ["blue", "orange", "red", "pink"],
    type: ["light", "dark"],
    unit: [6, 8, 12, 14, 16],
    fontSize: [12, 14, 16, 20]
  },
  handleConfigVarChange: () => {}
};

export const { Provider, Consumer } = createContext(defaultContext);
