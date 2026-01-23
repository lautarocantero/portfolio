
import { Box, Toolbar } from "@mui/material";
import React, { useState } from "react";
import { navItems } from "../../helpers/AppBar/AppBarItems";
import { handleDrawerToggle } from "../../helpers/AppBar/handleDrawerToggle";
import LightModeComponent from "../LightMode/LightModeComponent";
import AppBarMenu from "./AppBarMenu";
import AppBarMobileDrawer from "./AppBarMobileDrawer";

const AppBarContentComponent = (): React.ReactNode => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  return (
    <Toolbar>
      <Box sx={{ 
        display: "flex", 
        alignItems: 'center',
        justifyContent: 'space-between', 
        width: "100%",
      }}
      >

          {/*─────────────────── 🔎 Botón hamburguesa en mobile 🔎 ───────────────────*/}
          {/*─────────────────── 🔎 Botones visibles en desktop 🔎 ───────────────────*/}
          <AppBarMenu handleDrawerToggle={ () => handleDrawerToggle({setMobileOpen})} navItems={navItems} />

          {/*─────────────────── 🔎 Modo nocturno 🔎 ───────────────────*/}
          <LightModeComponent />
      </Box>
        {/*─────────────────── 🔎 Menu lateral mobile 🔎 ───────────────────*/}
        <AppBarMobileDrawer 
          navItems={navItems} 
          mobileOpen={mobileOpen} 
          handleDrawerToggle={ () => handleDrawerToggle({setMobileOpen})} 
        />
    </Toolbar>
  );
};

export default AppBarContentComponent;
