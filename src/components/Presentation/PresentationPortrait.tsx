import { Box, keyframes } from "@mui/material";
import type { Theme } from "@mui/material/styles";

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const PresentationPortraitComponent = ():React.ReactNode => {

  // Configuración de rayos (12 en total, misma velocidad pero con delays uniformes)
  const rayConfig = Array.from({ length: 12 }, (_, i) => ({
    duration: "40s",
    delay: `${(i * (40 / 12)).toFixed(2)}s`, // escalonado uniforme
  }));

  return(
    <>
      {/* 🔎 Capas de rayos */}
      {rayConfig.map((ray, i) => (
        <Box
          key={i}
          sx={(theme: Theme) => ({
            animation: `${rotate} ${ray.duration} linear infinite`,
            animationDelay: ray.delay,
            borderRadius: "50%",
            height: "100%",
            position: "absolute",
            width: "100%",
            zIndex: 0,
            "::after": {
              backgroundColor: theme?.palette?.primary?.dark,
              clipPath: "polygon(0 0, 100% 50%, 0 100%)",
              content: '""',
              height: "30px",
              position: "absolute",
              right: "-35px",
              top: "50%",
              transform: "translateY(-50%) rotate(0deg)", // derecha
              width: "30px",
            },
            "::before": {
              backgroundColor: theme?.palette?.primary?.dark,
              clipPath: "polygon(0 0, 100% 50%, 0 100%)",
              content: '""',
              height: "30px",
              left: "-35px",
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%) rotate(180deg)", // izquierda
              width: "30px",
            },
          })}
        />
      ))}
    </>
  )
};
        
export default PresentationPortraitComponent;