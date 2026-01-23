import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { Box, IconButton, Tooltip, type Theme } from "@mui/material";
import React, { useContext } from "react";
import type { AppBarMenuProps } from "../../typings/reactComponents";
import ThemedLink from "../shared/ThemedLink";
import { ThemeContext } from "../../theme/context/themeContext";

const AppBarMenu = ({ navItems, handleDrawerToggle }: AppBarMenuProps): React.ReactNode => {
  const { appTheme } = useContext(ThemeContext);

  const logoUrl: string = !appTheme ? 
  "public/icons/personal_logo.png" : 
  "public/icons/personal_logo_light.png";

  return (
    <Box sx={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "space-between" }}>
      <IconButton
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={(theme: Theme) => ({
          mr: 2,
          display: { sm: "none" },
          color: theme?.palette?.primary?.main,
        })}
      >
        <MenuOpenIcon />
      </IconButton>
      <Box
        sx={{
          display: { xs: "none", sm: "flex", alignItems: 'center' },
          gap: 2,
          '& img': { 
            width: '2em', 
          }
        }}
      >
        <Tooltip title={"Lautaro Cantero Logo"}>
          <Box
            component={'img'}
            src={logoUrl}
          />
        </Tooltip>
        {navItems.map((item: string) => (
          <ThemedLink key={item} to={item}>
            {item}
          </ThemedLink>
        ))}
      </Box>
    </Box>
  );
};

export default React.memo(AppBarMenu);
