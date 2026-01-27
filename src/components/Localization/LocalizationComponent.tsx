
// # Componente: LightMode  

// ## Descripción 📦  
// Componente que permite alternar entre modo claro y oscuro en la aplicación.  
// Utiliza el `ThemeContext` para acceder y modificar el estado global del tema (`appTheme`).  
// Al hacer clic, invierte el valor del tema y lo guarda en `localStorage` para persistencia entre sesiones.  

// ## Lógica 🔧  
// - `useContext(ThemeContext)`: obtiene `appTheme` y `setAppTheme`.  
// - `onClick`:  
//   - Cambia el valor de `appTheme` (`true/false`).  
//   - Actualiza `localStorage` con el nuevo estado.  
// - Íconos:  
//   - `Brightness4`: representa el modo claro.  
//   - `ModeNight`: representa el modo oscuro.  
//   - El color de cada ícono depende del estado actual (`appTheme`).  

// ## Renderizado 🎨  
// - Contenedor `Grid`:  
//   - Fondo translúcido (`blackTranslucid` o fallback rgba).  
//   - Bordes redondeados, cursor tipo puntero y espaciado interno.  
//   - Diseño flexible con íconos alineados horizontalmente.  
// - Íconos adaptados al tema:  
//   - Se colorean dinámicamente según el estado (`appTheme`).  
//   - Tamaño reducido para integrarse en la UI sin ocupar demasiado espacio.  

// ## Notas técnicas 💽  
// - Persistencia: el estado del tema se guarda en `localStorage` para mantener la preferencia del usuario.  
// - Accesibilidad: incluye `aria-label="cambiar modo de tema"`.  
// - Se integra en layouts o toolbars como control de personalización visual.  


import { Grid, type Theme } from "@mui/material";
import React, { useCallback } from "react";
import LangButtonComponent from "./LangButtonComponent";
import { useTranslation } from "react-i18next";
import { LanguagesEnum } from "../../typings/types/enums";
import { languageToggle } from "./helpers/handleChangeLanguage";

const LocalizationComponent = (): React.ReactNode => {
  const { i18n } = useTranslation();
  

  const memorizedLanguageHandler = useCallback(() => {
    const nextLang =
      i18n.language === LanguagesEnum.Spanish
        ? LanguagesEnum.English
        : LanguagesEnum.Spanish;


    languageToggle({lng: nextLang});
  }, [i18n]);

  return (
    <Grid
      container 
      flexDirection="row" 
      alignItems="center" 
      justifyContent="center"
      aria-label="cambiar idioma"
      sx={(theme: Theme) => ({
        backgroundColor: theme?.custom?.blackTranslucid || "rgba(0,0,0,0.6)",
        borderRadius: "1em",
        cursor: "pointer",
        gap: 1,
        height: '2em',
        minWidth: '2em',
        marginRight: { xs: '0.5em',}
      })}
      onClick={memorizedLanguageHandler}
    >
        <LangButtonComponent />
    </Grid>
  );
};

export default React.memo(LocalizationComponent);
