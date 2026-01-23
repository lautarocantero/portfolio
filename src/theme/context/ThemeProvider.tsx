import { useState } from "react";
import { ThemeContext } from "./themeContext";

export const ThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [appTheme, setAppTheme] = useState<boolean>(() => {
    const stored = localStorage.getItem("appTheme");
    return stored !== null ? JSON.parse(stored) : true;
  });
  return (
    <ThemeContext.Provider value={{ appTheme, setAppTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};