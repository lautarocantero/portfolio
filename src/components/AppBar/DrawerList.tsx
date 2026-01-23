import { ListItem, ListItemButton } from "@mui/material";
import React from "react";
import type { DrawerListType } from "../../typings/reactComponents";
import ThemedLink from "../shared/ThemedLink";

const DrawerListComponent = ({navItems} : DrawerListType ):React.ReactNode => {

    return(
        <>
            {navItems.map((item: string) => (
              <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ThemedLink to={item} children={item}/>
                </ListItemButton>
              </ListItem>
            ))}
        </>
    )
};
        
export default React.memo(DrawerListComponent);