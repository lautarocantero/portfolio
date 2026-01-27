import { Box, Divider, List, type Theme } from "@mui/material";
import React, { useContext } from "react";
import type { DrawerContentType } from "../../typings/reactComponents";
import DrawerListComponent from "./DrawerList";
import { ThemeContext } from "../../theme/context/themeContext";
import ThemedLink from "../shared/ThemedLink";

const DrawerContentComponent = ({ handleDrawerToggle, navItems} : DrawerContentType ):React.ReactNode => {
  const { appTheme } = useContext(ThemeContext);

  const logoUrl: string = !appTheme ? 
  "public/icons/personal_logo.png" : 
  "public/icons/personal_logo_light.png";

  return(
      <Box 
        onClick={handleDrawerToggle} 
        sx={(theme: Theme) => ({ 
          textAlign: "center",
          backgroundColor: theme?.custom?.background,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          '& img': { 
            alignSelf: 'center', 
            width: '20%', 
          }
        })}
      >
        <ThemedLink  key={logoUrl} to={"Inicio"}>
          <Box
            component={'img'}
            src={logoUrl}
          />
        </ThemedLink>
        <Divider />
        <List>
          <DrawerListComponent navItems={navItems}/>
        </List>
      </Box>
    )
};
        
export default React.memo(DrawerContentComponent);