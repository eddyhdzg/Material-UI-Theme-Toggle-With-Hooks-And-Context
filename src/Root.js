import React, { useState } from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import * as colors from "@material-ui/core/colors";
import { defaultContext, Provider } from "./context";
import App from "./App";

const AppProvider = () => {
  const [context, setContext] = useState(defaultContext);

  const handleConfigVarChange = name => ({ target: { value } }) => {
    setContext({ ...context, [name]: value });
  };

  const { type, color, unit } = context;

  const theme = createMuiTheme({
    palette: {
      type,
      primary: colors[color]
    },
    spacing: {
      unit
    }
  });

  return (
    <Provider
      value={{
        ...context,
        handleConfigVarChange
      }}
    >
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Provider>
  );
};

export default AppProvider;
