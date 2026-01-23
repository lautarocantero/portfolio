import type { handleDrawerToggleInterface } from "../../../typings/types";


export const handleDrawerToggle = ({setMobileOpen}: handleDrawerToggleInterface ) => {
   setMobileOpen((prevState: boolean) => !prevState);
};