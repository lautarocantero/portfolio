import {
  AppBar,
  type Theme,
} from "@mui/material";
import * as React from "react";
import AppBarContentComponent from "./AppBarContent";


const AppBarComponent = (): React.ReactNode => {

  return (
      <AppBar
        component={"nav"}
        data-testid="login-appbar"
        elevation={0}
        position="fixed"
        sx={(theme: Theme) => ({
          backgroundColor: { xs: theme?.custom?.backgroundTranslucid, sm: theme?.custom?.background},
          height: { xs: "auto" },
          width: "100%",
        })}
      >
        <AppBarContentComponent />
      </AppBar>
  );
};

export default AppBarComponent;
