import { Drawer } from "@mui/material";
import React from "react";
import type { AppBarMobileDrawerInterface } from "../../typings/reactComponents";
import DrawerContentComponent from "./DrawerContent";

const drawerWidth = 240;

const AppBarMobileDrawer = ({navItems, mobileOpen, handleDrawerToggle} : AppBarMobileDrawerInterface ) => {
  
  return (
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, /*─────────────────── 🔎 mejor rendimiento en mobile 🔎 ───────────────────*/
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <DrawerContentComponent
          handleDrawerToggle={handleDrawerToggle} 
          navItems={navItems} 
        />
      </Drawer>
  )
}

export default React.memo(AppBarMobileDrawer);