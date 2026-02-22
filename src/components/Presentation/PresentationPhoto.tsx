import { Box, keyframes, Tooltip, type Theme } from "@mui/material";
import { useTranslation } from "react-i18next";
import PresentationPortraitComponent from "./PresentationPortrait";

// Animación de transición
const fillBackground = keyframes`
  0% {
    background-color: var(--bg-light);
  }
  100% {
    background-color: var(--bg-primary);
  }
`;

const PresentationPhoto = (): React.ReactNode => {
  const { t } = useTranslation();

  const photoUrl: string = "/images/foto_perfil/profile_image.png"

  return (
    <Box
      sx={{
        position: "relative",
        width: { xs: "9em", sm: "10em" },
        height: { xs: "9em", sm: "10em" },
        margin: "auto",
      }}
    >
      <PresentationPortraitComponent />
      {/* 🔎 Foto principal con animación paulatina de fondo */}
        <Tooltip title={t("hero.photo.alt")}>
          <Box
            key={photoUrl}
            component="img"
            src={photoUrl}
            alt="Foto de perfil"
            loading="lazy"
            sx={(theme: Theme) => ({
              "--bg-light": theme?.custom?.backgroundLigth,
              "--bg-primary": theme?.palette?.primary?.main,
              animation: `${fillBackground} 40s linear forwards`,
              backgroundColor: theme?.custom?.backgroundLigth,
              borderRadius: "50%",
              height: "100%",
              objectFit: "cover",
              overflow: "hidden",
              p: 0.3,
              position: "relative",
              width: "100%",
              zIndex: 1,
            })}
          />
        </Tooltip>
      </Box>
    
  );
};

export default PresentationPhoto;
