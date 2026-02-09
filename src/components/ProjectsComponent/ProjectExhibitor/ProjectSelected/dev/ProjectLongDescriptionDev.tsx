import React from "react";
import { Box, Typography, useTheme, type Theme } from "@mui/material";
import type { ProjectLongDescriptionDevProps } from "../../../../../typings/reactComponents";
import DevelopmentCard from "./ProjectDevCard";
import { useTranslation } from "react-i18next";


const ProjectLongDescriptionDevComponent = ({ long_description }: ProjectLongDescriptionDevProps ) : React.ReactNode => {
  const theme = useTheme();
  const { t } = useTranslation();

  
  return (
    <Box
      sx={{
        backgroundColor: theme.custom.background,
        color: theme.custom.fontColor,
        minHeight: "100vh",
        py: 6,
        px: { xs: 2, md: 6 },
      }}
    >
      {/* Título */}
     <Typography
       variant="h2"
       gutterBottom
       sx={(theme: Theme) => ({ 
         fontSize: { xs: theme?.typography?.h3?.fontSize, md: theme?.typography?.h2?.fontSize},
         textAlign: "center", 
         fontWeight: 700,
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
         textDecoration: 'underline',
         textDecorationColor: theme.palette.primary.main,
       })}
     >
       {t(long_description.title)} – {t("projects.kiosco.long.historyDev")} 🛠️ 
     </Typography>

      {/* Objetivo / Nota */}
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          maxWidth: "800px",
          m: { xs: "2em auto", sm: "3em auto"},
          color: theme.custom.fontColor,
          p: 1,
          borderRadius: '1em',
          fontSize: theme?.typography?.body1?.fontSize,
          borderRight: `0.1em solid ${theme?.palette?.primary?.main}`,
        }}
      >
        {t(long_description.objectiveDev)}
      </Typography>

      {/* Beneficios / Razones */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "center",
        }}
      >
        {long_description.roadmap?.map((development, index) => (
          <DevelopmentCard development={development} index={index}/>
        ))}
      </Box>

    </Box>
  );
};

export default ProjectLongDescriptionDevComponent;
