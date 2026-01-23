import { Box, type Theme } from "@mui/material";
import { ThemeContext } from "../../theme/context/themeContext";
import { useContext } from "react";

const PresentationPhoto = (): React.ReactNode => {
  const { appTheme } = useContext(ThemeContext);

  const photoUrl: string = appTheme ? 
    "public/images/foto_perfil/foto_perfil2.jpeg" : 
    "public/images/foto_perfil/foto_perfil1.jpeg";

  return (
    <Box
      sx={{
        position: "relative",
        width: { xs: "9em", sm: '10em'},
        height: { xs: "9em", sm: '10em'},
        margin: "auto",
      }}
    >
      <Box
        component={'div'}
        sx={(theme: Theme) => ({
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius: "5%",
          transform: "rotate(6deg)",
          zIndex: 0,
          backgroundColor: theme?.palette?.primary?.main,
        })}
      />

       {/*─────────────────── 🔎 capas  🔎 ───────────────────*/}
      <Box
        sx={(theme: Theme) => ({
          position: "absolute",
          top: "0.5em",
          left: "0.5em",
          width: "100%",
          height: "100%",
          background: theme?.custom?.backgroundDark,
          borderRadius: "5%",
          transform: "rotate(-6deg)",
          zIndex: 0,
        })}
      />

      {/*─────────────────── 🔎 Foto principal  🔎 ───────────────────*/}
      <Box
        key={photoUrl} 
        component="img"
        src={photoUrl}
        alt="Foto de perfil"
        className={`animate__animated animate__pulse`}
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: "5%",
          objectFit: "cover",
          zIndex: 1,
        }}
      />
    </Box>
  );
};

export default PresentationPhoto;
