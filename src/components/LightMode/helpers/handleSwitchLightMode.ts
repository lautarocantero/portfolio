import type { handleToggleThemeInterface } from "../../../typings/types";

export const handleToggleTheme = ({setAppTheme} : handleToggleThemeInterface ) : void => {
  setAppTheme((prev: boolean) => {
    const newTheme: boolean = !prev;
    localStorage.setItem("appTheme", JSON.stringify(newTheme));
    return newTheme;
  });
};
