import { Box, keyframes, type Theme } from "@mui/material";
import { ThemeContext } from "../../theme/context/themeContext";
import { useContext } from "react";

const rotateSlow = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const PresentationPhoto = (): React.ReactNode => {
  const { appTheme } = useContext(ThemeContext);

  const photoUrl: string = appTheme
    ? "public/images/foto_perfil/profile_image.png"
    : "public/images/foto_perfil/profile_image.png";

  return (
    <Box
      sx={{
        position: "relative",
        width: { xs: "9em", sm: "10em" },
        height: { xs: "9em", sm: "10em" },
        margin: "auto",
      }}
    >
      {/*─────────────────── 🔎 capas animadas 🔎 ───────────────────*/}
      <Box
        component="div"
        sx={(theme: Theme) => ({
          position: "absolute",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          zIndex: 0,
          backgroundColor: theme?.palette?.primary?.main,
          boxShadow: "15px 10px 10px rgba(0, 0, 0, 0.36)",
        })}
      />

      <Box
        sx={(theme: Theme) => ({
          position: "absolute",
          width: "100%",
          height: "100%",
          background: theme?.custom?.backgroundDark,
          borderRadius: "25%",
          zIndex: 0,
          animation: `${rotateSlow} 30s linear infinite reverse`,
          boxShadow: "15px 10px 10px rgba(0, 0, 0, 0.36)",
        })}
      />

      <Box
        sx={(theme: Theme) => ({
          position: "absolute",
          width: "100%",
          height: "100%",
          background: theme?.custom?.backgroundDark,
          borderRadius: "25%",
          zIndex: 0,
          animation: `${rotateSlow} 40s linear infinite`,
          boxShadow: "15px 10px 10px rgba(0, 0, 0, 0.36)",
        })}
      />

      {/*─────────────────── 🔎 Foto principal 🔎 ───────────────────*/}
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
          borderRadius: "50%",
          objectFit: "cover",
          zIndex: 1,
          overflow: 'hidden',
          p: 1,
        }}
      />
    </Box>
  );
};

export default PresentationPhoto;
